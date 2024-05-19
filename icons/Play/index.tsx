'use client'
import {useState} from 'react'
import {easeInOut, motion} from 'framer-motion'
interface SVGRProps {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
    dimension?: string;
    color?: string;
    onClick?: () => void;
}
export default function Play({title, titleId, desc, descId, dimension, color, onClick}: SVGRProps)  {
    const [path, setPath] = useState(false)
    return (
    <button
        style = {{
            width: "fit-content",
            height: "fit-content",
            outline: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer"
        }} onClick = {onClick}
    >
    <motion.svg
        onClick={path ? () => {setPath(false)} : () => {setPath(true)}}
        initial={{opacity:0, x: -200}}
        animate={{opacity:1, x: 0}}
        transition={{duration:0.35, ease:easeInOut}}
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width= {dimension || "40px"}
        height= {dimension || "40px"}
        aria-labelledby={titleId}
        aria-describedby={descId}
    >
    {desc ? <desc id={descId}>{desc}</desc> : null}
        {title ? <title id={titleId}>{title}</title> : null}
        <g id="Play">
      <g id="Play-2" data-name="Play">
        <rect
            id="BorderBox"
            style={{
                fill: "none",
                strokeWidth: 0,
            }}
        />
        <motion.polygon
            animate={path ? {opacity: 0.3, x:100} : {opacity: 1, x:0}}
            transition={{duration:0.35, ease:easeInOut}}
            id="Play-3"
            data-name="Play"
            points="21.66 12.69 21.66 35.31 40.97 24 21.66 12.69"
            style={{
                fill: "none",
                stroke: color || "#547dbf",
                strokeLinejoin: "round",
                strokeWidth: 5,
            }}
        />
        <motion.line
            animate={path ? {x: 5, pathLength:1}:{x:0, pathLength: 0}}
            id="RightPause"
            x1={13.66}
            y1={35.31}
            x2={13.66}
            y2={12.69}
            style={{
                fill: "none",
                stroke: color || "#547dbf",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 5,
            }}
        />
        <motion.line
            animate={path ? {x: -5, pathLength:1}:{x:0, pathLength: 0}}
            id="LeftPause"
            x1={7.03}
            y1={35.31}
            x2={7.03}
            y2={12.69}
            style={{
                fill: "none",
                stroke: color || "#547dbf",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 5,
            }}
        />
      </g>
    </g>
  </motion.svg>
    </button>
)}