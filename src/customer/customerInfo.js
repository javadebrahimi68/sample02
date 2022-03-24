import React from 'react'

export const CustomerInfo = ({person,remove,edit}) => {
    const [id,setId]=React.useState(person.id);
const [name,setName]=React.useState(person.name);
const [family,setFamily]=React.useState(person.family);
const [editMode,setEditMode]=React.useState(person.editMode);
  return (
   
    <div className="card text-white bg-primary m-3 col-md-3 " 
  >
    <div className="card-header">Customer Info</div>
    <div className="card-body ">
     
      <p className="card-text">id: {person.id}</p>
      <p className="card-text">Name: {name}</p>
      <p className="card-text">Family: {family}</p>
    </div>
    <div className='card-footer'>
        <button className='btn btn-danger' onClick={()=>remove(id)}>Remove</button>
        <button  className='btn btn-info'onClick={()=>edit(id)}>Edit </button>
    </div>
  </div>
  )
}
