import './Lyrics.css'

const Lyrics = () => {
  return (
    <div className="lyrics-page">
      <section className="section hero-section">
        <div className="container">
          <h1 className="page-title">Lời hát Mường</h1>
          <p className="hero-subtitle">
            Khám phá vẻ đẹp của lời ca trong âm nhạc truyền thống Mường
          </p>
        </div>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="lyrics-intro">
            <h2>Nghệ thuật lời hát</h2>
            <p>
              Lời hát trong văn hóa Mường không chỉ đơn thuần là từ ngữ, mà là một nghệ thuật 
              tinh tế kết hợp giữa ngôn từ, vần điệu và cảm xúc. Mỗi câu hát đều mang trong mình 
              những câu chuyện, những bài học và giá trị văn hóa sâu sắc.
            </p>
            <p>
              Lời hát Mường thường được ứng tác trong các buổi hát Đúm, thể hiện sự thông minh, 
              tài năng và vốn từ vựng phong phú của các nghệ nhân. Đây là một di sản văn hóa 
              quý giá cần được bảo tồn và phát huy.
            </p>
          </div>

          <div className="lyrics-embed">
            <div className="embed-container">
              <iframe
                src="https://www.canva.com/design/DAG37luogjg/EAalM6d0LLmObL193a5WsQ/view?embed"
                title="Canva Design - Lời hát Mường"
                className="lyrics-iframe"
                allow="fullscreen"
              ></iframe>
            </div>
            <div className="embed-fallback">
              <p>Nếu không thể xem trực tiếp, vui lòng truy cập:</p>
              <a 
                href="https://www.canva.com/design/DAG37luogjg/EAalM6d0LLmObL193a5WsQ/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
              >
                Xem thiết kế trên Canva
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Lyrics

