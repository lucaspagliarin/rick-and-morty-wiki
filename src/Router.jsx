import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Character } from './pages/Character'
import { Episode } from './pages/Episode'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:charId" element={<Character />} />
      <Route path="/episode/:episodeId" element={<Episode />} />
    </Routes>
  )
}
