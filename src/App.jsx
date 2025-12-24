import NavBar from '../components/Nav-bar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Footer from '../components/Footer';
import './App.css'

function App() {
 return <div className='bg-linear-to-b from-[#F4C115] to-[#D71B1F] p-5 lg:px-24'>
    <NavBar />
    <Hero />
    <div className="flex flex-col gap-24">
      <Products />
      <Footer />
    </div>
    
 </div>
}

export default App
