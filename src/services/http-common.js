import axios from "axios"
export default axios.create({
    baseURL: "https://afternoon-river-46748.herokuapp.com/api/v1",
    headers:{
        "Content-Type": "application/json"
    }
})