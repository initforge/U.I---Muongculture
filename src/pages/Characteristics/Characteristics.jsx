import './Characteristics.css'

const Characteristics = () => {
  return (
    <div className="characteristics-page">
      <section className="section hero-section">
        <div className="container">
          <h1 className="page-title">Đặc trưng văn hóa Mường</h1>
        </div>
      </section>

      {/* Section 1: Đặc trưng âm nhạc */}
      <section className="section music-characteristics">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">🎵</div>
            <h2 className="section-title">Đặc trưng âm nhạc</h2>
          </div>
          
          <div className="content-layout">
            <div className="content-text">
              <p>
                Âm nhạc Mường có hai loại chính: một loại có giai điệu và nhịp điệu, và một loại 
                chỉ có giai điệu mà không có nhịp điệu. Đây là điểm đặc biệt tạo nên sự độc đáo 
                trong âm nhạc truyền thống của người Mường.
              </p>
              <p>
                Các nhạc cụ chính được sử dụng trong âm nhạc Mường bao gồm <strong>sáo ôi</strong> 
                (một loại sáo dọc 4 lỗ) và <strong>đàn nhị</strong> (đàn hai dây). Những nhạc cụ 
                này không chỉ là công cụ tạo ra âm thanh mà còn là biểu tượng văn hóa, gắn liền với 
                đời sống tinh thần của người Mường.
              </p>
            </div>
            
            <div className="instruments-preview">
              <div className="instrument-item">
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop" 
                  alt="Sáo ôi" 
                />
                <h3>Sáo Ôi</h3>
              </div>
              <div className="instrument-item">
                <img 
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop" 
                  alt="Đàn nhị" 
                />
                <h3>Đàn nhị</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Kỹ năng tạo lời hát */}
      <section className="section lyrics-skill decorative-pattern">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">✍️</div>
            <h2 className="section-title">Kỹ năng tạo lời hát</h2>
          </div>

          <div className="content-layout reverse">
            <div className="content-text">
              <p>
                Lời hát trong <strong>hát Đúp</strong> (hay <strong>hát Đúm</strong>) chủ yếu được 
                các nghệ nhân ứng tác ngay trong lúc hát để đối đáp với đối tác. Đây là kỹ năng 
                quan trọng nhất, đòi hỏi sự thông minh, vốn từ vựng phong phú (đặc biệt là tiếng 
                Mường cổ) và khả năng sáng tạo tức thời.
              </p>
              <p>
                Một số nghệ nhân tài năng có thể hát Đúp liên tục trong hơn 10 giờ mà không hết 
                lời, như các nghệ nhân <strong>Bùi Văn Lịch</strong>, <strong>Bùi Văn Nghi</strong>, 
                <strong>Bùi Thị Lan</strong>, và <strong>Đinh Thị Hiền</strong>. Điều quan trọng 
                là lời hát phải có vần điệu logic, câu từ mượt mà, không rời rạc và có tính thuyết phục.
              </p>
            </div>
            
            <div className="artisan-image">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop" 
                alt="Nghệ nhân Bùi Văn Lịch và Đinh Thị Hiền" 
              />
              <p className="image-caption">Nghệ nhân Bùi Văn Lịch và nghệ nhân Đinh Thị Hiền</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Vai trò của điệu hát Đúm */}
      <section className="section hat-dum-role">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">🎭</div>
            <h2 className="section-title">Vai trò của điệu hát Đúm</h2>
          </div>

          <div className="role-content">
            <div className="role-image">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=500&fit=crop" 
                alt="Hát Đúm trong cộng đồng Mường" 
              />
            </div>
            
            <div className="role-text">
              <p>
                Điệu hát Đúm có sức hút đặc biệt, thu hút hàng nghìn người nghe. Nó không chỉ là 
                một hình thức giải trí mà còn có vai trò giáo dục quan trọng:
              </p>
              <ul className="role-list">
                <li>Giáo dục lòng yêu nước và tình yêu quê hương</li>
                <li>Phát huy giá trị nghệ thuật của con người</li>
                <li>Giảm căng thẳng trong lao động, tăng năng suất</li>
                <li>Phát triển đời sống văn hóa cộng đồng</li>
                <li>Nâng cao thẩm mỹ và cảm thụ nghệ thuật</li>
              </ul>
              <p>
                Hát Đúm là một di sản văn hóa quý giá, góp phần bảo tồn và phát huy những giá trị 
                truyền thống của dân tộc Mường.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Characteristics

