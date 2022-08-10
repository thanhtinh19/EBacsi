import React from 'react';
import ReactDOM from 'react-dom';
import './Services.css';
import data from '../HomeLayout/data';

export default function Services(){
    return(
        <div className='services'>
            <div className='banner-intro'>
                <p>CÁC GÓI DỊCH VỤ Y TẾ</p>
                <img src='../../img/icon/Website---eBacsi---final---cut_61.png' />
            </div>
            <div className='container-intro'>
                <div className='title-intro'>
                    <p><span className='span-intro'>
                        Home
                        <img className='icon-img' src='../../img/icon/right.png' />
                        Tất cả các gói khám</span>
                    </p>
                </div>
                <div className='content-services'>
                    {
                        data.infPackage.map((inf, index) => {
                            return(
                                <div className='row'
                                    key={index}>
                                    <a href= {inf.link}>
                                        <img className='image' src={inf.image} />
                                        <div className='title-text'>
                                            <h2 className='title'>{inf.title}</h2>
                                            <p className='text'>{inf.text}</p>
                                        </div>
                                        <input className='btn-more' type="button" value="Xem thêm" />
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}