<script lang="ts">
	import TriangleAlertIcon from '@lucide/svelte/icons/triangle-alert';
</script>

<div class="w-full space-y-4">
	<div class="w-full card preset-tonal grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-[1fr_auto]">
		<div>
			<p class="font-bold">Hey, heads up!</p>
			<p class="text-xs opacity-60">Something of moderate importance has occurred.</p>
		</div>
		<div class="flex gap-1">
			<button class="btn preset-tonal hover:preset-filled">Dismiss</button>
		</div>
	</div>

	<!-- Success -->
	<div class="card preset-tonal-success grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-[1fr_auto]">
		<div>
			<p class="font-bold">Success</p>
			<p class="text-xs opacity-60">The task has been completed successfully.</p>
		</div>
		<div class="flex gap-1">
			<button class="btn preset-tonal hover:preset-filled">Dismiss</button>
		</div>
	</div>

	<!-- Warning -->
	<div class="card preset-tonal-warning grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-[auto_1fr_auto]">
		<TriangleAlertIcon class="stroke-warning-500" />
		<div>
			<p class="font-bold">Warning</p>
			<p class="text-xs opacity-60">Beware of this important notice.</p>
		</div>
		<div class="flex gap-1">
			<button class="btn preset-tonal hover:preset-filled">Dismiss</button>
		</div>
	</div>

	<!-- Error -->
	<div class="card preset-tonal-error grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-[auto_1fr_auto]">
		<TriangleAlertIcon class="stroke-error-500" />
		<div>
			<p class="font-bold">Error</p>
			<p class="text-xs opacity-60">Something has gone wrong.</p>
		</div>
		<div class="flex gap-1">
			<button class="btn preset-tonal hover:preset-filled">Dismiss</button>
		</div>
	</div>
</div>
