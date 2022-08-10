import React from 'react';
import ReactDOM from 'react-dom';
import './Layout4.css';
import data from '../data'

export default function Layout4(){
    return(
        <div className='layout4'>
            <p className='layout4-title'><span>VNPT eBacsi</span> - Giúp việc chăm sóc sức khỏe và gần gũi hơn</p>
            <img src='../../../img/icon/Website---eBacsi---final---cut_17.jpg'/>
            <p className='layout4-title-text' >Mang lại nhiều tiện ích để bạn và gia đình luôn làm chủ sức khỏe của bản thân, đặc biệt trong trạng thái "bình thường mới"</p>
            <div className='contentLayout4'>
            {
                data.dataLayout4.map((dtLayout4, index) => {
                    return(
                            <div 
                            key={index}
                            className='layout4-row'>
                                <img className='layout4-img' src={dtLayout4.urlImg} />
                                <p className='layout4-text'>{dtLayout4.text}</p>
                            </div>
                    )
                })
            }
            </div>
        </div>
    )
}