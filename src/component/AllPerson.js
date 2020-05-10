import React from 'react'
import PersonList from './PersonList'
import './../style.css';

const AllPerson=()=>{

    const personArray =[
        {
            id:1,
            name:'bhagwan',
            designation:'Full-stack Developer'
        },
        {
            id:2,
            name:'Divya',
            designation:'Frond-end Developer'
        },
        {
            id:3,
            name:'Abhishek',
            designation:'Python Developer'
        },
        {
            id:4,
            name:'Jyoti',
            designation:'UI Developer'
        }
    ]

    const persons = personArray.map((card,i)=>{
       return <PersonList key={personArray[i].name} name={personArray[i].name} designation={personArray[i].designation}/>
    })
    return(
        <div className="person-wrapper">
            {persons}
        </div>
    )
}

export default AllPerson;