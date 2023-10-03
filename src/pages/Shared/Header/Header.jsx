/* eslint-disable no-unused-vars */
// import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-lg font-normal'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;