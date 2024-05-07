import {easeInOut, motion} from "framer-motion"
import {useState} from 'react';

interface SVGRProps {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
    dimension?: string;
    color?: string;
    onClick?: () => void;
}

export default function Magnifier({title, titleId, desc, descId, dimension, color, onClick}: SVGRProps) {
    const [path, setPath] = useState(true)
    return (
        <button style = {{width:"fit-content", height: "fit-content", outline: "none", background: "transparent", border: "none", cursor:"pointer"}} onClick = {onClick}>
        <motion.svg
            onClick = {path ? () => {
                setPath(false)
            } : () => {
                setPath(true)
            }}
            initial = {{rotate: -15}}
            animate = {path ? {rotate: 0} : {rotate: -15}}
            transition = {{duration: 0.35}}
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
            <g id = 'Magnifier'>
      <g id = 'Magnifier-2' data-name = 'Magnifier'>
        <rect
            id = 'OuterBox'
            width = {40}
            height = {40}
            style = {{
                fill: "none",
                strokeWidth: 0,
            }}
        />
        <motion.path
            initial = {{pathLength: 0, opacity: 0}}
            animate = {{pathLength: 1, opacity: 1}}
            transition = {{duration: 0.6}}
            id = 'EyePieceStroke'
            d = 'M4,14.67s0-10.67,10.67-10.67,10.67,10.67,10.67,10.67c0,0,0,10.67-10.67,10.67S4,14.67,4,14.67Z'
            style = {{
                fill: "none",
                stroke: color || "#547dbf",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 5,
            }}
        />
        <motion.line
            initial = {{pathLength: 0, opacity: 0}}
            animate = {{pathLength: 1, opacity: 1}}
            transition = {{duration: 0.35, ease: easeInOut}}
            id = 'HandleStroke'
            x1 = {36}
            y1 = {36}
            x2 = {22.37}
            y2 = {22.37}
            style = {{
                fill: "none",
                stroke: color || "#547dbf",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 5,
            }}
        />
      </g >
    </g >
  </motion.svg >
        </button >
    )
}
