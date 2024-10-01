import axios from "axios";

export const fetchUser = async (values) => {
    const accessKey = 'x_3565VSV08wibTFnqabIFYwtMANC8sqPdlKN0UNqj8';

    const response = await axios.get(
        'https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: `Client-ID ${accessKey}`
            },
            params: {
                query: values.search,
                count: 10, 
            }
        }
    );

    return response.data.results;
}