import { Link } from 'react-router-dom'
import './NewsCard.css'

const NewsCard = ({ news }) => {
  return (
    <article className="news-card">
      <div className="news-card-image">
        <img src={news.image} alt={news.title} />
      </div>
      <div className="news-card-content">
        <time className="news-date">{new Date(news.date).toLocaleDateString('vi-VN')}</time>
        <h3 className="news-card-title">
          <Link to={news.link}>{news.title}</Link>
        </h3>
        <p className="news-card-excerpt">{news.excerpt}</p>
        <Link to={news.link} className="news-card-link">Đọc thêm →</Link>
      </div>
    </article>
  )
}

export default NewsCard

