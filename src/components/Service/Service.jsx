import './Service.css';
import { CiBookmark } from "react-icons/ci";
const Service = (props) => {

const{author_picture, blog_picture, author_name, blog_title, date, read_time} = props. service;
const handleaddToCart = props.handleaddToCart;

    return (
        <div className='p-10 w-[800px]'>
            <img className='h-[400px] w-full ' src={blog_picture} alt="" />
            <div className='flex items-center justify-between'>
            <div className='flex  items-center justify-center gap-5 mt-3 '>
            <img className='h-10 w-10 rounded-full' src={author_picture} alt="" /> 
             <div className=''>
             <h4 className='text-lg font-semibold'>{author_name}</h4>
            <h5 className='text-sm'>{date}</h5>
             </div>
            </div>
            <div>
            <h4 className='flex items-center'><span>{read_time} min read</span><CiBookmark onClick={handleaddToCart} /></h4>
             </div>
             </div>
             <h2 className='text-2xl mt-3'>{blog_title}</h2> 
             <h5 className='mt-6'>#beginners  #programing</h5>
             <h4 onClick={() => handleaddToCart(props.service)} className='text-lg mt-8 underline text-sky-500'>Mark as read</h4>
        </div>
    );
};

export default Service;