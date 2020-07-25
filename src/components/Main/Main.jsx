import React from 'react';
import s from './Main.module.css';
import img1 from './../../img/1.jpg';
import img2 from './../../img/2.jpg';
import img3_1 from './../../img/3_1.jpg';
import img4 from './../../img/4.jpg';
import img5 from './../../img/5.jpg';
import img6 from './../../img/6.jpg';

class Main extends React.Component {
    render() {
        return (
            <div className={s.page}>
                <h1>С днем рождения мамулечка!!!</h1>
                <div className={s.item}>
                    <h2>Всего тебе наилучшего</h2>
                    <div className={s.item__img}>
                        <img src={img1} alt="/" />
                    </div>

                </div>
                <div className={s.item}>
                    <h2>Счастья и здоровья</h2>
                    <div className={s.item__img}>
                        <img src={img2} alt="/" />
                    </div>

                </div>
                <div className={s.item}>
                    <h2>Спасибо за яркие моменты с тобой</h2>
                    <div className={s.item__img}>
                        <img src={img3_1} alt="/" />
                    </div>
                </div>
                <div className={s.item}>
                    <h2>Всегда оставайся такой же красивой</h2>
                    <div className={s.item__img}>
                        <img src={img4} alt="/" />
                    </div>

                </div>
                <div className={s.item}>
                    <h2>Спасибо что ты есть</h2>
                    <div className={s.item__img}>
                        <img src={img5} alt="/" />
                    </div>


                </div>
                <div className={s.item}>
                    <h2>С днем рождения мамулечка</h2>
                    <div className={s.item__img}>
                        <img src={img6} alt="/" />
                    </div>

                </div>
            </div>
        );
    };
};

export default Main;