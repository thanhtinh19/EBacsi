import React from 'react';
import ReactDOM from 'react-dom';
import './NewsYte.css';
import data from '../../HomeLayout/data';

export default function NewsYte() {
    return (
        <div className='news-yte'>
            <div className='banner-intro'>
                <p>TIN TỨC</p>
                <img src='../../img/icon/Website---eBacsi---final---cut_61.png' />
            </div>
            <div className='container-news'>
                <div className='title-intro'>
                    <p><span className='span-intro'>Home
                        <img className='icon-img' src='../../img/icon/right.png' />
                        Tin tức</span>
                        <img className='icon-img' src='../../img/icon/right.png' />
                        Kiến thức y tế
                    </p>
                </div>
                <div className='content-news'>
                    <div className='component-new'>
                        <div className='title-new'>
                            <div>&nbsp;&nbsp;&nbsp;</div>
                            <h1>KIẾN THỨC Y Tế</h1>
                            <a>Xem thêm <img src='../../../img/icon/rightWhite.png' /></a>
                        </div>
                        <div className='content-component'>
                            <div className='row-new'>
                                <img src='../../../img/news/new1.png' />
                                <div className='col'>
                                    <h3>Những thói quen đặc biệt có hại cho gan mà người Việt làm hằng ngày</h3>
                                    <p>Gan là một trong bộ phận quan trọng của cơ thể, có trách nhiệm lọc thải độc tố. Dưới đây là một số thói quen thường gặp tưởng chừng vô hại nhưng có thể là 'sát thủ' tàn phá gan của chính mình.</p>
                                </div>
                            </div>
                            {
                                data.dataLayout8.map(compo => {
                                    return (
                                        <div className='row-new'>
                                            <img src={compo.imgUrl} />
                                            <div className='col'>
                                                <h3>{compo.title}</h3>
                                                <p>{compo.content}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

