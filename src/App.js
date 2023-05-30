import "./App.css";
import { uploadFile } from "./Services/Api";
import { useRef, useState, useEffect } from "react";
function App() {
  // const element = document.getElementById("uploadButton");
  // const alertFunction =  () => alert("Upload Successful");
  // element.addEventListener("click", alertFunction)
  //   setTimeout(alertFunction,10000)
    
  
  const fileInputRef = useRef();
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const openFiles = () => {
    fileInputRef.current.click();
  };
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
       
        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);
  console.log(file);
  return (
    <div className="container">
      <div className="wrapper">
        <h1>Simple File Sharing</h1>
        <h2>Upload and share your files!</h2>
        
        
          <button id="uploadButton" onClick={openFiles}>Upload</button><br />
          <input
            ref={fileInputRef}
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <a href={result} rel="noreferrer" target="_blank">
            {result}
          </a>
      
      </div>
    </div>
  );
}

export default App;
