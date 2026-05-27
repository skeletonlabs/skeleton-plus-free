export default function BlueNight() {
	return (
		<>
			<img
				src="https://picsum.photos/seed/skeleton/320"
				className="rounded-container"
				alt="BlueNight filter"
				loading="lazy"
				style={{ filter: 'url(#BlueNight)' }}
			/>
			<svg id="svg-filter-bluenight" className="absolute -left-full w-0 h-0">
				<filter id="BlueNight" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feColorMatrix
						type="matrix"
						values="1.000 0.000 0.000 0.000 0.000
                    0.000 1.000 0.000 0.000 0.05
                    0.000 0.000 1.000 0.000 0.400
                    0.000 0.000 0.000 1.000 0.000"
					></feColorMatrix>
				</filter>
			</svg>
		</>
	);
}
