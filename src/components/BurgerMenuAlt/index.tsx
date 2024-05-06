import {easeInOut, motion} from 'framer-motion';
import {useState} from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
    color?: string;
    dimension?: string;
}

export default function BurgerMenuAlt({title, titleId, desc, descId, dimension, color}: SVGRProps) {
    const [path, setPath] = useState(true)
    return (
        <motion.svg
            initial={{opacity:0, x:-200}}
            animate={{opacity:1, x:0}}
            transition={{duration: 1}}
            onClick={path ? () => {setPath(false)} : () => {setPath(true)}}
            id = 'Layer_2'
            data-name = 'Layer 2'
            xmlns = 'http://www.w3.org/2000/svg'
            viewBox = '0 0 40 40'
            width = {dimension || "40px"}
            height = {dimension || "40px"}
            aria-labelledby = {titleId}
            aria-describedby = {descId}
        >
    {desc ? <desc id = {descId}>{desc}</desc > : null}
            {title ? <title id = {titleId}>{title}</title > : null}
            <g id = 'BurgerMenu'>
      <g id = 'BurgerMenu-2' data-name = 'BurgerMenu'>
        <rect
            id = 'OuterBox'
            width = {40}
            height = {40}
            style = {{
                fill: "none",
                strokeWidth: 0,
            }}
        />
        <motion.line
            animate = {path ? {rotate: 0, y: 0} : {rotate: 45, y:"33%"}}
            transition = {{duration: 0.3, ease: easeInOut, delay:0.35}}
            id = 'TopStroke'
            x1 = {4}
            y1 = {8}
            x2 = {36}
            y2 = {8}
            style = {{
                transformOrigin: '50% 50%',
                fill: "none",
                stroke: color || "#547dbf",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 5,
            }}
        />
        <motion.line
            animate = {path ? {opacity: 1} : {opacity: 0}}
            transition = {{duration: 0.35, ease: easeInOut}}
            id = 'MiddleStroke'
            x1 = {4}
            y1 = {20}
            x2 = {36}
            y2 = {20}
            style = {{
                fill: "none",
                stroke: color || "#547dbf",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 5,
            }}
        />
        <motion.line
            animate = {path ? {rotate: 0, y:0} : {rotate:-45, y: "-27%"}}
            transition = {{duration: 0.35, ease: easeInOut, delay:0.35}}
            id = 'BottomStroke'
            x1 = {4}
            y1 = {32}
            x2 = {36}
            y2 = {32}
            style = {{
                transformOrigin: "center",
                fill: "none",
                stroke: color || "#547dbf",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 5,
            }}
        />
      </g >
    </g >
  </motion.svg >
    )
}