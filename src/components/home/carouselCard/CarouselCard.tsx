import React from 'react'
import style from './CarouselCard.module.css'

interface Props{
  urlImage: string,
  title: string,
  place: string
}

export const CarouselCard = ({urlImage, title, place}:Props) => {
  return (
    <div className={style.card}>
      <div className={style.imgContainer}>
        <img className={style.img} src={urlImage} alt={title} />
      </div>
      <div className={style.infoContainer}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.place}>{place}</p>
      </div>
    </div>
  )
}
