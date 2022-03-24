import React from 'react'

export const CustomerEdit = ({person,remove,edit}) => {
    const [id,setId]=React.useState(person.id);
const [name,setName]=React.useState(person.name);
const [family,setFamily]=React.useState(person.family);
const [editMode,setEditMode]=React.useState(person.editMode);
  return (
   
    <div className="card text-white bg-success m-3 col-md-3 " 
  >
    <div className="card-header">Customer Info</div>
    <div className="card-body ">
     
      id:<input type='text' className="form-control"  value={person.id}/>
      Name:<input type='text'  className="form-control"   value={person.name}/>
      Family:<input type='text'  className="form-control"   value={person.family}/>
      
    </div>
    <div className='card-footer'>
        <button className='btn btn-danger' onClick={()=>remove(id)}>Save</button>
        <button  className='btn btn-info'onClick={()=>edit(id,false)}>Cancel </button>
    </div>
  </div>
  )
}
