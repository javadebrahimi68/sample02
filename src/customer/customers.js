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
    return (
        <div className='row'>
            {person.map((item) => (
                item.editMode ?


                    <div key={item.id}>{item.editMode}</div>
                    :
                    <CustomerInfo person={item} key={item.id}
                        remove={removeCustomer} />
            ))}
        </div>
    )


}
