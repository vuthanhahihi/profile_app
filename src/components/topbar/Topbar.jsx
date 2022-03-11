import { Mail, Person } from '@material-ui/icons'
import React from 'react'
import "./topbar.scss"

export default function Topbar({menuOpen, setMenuOpen, items}) {
  return (
    <div className={"topbar " + (menuOpen && "active" )}>
      <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">Vũ Nè</a>
        <div className="itemContainer">
          <Person className="icon"/>
          {items.map((item) => (
                  <span key={item.id}>
                  {item.phone}
                  </span>
                 ))}
      
          </div>
          <div className="itemContainer">
          <Mail className="icon"/>
          {items.map((item) => (
                  <span key={item.id}>
                  {item.email}
                  </span>
                 ))}
          </div>
      </div>
      <div className="right">
        <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
          </div>
        </div>
      </div>
      </div>
  )
}
