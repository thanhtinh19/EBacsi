import React from 'react';
import ReactDOM from 'react-dom';
import './SerCom.css';
import data from '../../HomeLayout/data';

export default function ServiceComponent2() {
    return (
        <div className='service-component'>
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
                        <img className='icon-img' src='../../img/icon/right.png' />
                        {data.infPackage[1].title}
                    </p>
                </div>
                <div className='content-sercom'>
                    <div className='img-title-sercom'>
                        <img src={data.infPackage[1].image} />
                        <div className='title-sercom'>
                            <h3>{data.infPackage[1].title}</h3>
                            <img src='../../../img/icon/Website---eBacsi---final---cut_17.jpg' />
                            <p className='describe-sercom'><span>Định nghĩa gói khám: </span> {data.infPackage[0].define}</p>
                            <p className='address-sercom'><span> Địa chỉ: </span>Bệnh viện Đa khoa Bưu điện TPHCM - Lô B9, Thành Thái, P.15, Q.10, TP.Hồ Chí Minh</p>
                        </div>
                    </div>
                    <div className='detail-information'>
                        <h3>Thông tin chi tiết</h3>
                        <span>1. Mô tả gói khám: </span> <br />
                        <p>{data.infPackage[1].describe.map(index => {
                            return (
                                <p>{index}</p>
                            )
                        })}</p>
                        <span>2. Quyền lợi của Bệnh nhân: </span> <br />
                        <p>
                            Bệnh nhân được bác sĩ tư vấn qua video call 3 lần: <br />
                            - 1 lần trước xét nghiệm <br />
                            - 1 lần ngay sau khi có kết quả xét nghiệm <br />
                            - 1 lần sau xét nghiệm 7 ngày.<br />
                            Bệnh nhân được bệnh viện lấy mẫu xét nghiệm tại nhà
                        </p>
                        <span>3. Quy trình các bước thực hiện: </span> <br />
                        <p>{data.proceducePkg[1].Proceduce.map(index => {
                            return (
                                <p>{index}</p>
                            )
                        })}</p>
                        <span>4. Chi tiết danh mục khám: </span> <br />
                        <img src={data.infPackage[1].detail} />
                        <p>Quý khách hàng vui lòng liên hệ tổng đài 19001544 hoặc tải ứng dụng VNPT eBacsi để được hỗ trợ tư vấn gói dịch vụ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}