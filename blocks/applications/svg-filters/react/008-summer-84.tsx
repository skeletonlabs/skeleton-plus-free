export default function Summer84() {
	return (
		<>
			<img
				src="https://picsum.photos/seed/skeleton/320"
				className="rounded-container"
				alt="Summer84 filter"
				loading="lazy"
				style={{ filter: 'url(#Summer84)' }}
			/>
			<svg id="svg-filter-summer84" className="absolute -left-full w-0 h-0">
				<filter id="Summer84" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feColorMatrix
						type="matrix"
						values="1.300 0.200 0.000 0.000 0.000
						0.300 0.600 0.200 0.000 0.000
						0.200 1.000 0.200 0.000 0.000
						0.000 0.000 0.000 1.000 0.000"
					></feColorMatrix>
				</filter>
			</svg>
		</>
	);
}
