import { useEffect, useState } from 'react';
import './Tecno.css';
import Service from '../Service/Service';
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
            <h4>Spend Time On Read: </h4>
         </div>
        </div>
        
    );
};

export default Tecno;