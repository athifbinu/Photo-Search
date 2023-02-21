import React from 'react'
import './ImageList.css'
import { motion } from 'framer-motion'
import {Col} from "reactstrap"

const ImageList=(props) =>{
    const images=  props.images.map(({description,id,urls})=>{

        return <motion.img  whileHover={{scale:0.9}} alt={description} key={id} src={urls.regular} />
      
    })

  return <div  className='img-list' >
     <Col lg='6'>
     {images} 
     </Col>

    
    </div>
  
}

export default ImageList



//all images are usiq keys


//description
//id
//usrls