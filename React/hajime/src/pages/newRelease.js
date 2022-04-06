import React from 'react';
import '../css/newReleases.css';

const NewRelease = () => {
  return (
    <div className='nRcontainer'>
      <div className='contGrid'>
        <div className='Card_nwrel'>
        <div className='card-photo'><img src='http://zapoem.com/images/covers/c89bf61d.a.19927687-3.jpg'></img></div>
        <div className='card-content'><p>На Уверенном</p><p className='Artist'>GaoDagamo & NeSvyat feat. MiyaGi</p><p className='Year'>2022</p></div>
      </div>

      <div className='Card_nwrel'>
        <div className='card-photo'><img src='https://images.genius.com/934c71e3dc10cc54a65325089d6a9780.1000x1000x1.jpg'></img></div>
        <div className='card-content'><p>Буревестник</p><p className='Artist'>MiyaGi & Andy Panda</p><p className='Year'>2022</p></div>
      </div>

      <div className='Card_nwrel'>
        <div className='card-photo'><img src='https://images.genius.com/68cff7cbd37dc241c96c911c97ec7312.1000x1000x1.jpg'></img></div>
        <div className='card-content'><p>Ivory</p><p className='Artist'>Ollane feat. Daena</p><p className='Year'>2022</p></div>
      </div>

      <div className='Card_nwrel'>
        <div className='card-photo'><img src='https://images.genius.com/e81fcb22fcc14fa00dc7c8b36ffea8c0.1000x1000x1.jpg'></img></div>
        <div className='card-content'><p>Marmalade</p><p className='Artist'>MiyaGi & Andy Panda feat. Mav-D</p><p className='Year'>2021</p></div>
      </div>

      <div className='Card_nwrel'>
        <div className='card-photo'><img src='https://hajimerecords.com/image/tracks/mavd-temnota-cover-001.jpg'></img></div>
        <div className='card-content'><p>Темнота</p><p className='Artist'>Mav-D feat. Miyagi & Andy Panda</p><p className='Year'>2021</p></div>
      </div></div>
      
    </div>
  );
};

export default NewRelease;