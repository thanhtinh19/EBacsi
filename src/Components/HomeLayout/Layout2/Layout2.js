import React from 'react';
import ReactDOM from 'react-dom';
import './Layout2.css';
import data from '../data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function SlideLayout2(){
    var setting = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000, 
        pauseOnDotsHover: false,
        pauseOnHover: false,
        arrows: false
    }
    return(
        <div className='slide-layout2'>
            <Slider {...setting}>
                {data.infPackage.map((inf, index) => {
                    return (
                        <div className='row'
                            key={index}>
                            <a href='/service'>
                                <img className='image' src={inf.image} />
                                <div className='title-text'>
                                    <h2 className='title'>{inf.title}</h2>
                                    <p className='text'>{inf.text}</p>
                                </div>
                            </a>
                        </div>
                    )
                })
                }
            </Slider>
        </div>
    )
}
