import React from 'react';
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
    const editCustomer = (id) => {
        // alert('ff')
        console.log(id);
        // const temp = person.filter(c => c.id == id);
        const itemIndex=person.findIndex(c=>c.id==id);
        console.log(itemIndex);
        person[itemIndex].editMode=true;
       console.log(person[itemIndex]);
        
        setPerson([...person]);
        console.log(person);
    }
    return (
        <div className='row'>
            {person.map((item) => (
                item.editMode ?


                    <div key={item.id}>{item.editMode}</div>
                    :
                    <CustomerInfo person={item} key={item.id}
                        remove={removeCustomer} edit={editCustomer} />
            ))}
        </div>
    )


}
