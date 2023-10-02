import React, { useState } from "react";
import axios from "axios";

export default function FilesUploadComponent() {
  const [imgCollection, setImgCollection] = useState("");
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const onFileChange = (e) => {
    setImgCollection(e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData();
    for (const key of Object.keys(imgCollection)) {
      formData.append("imgCollection", imgCollection[key]);
    }
    axios
      .post("http://localhost:4000/api/upload-images", formData, {})
      .then((res) => {
        setIsFileUploaded(true);
      });
  };

  return (
    <div className="container">
      <h2 className="mb-3">React 18 Node Multiple File Upload Example</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            name="imgCollection"
            onChange={onFileChange}
            multiple
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Upload
        </button>
      </form>

      {isFileUploaded && (
        <div className="alert alert-success mt-3">
          Files successfully uploaded!
        </div>
      )}
    </div>
  );
}
