import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Component/HomePage/Home/Home';
import Main from './Component/LayOut/Main';
import Contacts from './Component/Shared/Contacts/Contacts';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/contacts',
          element:<Contacts></Contacts>
        },
      ]
    }
  
    ])
  return (
    <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
