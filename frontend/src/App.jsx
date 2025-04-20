import { useState } from 'react'
import { GlobalStyles } from './styles/GlobalStyle'
import  MyRoutes from "./routers/routes"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles />
      <MyRoutes/>
    </>
  )
}

export default App
