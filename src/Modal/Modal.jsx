import React, { useState } from 'react';
import { FormCheck } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function ModalRecord() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button style={{backgroundColor:"#C4413A"}} className='enroll' onClick={handleShow}>
        Записаться
      </button>

      <Modal fullscreen={true} show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>
            Заполните онлайн форму и мы свяжемся с Вами
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <input placeholder='Имя' className='data'></input>
            </div>
            <div>
                <input placeholder='Телефон' className='data'></input>
            </div>
            <div>
                <input placeholder='E-mail' className='data'></input>
                <input placeholder='Сообщение' className='data'></input>
            </div>
            <div>
                <button style={{backgroundColor:'#C4413A', width: 507, height: 56,marginLeft:100,marginRight:50}}>Отправить заявку</button>
                <button style={{border:'1px dashed', backgroundColor:'white', width: 507, height: 56,marginLeft:50,marginRight:100}}>Прикрепить файл</button>
            </div>
            <div style={{marginLeft:'100px', marginTop:'50px'}}>
                <input style={{marginRight:'20px'}} type="checkbox" width={'24'} height={'24'}/>Я соглашаюсь с политикой
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRecord;