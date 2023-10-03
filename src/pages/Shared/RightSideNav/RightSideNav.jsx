/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
// import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
import { FcGoogle } from 'react-icons/Fc';
import { FaFacebook } from 'react-icons/Fa';
import { AiOutlineGithub,AiFillTwitterCircle,AiOutlineInstagram } from 'react-icons/Ai';
const RightSideNav = () => {
    return (
        <div>
{/* login  */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FcGoogle></FcGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <AiOutlineGithub></AiOutlineGithub>
                    Login With GitHub
                </button>
            </div>
{/* find us  */}
            <div className='p-4  mb-6'>
                <h2 className="text-3xl mb-4">Find us</h2>
                <a className='items-center flex p-4 border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    Facbook
                </a>
                <a className='items-center flex p-4 border-x ' href="">
                    <AiOutlineInstagram className='mr-3'></AiOutlineInstagram>
                    Twitter
                </a>
                <a className='items-center flex p-4 border rounded-b-lg' href="">
                    <AiFillTwitterCircle className='mr-3'></AiFillTwitterCircle>
                    Twitter
                </a>
            </div>
{/* q-zone  */}
<div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q-Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;