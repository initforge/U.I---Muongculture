import './Experience.css'

const Experience = () => {
  return (
    <div className="experience-page">
      <section className="section hero-section">
        <div className="container">
          <h1 className="page-title">Trải nghiệm 3D</h1>
          <p className="hero-subtitle">
            Khám phá không gian văn hóa Mường qua trải nghiệm thực tế ảo 3D
          </p>
        </div>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="experience-intro">
            <h2>Bảo tàng ảo 3D</h2>
            <p>
              Trải nghiệm độc đáo với không gian bảo tàng 3D, nơi bạn có thể tham quan và khám phá 
              các hiện vật, kiến trúc và văn hóa Mường một cách sống động và chân thực nhất.
            </p>
            <p>
              Sử dụng công nghệ thực tế ảo, chúng tôi mang đến cho bạn cơ hội được đắm chìm trong 
              không gian văn hóa Mường, dù bạn đang ở bất kỳ đâu trên thế giới.
            </p>
          </div>

          <div className="experience-embed">
            <div className="embed-container">
              {/* Placeholder for Artsteps embedded code */}
              <div className="embed-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">🎨</div>
                  <h3>Trải nghiệm 3D</h3>
                  <p>Nội dung trải nghiệm 3D sẽ được hiển thị tại đây</p>
                  <p className="placeholder-note">
                    Embedded code từ Artsteps sẽ được thêm vào sau
                  </p>
                </div>
              </div>
              {/* Artsteps embed will be inserted here when provided */}
            </div>
          </div>

          <div className="experience-features">
            <h3>Tính năng trải nghiệm:</h3>
            <ul className="features-list">
              <li>Tham quan không gian bảo tàng 3D chân thực</li>
              <li>Xem các hiện vật văn hóa từ nhiều góc độ</li>
              <li>Tìm hiểu về kiến trúc nhà sàn Mường</li>
              <li>Khám phá các hoạt động văn hóa truyền thống</li>
              <li>Tương tác với các yếu tố trong không gian ảo</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience

