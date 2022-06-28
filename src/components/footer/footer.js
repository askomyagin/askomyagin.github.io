import { Link } from 'react-router-dom';
import React from 'react';
import './footer.css';
import language from "../../image/Language.png";
import vk from "../../image/VK.png";
import tg from "../../image/Telegram.png";
import wt from "../../image/Whatsapp.png";

const Footer = () => {
  return (
    <div className="footer">
      <Link className="link-nav" to={'/'}>
        <div className='title-site'>
            QPICK
        </div>
      </Link>
        
        <div className='other-pages'>
          <Link to={'/favorite'} style={{ textDecoration: 'none' }}>
            <div className='favourites'>Избранное</div>
          </Link>
          <Link to={'/cart'} style={{ textDecoration: 'none' }}>
            <div className='cart'>Корзина</div>
          </Link>
            <div className='contacts' href='#'>Контакты</div>
        </div>
        <div className='service-footer'> 
          <div className='terms-service' href='#'>Условия сервиса</div>
          <div className='language'>
            <img src={language} alt={'language'}/>
            <div className='rus-language' href='#'>Рус</div>
            <div className='eng-language' href='#'>Eng</div>
          </div>
        </div>
        <div className='social-networks'>
          <img className='vk' src={vk} alt={'vk'}/>
          <img className='tg' src={tg} alt={'tg'}/>
          <img className='wt' src={wt} alt={'wt'}/>
        </div>

    </div>
  );
};

export default Footer;