import { API_PATHS } from "./apiPath";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile)=>{
    const formData = new FormData();
    // Append imageFile to form data
    formData.append('image', imageFile);

    try{
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData,{
            headers: {
                'Content-Type': 'multipart/form-data', // Set header for file upload            
            },
            timeout: 60000, // 60 seconds for file upload
        });
        return response.data // Return response data
    }catch(error){
        console.log('Error uploading image:', error);
        console.log('Error response data:', error.response?.data);
        throw error // Rethrow error for handling
    };
};

export default uploadImage