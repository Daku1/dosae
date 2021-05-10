import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import { GlobalStyle } from './globalStyle'
import { Products } from './components/Products'
import { ProductData } from './components/Products/data'
import { Feature } from './components/Feature'
function App() {
    return (
        <Router>
            <GlobalStyle />
            <Hero />
            <Products heading="Choose your Favourite" data={ProductData} />
            <Feature />
        </Router>
    )
}

export default App
