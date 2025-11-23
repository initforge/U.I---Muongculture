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

          <div className="story-embed">
            <div className="embed-container">
              <iframe
                src="https://gemini.google.com/share/f9e9248c32de"
                title="Gemini Storybook - Truyện Mường"
                className="story-iframe"
                allow="fullscreen"
                allowFullScreen
              ></iframe>
            </div>
            <div className="embed-fallback">
              <p>Nếu không thể xem trực tiếp, vui lòng truy cập:</p>
              <a 
                href="https://gemini.google.com/share/f9e9248c32de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Mở truyện trên Gemini
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stories

