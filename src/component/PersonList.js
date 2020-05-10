import React from 'react'
import './../style.css'

const PersonList=(props)=>{
    return(
        <div className="card">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar"/>
            <h3>{props.name}</h3>
            <p>{props.designation}</p>
        </div>
    )
}

export default PersonList;