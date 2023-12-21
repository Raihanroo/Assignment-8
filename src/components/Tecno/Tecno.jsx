import { useEffect, useState } from 'react';
import './Tecno.css';
import Service from '../Service/Service';
import BookMark from './BookMark/BookMark';
const Tecno = () => {
    const [services, setServices] = useState([]);


    useEffect(() =>{
        fetch('public/data.json')
        .then(res => res.json())
        .then(data => setServices(data))


    },[])

    return (
        <div className='tecno-container'>
         <div className='service-container'>
            {
                services.map(service => <Service
                key={service.id}
                service = {service}
                ></Service> )
            }
         </div>
         <div className='tost-container'>
            
         <div>
         <BookMark></BookMark>
         </div>
         </div>
        </div>
    );
};

export default Tecno;