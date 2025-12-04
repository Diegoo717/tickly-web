import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common/buttons/Button";
import styles from './EventSearchBar.module.css'

interface Props{
  placeHolder: string,
  textButton: string,
  animation: boolean
  onSearch?: (description: string) => void 
}

export const EventSearchBar = ({ placeHolder, textButton, animation, onSearch }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [placeHold, setPlaceHold] = useState(placeHolder);
  const navigate = useNavigate();
  
  const handleSearch = () => {
    if(inputValue !== ''){
      if(onSearch) {
        onSearch(inputValue);
      } else {
        navigate(`/discover-events?search=${encodeURIComponent(inputValue)}`);
      }
    } else {
      setPlaceHold("Description should not be empty!!");
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={animation ? `${styles.inputWrapper} ${styles.floatUp} ${styles.stagger2}` : styles.inputWrapper}>
      <img src="/icons/search_icon.png" alt="Search Icon" />
      <input
        className={styles.inputSearch}
        placeholder={placeHold}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button 
        text={textButton} 
        active={true} 
        link={onSearch ? undefined : "discover-events"} 
        onClick={handleSearch}
      />
    </div>
  );
};