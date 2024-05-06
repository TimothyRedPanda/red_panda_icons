'use client'
import {easeInOut, motion} from 'framer-motion';
import {useState} from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
    dimension?: string;
    color?: string;
}



export default function Heart({title, titleId, desc, descId, dimension, color}: SVGRProps) {
    const [path, setPath] = useState(true);
    return (
        <motion.svg
            onHoverStart={() => setPath(false)}
            onHoverEnd={() => setPath(true)}
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
            <g id = 'Heart'>
      <g id = 'Heart-2' data-name = 'Heart'>
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
            animate={path ? {pathLength:1} : {pathLength:0.28}}
            transition={{duration:0.35, ease: easeInOut}}
            id = 'HeartStroke'
            d = 'M34,20.24l-14,14-14-14c-3.31-3.31-3.31-8.69,0-12h0c3.31-3.31,8.69-3.31,12,0l2,2,2-2c3.31-3.31,8.69-3.31,12,0h0c3.31,3.31,3.31,8.69,0,12Z'
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
    )
}
