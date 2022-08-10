import React from 'react';
import ReactDOM from 'react-dom';
import './Layout3.css';
import data from '../data'

export default function Layout3(){
    return(
        <div className='layout3'>
            <img src='../../../img/icon/Iphone.png'/>
            <div className='content-layout3'>
                <p><span>VNPT eBacsi</span> - Chăm sóc sức khỏe toàn diện mọi nơi mọi lúc</p>
                <div className='content'>
                    {
                        data.dataLayout3.map( (content, index) => {
                            return(
                                <div
                                key={index} 
                                className='row-layout3'>
                                    <div className='img-title'>
                                        <img src={content.urlImg}/>
                                        <p className='title'>{content.title}</p>
                                    </div>
                                    <p className='text'>{content.text}</p>
                                </div>
                            )
                        }

                        )
                    }
                </div>
                <input className='btn-find-out-now' type="button" value = "TÌM HIỂU NGAY MÔ HÌNH HOẠT ĐỘNG"/>
            </div>
        </div>
    )
}