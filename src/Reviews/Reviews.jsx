import styles from "./Reviews.module.scss";

function Reviews() {
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews_container}>
        <div className={styles.reviews_container_text}>
          Я находился на лечении в реанимации городской клинической больницы №2
          в июне 2020 года с диагнозом "двухсторонняя пневмония". Наталья
          Михайловна в тот период работала в реанимации данной больницы. Могу с
          уверенностью сказать, что это врач - один из лучших, как говорят, от
          Бога. Ее опыт, профессионализм, а главное, внимательное и заботливое
          отношение к пациентам придают уверенность и помогают скорее
          выздоравливать.
        </div>
        <div className={styles.rev_con_bot}>
          <div>
            <img src="/images/redline.png" className={styles.red_line}></img>
          </div>
          <div className={styles.rcb_info}>
            <div>
              <p>Алексей</p>
            </div>
            <div>
              <p>23.06.2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reviews_container}>
        <div className={styles.reviews_container_text}>
          Хорошое отношения ,сотрудники вежливые ,чистота везде , делается
          ремонт , медсёстра всегда на посту, окажут помощь кому ни обходимо,
          хорошое отношение всех сотрудников спасибо огромное за их помощь.
        </div>
        <div className={styles.rev_con_bot}>
          <div>
            <img src="/images/redline.png" className={styles.red_line}></img>
          </div>
          <div className={styles.rcb_info}>
            <div>
              <p>Никита</p>
            </div>
            <div>
              <p>23.06.2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reviews_container}>
        <div className={styles.reviews_container_text}>
          Волокита, график приема не соблюдается. Врач Шилова вместо приема
          болтается по коридорам. Весь коридор заполнен больными, ожидающими
          очереди. Организатор не справляется со своей работой.
        </div>
        <div className={styles.rev_con_bot}>
          <div>
            <img src="/images/redline.png" className={styles.red_line}></img>
          </div>
          <div className={styles.rcb_info}>
            <div>
              <p>Анонимно</p>
            </div>
            <div>
              <p>23.06.2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reviews_container}>
        <div className={styles.reviews_container_text}>
          Огромное спасибо хирургу/онкологу Дудочкину Денису Павловичу! Который
          полностью поменял моё представление о местной анестезии ( есть с чем
          сравнить, уже проводилась подобная операция у другого хирурга, в
          другой клинике )Для себя решила, что впредь буду наблюдаться только у
          него! Очень грамотный, вежливый доктор! Крепкого здоровья Вам! Большое
          спасибо!
        </div>
        <div className={styles.rev_con_bot}>
          <div>
            <img src="/images/redline.png" className={styles.red_line}></img>
          </div>
          <div className={styles.rcb_info}>
            <div>
              <p>Василий</p>
            </div>
            <div>
              <p>23.06.2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
