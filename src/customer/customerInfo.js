import React from 'react'

export const CustomerInfo = ({person,remove}) => {
const [name,setName]=React.useState(person.name);
const [family,setFamily]=React.useState(person.family);
const [editMode,setEditMode]=React.useState(person.editMode);
  return (
   
    <div className="card text-white bg-primary m-3 col-md-3 " 
  >
    <div className="card-header">Customer Info</div>
    <div className="card-body ">
     
      <p className="card-text">id: {person.id}</p>
      <p className="card-text">Name: {person.name}</p>
      <p className="card-text">Family: {person.family}</p>
    </div>
    <div className='card-footer'>
        <button className='btn btn-danger' onClick={()=>remove(person.id)}>Remove</button>
        <button  className='btn btn-info'>Edit </button>
    </div>
  </div>
  )
}
