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
                    <Heart/>
                </section >
                <section className = 'icon-section'>
                    <Magnifier/>
                </section >
                <section className = 'icon-section'>
                    <Cross/>
                </section >
                <section className = 'icon-section'>
                    <Envelope/>
                </section >
                <section className = 'icon-section'>
                    <CircleLoader/>
                </section >
                <section className = 'icon-section'>
                    <BurgerMenu/>
                </section >
                <section className = 'icon-section'>
                    <BurgerMenuAlt/>
                </section >
                <section className = 'icon-section'>
                    <BarLoaders/>
                </section >
                <section className = 'icon-section'>
                    <Panda/>
                </section >
            </main >
        </>
    )
}

export default App
