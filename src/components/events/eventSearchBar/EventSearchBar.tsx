import React, { useState } from "react";
import { Button } from "../../common/buttons/Button";
import styles from './EventSearchBar.module.css'

interface Props{
  placeHolder: string,
  textButton: string,
  animation: boolean
  onSearch: (description: string)=>{}
}

export const EventSearchBar = ( {placeHolder, textButton, animation, onSearch}: Props) => {

  const [inputValue, setInputValue] = useState("");
  const [placeHold, setPlaceHold] = useState(placeHolder);
  
  const handleSearch = () =>{
    if(inputValue != ''){
      onSearch(inputValue);
    }else{
      setPlaceHold("Description should not be empty!!");
    }
  }

  return (
    <div className={animation ? `${styles.inputWrapper} ${styles.floatUp} ${styles.stagger2}` : styles.inputWrapper}>
      <img src="/icons/search_icon.png" alt="Search Icon" />
      <input
        className={styles.inputSearch}
        placeholder={placeHold}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button 
        text={textButton} 
        active={true} 
        link="discover-events"
        onClick={handleSearch}
      />
    </div>
  );
};