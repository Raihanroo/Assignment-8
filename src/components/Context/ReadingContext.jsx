import { createContext, useContext, useState } from "react";

// ReadingContet for useContes and get their value
const ReadingContext = createContext();

const ReadingProvider = ({children}) => {
    
    // create state of settime and add get time
    const [spentTime, setSpentTime] = useState(0);

    // for Bookmark useState show the addBookmark and getBookmark
    const [BookmarkIds, setBookmarkIds] = useState([]);

    // for setBookmark notification useState
    const [BookmarkNotification, setBookmarkNotification] = useState(null)
    
// add time from setSpentTime
    const addReadingTime = (time) =>{
        setSpentTime((prevTime) => {
            const newTime = prevTime + time;
            console.log(newTime);
            return newTime

        })
    }
// get time from variable for retun
const getReadaingTime = () =>{
    return  spentTime;
}

// add Bookmarks
const addBookmark = (id) =>{
    if(BookmarkIds.includes(id)){
    
        console.log('Bookmark alredy added');
    }
    else{
        setBookmarkIds(prevIds => [...prevIds, id])
        console.log('bookmark id get it')
    }
}
// get Bookmarks lenths in total show
 const getBookmark = () => {
    return BookmarkIds.length;
 }

//  is bolog Bookmarked save or not
const isBologBookmarked = (blogID) =>{
 return BookmarkIds.includes(blogID);
}

// show Bookmarked notification
const showBookmarkNotification = (blogTitle) =>{
    console.log(blogTitle);
    setBookmarkNotification({blogTitle});
    setTimeout(() => {
        hideBookmarkNotification()
    }, 10000)
}

const hideBookmarkNotification = () =>{
    setBookmarkNotification(null)
}
 console.log(BookmarkNotification);
    return (
        <div>
            <ReadingContext.Provider value={{
                addReadingTime,
                getReadaingTime,
                addBookmark,
                getBookmark,
                isBologBookmarked,
                BookmarkNotification,
                hideBookmarkNotification,
                showBookmarkNotification,

                
            }}>

                {
                    children
                }
            </ReadingContext.Provider>
        </div>
    );
};

/** create use custom hook for accessing values  */
export const useReadingContext = () =>{   

    return useContext(ReadingContext)
}
export default ReadingProvider;