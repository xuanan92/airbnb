import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import RoomContent from './components/RoomContent'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RoomContent />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
