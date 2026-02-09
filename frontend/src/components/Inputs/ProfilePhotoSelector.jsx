import React, { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const HandelImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      //update the image state
      setImage(file);

      //Generate a preview url from the file
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };
  const HandelRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };
  const OnChooseFile = () => {
    inputRef.current.click();
  };

  return <div className="flex justify-center mb-6">
    <input
      type="file"
      accept="image/*"
      ref={inputRef}
      onChange={HandelImageChange}
      className="hidden" 
    />

    {!image ? (
        <div className="w-20 h-20 flex items-center justify-center bg-gray-300 rounded-full relative">
            <LuUser className="text-4xl text-cyan-800"/>

            <button
                type="button"
                className="w-8 h-8 flex items-center justify-center bg-cyan-700 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer "
                onClick={OnChooseFile}
            >
                <LuUpload/>
            </button>
        </div>
    ):(
        <div className="relative">
            <img
             src={previewUrl} 
             alt="profile photo"
             className="w-20 h-20 rounded-full object-cover"
              />    
            <button
                type="button"
                className="w-8 h-8 flex items-center justify-center bg-red-700 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer "
                onClick={HandelRemoveImage}
            >
                <LuTrash/>

            </button>  
        </div>
    )}

  </div>;
};

export default ProfilePhotoSelector;
