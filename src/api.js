import axios from "axios";

export const fetchUser = async (searchTerm) => {
    const accessKey = 'x_3565VSV08wibTFnqabIFYwtMANC8sqPdlKN0UNqj8';

    const response = await axios.get(
        'https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: `Client-ID ${accessKey}`
            },
            params: {
                query: searchTerm,
                count: 10, 
            }
        }
    );

    return response.data.results;
}