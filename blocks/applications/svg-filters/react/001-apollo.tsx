// Learn More: https://v4.skeleton.dev/docs/svelte/guides/cookbook/svg-filters

export default function Apollo() {
	return (
		<>
			<img
				src="https://picsum.photos/seed/skeleton/320"
				className="rounded-container"
				alt="Apollo filter"
				loading="lazy"
				style={{ filter: 'url(#Apollo)' }}
			/>
			<svg id="svg-filter-apollo" className="absolute -left-full w-0 h-0">
				<filter id="Apollo" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feColorMatrix
						values="0.8 0.6 -0.4 0.1 0, 0 1.2 0.05 0 0, 0 -1 3 0.02 0, 0 0 0 50 0"
						result="final"
						in="SourceGraphic"
					></feColorMatrix>
				</filter>
			</svg>
		</>
	);
}
