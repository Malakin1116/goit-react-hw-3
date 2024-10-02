import { useState, useEffect } from "react";
import {fetchUser} from "../api"

import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn"
import Loader from "./Loader/Loader";
import ImageModal from "./ImageModal/ImageModal";

import css from "./App.module.css"


export default function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [photos, setPhotos] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1); 
    const [allPages, setAllPages] = useState(999);

    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [selectedImage, setSelectedImage] = useState('');


    useEffect(() => { 
        if (searchTerm === "") {
            return;
        }
            const fetchData = async () => {
                try {
                    setLoading(true);
                    setError(false);
                    const res = await fetchUser(searchTerm, page);
                    setPhotos((prevPhotos) => [...prevPhotos, ...res.articles]);
                    setAllPages(res.totalPages)
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

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);  
        setIsModalOpen(true);        
    };

    const closeModal = () => {
        setIsModalOpen(false);      
    };
    
    return (
        <div className={css.div_for_all}>
            <SearchBar onSearch={handleSearch}/>
            <ImageGallery img={photos} onImageClick={openModal}/>
            {loading && <Loader/>}

            {page >= allPages && <p>End OF IMG</p>}
            {error && <ErrorMessage/>}
            {photos.length > 0 && !loading && page < allPages &&(<LoadMoreBtn onClick={handleLoadMore}/>)}
            <ImageModal 
                isOpen={isModalOpen} 
                onRequestClose={closeModal} 
                imageUrl={selectedImage}
            />
        </div> 
        
    );
}


