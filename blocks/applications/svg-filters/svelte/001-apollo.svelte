<!-- Learn More: https://v4.skeleton.dev/docs/svelte/guides/cookbook/svg-filters -->

<img
	src="https://picsum.photos/seed/skeleton/320"
	class="rounded-container"
	alt="Apollo filter"
	loading="lazy"
	style="filter: url(#Apollo)"
/>
<svg id="svg-filter-apollo" class="absolute -left-full w-0 h-0">
	<filter id="Apollo" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
		<feColorMatrix values="0.8 0.6 -0.4 0.1 0, 0 1.2 0.05 0 0, 0 -1 3 0.02 0, 0 0 0 50 0" result="final" in="SourceGraphic"></feColorMatrix>
	</filter>
</svg>
