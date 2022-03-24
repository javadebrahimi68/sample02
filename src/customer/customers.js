import React from 'react';
import { CustomerInfo}  from './customerInfo';
const initialPerson = [{ id: 1, name: 'Javad', family: 'Ebrahimi' },
{ id: 2, name: 'Reza', family: 'Ahmadi' },
{ id: 3, name: 'Mahdi', family: 'Mouood' }]
export const Customers = () => {
    const [person, setPerson] = React.useState(initialPerson);
    return (
        <div className='row'>
            {person.map((item) => (
               <CustomerInfo person={item} key={item.id}/>
            ))}
        </div>
    )


}
