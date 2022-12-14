import React, { useState, useRef } from 'react';
import {
  Routes,
} from "react-router-dom";
import Heading from './components/Heading';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList'
import {createEvent, deleteEvent, getEvents}  from './controller';
type FormeELement = React.FormEvent<HTMLFormElement>;

//interface declaro una especie de clase

interface Itask {
  name: string;
  done: boolean;
}

declare function Router(
  props: RouterProps
): React.ReactElement | null;

interface RouterProps {
  basename?: string;
  children?: React.ReactNode;
  location: Partial<Location> | string;
  // navigationType?: NavigationType;
  navigator: Navigator;
  static?: boolean;
}
function App(): JSX.Element { //aca le digo explicitamente  que voy a retornar un elemewnto jsx XD

  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<Itask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);
  const [events, setEvents] = useState<any>([]);
  const [id, setId] = useState<string>('');

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
  // crear un boton para generar un recordatorio de calendario
   const handleCalendar = (i: any): void => {
    createEvent()
    console.log(events);
    
  }

  const handleDeleteCalendar = (id: string): void => {
    console.log(id);
    
    deleteEvent(id)
  }

  return (
    <>
    <Heading/>
    <Routes>
  
    </Routes>
      
     
   
    
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setNewTask(e.target.value)} value={newTask} ref={taskInput} autoFocus />
        {/* desabilitar boton si el value esta vacio */}
        <button disabled={newTask.length < 1}>Add!</button>
      </form>

      {
        tasks.map((task: Itask, i: number) => (
          <li key={i}>
            <h2 > {task.name} </h2>
            <button onClick={() => handleDone(i)} style={{ backgroundColor: task.done ? 'green' : 'red' }}> {task.done ? 'Done!' : 'ToDO!'} </button>
            <button onClick={() => handleDelete(i)} >Delete!</button>
            {/* agregar un boton para generar un recordartorio de calendario */}
            <button onClick={() => handleCalendar(i)} 
            style={{ backgroundColor: 'blue' }}>Calendar!</button>
          </li>
        ))
      }

      {/* necesito un input donde ingresar id de un evento y un boton para despachar delete event
       */}
      <div className='events'>
        <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
        <button onClick={() => handleDeleteCalendar(id)} >Delete!</button>
      </div>
       




    </>

  )
}

export default App;
