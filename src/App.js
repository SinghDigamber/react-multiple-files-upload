import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FilesUploadComponent from "./components/files-upload-component";

function App() {
  return (
    <div className="w-50 p-3">
      <FilesUploadComponent />
    </div>
  );
}

export default App;
