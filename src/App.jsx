import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu";
import "./app.scss"
import { useState, useEffect} from "react";

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://622827009fd6174ca81c3475.mockapi.io/api/information")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }else


  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} items={items}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro items={items}/>
       <Portfolio items={items}/>
       <Contact items={items}/>
       </div>
    </div>
  );
}

export default App;
