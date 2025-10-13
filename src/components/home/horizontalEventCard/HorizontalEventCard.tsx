import React from "react";
import style from './HorizontalEventCard.module.css'

interface Props{
    urlImg?: string,
    title?: string,
    place?: string,
    date?: string,
    aditionalInf?: string,
    color?: string,
    backgroundColor?: string,
    price?: string 
}

export const HorizontalEventCard = ({urlImg, title, place, date, aditionalInf, color, backgroundColor, price}:Props) => {
  const isLoading = !urlImg && !title && !place && !date && !aditionalInf && !price;

  return (
    <div className={style.horizontalEventCard}>
      <div className={style.imgContainer}>
        {isLoading ? (
          <div className={style.imgSkeleton}></div>
        ) : (
          <img className={style.img} src={urlImg} alt={title} />
        )}
      </div>
      <div className={style.infoContainer}>
        <div className={style.titlePriceContainer}>
          <h1 className={`${style.title} ${isLoading ? style.skeletonText : ''}`}>
            {isLoading ? "Loading..." : title}
          </h1>
          {!isLoading && price && (
            <span className={style.price}>{price}</span>
          )}
          {isLoading && (
            <span className={`${style.price} ${style.skeletonText}`}></span>
          )}
        </div>
        
        <p className={`${style.place} ${isLoading ? style.skeletonText : ''}`}>
          {isLoading ? "Loading..." : place}
        </p>
        <p className={`${style.date} ${isLoading ? style.skeletonText : ''}`}>
          {isLoading ? "Loading..." : date}
        </p>
        <div 
          style={{background: isLoading ? '#e0e0e0' : backgroundColor}} 
          className={style.aditionalInfoContainer}
        >
          <p 
            style={{color: isLoading ? '#e0e0e0' : color}} 
            className={`${style.aditionalInf} ${isLoading ? style.skeletonText : ''}`}
          >
            {isLoading ? "" : aditionalInf}
          </p>
        </div>
        <p className={`${style.whyThis} ${isLoading ? style.skeletonText : ''}`}>
          {isLoading ? "" : "🔝 Why this recommendation?"}
        </p>
      </div>
    </div>
  );
};