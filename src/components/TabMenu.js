import React from 'react';
import HomeIcon from '../icon/homeicon.svg';
import GiftIcon from '../icon/gifticon.svg';
import UploadsIcon from '../icon/uploadicon.svg';
import WorkIcon from '../icon/workicon.svg';
import SettingsIcon from '../icon/settingicon.svg';
import './TabMenu.css'
let TabMenu = function() {
  return (
    <div className="wrapper">
      <div className="Home element">
        <img src={HomeIcon} alt='home' className='icon'/>
        <h3>Home</h3>
      </div>
      <div className="Deal element">
        <img src={GiftIcon} alt='gift' className='icon'/>
        <h3>Deals</h3>
      </div>
      <div className="Upload element">
        <img src={UploadsIcon} alt='uploads' className='icon'/>
        <h3>Uploads</h3>
      </div>
      <div className="Work element">
        <img src={WorkIcon} alt='work' className='icon'/>
        <h3>Work</h3>
      </div>
      <div className="Settings element">
        <img src={SettingsIcon} alt='settings' className='icon'/>
        <h3>Settings</h3>
      </div>
    </div>
  )

}

export default TabMenu;