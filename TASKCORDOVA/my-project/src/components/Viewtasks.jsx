import React, { useEffect, useState } from 'react';
import UpdateTask from './UpdateTask';

const Viewtasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/viewtasks');
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched Tasks:', data);
          setTasks(data);
        } else {
          console.error('Failed to fetch Tasks');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTasks();
  }, []);

  // Delete task
  const deleteTask = async (id) => {
    console.log('Task ID:', id);
    const response = await fetch(`/api/deletetask/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      const updatedTasks = tasks.filter((task) => task._id !== id);
      setTasks(updatedTasks);
    } else {
      console.error('Failed to delete task');
    }
  };

  const startEditTask = (task) => {
    setIsEditing(true);
    setEditTask(task); 
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditTask(null);
  };

  return (
    <div>
      <h2 className="font-bold text-2xl ml-[45%] ">View Tasks</h2>
      {!isEditing ? (
        <div className='display flex justify-center items-center mt-14'>
          <table>
            <thead >
              <tr className="border-2 border-gray-900 bg-gray-600 text-lg  ">
                <th className='border-2'>Task Name</th>
                <th className='border-2'>Task Description</th>
                <th className='border-2'>Task Deadline</th>
                <th className='border-2'>Task Status</th>
                <th className='border-2'>Actions</th>
              </tr>
            </thead>
            <tbody className="border-2 border-gray-900 ">
              {tasks.map((task) => (
                <tr key={task._id} className='border-2 border-gray-900 '>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.createdAt}</td>
                  <td>{task.status}</td>
                  <td>
                    <button
                      onClick={() => startEditTask(task)}
                      className="px-2 py-2 bg-green-500"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteTask(task._id)}
                      className="px-2 py-2 bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <UpdateTask
          task={editTask}
          setTasks={setTasks}
          tasks={tasks}
          cancelEdit={cancelEdit}
        />
      )}
    </div>
  );
};

export default Viewtasks;
