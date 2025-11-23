import { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AudioContext } from './contexts/AudioContext'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Home from './pages/Home/Home'
import Origin from './pages/Origin/Origin'
import Characteristics from './pages/Characteristics/Characteristics'
import Stories from './pages/Stories/Stories'
import Instruments from './pages/Instruments/Instruments'
import Lyrics from './pages/Lyrics/Lyrics'
import Experience from './pages/Experience/Experience'

function AppContent() {
  const location = useLocation()
  const audioRef = useRef(null)
  const saveTimeIntervalRef = useRef(null)
  const isHomePage = location.pathname === '/'

  // Initialize audio element immediately
  if (!audioRef.current) {
    audioRef.current = new Audio('https://res.cloudinary.com/dghawsj8e/video/upload/v1763891276/t%C6%B0_li%E1%BB%87u_trang_ch%E1%BB%A7_sxphue.mp3')
    audioRef.current.volume = 0.5 // Giảm 1 nửa âm lượng
    audioRef.current.loop = true
    audioRef.current.preload = 'auto'
  }

  // Play audio on initial mount if on home page
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Check if we're on home page on initial load
    if (location.pathname === '/') {
      const savedTime = localStorage.getItem('homeAudioTime')
      
      const playAudio = async () => {
        if (savedTime) {
          audio.currentTime = parseFloat(savedTime)
        } else {
          audio.currentTime = 0
        }
        
        try {
          await audio.play()
        } catch (error) {
          console.log('Audio autoplay blocked, waiting for user interaction')
        }
      }

      // Try to play with multiple strategies
      const tryPlay = () => {
        if (audio.readyState >= 2) {
          if (audio.paused) {
            playAudio()
          }
        } else {
          const handleReady = () => {
            playAudio()
          }
          
          audio.addEventListener('canplay', handleReady, { once: true })
          audio.addEventListener('canplaythrough', handleReady, { once: true })
          audio.addEventListener('loadeddata', handleReady, { once: true })
        }
      }

      // Try immediately
      tryPlay()

      // Retry with delays
      const timeouts = [
        setTimeout(() => {
          if (audio.paused && audio.readyState >= 2) {
            playAudio()
          }
        }, 200),
        setTimeout(() => {
          if (audio.paused && audio.readyState >= 2) {
            playAudio()
          }
        }, 500),
        setTimeout(() => {
          if (audio.paused && audio.readyState >= 2) {
            playAudio()
          }
        }, 1000)
      ]

      return () => {
        timeouts.forEach(timeout => clearTimeout(timeout))
      }
    }
  }, []) // Only run once on mount

  // Play audio when navigating to home page
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !isHomePage) return

    const savedTime = localStorage.getItem('homeAudioTime')
    
    const playAudio = async () => {
      if (savedTime) {
        audio.currentTime = parseFloat(savedTime)
      } else {
        audio.currentTime = 0
      }
      
      try {
        await audio.play()
      } catch (error) {
        console.log('Audio autoplay blocked')
      }
    }

    // If audio is ready and paused, play it
    if (audio.readyState >= 2 && audio.paused) {
      playAudio()
    } else {
      const handleCanPlay = () => {
        if (audio.paused) {
          playAudio()
        }
      }
      audio.addEventListener('canplay', handleCanPlay, { once: true })
    }
  }, [isHomePage])

  // Handle audio playback based on current page
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isHomePage) {
      // On home page - ensure audio is playing and save time periodically
      if (!saveTimeIntervalRef.current) {
        saveTimeIntervalRef.current = setInterval(() => {
          if (audio && !audio.paused) {
            localStorage.setItem('homeAudioTime', audio.currentTime.toString())
          }
        }, 1000)
      }
    } else {
      // Not on home page - pause audio and save position
      if (!audio.paused) {
        localStorage.setItem('homeAudioTime', audio.currentTime.toString())
        audio.pause()
      }
      
      // Clear save interval when not on home page
      if (saveTimeIntervalRef.current) {
        clearInterval(saveTimeIntervalRef.current)
        saveTimeIntervalRef.current = null
      }
    }

    // Cleanup
    return () => {
      if (saveTimeIntervalRef.current) {
        clearInterval(saveTimeIntervalRef.current)
        saveTimeIntervalRef.current = null
      }
    }
  }, [isHomePage])

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        if (!audioRef.current.paused) {
          localStorage.setItem('homeAudioTime', audioRef.current.currentTime.toString())
        }
      }
    }
  }, [])

  return (
    <AudioContext.Provider value={audioRef.current}>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nguon-goc" element={<Origin />} />
            <Route path="/dac-trung" element={<Characteristics />} />
            <Route path="/truyen" element={<Stories />} />
            <Route path="/nhac-cu" element={<Instruments />} />
            <Route path="/loi-hat" element={<Lyrics />} />
            <Route path="/trai-nghiem" element={<Experience />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AudioContext.Provider>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

export default App

