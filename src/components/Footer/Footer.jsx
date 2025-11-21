import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BẢO TÀNG KHÔNG GIAN VĂN HÓA MƯỜNG</h3>
            <div className="contact-info">
              <p><strong>Địa chỉ:</strong> 202 Tây Tiến - TP Hòa Bình - Tỉnh Hòa Bình</p>
              <p><strong>Điện thoại:</strong> 0913.553.937</p>
              <p><strong>Fax:</strong> 0218.3893688</p>
              <p><strong>Email:</strong> hieumuong@gmail.com - info@muong.vn</p>
              <p><strong>Website:</strong> muong.vn - muongstudio.vn</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Trợ giúp</h4>
            <ul>
              <li><Link to="/#gioi-thieu">Giới thiệu chung</Link></li>
              <li><Link to="/#ho-tro">Hỗ trợ khách tham quan</Link></li>
              <li><Link to="/#trung-bay">Hệ thống trưng bày</Link></li>
              <li><Link to="/#ban-do">Bản đồ bảo tàng 3D</Link></li>
              <li><Link to="/#lien-he">Liên hệ với bảo tàng</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Đăng ký nhận thông tin</h4>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Nhập email của bạn" 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">Đăng ký</button>
            </form>
            <div className="social-links">
              <h4>Kết nối với chúng tôi:</h4>
              <div className="social-icons">
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="YouTube">YT</a>
                <a href="#" aria-label="Instagram">IG</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2024 Muong.vn. All right reserved.</p>
          <p>Web Design: VCSS.VN</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

