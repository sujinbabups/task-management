## Task Management System
A simple React task management application with CRUD operations.

## Features

- **Add Task**
- **View Tasks**
- **Edit Tasks**
- **Delete Tasks**

## API Documentation

**Base URL:** http://localhost:5000

### Endpoints

1. **Add Task**
   - **URL:** `/addtask`
   - **Method:** `POST`
   - **Description:** Add a new task.
   - **Request Body:**
     ```json
     {
       "title": "task title",
       "status": "task status",
       "description": "task description",
       "date": "task deadline"
     }
     ```
   - **Response:**
     - **Success (201):**
       ```json
       {
         "message": "Task added successfully"
       }
       ```
     - **Error (400):**
       ```json
       {
         "error": "An error occurred while adding the task"
       }
       ```

2. **View Tasks**
   - **URL:** `/viewtasks`
   - **Method:** `GET`
   - **Description:** Retrieve all tasks.
   - **Response:**
     - **Success (200):**
       ```json
       [
         {
           "title": "task title",
           "status": "task status",
           "description": "task description",
           "date": "task deadline",
           "priority": "high"
         }
       ]
       ```
     - **Error (404):**
       ```json
       {
         "error": "No tasks found"
       }
       ```

3. **Update Task**
   - **URL:** `/updatetask/:id`
   - **Method:** `PUT`
   - **Description:** Update an individual task.
   - **Request Body:**
     ```json
     {
       "task": "Complete project documentation",
       "description": "Finish writing the final draft of the project report.",
       "date": "2025-01-30",
       "status": "in-progress",
       "priority": "high"
     }
     ```
   - **Response:**
     - **Success (200):**
       ```json
       {
         "_id": "64c89ef5b92e5d23f4567890",
         "task": "Complete project documentation",
         "description": "Finish writing the final draft of the project report.",
         "date": "2025-01-30",
         "status": "in-progress",
         "priority": "high"
       }
       ```
     - **Error (404):**
       ```json
       {
         "error": "No task with that id"
       }
       ```
     - **Error (500):**
       ```json
       {
         "error": "An error occurred while updating the task"
       }
       ```

4. **Delete Task**
   - **URL:** `/deletetask/:id`
   - **Method:** `DELETE`
   - **Description:** Delete an individual task.
   - **Response:**
     - **Success (200):**
       ```json
       {
         "message": "Task deleted successfully"
       }
       ```
     - **Error (404):**
       ```json
       {
         "error": "No task with that id"
       }
       ```
     - **Error (500):**
       ```json
       {
         "error": "Error deleting task"
       }
       ```

## How to Run the Project

Clone the repository:
   
## How to run the project
clone the repository
```
  git clone https://github.com/sujinbabups/task-management.git
  cd task-management
```
Initialize dependencies for front end
  ```
    cd my-project
    npm install
  ```
- To start front end
    ```
    npm run dev
    ```  
    
npm run dev
```
run backend
```
Initialize dependencies for front end
  ```
  npm i
  ```
Create a .env file and add your mongodb connection string  
then run backend
```
node app.js
```


## Technologies used
- **React**
- **Node JS**
- **Express**
- **MongoDB**
