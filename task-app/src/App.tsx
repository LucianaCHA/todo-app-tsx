import React, { useState, useRef } from 'react';
type FormeELement = React.FormEvent<HTMLFormElement>;

//interface declaro una especie de clase

interface Itask {
  name: string;
  done: boolean;
}
function App(): JSX.Element { //aca le digo explicitamente  que voy a retornar un elemewnto jsx XD

  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<Itask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormeELement) => {
    e.preventDefault();
    addTask(newTask)
    setNewTask('');
    taskInput.current?.focus();
  }

  const addTask = (name: string): void => {
    let newTasks: Itask[] = [...tasks, { name, done: false }]
    setTasks(newTasks)
  }

  const handleDone = (i: number): void => {
    let newTasks: Itask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  }
  const handleDelete = (i: number): void => {
    console.log(tasks);

    let newTasks: Itask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
    console.log(tasks)
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setNewTask(e.target.value)} value={newTask} ref={taskInput} autoFocus />
        <button>Add!</button>
      </form>

      {
        tasks.map((task: Itask, i: number) => (
          <li key={i}>
            <h2 > {task.name} </h2>
            <button onClick={() => handleDone(i)} style={{ backgroundColor: task.done ? 'green' : 'red' }}> {task.done ? 'Done!' : 'ToDO!'} </button>
            <button onClick={() => handleDelete(i)} >Delete!</button>
          </li>
        ))
      }


    </>

  )
}

export default App;
