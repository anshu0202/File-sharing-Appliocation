import logo from './logo.svg';
import './App.css';

import {useRef, useState, useEffect} from "react"

import { uploadFile } from './services/api';
import { getImageUrl } from './services/api';

function App() {


  const fileInputRef=useRef();

  const [imageUrl, setImageUrl]=useState('');
  const [showImg,setShowImg]=useState(false);

  const logo="https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg"

  const [file,setFile]=useState('');
    const onUploadClick=()=>{
      fileInputRef.current.click();
    }

    useEffect(()=>{
      const getImage=async ()=>{
        if(file){
          const data= new FormData();
          data.append("name", file.name);
          data.append("file",file);

        let response=await uploadFile(data);
        console.log("response  is  after storage ", response)
        setImageUrl(response.path);
        setShowImg(true)
        }
      }
      getImage();
      // downloadImage();
    },[file])

    const downloadImage= async()=>{
        getImageUrl();
    }
    console.log("image url is ", imageUrl.path);


  
    console.log(file);


  return (
    <div className="container">
     <img  src={logo} alt="banner"/>
      <div className='wrapper'>
        <h1>
          Simple  file sharing
          </h1>
          <p>
            Upload and share the download link
            </p>
            <button onClick={()=> onUploadClick()}> 
              Upload
              </button>
              <input type='file' onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}} ref={fileInputRef}>
              </input>
              { showImg &&
              <img   src={imageUrl} alt="profile pic"/>
}
        </div>     
    </div>
  );
}

export default App;
