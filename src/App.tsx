'use client'
import './App.scss'
import Heart from "./components/Heart";
import Magnifier from "./components/Magnifier";
import Cross from "./components/Cross";
import CircleLoader from './components/CircleLoader';

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
            </main >
        </>
    )
}

export default App
