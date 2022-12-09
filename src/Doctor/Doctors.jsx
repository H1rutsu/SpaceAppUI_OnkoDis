function Doctors() {
  return (
    <div className="doctors">
      <div className="d_h">
        <div className="d_t">Фамилия врача начинается на...</div>
        <div className="doctors_info">
          <ul className="doctor_ul">
            <li>А</li>
            <li>Б</li>
            <li>В</li>
            <li>Г</li>
            <li>Д</li>
            <li>Е</li>
            <li>Ё</li>
            <li>Ж</li>
            <li>З</li>
            <li>И</li>
            <li>Й</li>
            <li>К</li>
            <li>Л</li>
            <li>М</li>
            <li>Н</li>
            <li>О</li>
            <li>П</li>
            <li>Р</li>
            <li>С</li>
            <li>Т</li>
            <li>У</li>
            <li>Ф</li>
            <li>Х</li>
            <li>Ц</li>
            <li>Ч</li>
            <li>Ш</li>
            <li>Щ</li>
            <li>Э</li>
            <li>Ю</li>
            <li>Я</li>
          </ul>
          <div className="doctors_info_find">
            <div>
              <input
                className="info_find_input"
                style={{ outline: "none", border: "none" }}
                placeholder="Поиск врача"
              />
            </div>
            <img src="/images/logo_find.png" className="logo_find"></img>
          </div>
        </div>
      </div>
      <div className="doctors_items">
        <div className="doctors_item">
          <div className="pad">
            <img src="/images/doctor_1.png" className="doctor_photo"></img>
            <div className="mt-10">
              <p>
                <b>Дудочкин Денис Павлович</b>
              </p>
              <div className="red_line"></div>
              <p>Стаж 22 года</p>
              <p>Хирург (высшая категория)</p>
              <p>Кандидат медицинских наук</p>
              <p style={{ color: "red" }}>+7 (800) 555-35-35</p>
            </div>
          </div>
        </div>
        <div className="doctors_item">
          <div className="pad">
            <img src="/images/doctor_2.png" className="doctor_photo"></img>
            <div className="mt-10">
              <p>
                <b>Ильичева Юлия Анатольевна</b>
              </p>
              <div className="red_line"></div>
              <p>Стаж 21 года</p>
              <p>Врач УЗИ (высшая категория)</p>
              <p>Кандидат медицинских наук</p>
              <p style={{ color: "red" }}>+7 (800) 555-35-35</p>
            </div>
          </div>
        </div>
        <div className="doctors_item">
          <div className="pad">
            <img src="/images/doctor_3.png" className="doctor_photo"></img>
            <div className="mt-10">
              <p>
                <b>Лапшин Михаил Владимирович</b>
              </p>
              <div className="red_line"></div>
              <p>Стаж 29 лет</p>
              <p>Онколог (высшая категория)</p>
              <p>Кандидат медицинских наук</p>
              <p style={{ color: "red" }}>+7 (800) 555-35-35</p>
            </div>
          </div>
        </div>
        <div className="doctors_item">
          <div className="pad">
            <img src="/images/doctor_4.png" className="doctor_photo"></img>
            <div className="mt-10">
              <p>
                <b>Анисимова Елена Викторовна</b>
              </p>
              <div className="red_line"></div>
              <p>Стаж 24 года</p>
              <p>Онколог (высшая категория)</p>
              <p>Кандидат медицинских наук</p>
              <p style={{ color: "red" }}>+7 (800) 555-35-35</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
