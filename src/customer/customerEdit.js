import React from 'react'

export const CustomerEdit = ({ person, save, edit }) => {
  const [id, setId] = React.useState(person.id);
  const [name, setName] = React.useState(person.name);
  const [family, setFamily] = React.useState(person.family);
  const [editMode, setEditMode] = React.useState(person.editMode);
  return (

    <div className="card text-white bg-success m-3 col-md-3 "
    >
      <div className="card-header">Customer Info</div>
      <div className="card-body ">

        id:<input className="form-control" defaultValue={person.id} />
        Name:<input className="form-control"
          onChange={(e) => setName(e.target.value)} defaultValue={person.name} />
        Family:<input className="form-control"
         onChange={(e) => setFamily(e.target.value)}
         defaultValue={person.family} />

      </div>
      <div className='card-footer'>
        <button className='btn btn-warning' onClick={() => save(id, name, family)}>Save</button>
        <button className='btn btn-info' onClick={() => edit(id, false)}>Cancel </button>
      </div>
    </div>
  )
}
