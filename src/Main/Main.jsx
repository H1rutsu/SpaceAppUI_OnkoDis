import React from "react";
import styles from './Main.module.scss'


function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.main_info}>
                <div className={styles.main_info_header}>
                    <div className={styles.main_info_header_text}>
                        Онкологическая служба<br />Саратовской области</div>
                </div>
                <div className={styles.redline}>
                    <img src="/images/redline.png" className={styles.red_line} />
                </div>
                <div className={styles.main_info_text}>
                    История онкологической службы Саратовской области начинается с создания первого Областного онкологического диспансера, организованного
                    на территории г. Энгельса в сентябре 1945 года по распоряжению Совета Народных Комиссаров СССР специальным постановлением «О мероприятиях
                    по улучшению онкологической помощи населению».С 8 февраля 1946 года диспансер стал выполнять функции Саратовского областного онкологического
                    диспансера.
                </div>
                <button className={styles.more}>Подробнее</button>
            </div>
        </div>
    )
}


export default Main;


/* <div className='main'>
    <div className='main_info'>
        <div className='main_info_header'>
            <div className='main_info_header_text'>
                Онкологическая служба<br />Саратовской области</div>
        </div>
        <div className='redline'>
            <img src="/images/redline.png" className='red_line' />
        </div>
        <div className='main_info_text'>
            История онкологической службы Саратовской области начинается с создания первого Областного онкологического диспансера, организованного
            на территории г. Энгельса в сентябре 1945 года по распоряжению Совета Народных Комиссаров СССР специальным постановлением «О мероприятиях
            по улучшению онкологической помощи населению».С 8 февраля 1946 года диспансер стал выполнять функции Саратовского областного онкологического
            диспансера.
        </div>
        <button className='more'>Подробнее</button>
    </div>
</div>  */





