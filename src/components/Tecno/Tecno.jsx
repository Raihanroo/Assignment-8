import { useEffect, useState } from 'react';
import './Tecno.css';
import Service from '../Service/Service';
import { useReadingContext } from '../Context/ReadingContext';
import Bookmarknotification from '../Notification/Bookmarknotification';
const Tecno = () => {
    // const [services, setServices] = useState([]);
    const {getReadaingTime, getBookmark} = useReadingContext() ;
    

    // useEffect(() =>{
    //     fetch('public/data.json')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[])
    const services = [
  {
    id: "64265c430416a59b7065b5d9",
    author_picture: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    blog_picture: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    read_time: 6,
    author_name: "Dejesus Holland",
    blog_title: "By programming yourself, how to get better at programming.",
    about: "Sit sit laborum pariatur consectetur dolor excepteur commodo Lorem amet et cillum tempor proident. Fugiat consectetur deserunt proident velit sit reprehenderit ipsum aute sit ullamco. Ipsum voluptate tempor enim est sunt tempor elit duis commodo in exercitation. Excepteur qui culpa exercitation reprehenderit exercitation ipsum magna consequat nisi.\r\n",
    date: "March 15, 2023"
  },
  {
    id: "64265c43879b78edcd9a2a40",
    author_picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    blog_picture: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    read_time: 9,
    author_name: "Cecelia Woodward",
    blog_title: "How to get your first job as a self-taught programmer",
    about: "Amet minim excepteur elit tempor aliquip commodo. Fugiat officia sunt laborum consequat magna. Enim ullamco reprehenderit nulla mollit labore laboris.\r\n",
    date: "February 27, 2023"
  },
  // ... (repeat for the rest of the objects)
];


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
