import {motion} from 'framer-motion';
import {useState} from 'react';

interface SVGRProps {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
    color?: string;
    dimension?: string;
    onClick?: () => void;
}

export default function Envelope({title, titleId, desc, descId, dimension, color, onClick}: SVGRProps) {
    const [path, setPath] = useState(true);
    return (
        <button style = {{outline: "none", background: "transparent", border: "none"}} onClick = {onClick}>
        <motion.svg
            onClick = {path ? () => {
                setPath(false)
            } : () => {
                setPath(true)
            }}
            initial = {{opacity: 0, x: -100}}
            animate = {{opacity: 1, x: 0}}
            transition = {{duration: 1}}
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
            <motion.g
                id = 'Mail'
                animate = {path ? {rotate: 0} : {rotate: 45}}
                transition = {{duration: 0.35}}
            >
      <g id = 'Envelope'>
        <rect
            id = 'OuterBox'
            width = {40}
            height = {40}
            style = {{
                fill: "none",
                strokeWidth: 0,
            }}
        />
        <rect
            id = 'EnvelopeEdge'
            x = {4}
            y = {12}
            width = {32}
            height = {18}
            style = {{
                fill: "none",
                stroke: color || "#547dbf",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 3,
            }}
        />
        <polyline
            id = 'Sleeve'
            points = '4 12 20 24 36 12'
            style = {{
                fill: "none",
                stroke: color || "#547dbf",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 3,
            }}
        />
      </g >
    </motion.g >
  </motion.svg >
            </button >
    )
}