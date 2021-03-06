import React from 'react';
import Temperature from '../Temperature/Temperature';
import styles from './Card.module.css'

export default function Card({max, min, name, img, onClose}) {
  
  function handleOnClose() {
    if(typeof onClose === "function") onClose()
  }

  return (
    <div className={styles.card}>
      
      
        <button className={styles.btn} onClick = {handleOnClose}>X</button>
      

      <span className={styles.cityName}>{name}</span>
      
      <div className={styles.div_temp}>
        <Temperature label= "Min" value= {min}/>
        <Temperature label= "Max" value= {max}/>
      </div>
      
      <div className={styles.img} >
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      </div>
      
    </div>
  )
  
};

