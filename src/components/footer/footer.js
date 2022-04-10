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
            <a className='favourites' href='#'>Избранное</a>
            <a className='cart' href='#'>Корзина</a>
            <a className='contacts' href='#'>Контакты</a>
        </div>
        <div className='service-footer'> 
          <a className='terms-service' href='#'>Условия сервиса</a>
          <div className='language'>
            <img src={language}/>
            <a className='rus-language' href='#'>Рус</a>
            <a className='eng-language' href='#'>Eng</a>
          </div>
        </div>
        <div className='social-networks'>
          <img className='vk' src={vk}/>
          <img className='tg' src={tg}/>
          <img className='wt' src={wt}/>
        </div>

    </div>
  );
};

export default Footer;