import { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import {fetchUser} from "../api"
import ImageGallery from "./ImageGallery/ImageGallery";
import css from "./App.module.css"


import { Vortex } from 'react-loader-spinner'
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn"


export default function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [photos, setPhotos] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

     useEffect(() => {
        if (searchTerm) {
            const fetchData = async () => {
                try {
                    setLoading(true);
                    setPhotos([]);
                    setError(false);
                    const fetchedUser = await fetchUser(searchTerm); 
                    setPhotos(fetchedUser);
                } 
                catch (err) {
                    setError(true);
                    console.log(err);
                }
                finally {
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, [searchTerm]);   
    
    return (
        <div className={css.div_for_all}>
            <SearchBar onSearch={setSearchTerm}/>
            <ImageGallery img={photos}/>
            {loading &&
             <div className={css.loadingWrapper}>
                <Vortex
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="vortex-loading"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
             </div>
            }

            {error && <ErrorMessage/>}
            {photos.length > 0 && <LoadMoreBtn/>}
        </div> 
        
    );
}


// "urls": {
//             "raw": "https://images.unsplash.com/photo-1724776912349-918781add338?ixid=M3w2NTgxNjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc2ODA1NzJ8\u0026ixlib=rb-4.0.3",
//             "full": "https://images.unsplash.com/photo-1724776912349-918781add338?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w2NTgxNjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc2ODA1NzJ8\u0026ixlib=rb-4.0.3\u0026q=85",
//             "regular": "https://images.unsplash.com/photo-1724776912349-918781add338?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NTgxNjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc2ODA1NzJ8\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
//             "small": "https://images.unsplash.com/photo-1724776912349-918781add338?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NTgxNjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc2ODA1NzJ8\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
//             "thumb": "https://images.unsplash.com/photo-1724776912349-918781add338?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w2NTgxNjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc2ODA1NzJ8\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
//             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1724776912349-918781add338"
//         },


    // const handleSubmit = async (values) => {
    //     try {
    //         setLoading(true);
    //         setPhotos([]);
    //         setError(false);
    //         const fetchedUser = await fetchUser(values);

    //         setPhotos(fetchedUser);
    //     } 
    //     catch (err) {
    //        setError(true);
    //        console.log(err);
    //     }
    //     finally {
    //         setLoading(false);
    //     }
    // };