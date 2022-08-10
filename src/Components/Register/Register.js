import React from 'react';
import ReactDOM from 'react-dom';
import './Register.css';

export default function Register(){
    return(
        <div className='register'>
            <div className='banner-intro'>
                <p>ĐĂNG KÝ NHẬN THÔNG TIN TƯ VẤN</p>
                <img src='../../img/icon/Website---eBacsi---final---cut_61.png' />
            </div>
            <div className='container-intro'>
                <div className='title-intro'>
                    <p><span className='span-intro'>Home
                        <img className='icon-img' src='../../img/icon/right.png' />
                        Đăng ký nhận thông tin tư vấn</span>
                    </p>
                </div>
                <div className='content-register'>
                    <h1>BẠN CẦN TÌM HIỂU THÔNG TIN VỀ SẢN PHẨM?</h1>
                    <p>Vui lòng liên hệ hotline 19001544 hoặc gửi thông tin của bạn để đc hỗ trợ</p>
                    <div className='row-input'>
                        <input className='name' placeholder='Họ và tên(*)'/>
                        <div className='gender'>
                            Giới tính
                            <span>
                                <input type="radio" name="a"/> Nam &nbsp;     
                                <input type="radio" name="a"/> Nữ
                            </span>
                        </div>
                    </div>
                    <div className='row-input'>
                        <input className='year' placeholder='Năm sinh' />
                        <input className='number-phone' placeholder='Số điện thoại(*)'/>
                    </div>
                    <div className='row-input'>
                        <input className='city' placeholder='Tỉnh/Thành phố(*)' />
                        <input className='province' placeholder='Quận/Huyện(*)' />
                        <input className='address' placeholder='Địa chỉ(*)' />
                    </div>
                    <div className='advise'>
                        <p>Nội dung cần tư vấn(*)</p>
                        <textarea/>
                    </div>
                    <div className='btnSend'>
                        <input type="button" value ="Gửi thông tin"/>
                    </div>
                </div>
            </div>
        </div>
    )
}