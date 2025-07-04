import axiosInstance from "../Component/AxiosInstance/Instance";
import axios from "axios";


let empServices={
    regiUser:async(payload)=>{
        try {
        let data= await axiosInstance.post("/register",payload)
    //   console.log(data);
    return data
        } catch (error) {
            console.log(error);
            return error
        }
    },
     loginUser:async(payload)=>{
        // console.log(payload);
        
        try {
        let data=await axiosInstance.post("/login",payload)
    //   console.log(data);
    return data
        } catch (error) {
            console.log(error);
            return error
        }
    }

}

export default empServices