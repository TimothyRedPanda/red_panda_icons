'use client'
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

export default function CircleLoader({title, titleId, desc, descId, dimension, color}: SVGRProps) {
    const [path, setPath] = useState(true)
    return (
        <motion.svg
            initial={{opacity:0,rotate:180, x:-200}}
            animate={{opacity:1, rotate:0, x:0}}
            transition={{duration: 1}}
            onHoverStart = {() => setPath(false)}
            onHoverEnd = {() => setPath(true)}
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
            <g id = 'LoadingCircle'>
      <g id = 'LoadingCircle-2' data-name = 'LoadingCircle'>
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
            animate = {path ? {pathLength: 1} : {pathLength: 0.1}}
            transition = {{duration: 0.35, ease: easeInOut}}
            id = 'CircleStroke'
            d = 'M33.86,12c1.36,2.35,2.14,5.09,2.14,8,0,8.84-7.16,16-16,16S4,28.84,4,20,11.16,4,20,4c2.91,0,5.65.78,8,2.14'
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
