
export const getGifs = async (category) => {

    const apiKey   = 'UCgnemFHf8Q5sPorqiOjV8PsizWz1PPH';
    const resp     = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`);
    const { data } = await resp.json(); 

    const gifs = data.map( img => ({
        id: img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
}