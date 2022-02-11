import React from 'react';
import Logo from "../../components/Logo/Logo";
import styles from './Arts.module.scss'
import imageOne from '../../assets/img1.jpeg'
import imageTwo from '../../assets/img2.jpeg'
import imageThree from '../../assets/img3.jpeg'
import imageFour from '../../assets/img4.jpeg'
import imageFive from '../../assets/img5.jpeg'
import imageSix from '../../assets/img6.jpeg'
import imageSeven from '../../assets/img7.jpeg'
import imageEight from '../../assets/img8.jpeg'
import imageNine from '../../assets/img9.jpeg'
import imageTen from '../../assets/img10.jpeg'
import imageEleven from '../../assets/img11.jpeg'
import imageTwelve from '../../assets/img12.jpeg';
import imageThirteen from '../../assets/img13.jpeg';
import imageFourteen from "../../assets/14.jpeg";
import {useNavigate} from "react-router-dom";

const ArtsPage = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.arts}>
            <header className={styles.header}>
               <div className={styles.wrapper}>
                   <div className="logo">
                       <Logo/>
                   </div>
                   <div className="">
                       <p className={styles.textDisck}>Discord: polinochka / MSC#0024</p>
                   </div>
               </div>
            </header>
            <div className={styles.container}>
            <div className={styles.artsWrapper}>
                    <div className={styles.artsItems}>
                        <p className={styles.textMyArts}>My Arts</p>
                        <div className={styles.wrapperItems}>
                            <div className={`${styles.item} ${styles.item1}`} onClick={() => navigate('item/1')}>
                                <img src={imageOne} alt="" className={styles.img}/>
                            </div>

                            <div className={`${styles.item} ${styles.item2}`} onClick={() => navigate('item/2')}>
                                <img src={imageTwo} alt="" className={styles.img}/>
                            </div>
                            <div className={`${styles.item} ${styles.item3}`} onClick={() => navigate('item/3')}>
                                <img src={imageThree} alt="" className={styles.img}/>
                            </div>
                            <div className={`${styles.item} ${styles.item4}`} onClick={() => navigate('item/4')}>
                                <img src={imageFour} alt="" className={styles.img}/>
                            </div>
                            <div className={`${styles.item} ${styles.item5}`} onClick={() => navigate('item/5')}>
                                <img src={imageFive} alt="" className={styles.img}/>
                            </div>
                            <div className={`${styles.item} ${styles.item6}`} onClick={() => navigate('item/6')}>
                                <img src={imageSix} alt="" className={styles.img}/>
                            </div>
                            <div className={`${styles.item} ${styles.item2}`} onClick={() => navigate('item/7')}>
                                <img src={imageSeven} alt="" className={styles.img}/>
                            </div>
                            <div className={`${styles.item} ${styles.item1}`} onClick={() => navigate('item/8')}>
                                <img src={imageEight} alt="" className={styles.img}/>
                            </div>
                            <div className={`${styles.item} ${styles.item4}`} onClick={() => navigate('item/9')}>
                                <img src={imageNine} alt="" className={styles.img}/>
                            </div>
                            <div className={`${styles.item} ${styles.item5}`} onClick={() => navigate('item/10')}>
                                <img src={imageTen} alt="" className={styles.img}/>
                            </div>
                            <div className={`${styles.item} ${styles.item2}`} onClick={() => navigate('item/11')}>
                                <img src={imageEleven} alt="" className={styles.img}/>
                            </div>
                            <div className={`${styles.item} ${styles.item1}`} onClick={() => navigate('item/12')}>
                                <img src={imageTwelve} alt="" className={styles.img}/>
                            </div>
                            <div className={`${styles.item} ${styles.item3}`} onClick={() => navigate('item/13')}>
                                <img src={imageThirteen} alt="" className={styles.img}/>
                            </div>
                            <div className={`${styles.item} ${styles.item2}`} onClick={() => navigate('item/13')}>
                                <img src={imageFourteen} alt="" className={styles.img}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { ArtsPage };