import React, { useState } from "react";

function Cloudinary() {
  const [image, setImage] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const submitImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "petventure");
    data.append("cloud_name", "dkjimr8mq");

    fetch("https://api.cloudinary.com/v1_1/dkjimr8mq/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const imageUrl = data.secure_url;
        setUploadedImageUrl(imageUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <div>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <button onClick={submitImage}>Upload</button>
        </div>
        {uploadedImageUrl && <img src={uploadedImageUrl} alt="Uploaded" />}
      </div>
    </>
  );
}
export default Cloudinary;
