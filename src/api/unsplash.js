import axios from "axios";


 
export default  axios.create({
    BASE_URL:"https://api.unsplash.com/search/photos",
    headers: {  
        Authorization:  
          'Client-ID DYcHPxSG-JOZ6Z7bXRNYF4ehhrFcaPewg9uSu81Z09U',
      },  
}) 