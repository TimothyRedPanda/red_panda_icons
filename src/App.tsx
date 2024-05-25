'use client'
import './App.scss'
import Heart from "../icons/Heart";
import Magnifier from "../icons/Magnifier";
import Cross from "../icons/Cross";
import CircleLoader from '../icons/CircleLoader';
import BurgerMenu from '../icons/BurgerMenu';
import BarLoaders from "../icons/BarLoaders";
import Panda from "../icons/Panda"
import BurgerMenuAlt from "../icons/BurgerMenuAlt";
import Envelope from "../icons/Envelope";
import Signal from "../icons/Signal"
import Play from "../icons/Play";

function App() {
    return (
        <>
            <main className='main-wrapper'>

                <section className='icon-section'>
                    <Heart/>
                    <code>import Heart</code>
                </section>
                <section className='icon-section'>
                    <Magnifier/>
                    <code>import Magnifier</code>
                </section>
                <section className='icon-section'>
                    <Cross/>
                    <code>import Cross</code>
                </section>
                <section className='icon-section'>
                    <Envelope/>
                    <code>import Envelope</code>
                </section>
                <section className='icon-section'>
                    <CircleLoader/>
                    <code>import CircleLoader</code>
                </section>
                <section className='icon-section'>
                    <BurgerMenu/>
                    <code>import BurgerMenu</code>
                </section>
                <section className='icon-section'>
                    <BurgerMenuAlt/>
                    <code>import BurgerMenuAlt</code>
                </section>
                <section className='icon-section'>
                    <BarLoaders/>
                    <code>import BarLoaders</code>
                </section>
                <section className='icon-section'>
                    <Panda/>
                    <code>import Panda</code>
                </section>
                <section className='icon-section'>
                    <Signal/>
                    <code>import Signal</code>
                </section>
                <section className='icon-section'>
                    <Play/>
                    <code>import Play</code>
                </section>
            </main>
        </>
    )
}

export default App
