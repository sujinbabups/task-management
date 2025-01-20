import React, { useState } from 'react'

const AddTask = () => {
    const [title, settitle] = useState('');
    const [description, setTaskSescription] = useState('');
    const [date, setDate] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        const TaskDetails = {
            title: title,
            description: description,
            date: date
        };
        addTaskasync(TaskDetails);
    };
    const addTaskasync = async (TaskDetails) => {
        const response = await fetch('/api/addtask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(TaskDetails),
        });
        const data = await response.json();
        alert('Task Added Successfully');
        console.log(data);
    }

  return (
    <>
    <div className=''>
        <h2 className='font-bold text-2xl ml-[45%]'>Add Task</h2>
        <div className='display flex justify-center items-center mt-14'>
            <form onSubmit={submitForm} className='border-2 border-gray-200 p-4 display flex flex-row gap-4'>
                <label>Task Name</label>
                <input type="text" onChange={(e) => settitle(e.target.value)} name="title" className='border-2 border-gray-900 px-4 ' /> <br />
                <br />
                <label>Task Description</label>
                <input type="text" name="description" onChange={(e) => setTaskSescription(e.target.value)} className='border-2 border-gray-900 px-4 ' /><br />
                <br />
                <label>Task Deadline</label>
                <input type="date" name="taskdeadline" onChange={(e)=>setDate(e.target.value)} className='border-2 border-gray-900 px-4 ' /><br />
                <br />
                <button type="submit"  className='px-4 bg-blue-600 py-2'>Add Task</button>
            </form>
        </div>
    </div>
    </>
   
  )
}

export default AddTask
