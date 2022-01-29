import React, {useEffect} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import styles from './Item.module.scss'
import arrow from '../../assets/left-arrow-svgrepo-com.svg'
const Item = () => {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(()=>{

    },[])
    const img = require(`../../assets/img${location.pathname.split("/")[location.pathname.split("/").length-1]}.jpeg`)
    return (
        <div className={styles.item}>
            <Link to={'/arts'} className={styles.button}><img src={arrow} alt="" className={styles.arrow}/>Go back</Link>
            <div className={styles.art}>
                <div className={styles.itemWrapper}>
                    <img src={img} alt="" className={styles.art}/>
                </div>
            </div>
        </div>
    );
};

export default Item;