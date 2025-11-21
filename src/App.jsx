import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Origin from './pages/Origin/Origin'
import Characteristics from './pages/Characteristics/Characteristics'
import Stories from './pages/Stories/Stories'
import Instruments from './pages/Instruments/Instruments'
import Lyrics from './pages/Lyrics/Lyrics'
import Experience from './pages/Experience/Experience'

function App() {
  return (
    <Router>
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
    </Router>
  )
}

export default App

