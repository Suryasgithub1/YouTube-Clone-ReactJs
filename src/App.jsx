import Header from "./components/Header"
import Body from "./components/Body"
import './App.css'
import { Provider } from "react-redux"
import store from "./utils/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import WatchComponent from "./components/WatchComponent"
import MainContainer from "./components/MainContainer"
import SearchResults from ".//components/SearchResults"
import HeaderSearchBarResult from "./components/HeaderSearchBarResult"
import Login from "./components/Login"
import History from "./components/History"

function App() {

  const route = createBrowserRouter([
    {path: "/",
     element : <Body />, 
     children : [
      {path : "/",
        element : <MainContainer />
      }, 
      {
        path : "watch",
        element : <WatchComponent />
      },
      {
        path : "results",
        element : <SearchResults />
      },
      {
        path: "searchresults", 
        element: <HeaderSearchBarResult />,
      },
      {
        path: "history", 
        element: <History />,
      }
    ]
    },
    {
      path: "login", 
      element: <Login />,
    }
  ]);


  
  return (
    
    <Provider store={store}>
      <RouterProvider router={route} />   
    </ Provider>
  )
}

export default App
