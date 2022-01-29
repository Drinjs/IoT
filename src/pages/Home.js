import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  const [ text, setText ] = useState('Welcome to the Home')
  return (
    <div>
      {text}
      <Outlet/>
    </div>
  )
}

export default Home
