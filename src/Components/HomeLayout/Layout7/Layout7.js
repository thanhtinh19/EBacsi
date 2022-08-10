import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './Layout7.css';
import data from '../data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Layout7(){
    const [slideIndex,setSlideIndex] = useState(0)
    
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, [])

    const settingFor = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        centerMode:true,
        beforeChange:(current, next) => setSlideIndex(next),
        asNavFor : nav2 ,
        ref: slider1,
        arrows:false,
        Accessibility: true,
        draggable: true,
        focusOnSelect: true,
        touchMove: true
}


    const settingnav = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        asNavFor: nav1 ,
        ref: slider2,
        arrows:false,
    }
    return(
        <div className='layout7'>
            <div className='layout7-container'>
                
                <div className='content1'>
                    <img src='../../../img/icon/video.png'/>
                    <div className='qrcode-download'>
                        <img className='qrcode' src='../../../img/icon/qrApp.png'/>
                        <h3>Tải ứng dụng ngay!</h3>
                        <img className='google-play' src='../../../img/icon/Website---eBacsi---final---cut_77.png'/>
                        <img className='app-store' src='../../../img/icon/Website---eBacsi---final---cut_79.png'/>
                    </div>
                </div>
                
                <div className='content2'>
                    <div className='layout7-title'>Khách hàng nói gì về <span>VNPT eBacsi</span></div>
                    <img src='../../../img/icon/Website---eBacsi---final---cut_17.jpg'/>
                    <div className='container-image'>
                        <Slider {...settingFor}>
                            {
                                data.dataSlideLayout7.map((dtLayout7, index) => {
                                    return (
                                        <div className= {index === slideIndex ? 'slide slide-active' : 'slide'}
                                        key={index}
                                        >
                                            <img src={dtLayout7.imgUrl} title={dtLayout7.name} />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                        <Slider {...settingnav}>
                            {
                                data.dataSlideLayout7.map((dtLayout7, index) => {
                                    return (
                                        <div className='slide-content'
                                            key={index}
                                        >
                                            {dtLayout7.content}
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}