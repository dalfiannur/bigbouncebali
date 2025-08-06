'use client'

import {useEffect, useRef} from 'react'

export const Wave = () => {
	const waveRef = useRef<SVGPathElement>(null)
	
	useEffect(() => {
		const width = window.innerWidth
		const height = window.innerHeight
		const waveHeight = 50
		const waveSpeed = 0.1
		const waveFrequency = 0.01
		
		if (!waveRef.current) return
		
		
		const wave = (time: number) => {
			let path = 'M 0 ' + height / 2
			for (let x = 0; x <= width; x++) {
				const y = Math.sin(x * waveFrequency + time) * waveHeight + height / 2
				path += ` L ${x} ${y}`
			}
			path += ` L ${width} ${height} L 0 ${height} Z`
			
			if (!waveRef.current) return
			waveRef.current.setAttribute('d', path)
		}
		
		// Animation loop
		let time = 0
		
		function animate() {
			wave(time)
			time += waveSpeed
			requestAnimationFrame(animate)
		}
		
		animate()
	}, [])
	return (
		<svg id="wave" className="wave" xmlns="http://www.w3.org/2000/svg">
			<path ref={waveRef} id="wavePath" fill="none" stroke="#4CAF50" stroke-width="3"></path>
		</svg>
	)
}