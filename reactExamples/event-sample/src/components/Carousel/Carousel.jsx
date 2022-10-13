import React, {useState} from 'react'

const Carousel = () => {
    const data = [
        'https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2022/01/good-nature-homepage-hero_2-scaled.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
        'https://th-thumbnailer.cdn-si-edu.com/8ciAzzKoUyvv-4kt1rLa3mLgwU0=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg',
        'https://ggsc.s3.amazonaws.com/images/uploads/LAKE-TREE.jpg'
    ]
    const [imageIndex, setImageIndex]=useState(0);
    const handleNext = () => {
        if(imageIndex<data.length){
            setImageIndex(imageIndex + 1)
        }else{
            setImageIndex(0)
        }
    }
    const handlePrev = () => {
        if(imageIndex > 0){
            setImageIndex(imageIndex -1)
        }if(imageIndex === 0){
            setImageIndex(data.length -1)
        }
    }
  return (
    <div className='carousel'>
      <h1>Carousel</h1>
      <img src={data[imageIndex]} alt={data[imageIndex]} />
      <div className="buttonGroup">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default Carousel
