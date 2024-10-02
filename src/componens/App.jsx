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
    const [page, setPage] = useState(1); 

    useEffect(() => { 
        if (searchTerm === "") {
            return;
        }

            const fetchData = async () => {
                try {
                    setLoading(true);
                    setError(false);
                    const fetchedUser = await fetchUser(searchTerm, page);

                    setPhotos((prevPhotos) => [...prevPhotos, ...fetchedUser]);
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
        
    }, [searchTerm, page]);
      
    const handleSearch = (newTopic) => {
        setSearchTerm(newTopic);
        setPage(1);
        setPhotos([]);
    }

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1); 
    };
    
    return (
        <div className={css.div_for_all}>
            <SearchBar onSearch={handleSearch}/>
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
            {photos.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore}/>}
        </div> 
        
    );
}


