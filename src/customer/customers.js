import React from 'react';
import { CustomerEdit } from './customerEdit';
import { CustomerInfo } from './customerInfo';
const initialPerson = [
    { id: 1, name: 'Javad', family: 'Ebrahimi', editMode: false },
    { id: 2, name: 'Reza', family: 'Ahmadi', editMode: false },
    { id: 3, name: 'Mahdi', family: 'Mouood', editMode: false }
]
export const Customers = () => {
    const [person, setPerson] = React.useState(initialPerson);
    const removeCustomer = (id) => {
        const temp = person.filter(c => c.id != id);
        if (window.confirm('Are you Sure ?')) {
            setPerson(temp);
        }
    }
    const editCustomer = (id,editMode=true) => {
        // alert('ff')
        console.log(id);
        // const temp = person.filter(c => c.id == id);
        const itemIndex=person.findIndex(c=>c.id==id);
        console.log(itemIndex);
        person[itemIndex].editMode=editMode;
       console.log(person[itemIndex]);
        
        setPerson([...person]);
        console.log(person);
    }
    const saveChange=(id,name,family)=>{
        const itemIndex=person.findIndex(c=>c.id==id);
      
        person[itemIndex].name=name;
        person[itemIndex].family=family;
        person[itemIndex].editMode=false;
        
        setPerson([...person]);
    }
    return (
        <div className='row'>
            {person.map((item) => (
                item.editMode ?


                <CustomerEdit person={item} key={item.id}
                save={saveChange} edit={editCustomer} />
                    :
                    <CustomerInfo person={item} key={item.id}
                        remove={removeCustomer} edit={editCustomer} />
            ))}
        </div>
    )


}
