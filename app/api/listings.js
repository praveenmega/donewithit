import client from './client';

const endPoint = '/listings';

const getListings = () => client.get(endPoint);

const addListings = (listing,setProgress) => {
    const data = new FormData();
    data.append('title',listing.title);
    data.append('price', listing.price);
    data.append('categoryId', listing.category.value);
    data.append('description', listing.description);
    
    listing.images.forEach((image,index) => {
        data.append('images',{
            name: "image" + index + "_" + Date.now() +"." + image.uri.split('.').pop(),
            type: 'image/jpeg',
            uri: image.uri,
        })
    });

    if(listing.location) data.append('location',JSON.stringify(listing.location));

    return client.post(endPoint, data, {
        onUploadProgress: progressEvent => {
          let percentComplete = progressEvent.loaded / progressEvent.total
          percentComplete = parseInt(percentComplete * 100);
          setProgress(percentComplete);
        }
      });
}

export default {
    getListings,
    addListings,
}