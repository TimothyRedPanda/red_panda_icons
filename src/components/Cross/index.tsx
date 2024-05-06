import {easeInOut, motion} from 'framer-motion';
import {useState} from 'react';

interface SVGRProps {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
    dimension?: string;
    color?: string;
}

export default function Cross({title, titleId, desc, descId, dimension, color}: SVGRProps) {
    const [path, setPath] = useState(false);
    return (
        <motion.svg
            initial={{opacity:0, rotate: 180}}
            animate={{opacity:1, rotate: 0}}
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
            <g id = 'Cross'>
      <g id = 'Cross-2' data-name = 'Cross'>
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
            animate = {path ? {rotate: 45, scale: 0.8} : {rotate: 0}}
            transition = {{duration: 0.35}}
            id = 'BottomToTopStroke'
            x1 = {4}
            y1 = {36}
            x2 = {36}
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
            animate = {path ? {rotate: 45, scale: 0.8} : {rotate: 0}}
            transition = {{duration: 0.35, ease: easeInOut}}
            id = 'TopToBottomStroke'
            x1 = {36}
            y1 = {36}
            x2 = {4}
            y2 = {4}
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
    )
}
