import React from 'react';
import ReactDOM from 'react-dom';
import './Layout6.css';
import data from '../data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Layout6(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnDotsHover: false,
        pauseOnHover: false,
    }
    return(
        <div className='layout6'>
            <div className='layout6-title'>
                <div>
                    <h1>ĐỘI NGŨ BÁC SĨ ƯU TÚ</h1>
                    <img src='../../../img/icon/Website---eBacsi---final---cut_17.jpg'/>
                </div>
                <a href='#'> Xem thêm  </a>
            </div>
            <div className='layout6-text-slide'>
                <div className='layout6-text'>
                    Đội ngũ bác sĩ ưu tú với thâm niên trung bình 10+ năm kinh nghiệm, hiện công tác tại các bệnh viện hàng đầu Việt Nam, thăm khám chuyên khoa đa dạng, tận tâm chăm sóc bạn và gia đình.
                </div>
                <div className='slide-layout6'>
                    <Slider {...settings}>
                        {data.dataSlideLayout6.map((dtSlide, index) => {
                            return (
                                <div className='row'
                                    key={index}>
                                    <a href='#'>
                                        <img className='image' src={dtSlide.urlImg} />
                                        <h2 className='title'>TS. BS. {dtSlide.name}</h2>
                                        <div className='text'>Chuyên khoa {dtSlide.office}</div>
                                    </a>
                                </div>
                            )
                        })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}