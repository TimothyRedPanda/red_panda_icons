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
}

export default function Panda({title, titleId, desc, descId, dimension, color}: SVGRProps) {
    const [path, setPath] = useState(true)
    return (
        <motion.svg
            initial={{opacity:0, y:-200, rotate:180}}
            animate={{opacity:1, y:0, rotate:0}}
            transition={{duration: 1}}
            onHoverStart={() => {
                setPath(false)
            }}
            onHoverEnd={() => {
                setPath(true)
            }}
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            width={dimension || "40px"}
            height={dimension || "40px"}
            aria-labelledby={titleId}
            aria-describedby={descId}
        >
            {desc ? <desc id={descId}>{desc}</desc> : null}
            {title ? <title id={titleId}>{title}</title> : null}
            <g id="Layer_1-2" data-name="Layer 1">
                <motion.g id="Panda"
                          animate={path ? {y: 0} : {y: "50%"}}
                          transition={{duration: 0.35, ease: easeInOut}}
                >
                    <path
                        id="RightEye"
                        d="M30.03825,20.59794c-.68267-1.44258.93386-2.81441.66691-4.43953-.3771-3.07534-5.59088-4.01643-7.34234-1.81278-.83167,1.21828-.07689,3.01069,1.07205,3.85301,2.9398,2.09303,5.54332,6.25513,6.66583,8.26553.08297.15392.25977.42815.39.41554.11525-.02378.13664-.21461.14434-.34312-.00527-1.48981-.80397-4.24923-1.55224-5.81727l-.04455-.12139ZM26.59425,17.91814c-1.91166.38296-2.67429-2.39509-.834-3.02416,2.05412-.61579,2.91284,2.39467.93428,3.00031l-.10029.02385Z"
                        style={{
                            fill: color || "#547DBF",
                            strokeWidth: 0,
                        }}
                    />
                    <path
                        id="Nose"
                        d="M22.31079,21.95778c-1.82158-1.23533-3.54897-.60043-4.55101.01116-.64034.39083-.91088,1.17902-.65197,1.88312.32394.88095,1.08836,1.92037,2.89219,1.92037,1.89733,0,2.6447-1.14996,2.93909-2.05591.21266-.65444-.05879-1.37251-.6283-1.75874Z"
                        style={{
                            fill: color || "#547DBF",
                            strokeWidth: 0,
                        }}
                    />
                    <path
                        id="LeftEye"
                        d="M9.7787,18.33378c.38377.75767.55659,1.49809.2209,2.30916-.745,1.68604-1.49047,4.09019-1.52263,5.72208.00458.1317.02794.31618.14153.33991.07079.00698.1657-.07653.26465-.21799,1.03186-1.83788,3.65917-6.13571,6.59155-8.22681,1.03902-.75682,1.80422-2.37731,1.1837-3.56973-2.12128-3.0514-9.02705-.71818-6.93243,3.51983l.05271.12355ZM13.68763,17.94882c-1.85277-.07503-2.05732-2.79571-.19998-3.11052,2.19644-.28443,2.46541,2.98125.30303,3.11052h-.10305Z"
                        style={{
                            fill: color || "#547DBF",
                            strokeWidth: 0,
                        }}
                    />
                    <path
                        id="Head"
                        d="M20,35.1637C.71659,35.1637,3.25223,23.04893,6.26996,15.87402c.4132-.98296.8327-1.87199,1.20834-2.6233,1.296-2.58573,3.65635-3.56869,5.98537-3.83164,3.30575-.37567,6.53633.70121,6.53633.70121,0,0,3.23058-1.07689,6.53633-.70121,2.32902.26294,4.68937,1.2459,5.98537,3.83164.37564.75131.79514,1.64034,1.20834,2.6233,3.01773,7.17491,5.55337,19.28968-13.73004,19.28968Z"
                        style={{
                            fill: "none",
                            stroke: color || "#547DBF",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "3.13042px",
                        }}
                    />
                    <path
                        id="LeftEar"
                        d="M13.46367,9.41909c-2.32902.26294-4.68937,1.2459-5.98537,3.83164-.37564.75131-.79514,1.64034-1.20834,2.6233-2.31026-1.11445-6.73041-4.07582-1.92209-8.88415,5.19023-5.19027,8.22677.36937,9.1158,2.42921Z"
                        style={{
                            fill: color || "#547DBF",
                            strokeWidth: 0,
                        }}
                    />
                    <path
                        id="RightEar"
                        d="M33.73004,15.87402c-.4132-.98296-.8327-1.87199-1.20834-2.6233-1.296-2.58573-3.65635-3.56869-5.98537-3.83164.88903-2.05984,3.92556-7.61948,9.1158-2.42921,4.80833,4.80833.38817,7.7697-1.92209,8.88415Z"
                        style={{
                            fill: color || "#547DBF",
                            strokeWidth: 0,
                        }}
                    />
                    <motion.path
                        animate={path ? {pathLength: 1} : {pathLength: 0.2}}
                        transition={{duration: 0.35, delay: 0.35, ease: easeInOut}}
                        id="Mouth"
                        d="M23.13042,28.90285s3.13042.97984,3.13042-3.13042"
                        style={{
                            fill: "none",
                            stroke: color || "#547DBF",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.25217px",
                        }}
                    />
                </motion.g>
                <rect
                    id="Box_Outline"
                    data-name="Box Outline"
                    width={40}
                    height={40}
                    style={{
                        fill: "none",
                        strokeWidth: 0,
                    }}
                />
            </g>
        </motion.svg>
    )
}
