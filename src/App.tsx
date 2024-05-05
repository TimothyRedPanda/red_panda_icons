'use client'
import './App.scss'
import Heart from "./components/Heart";
import Magnifier from "./components/Magnifier";
import Cross from "./components/Cross";
import CircleLoader from './components/CircleLoader';
import BurgerMenu from './components/BurgerMenu';

function App() {
    return (
        <>
            <main className = 'main-wrapper'>
                  <section className = 'icon-section'>
                    <Heart />
                </section >
                  <section className = 'icon-section'>
                    <Magnifier />
                </section >
                <section className = 'icon-section'>
                    <Cross />
                </section >

                <section className = 'icon-section'>
                    <CircleLoader />
                </section >
                <section className = 'icon-section'>
                    <BurgerMenu />
                </section >
            </main >
        </>
    )
}

export default App
