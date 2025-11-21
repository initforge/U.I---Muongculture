import './Origin.css'

const Origin = () => {
  return (
    <div className="origin-page">
      <section className="section hero-section">
        <div className="container">
          <h1 className="page-title">Nguồn gốc văn hóa Mường</h1>
        </div>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-image">
              <img 
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop" 
                alt="Phụ nữ Mường trong trang phục truyền thống" 
              />
            </div>
            <div className="content-text">
              <h2>Lịch sử và nguồn gốc</h2>
              <p>
                Dân tộc Mường là một trong 54 dân tộc anh em của Việt Nam, có nguồn gốc lâu đời 
                và văn hóa phong phú. Người Mường chủ yếu sinh sống ở các tỉnh miền núi phía Bắc, 
                đặc biệt là tỉnh Hòa Bình.
              </p>
              <p>
                Văn hóa Mường được hình thành và phát triển qua hàng nghìn năm, mang đậm bản sắc 
                riêng với những giá trị truyền thống độc đáo về kiến trúc nhà sàn, trang phục, 
                âm nhạc, và các nghi lễ tâm linh.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section decorative-pattern">
        <div className="container">
          <div className="content-grid reverse">
            <div className="content-text">
              <h2>Bản sắc văn hóa</h2>
              <p>
                Văn hóa Mường được thể hiện rõ nét qua trang phục truyền thống với những hoa văn 
                tinh xảo, màu sắc đặc trưng. Phụ nữ Mường thường mặc áo dài, váy đen với những 
                đường viền và hoa văn thêu tay công phu.
              </p>
              <p>
                Kiến trúc nhà sàn là một nét đặc trưng không thể thiếu, phản ánh lối sống gắn bó 
                với thiên nhiên và môi trường sống miền núi. Nhà sàn Mường không chỉ là nơi ở mà 
                còn là không gian văn hóa, nơi diễn ra các hoạt động cộng đồng và nghi lễ truyền thống.
              </p>
            </div>
            <div className="content-image">
              <img 
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop" 
                alt="Văn hóa Mường truyền thống" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Origin

