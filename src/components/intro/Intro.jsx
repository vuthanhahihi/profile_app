import "./intro.scss"
import {useEffect, useState} from 'react'
import { ArrowDropDownCircleOutlined } from '@material-ui/icons'

export default function Intro() {

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
  }else{

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          {items.map((item, index) => (
              <img key={index} src={item.url} alt="" />  
          ))}
          
        </div>  
      </div>
      <div className="right">
            <div className="wrapper">
                <h2>Hi There, I'm</h2>
                {items.map((item) => (
                  <span key={item.id}>
                  <h1>{item.name}</h1>
                  <h3>{item.job}</h3></span>
                 ))}
              <a href="#portfolio">
                <ArrowDropDownCircleOutlined className="icon"/>
              </a>
            </div>
      </div>
    </div>
  )
  }
}
