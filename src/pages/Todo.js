import { useState } from 'react'

function Home() {
  const [ text, setText ] = useState('Welcome to the Todo')
  return (
    <div>{text}</div>
  )
}

export default Home
