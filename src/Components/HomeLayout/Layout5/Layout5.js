import React from 'react';
import ReactDOM from 'react-dom';
import './Layout5.css';
import data from '../data'
import CountUp from 'react-countup';

export default function Layout5(){
    return(
        <div className='layout5'>
            <p>Mạng lưới y tế <span>VNPT eBacsi</span> - Đặt lịch khám với:</p>
            <img src='../../../img/icon/Website---eBacsi---final---cut_61.png'/>
            <div className='layout-number'>
                <div className='number'>
                    <CountUp start={0} end={36} delay={0} duration={25}>
                    {({countUpRef}) => (
                            <div className='number'>
                                <h1 ref={countUpRef}></h1>
                                <p>Bệnh viện</p>
                            </div>
                    )}
                </CountUp>
                </div>
                <div className='number'>
                    <CountUp start={0} end={369} delay={0} duration={25}>
                        {({ countUpRef }) => (
                            <div className='number'>
                                <h1 ref={countUpRef}></h1>
                                <p>Bác sĩ</p>
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className='number'>
                    <CountUp start={0} end={986} delay={0} duration={25}>
                        {({ countUpRef }) => (
                            <div className='number'>
                                <h1 ref={countUpRef}></h1>
                                <p>Nhân viên y tế</p>
                                luôn sẵn sàng hỗ trợ
                            </div>
                        )}
                    </CountUp>
                </div>
            </div>
            <div className='img-hospital'>
                {
                    data.dataImgHospital.map((dtImg,index) => {
                        return(
                            <div
                            key={index} 
                            className='container-img'>
                                <img src={dtImg.url}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}