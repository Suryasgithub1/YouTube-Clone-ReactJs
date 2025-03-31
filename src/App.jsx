import Header from "./components/Header"
import Body from "./components/Body"
import './App.css'
import { Provider } from "react-redux"
import store from "./utils/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import WatchComponent from "./components/WatchComponent"
import SliderBar from "./components/SliderBar"
import MainContainer from "./components/MainContainer"
import SearchResults from ".//components/SearchResults"
import HeaderSearchBarResult from "./components/HeaderSearchBarResult"

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

    ]
    }
  ]);


  
  return (
    
    <Provider store={store}>
      <RouterProvider router={route} />   
    </ Provider>
  )
}

export default App
