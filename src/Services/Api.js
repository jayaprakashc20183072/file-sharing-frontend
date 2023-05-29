import axios from "axios";
const API_URL = "https://file-sharing-api.onrender.com";
const uploadFile = async (data) => {
    try {
       let response = await axios.post(`${API_URL}/upload`,data); 
       return response.data;
    } catch (error) {
        console.error("error while calling API",error.message);
    }
}
export {uploadFile};