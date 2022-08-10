
import './Footer.css';
import '../Header/Header.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='part1'>
        <img className="logo_footer" src="../img/icon/Website---eBacsi---final---cut_82.png" alt=""/>
        
          <ul className="menu">
            <li><a href="">GIỚI THIỆU</a></li>
            <li>
              <a href=""> CÁC GÓI DỊCH VỤ Y TẾ</a>
            </li>
            <li><a href=""> TIN TỨC</a></li>
            <li><a href=""> ĐĂNG KÝ NHẬN TƯ VẤN</a></li>
          </ul>        
      </div>
      <div className='part2'>
        <div className='content1'>
          <h4>TỔNG CÔNG TY TRUYỀN THÔNG (VNPT-MEDIA)</h4>
          <p>GIẤY CHỨNG NHẬN ĐĂNG KÝ DOANH NGHIỆP SỐ: 0106873188</p>
          <p>SỞ KH&ĐT HÀ NỘI CẤP NGÀY 12/06/2015</p>
        </div>
        <div className='content2'>
          <h4>ĐIỀU KHOẢN VÀ CHÍNH SÁCH BẢO MẬT</h4>
          <p>Điều khoản hoạt động</p>
          <p>Quy định thanh toán</p>
          <p>Chính sách bảo mật và thông tin</p>
        </div>
        <div className='content3'>
          <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
          <div className='icon'>
            <img src='../img/icon/Website---eBacsi---final---cut_86.png'/>
            <img src='../img/icon/Website---eBacsi---final---cut_88.png'/>
            <img src='../img/icon/Website---eBacsi---final---cut_90.png'/>
          </div>
          <img src='../img/icon/Website---eBacsi---final---cut_96.png'/>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;