// src/Task.js

import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v4'

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY'

const storeTasks = taskMap => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(taskMap))
}

const readStoredTasks = () => {
  const taskMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY))
  return taskMap || { tasks: [], completedTasks: [] }
}

export default function Tasks () {
  const [taskText, setTaskText] = useState('')
  const storedTasks = readStoredTasks()
  const [tasks, setTasks] = useState(storedTasks.tasks)
  const [completedTasks, setCompletedTasks] = useState(
    storedTasks.completedTasks
  )

  useEffect(() => {
    storeTasks({ tasks, completedTasks })
  })

  const updateTaskText = event => {
    setTaskText(event.target.value)
  }

  const addTask = event => {
    setTasks([...tasks, { taskText, id: uuid() }])
    setTaskText('')
  }

  const completeTask = completedTask => () => {
    setCompletedTasks([...completedTasks, completedTask])
    setTasks(tasks.filter(task => task.id !== completedTask.id))
  }
  const deleteTask = task => () => {
    setCompletedTasks(completedTasks.filter(t => t.id !== task.id))
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      addTask()
    }
  }

  console.log('>>>-Tasks-tasks->', tasks)
  console.log('>>>-Tasks-completedTasks->', completedTasks)

  return (
    <div>
      <h3>Tasks</h3>
      <div className='form'>
        <input
          value={taskText}
          onChange={updateTaskText}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='task-list'>
        {tasks.map(task => {
          const { id, taskText } = task
          return (
            <div key={id} onClick={completeTask(task)}>
              {taskText}
            </div>
          )
        })}
      </div>
      <div className='task-list'>
        {completedTasks.map(task => {
          const { id, taskText } = task
          return (
            <div key={id}>
              {taskText}{' '}
              <button onClick={deleteTask(task)} className='delete-task'>
                Remove
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
