import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchUser = async (searchTerm, page) => {
    const accessKey = 'x_3565VSV08wibTFnqabIFYwtMANC8sqPdlKN0UNqj8';

    const response = await axios.get(
        '/search/photos', {
            headers: {
                Authorization: `Client-ID ${accessKey}`
            },
            params: {
                query: searchTerm,
                page,
                count: 10, 
            }
        }
    );
    
    return {
        articles:  response.data.results,
        totalPages: response.data.total_pages,
    }
}