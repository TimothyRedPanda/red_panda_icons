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

export default function Signal({
                                   title, titleId, desc, descId, dimension, color, onClick
                               }: SVGRProps) {
    const [path, setPath] = useState(true);
    return (<button
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
            initial = {{opacity: 0, x: -200, rotate:360}}
            animate = {{opacity: 1, x: 0, rotate: 0}}
            transition={{duration: 0.6}}
            id = 'Layer_2'
            data-name = 'Layer 2'
            xmlns = 'http://www.w3.org/2000/svg'
            viewBox = '0 0 48 48'
            width = {dimension || "40px"}
            height = {dimension || "40px"}
            aria-labelledby = {titleId}
            aria-describedby = {descId}
            onClick = {path ? () => {
                setPath(false)
            } : () => {
                setPath(true)
            }}
        >
    {desc ? <desc id = {descId}>{desc}</desc > : null}
            {title ? <title id = {titleId}>{title}</title > : null}
            <g id = 'Signal'>
      <g id = 'Signal-2' data-name = 'Signal'>
        <rect
            id = 'BorderBox'
            style = {{
                fill: "none", strokeWidth: 0,
            }}
        />
        <circle
            id = 'Dot'
            cx = {24}
            cy = {34.3}
            r = {3.39}
            style = {{
                fill: color || "#547dbf", strokeWidth: 0, opacity: 1,
            }}
        />
        <motion.path
            initial = {{opacity: 1}}
            animate = {path ? {opacity: 0.2} : {opacity: 1}}
            transition = {{duration: 0.35, ease: easeInOut}}
            id = 'Bottom'
            d = 'M18,28.3c.4-.4,2.57-2.49,6-2.49s5.6,2.09,6,2.49'
            style = {{
                fill: "none",
                stroke: color || "#547dbf",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 5,
            }}
        />
        <motion.path
            initial = {{opacity: 1}}
            animate = {path ? {opacity: 0.2} : {opacity: 1}}
            transition = {{duration: 0.35, ease: easeInOut, delay: 0.35}}
            id = 'Middle'
            d = 'M12,22.3c.8-.8,5.13-4.97,12-4.97s11.2,4.17,12,4.97'
            style = {{
                fill: "none",
                stroke: color || "#547dbf",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 5,
            }}
        />
        <motion.path
            initial = {{opacity: 1}}
            animate = {path ? {opacity: 0.2} : {opacity: 1}}
            transition = {{duration: 0.35, ease: easeInOut, delay: 0.70}}
            id = 'TopBar'
            d = 'M7.03,17.33c1.13-1.13,7.26-7.03,16.97-7.03,9.72,0,15.84,5.9,16.97,7.03'
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
        </button >)
}
