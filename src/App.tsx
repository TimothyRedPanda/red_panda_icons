'use client'
import './App.scss'
import Heart from "./components/Heart";
import Magnifier from "./components/Magnifier";
import Cross from "./components/Cross";
import CircleLoader from './components/CircleLoader';
import BurgerMenu from './components/BurgerMenu';
import BarLoaders from "./components/BarLoaders";
import Panda from "./components/Panda"
import BurgerMenuAlt from "./components/BurgerMenuAlt";
import Envelope from "./components/Envelope";

function App() {
    return (
        <>
            <main className = 'main-wrapper'>
                <section className = 'icon-section'>
                    <Heart dimension = '56px'/>
                </section >
                <section className = 'icon-section'>
                    <Magnifier dimension = '56px'/>
                </section >
                <section className = 'icon-section'>
                    <Cross dimension = '56px'/>
                </section >
                <section className = 'icon-section'>
                    <Envelope dimension = '56px'/>
                </section >
                <section className = 'icon-section'>
                    <CircleLoader dimension = '56px'/>
                </section >
                <section className = 'icon-section'>
                    <BurgerMenu dimension = '56px'/>
                </section >
                <section className = 'icon-section'>
                    <BurgerMenuAlt dimension = '56px'/>
                </section >
                <section className = 'icon-section'>
                    <BarLoaders dimension = '56px'/>
                </section >
                <section className = 'icon-section'>
                    <Panda dimension = '56px'/>
                </section >
            </main >
        </>
    )
}

export default App
