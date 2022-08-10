import React from 'react';
import ReactDOM from 'react-dom';
import './New.css';
import data from '../../HomeLayout/data';

export default function News(){
    return(
        <div className='news'>
            <div className='banner-intro'>
                <p>TIN TỨC</p>
                <img src='../../img/icon/Website---eBacsi---final---cut_61.png' />
            </div>
            <div className='container-news'>
                <div className='title-intro'>
                    <p><span className='span-intro'>Home
                        <img className='icon-img' src='../../img/icon/right.png' />
                        Tin tức</span>
                    </p>
                </div>
                <div className='content-news'>
                    {
                        data.news.map(index => {
                            return(
                                <div
                                key={index.id}
                                 className='component-new'>
                                    <div className='title-new'>
                                        <div>&nbsp;&nbsp;&nbsp;</div>
                                        <h1>{index.title}</h1>
                                        <a href='/newYte'>Xem thêm <img src='../../../img/icon/rightWhite.png'/></a>
                                    </div>
                                    <div className='content-component'>
                                        {
                                            index.component.map(compo => {
                                                return(
                                                    <div className='row-new'>
                                                        <img src={compo.img_component}/>
                                                        <div className='col'>
                                                            <h3>{compo.title_component}</h3>
                                                            <p>{compo.content_component}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
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