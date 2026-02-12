const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'expense-tracker');
    formData.append('cloud_name', 'dy9dwcnqs');

    try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dy9dwcnqs/image/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Upload failed');
        }

        const data = await response.json();
        return { imageUrl: data.secure_url }; // Return response data
    } catch (error) {
        console.log('Error uploading image:', error);
        console.log('Error response data:', error);
        throw error; // Rethrow error for handling
    }
};

export default uploadImage;