import React from 'react';
import ReactDOM from 'react-dom';
import './Layout8.css';
import data from '../data'

export default function Layout8(){
    return(
        <div className='layout8'>
            <div className='title-layout8'>
                <p>TIN TỨC</p>
                <a href='/news'>Xem thêm</a>
            </div>
            <img src='../../../img/icon/Website---eBacsi---final---cut_17.jpg'/>
            <div className='layout8-content'>
                <div className='new1'>
                    <img src='../../../img/news/new1.png'/>
                    <p>Những thói quen đặc biệt có hại cho gan mà người Việt làm hằng ngày</p>
                    <div className='content'>Gan là một trong bộ phận quan trọng của cơ thể, có trách nhiệm lọc thải độc tố. Dưới đây là một số thói quen thường gặp tưởng chừng vô hại nhưng có thể là 'sát thủ' tàn phá gan của chính mình.</div>
                </div>
                <div className='new'>
                    {
                        data.dataLayout8.map((dtL8, index) => {
                            return(
                                <div
                                    key={index}
                                    className='container-new'>
                                    <img src={dtL8.imgUrl} />
                                    <div className='content-new'>
                                        <p>{dtL8.title}</p>
                                        <div className='content'>{dtL8.content}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}