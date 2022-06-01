import React from 'react'

const Cards = (props) => {
  return (
  <li>
    <a href="" className="card">
      <img src= {props.link ? props.link : "https://i.imgur.com/oYiTqum.jpg"} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://media-exp1.licdn.com/dms/image/C4E0BAQEVb0ZISWk8vQ/company-logo_200_200/0/1519896425167?e=2147483647&v=beta&t=xztAGLJ8SUh-lHaDSK-a3cxYCfSYAy8wrPg3jTx15W8" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">{props.name ? props.name : "anythings"}</h3>            
            <span className="card__status">1 hour ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
  )
}

export default Cards