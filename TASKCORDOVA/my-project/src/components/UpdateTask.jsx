import React, { useState } from 'react';

const UpdateTask = ({ task, setTasks, tasks, cancelEdit }) => {
  const [updatedTask, setUpdatedTask] = useState({
    title: task.title,
    description: task.description,
    date: task.date,
    status: task.status,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const updateTask = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/updatetask/${task._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        const updatedTasks = tasks.map((t) =>
          t._id === task._id ? { ...t, ...updatedTask } : t
        );
        setTasks(updatedTasks);
        cancelEdit();
      } else {
        console.error('Failed to update task');
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-xl ml-[45%] ">Update Task</h2>
      <div className='display flex justify-center items-center mt-14 border-2 border-gray-400 p-6'>
      <form onSubmit={updateTask}>
        <label>Task Name</label>
        <input className='border-2 border-gray-900 px-4 ml-6'
          type="text"
          name="title"
          value={updatedTask.title}
          onChange={handleChange}
        />
        <br />
        <label>Task Description</label>
        <input className='border-2 border-gray-900 px-4 ml-6 mt-4'
          type="text"
          name="description"
          value={updatedTask.description}
          onChange={handleChange}
        />
        <br />
        <label>Task Deadline</label>
        <input className='border-2 border-gray-900 px-4 ml-6 mt-4'
          type="date"
          name="date"
          value={updatedTask.date}
          onChange={handleChange}
        />
        <br />
        <label>Task Status</label>
        <input className='border-2 border-gray-900 px-4 ml-6 mt-4'
          type="text"
          name="status"
          value={updatedTask.status}
          onChange={handleChange}
        />
        <br />
        <div className='mt-4 display flex justify-center'>
        <button type="submit" className="px-2 py-2 bg-blue-500">
          Save
        </button>
        <button
          type="button"
          onClick={cancelEdit}
          className="px-2 py-2 bg-gray-500 ml-2"
        >
          Cancel
        </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default UpdateTask;
