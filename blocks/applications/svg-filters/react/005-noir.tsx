export default function Noir() {
	return (
		<>
			<img
				src="https://picsum.photos/seed/skeleton/320"
				className="rounded-container"
				alt="Noir filter"
				loading="lazy"
				style={{ filter: 'url(#Noir)' }}
			/>
			<svg id="svg-filter-noir" className="absolute -left-full w-0 h-0">
				<filter
					id="Noir"
					x="-20%"
					y="-20%"
					width="140%"
					height="140%"
					filterUnits="objectBoundingBox"
					primitiveUnits="userSpaceOnUse"
					colorInterpolationFilters="linearRGB"
				>
					<feColorMatrix
						type="saturate"
						values="0"
						x="0%"
						y="0%"
						width="100%"
						height="100%"
						in="SourceGraphic"
						result="colormatrix1"
					></feColorMatrix>
					<feBlend mode="lighten" x="0%" y="0%" width="100%" height="100%" in="colormatrix1" in2="colormatrix1" result="blend"></feBlend>
					<feBlend
						mode="multiply"
						x="0%"
						y="0%"
						width="100%"
						height="100%"
						in="colormatrix1"
						in2="diffuseLighting"
						result="blend1"
					></feBlend>
				</filter>
			</svg>
		</>
	);
}
