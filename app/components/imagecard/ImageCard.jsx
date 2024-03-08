import React from 'react'
import './imagecard.css'
import Image from 'next/image'

const ImageCard = ({imageUrl, imageUrl2}) => {
  return (
    <div class="myCard">
    <div class="innerCard">
        <div class="frontSide">
            <Image src={imageUrl} alt=""  className='image'/>
        </div>
        <div class="backSide">
        <Image src={imageUrl2} alt="" className='image img2'/>
        </div>
    </div>
</div>
  )
}

export default ImageCard
