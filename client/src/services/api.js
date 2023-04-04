import axios from "axios"


const URL ="http://localhost:8000"

 export const uploadFile=async (data)=>{
     try{
        console.log("data from frontend is ", data)
       let response=await  axios.post(`${URL}/upload`, data);
       console.log("data from backend is ", response);
        return response.data
     }
     catch(error){
        console.log("Erro while calling uplaodd file api ", error.message)
     }
}

export const getImageUrl= async()=>{
    // try{
    //     const ImageUrl= await axios.get(`${URL}/file/:${}`);
    //     console.log("Image url is ", ImageUrl);

    // }
    // catch(error){
    //         console.log("error while getting url ",error.message);
    // }
}

