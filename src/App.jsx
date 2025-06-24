import './App.css'
import CardSection from './components/CardSection/CardSection.jsx'
import ManagerSection from './components/ManagerSection/ManagerSection.jsx'
import Header from './components/Header/Header.Jsx'
import CardProvider from './contexts/CartContext.jsx'

function App() {

  return (
    <CardProvider>
      <Header/>
      <CardSection/>
      <ManagerSection/>
    </CardProvider>
  )
}

export default App
