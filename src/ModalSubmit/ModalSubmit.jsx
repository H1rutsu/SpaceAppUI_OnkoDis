import React from "react";
import ModelOk from "../ModalOk/ModelOk";
import styles from "./ModalSubmit.module.scss";
import { useState, useEffect } from "react";

function ModelSumbit({ visible, setVisible }) {
  const [modalOkVis, setModalOkVis] = useState(false);
  useEffect(() => {}, [modalOkVis]);

  return (
    visible && (
      <>
        <ModelOk visible={modalOkVis} setVisible={setModalOkVis} />
        <div className={styles.model}>
          <div className={styles.container}>
            <div className={styles.container_header}>
              <div className={styles.container_header_left}>
                Заполните онлайн форму<br></br> и мы свяжемся с Вами
              </div>
              <div className={styles.container_header_right}>
                <button
                  onClick={() => {
                    setVisible(false);
                  }}
                  className={styles.container_header_right_close}
                >
                  X
                </button>
              </div>
            </div>
            <div className={styles.redline}></div>
            <div className={styles.container_form}>
              <div className={styles.dm}>
                <input minLength={2} placeholder="Имя" className="data"></input>{" "}
                <span className={styles.form__error}>
                  Введите правильно имя
                </span>
              </div>
              <div className={styles.dm}>
                <input
                  type="tel"
                  pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                  placeholder="+7 (800) 555-35-35"
                  className="data"
                ></input>
                <span className={styles.form__error}>
                  Введите правильно номер в формате: +7 (800) 555-35-35
                </span>
              </div>
              <div className={styles.dm}>
                <input placeholder="E-mail" className="data"></input>
                <input
                  minLength={2}
                  type="email"
                  style={{ marginLeft: "100px" }}
                  placeholder="Сообщение"
                  className="data"
                ></input>
                <span className={styles.form__error}>
                  Введите правильно E-main
                </span>
              </div>
              <div>
                <button
                  onClick={() => setModalOkVis(true)}
                  className={styles.submit}
                >
                  Отправить заявку
                </button>
                <button className={styles.file}>Прикрепить файл</button>
              </div>
              <div className={styles.checkDiv}>
                <input type="checkbox" className={styles.checkInp} />Я
                соглашаюсь с
                <text style={{ color: "red" }}>
                  политикой конфиденциальности
                </text>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default ModelSumbit;
