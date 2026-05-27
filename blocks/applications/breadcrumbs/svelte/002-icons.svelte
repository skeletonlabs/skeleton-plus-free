<script lang="ts">
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import CogIcon from '@lucide/svelte/icons/cog';
	import HouseIcon from '@lucide/svelte/icons/house';
</script>

<ol class="flex items-center gap-4">
	<li>
		<a class="opacity-60 hover:opacity-100" href="/">
			<HouseIcon class="size-elem-lg" />
		</a>
	</li>
	<li class="opacity-50" aria-hidden="true">
		<ChevronRightIcon class="size-elem-sm" />
	</li>
	<li>
		<a class="opacity-60 hover:opacity-100" href="/">
			<CogIcon class="size-elem-lg" />
		</a>
	</li>
	<li class="opacity-50" aria-hidden="true">
		<ChevronRightIcon class="size-elem-sm" />
	</li>
	<li>Current</li>
</ol>
