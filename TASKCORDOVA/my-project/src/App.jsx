import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Viewtasks from './components/Viewtasks'
import UpdateTask from './components/UpdateTask'
import AddTask from './components/AddTask'
import Firstlayout from './Layout/Firstlayout'

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Firstlayout/>}>
      <Route path='/' element={<Landingpage/>}/>
      <Route path="/addtask" element={<AddTask/>} />,
      <Route path="/viewtasks" element={<Viewtasks/>} />,
      {/* <Route path="/updatetask" element={<UpdateTask/>} /> */}
      </Route>
      </>
    
     
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
