import { useEffect, useState } from 'react';
import './Tecno.css';
import Service from '../Service/Service';
const Tecno = () => {
    const [services, setServices] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('public/data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const handleaddToCart = (service) =>{
        const newCart = [...cart, service];
        setCart(newCart)
    }

    return (
        <div className='tecno-container'>
         <div className='service-container'>
            {
                services.map(service => <Service
                key={service.id}
                service = {service}
                handleaddToCart = {handleaddToCart}
                ></Service> )
            }
         </div>
         <div className='tost-container'>
         <div>
            <h4 className='text-2xl font-bold'>Spend Time On Read : </h4>
            
         <h4 className='text-3xl font-bold mt-5'>Bookmarked Blogs : {cart.length}</h4>
         {/* {
            cart.map(c => {
                return (
                    <p>{JSON}</p>
                )
            })
         } */}
        </div>
         <div>
         </div>
         </div>
        </div>
    );
};

export default Tecno;