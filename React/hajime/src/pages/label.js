import React from 'react';
import "../css/label.css";

const Label = () => {
  return (
<div className='Lbcontainer'>
      <div className='contGrid'>
        <div className='Card_lbArt'>
        <div className='card-photo'><img src='https://vokrug.tv/pic/news/f/8/4/6/f846d39973398a37a28d7fb72fa08d47.jpg'></img></div>
        <div className='card-content'><p className='Artist'>Miyagi</p></div>
      </div>

      <div className='Card_lbArt'>
        <div className='card-photo'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbG725RcL_GrFtilFMcnt3tHsezcMTb1fUNHZ97uHmenKhVPvDV4qINOnrweGO7-uxVSs&usqp=CAU'></img></div>
        <div className='card-content'><p className='Artist'>Andy Panda</p></div>
      </div>

      <div className='Card_lbArt'>
        <div className='card-photo'><img src='https://i.scdn.co/image/ab6761610000e5eb59054907889447fee968f256'></img></div>
        <div className='card-content'><p className='Artist'>TumaniYo</p></div>
      </div>

      <div className='Card_lbArt'>
        <div className='card-photo'><img src='https://zvuk.top/img/collections/321412_big.jpg'></img></div>
        <div className='card-content'><p className='Artist'>Kadi</p></div>
      </div>

      <div className='Card_lbArt'>
        <div className='card-photo'><img src='https://images.genius.com/bebdd869ddcb7ffcb89e31e0669e537f.1000x1000x1.jpg'></img></div>
        <div className='card-content'><p className='Artist'>Mav-D</p></div>
      </div>
      <div className='Card_lbArt'>
        <div className='card-photo'><img src='https://hajimerecords.com/image/artist/000009930005.jpg'></img></div>
        <div className='card-content'><p className='Artist'>Castle</p></div>
      </div>
      </div>
      
    </div>
  );
};

export default Label;