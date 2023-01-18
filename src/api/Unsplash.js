import axios from "axios"


 
export default  axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {  
        Authorization:  
          'Client-ID DYcHPxSG-JOZ6Z7bXRNYF4ehhrFcaPewg9uSu81Z09U',
      },  
}) 
