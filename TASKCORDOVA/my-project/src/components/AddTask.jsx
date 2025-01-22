import React, { useState } from 'react'

const AddTask = () => {
    const [title, settitle] = useState('');
    const [description, setTaskDescription] = useState('');
    const [date, setDate] = useState('');
    const [status,setTaskStatus]=useState('');
    const [priority,setTaskPriority]=useState('');

    const submitForm = (e) => {
        e.preventDefault();
        const TaskDetails = {
            title: title,
            description: description,
            date: date,
            status:status,
            priority:priority
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
        <div className='border-2 border-black w-[30%] p-4 m-auto flex justify-center'>
            <form onSubmit={submitForm} className=''>
                <label className='text-sm'>Task Name </label>
                <input type="text" onChange={(e) => settitle(e.target.value)} name="title" className='border-2 border-gray-900 px-4 py-1 relative left-[35%]  ' /> <br />
                <br />
                <label className='text-sm'>Task Description</label>
                <input type="text" name="description" onChange={(e) => setTaskDescription(e.target.value)} className='border-2 border-gray-900 px-4 py-1 relative left-[25%] ' /><br />
                <br />
                <label className='text-sm'>Status</label>
                <select className='border-2 border-gray-900 px-14 py-1 relative left-[45%] ' name='status' onClick={(e)=>setTaskStatus(e.target.value)} >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="completed">Completed</option>


                </select>
                <br />
                <br />
                <label className='text-sm'>Task Deadline</label>
                <input type="date" name="taskdeadline" onChange={(e)=>setDate(e.target.value)} className='border-2 border-gray-900 px-10 py-1 relative left-[30%]' /><br />
                <br />
                <label className='text-sm'>Priority</label>
                <select className='border-2 border-gray-900 px-16 py-1 relative left-[43%] ' name='priority' onClick={(e)=>setTaskPriority(e.target.value)} >
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="low">Low</option>


                </select>
                <br />
                <button type="submit"  className='px-4 bg-blue-600 py-2 '>Add Task</button>
            </form>
        </div>
    </div>
    </>
   
  )
}

export default AddTask
