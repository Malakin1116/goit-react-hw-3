import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";

import axios from "axios";
import ImageGallery from "./ImageGallery/ImageGallery";



export default function App() {
    const [photos, setPhotos] = useState([]); 
    
    const handleSubmit = async (values, actions) => {
        console.log("Form data submitted:", values);

        const accessKey = 'x_3565VSV08wibTFnqabIFYwtMANC8sqPdlKN0UNqj8';

        try {
            const response = await axios.get(
                'https://api.unsplash.com/photos/random', {
                    headers: {
                        Authorization: `Client-ID ${accessKey}`
                    },
                    params: {
                        count: 10, 
                    }
                }
            );
            setPhotos(response.data); 
        } catch (error) {
            console.error("Ошибка при запросе к API Unsplash:", error);
        }
         finally {
            actions.setSubmitting(false); // Заканчиваем процесс отправки (например, убираем индикатор загрузки)
        }
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageGallery img={photos}/>
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