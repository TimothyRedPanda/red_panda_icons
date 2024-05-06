import {easeInOut, motion} from 'framer-motion';
import {useState} from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
    color?: string;
    dimension?: string;
    onClick?: () => void;
}

export default function BarLoaders({title, titleId, desc, descId, dimension, color, onClick}: SVGRProps) {
    const [path, setPath] = useState(true);
    return (
        <button style = {{outline: "none", background: "transparent", border: "none"}} onClick = {onClick}>
        <motion.svg
            initial = {{opacity: 0, y: -200}}
            animate = {{opacity: 1, y: 0}}
            transition = {{duration: 1}}
            onClick = {path ? () => {
                setPath(false)
            } : () => {
                setPath(true)
            }}
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
            <g id = 'LoadingBars'>
      <g id = 'LoadingBars-2' data-name = 'LoadingBars'>
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
            animate = {path ? {pathLength: 1} : {pathLength: 0.5}}
            transition = {{duration: 0.35, ease: easeInOut}}
            id = 'LeftStroke'
            x1 = {8}
            y1 = {36}
            x2 = {8}
            y2 = {4}
            style = {{
                fill: "none",
                stroke: color || "#547dbf",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 5,
            }}
        />
         <motion.line
             animate = {path ? {pathLength: 1} : {pathLength: 0.5}}
             transition = {{duration: 0.35, ease: easeInOut, delay: 0.25}}
             id = 'MiddleStroke'
             x1 = {20}
             y1 = {30}
             x2 = {20}
             y2 = {10}
             style = {{
                 fill: "none",
                 stroke: color || "#547dbf",
                 strokeLinecap: "round",
                 strokeMiterlimit: 10,
                 strokeWidth: 5,
             }}
         />
        <motion.line
            animate = {path ? {pathLength: 1} : {pathLength: 0.5}}
            transition = {{duration: 0.35, ease: easeInOut, delay: 0.3}}
            id = 'RightStroke'
            x1 = {32}
            y1 = {34}
            x2 = {32}
            y2 = {6}
            style = {{
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
        </button >
    )
}
