import './Stories.css'

const Stories = () => {
  return (
    <div className="stories-page">
      <section className="section content-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">📖</div>
            <h2 className="section-title">Truyện Hát Đúm</h2>
          </div>

          <div className="story-intro">
            <p>
              Đắm chìm trong những câu chuyện cổ tích và truyền thuyết của người Mường, nơi mỗi câu chuyện đều mang trong mình những bài học sâu sắc về cuộc sống, tình yêu, và giá trị nhân văn. Những câu chuyện này được truyền từ đời này sang đời khác, góp phần bảo tồn và phát huy giá trị văn hóa truyền thống của dân tộc Mường.
            </p>
          </div>

          <div className="stories-embed">
            <div className="canva-embed-wrapper">
              <iframe
                loading="lazy"
                src=""
                title="Canva Design - Truyện Hát Đúm"
                className="canva-iframe"
                allowFullScreen
                allow="fullscreen; autoplay; encrypted-media; microphone; camera; speaker; display-capture"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stories
