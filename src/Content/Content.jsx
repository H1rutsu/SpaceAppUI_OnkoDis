import {Route, Routes } from 'react-router-dom';
import Contacts from '../Contacts/Contacts';
import Main from '../Main/Main';
import About from '../About/About';
import ForPatients from '../ForPatients/ForPatients';
import Error from '../Error/Error';
import Reviews from '../Reviews/Reviews';
import Doctors from '../Doctor/Doctors';


function Content() {
    return(
        <div className='content'>
            <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/patients' element={<ForPatients/>}/>
                    <Route path='/error' element={<Error/>}/>
                    <Route path='/reviews' element={<Reviews/>}/>
                    <Route path='/doctors' element={<Doctors/>}/>
            </Routes>
        </div>
    );
}

export default Content;