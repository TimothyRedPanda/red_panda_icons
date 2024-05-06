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
            <code style={{position:"absolute", padding: "0.5rem", fontSize:"1rem", width:"100vw", height:"2.5rem", display:"flex", justifyContent:"center", alignItems:"center"}} >npm i red_panda_component framer-motion typescript</code >
            <main className = 'main-wrapper'>

                <section className = 'icon-section'>
                    <Heart />
                    <code >import Heart</code >
                </section >
                <section className = 'icon-section'>
                    <Magnifier />
                    <code >import Magnifier</code >
                </section >
                <section className = 'icon-section'>
                    <Cross />
                    <code >import Cross</code >
                </section >
                <section className = 'icon-section'>
                    <Envelope />
                    <code >import Envelope</code >
                </section >
                <section className = 'icon-section'>
                    <CircleLoader />
                    <code >import CircleLoader</code >
                </section >
                <section className = 'icon-section'>
                    <BurgerMenu />
                    <code >import BurgerMenu</code >
                </section >
                <section className = 'icon-section'>
                    <BurgerMenuAlt />
                    <code >import BurgerMenuAlt</code >
                </section >
                <section className = 'icon-section'>
                    <BarLoaders />
                   <code >import BarLoaders</code >
                </section >
                <section className = 'icon-section'>
                    <Panda />
                    <code >import Panda</code >
                </section >
            </main >
        </>
    )
}

export default App
