import { useEffect, useRef, useState } from 'react'
import './Stories.css'

const Stories = () => {
  const iframeRef = useRef(null)
  const [isBlocked, setIsBlocked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const geminiUrl = 'https://gemini.google.com/share/f9e9248c32de'

  // Try different proxy services (some may work, some may not)
  const proxyUrls = [
    `https://api.allorigins.win/raw?url=${encodeURIComponent(geminiUrl)}`,
    `https://cors-anywhere.herokuapp.com/${geminiUrl}`,
    `https://thingproxy.freeboard.io/fetch/${geminiUrl}`,
    geminiUrl // Direct URL as last resort
  ]

  const [currentProxyIndex, setCurrentProxyIndex] = useState(0)

  useEffect(() => {
    // Listen for iframe load errors
    const handleError = () => {
      setIsBlocked(true)
      setIsLoading(false)
      // Try next proxy if available
      if (currentProxyIndex < proxyUrls.length - 1) {
        setTimeout(() => {
          setCurrentProxyIndex(prev => prev + 1)
          setIsBlocked(false)
          setIsLoading(true)
        }, 2000)
      }
    }

    const iframe = iframeRef.current
    if (iframe) {
      iframe.addEventListener('error', handleError)
      
      // Check if iframe is blocked after load
      const checkBlocked = () => {
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
          if (!iframeDoc) {
            // Likely blocked, but wait a bit more
            setTimeout(() => {
              try {
                const doc = iframe.contentDocument || iframe.contentWindow?.document
                if (!doc) {
                  setIsBlocked(true)
                  setIsLoading(false)
                } else {
                  setIsLoading(false)
                }
              } catch (e) {
                setIsBlocked(true)
                setIsLoading(false)
              }
            }, 2000)
          } else {
            setIsLoading(false)
          }
        } catch (e) {
          // Cross-origin error - iframe is blocked
          setIsBlocked(true)
          setIsLoading(false)
        }
      }

      const handleLoad = () => {
        setTimeout(checkBlocked, 1000)
      }

      iframe.addEventListener('load', handleLoad)
      
      // Timeout fallback
      const timeout = setTimeout(() => {
        if (isLoading) {
          setIsBlocked(true)
          setIsLoading(false)
        }
      }, 5000)

      return () => {
        iframe.removeEventListener('error', handleError)
        iframe.removeEventListener('load', handleLoad)
        clearTimeout(timeout)
      }
    }
  }, [currentProxyIndex, isLoading])

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
              {!isBlocked && (
                <iframe
                  ref={iframeRef}
                  src={proxyUrls[currentProxyIndex]}
                  title="Gemini Storybook - Truyện Mường"
                  className="story-iframe"
                  allow="fullscreen"
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation"
                  style={{ display: isBlocked ? 'none' : 'block' }}
                />
              )}
              {(isBlocked || isLoading) && (
                <div className="iframe-overlay">
                  <div className="overlay-content">
                    {isLoading && currentProxyIndex < proxyUrls.length - 1 ? (
                      <>
                        <div className="loading-spinner"></div>
                        <p className="overlay-text">Đang thử kết nối qua proxy {currentProxyIndex + 1}/{proxyUrls.length}...</p>
                      </>
                    ) : (
                      <>
                        <p className="overlay-text">Không thể hiển thị trực tiếp</p>
                        <p className="overlay-text-small">
                          Gemini không cho phép embed trong iframe do chính sách bảo mật. 
                          Vui lòng mở trong tab mới để xem truyện.
                        </p>
                        <a 
                          href={geminiUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          📖 Mở truyện trên Gemini
                        </a>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stories

