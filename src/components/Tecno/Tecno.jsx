import { useEffect, useState } from 'react';
import './Tecno.css';
import Service from '../Service/Service';
import { useReadingContext } from '../Context/ReadingContext';
import Bookmarknotification from '../Notification/Bookmarknotification';
const Tecno = () => {
    const [services, setServices] = useState([]);
    const {getReadaingTime, getBookmark} = useReadingContext() ;
    

    useEffect(() =>{
        fetch('public/data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])



    return (
        <div className='tecno-container md:flex-row flex flex-col'>
         <div className='service-container'>
            {
                services.map(service => <Service
                key={service.id}
                service = {service}
                ></Service> )
            }
         </div>
         <div className='rightSide-container'>
            <div>
                <div className='text-center p-5 border border-sky-900 text-sky-900 bg-sky-100 rounded-lg my-9'>
                <h4 className='text-2xl font-bold'>Spend Time On Read : {getReadaingTime()} min</h4> 
                </div>
                <div className=' bg-yellow-100 rounded-lg p-3'>
                <h4 className='text-3xl font-bold mt-5'>Bookmarked Blogs : {getBookmark()}</h4>                
                </div>
            </div>
            <div>
                 <BookmarknoTificationContainer/>
            </div>
         </div>
        </div>
    );
};

// its create self component BookmarknoTificationContainer
const BookmarknoTificationContainer = () =>{
    const {BookmarkNotification, hideBookmarkNotification} = useReadingContext() ;
    console.log(BookmarkNotification);
    return (
        <div>
            {
               BookmarkNotification && (
                <Bookmarknotification 
                blog_title = {BookmarkNotification.blogTitle}
                onClose = {hideBookmarkNotification}
                /> 
               ) 
            }
            
        </div>
    )
}

export default Tecno;