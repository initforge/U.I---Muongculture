import { useEffect, useRef, useState } from 'react'
import './IframeProxy.css'

const IframeProxy = ({ url, title, className = '' }) => {
  const iframeRef = useRef(null)
  const [isBlocked, setIsBlocked] = useState(false)
  const [proxyUrl, setProxyUrl] = useState(null)

  useEffect(() => {
    // Try using a proxy service to bypass X-Frame-Options
    // Option 1: Use a CORS proxy (for development/testing)
    // Option 2: Use embed.ly or similar service
    // Option 3: Use a custom proxy endpoint
    
    // For now, we'll try multiple proxy services
    const tryProxy = () => {
      // Try using a public iframe proxy service
      // Note: These services may have limitations
      const proxies = [
        `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
        `https://corsproxy.io/?${encodeURIComponent(url)}`,
        // Direct URL as fallback
        url
      ]

      // Try first proxy
      setProxyUrl(proxies[0])
    }

    tryProxy()

    // Check if iframe is blocked after load
    const checkIfBlocked = () => {
      if (iframeRef.current) {
        try {
          // Try to access iframe content (will fail if blocked)
          const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document
          if (!iframeDoc) {
            // Iframe is likely blocked
            setTimeout(() => {
              setIsBlocked(true)
            }, 2000)
          }
        } catch (e) {
          // Cross-origin error means iframe is blocked
          setIsBlocked(true)
        }
      }
    }

    const timeout = setTimeout(checkIfBlocked, 3000)

    return () => clearTimeout(timeout)
  }, [url])

  const handleLoad = () => {
    // If iframe loads successfully, it might not be blocked
    // But we still need to check content
    try {
      if (iframeRef.current?.contentWindow) {
        setIsBlocked(false)
      }
    } catch (e) {
      setIsBlocked(true)
    }
  }

  const handleError = () => {
    setIsBlocked(true)
  }

  return (
    <div className={`iframe-proxy-container ${className}`}>
      <iframe
        ref={iframeRef}
        src={proxyUrl || url}
        title={title}
        className="iframe-proxy"
        allow="fullscreen"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation"
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: isBlocked ? 'none' : 'block' }}
      />
      {isBlocked && (
        <div className="proxy-overlay">
          <div className="proxy-content">
            <p className="proxy-text">
              Không thể hiển thị trực tiếp do chính sách bảo mật. Vui lòng mở trong tab mới.
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Mở trong tab mới
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default IframeProxy

