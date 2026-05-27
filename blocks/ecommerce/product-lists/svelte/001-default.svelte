<script>
	const products = [
		{
			src: 'https://images.unsplash.com/photo-1563389234808-52344934935c?w=560&h=640&fit=crop&crop=top&auto=format',
			alt: 'Man holding his pockets.',
			name: 'Designer Tee',
			color: 'Blue Dotted',
			price: '$95',
		},
		{
			src: 'https://images.unsplash.com/photo-1605794432120-f4bb5dc9067d?w=560&h=640&fit=crop&crop=top&auto=format',
			alt: 'Man in black and white stripe button up shirt.',
			name: 'Designer Tee',
			color: 'Hatch Stripe',
			price: '$95',
		},
		{
			src: 'https://plus.unsplash.com/premium_photo-1688497831503-235238709bd2?w=560&h=640&fit=crop&crop=top&auto=format',
			alt: 'Two young men sitting on a ledge.',
			name: 'Tee Pack',
			color: 'Iso Dots',
			price: '$95',
		},
		{
			src: 'https://images.unsplash.com/photo-1503342484812-ee33283508a5?w=560&h=640&fit=crop&crop=top&auto=format',
			alt: 'A woman sitting on a stool posing.',
			name: 'Designer Tee',
			color: 'Onyx',
			price: '$95',
		},
	];
</script>

<div class="w-full">
	<h2 class="h3">Recommended purchases</h2>
	<div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
		{#each products as product}
			<div class="group relative space-y-4">
				<img
					src={product.src}
					alt={product.alt}
					class="aspect-square w-full rounded-container bg-surface-100-900 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
				/>
				<div class="flex justify-between">
					<div class="space-y-1">
						<h3 class="text-sm font-bold">
							<a href="/#">
								<span aria-hidden="true" class="absolute inset-0"></span>
								{product.color}
							</a>
						</h3>
						<p class="text-sm text-surface-700-300">{product.name}</p>
					</div>
					<p class="text-sm font-medium">{product.price}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
