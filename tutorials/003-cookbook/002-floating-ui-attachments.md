---
title: Floating UI Attachments
description: A Svelte-focused guide around integrating Floating UI and Svelte attachments.
---

> [!NOTE]
> This is a Svelte-only guide based around the [attachments](https://svelte.dev/docs/svelte/svelte-attachments) feature introduced in Svelte `v5.29`.

### Summary

The following will guide you through integrating [Floating UI](https://floating-ui.com/) in Svelte and generating a baseline [attachment](https://svelte.dev/docs/svelte/svelte-attachments) that can be used to scaffold any number of custom popover interfaces, including but not limited to: popovers, tooltips, dialogs, drawers, combobox, context menus, and more.

### Accessibility Warning

This guide is not a drop-in replacement for Skeleton's [Svelte Popovers](/docs/[framework]/framework-components/popover) as it does not replicate all recommended accessbility features out of the box (such as ARIA attributes, focus states, keyboard interactions, etc). These features are out of scope of this guide. It will be your responsibility to handle these features before using this in a production environment.

### Target Audience

This guide is intended for advanced Svelte users that wish to integrate directly with Floating UI, build custom floating interfaces, and go beyond the scope of Skeleton's [Svelte Popovers](/docs/[framework]/framework-components/popover). This can be used to generate interfaces not covered by Skeleton's Popover components.

## Installing Floating UI

To begin, install the standard version of Floating UI.

```bash
npm install @floating-ui/dom
```

If this is your first time using Floating UI, we recommend following the [guided tutorial](https://floating-ui.com/docs/tutorial) to learn the basics.

## Creating a Svelte Attachment

Next, let's generate our custom attachment. If you're working with SvelteKit, we recommend adding this to `/src/lib/attachments/floating.svelte.ts`.

```ts
import { computePosition, autoUpdate, flip, offset, type Placement } from '@floating-ui/dom';
import { createAttachmentKey } from 'svelte/attachments';

interface PopoverOptions {
	interaction?: 'click' | 'hover';
	placement?: Placement;
}

export class Popover {
	private options: PopoverOptions = {
		interaction: 'click',
		placement: 'bottom-start',
	};
	private open = $state(false);
	private referenceElement: HTMLElement | undefined = $state();
	private floatingElement: HTMLElement | undefined = $state();

	constructor(options?: PopoverOptions) {
		if (options) this.options = { ...this.options, ...options };
		$effect(() => {
			if (!this.referenceElement || !this.floatingElement) return;
			return autoUpdate(this.referenceElement, this.floatingElement, this.#updatePosition);
		});
	}

	reference() {
		const attrs = {
			[createAttachmentKey()]: (node: HTMLElement) => {
				this.referenceElement = node;
			},
			onclick: () => {},
			onmouseover: () => {},
			onmouseout: () => {},
		};
		// If click interaction
		if (this.options.interaction === 'click') {
			attrs['onclick'] = () => {
				this.open = !this.open;
			};
		}
		// If hover interaction
		if (this.options.interaction === 'hover') {
			attrs['onclick'] = () => {
				this.open = !this.open;
			};
			attrs['onmouseover'] = () => {
				this.open = true;
			};
			attrs['onmouseout'] = () => {
				this.open = false;
			};
		}
		return attrs;
	}

	floating() {
		return {
			[createAttachmentKey()]: (node: HTMLElement) => {
				this.floatingElement = node;
			},
		};
	}

	isOpen() {
		return this.open;
	}

	#updatePosition = async () => {
		if (!this.referenceElement || !this.floatingElement) {
			return;
		}
		const position = await computePosition(this.referenceElement, this.floatingElement, {
			placement: this.options.placement,
			middleware: [flip(), offset(8)],
		});
		const { x, y } = position;
		Object.assign(this.floatingElement.style, {
			left: `${x}px`,
			top: `${y}px`,
		});
	};
}
```

This attachment will handle the following critical functionality:

1. This imports the Svelte attachment and Floating UI dependencies.
2. Scaffolds a simple `PopoverOptions` interface, which defines our configuraton options.
3. Implement the `Popover` class, which handles all the business logic for creating and using the attachment.
4. And of course sets the default configuration via `options`.

We'll cover each additional method below.

### reference()

When implemented, this is spread to the **Trigger** element and handles interaction such as `click` and `hover`.

### floating()

When implemented, this is spread to the **Popover** element itself. This uses [createAttachmentKey](https://svelte.dev/docs/svelte/svelte-attachments#createAttachmentKey) to generate the attachment relationship itself.

### isOpen()

Returns the current `open` state as a boolean value. We'll use this to show and hide the popover on demand.

### #updatePosition()

This scaffolds [computePosition](https://floating-ui.com/docs/computePosition), which handles most of Floating UI's functionality.

## Making the Tooltip Float

Floating UI [requires these CSS styles](https://floating-ui.com/docs/tutorial#making-the-tooltip-float) to ensure the popover element "floats" over other UI. For this guide we'll handle this with a convention by adding the following your to global stylesheet. For SvelteKit, this is located in `/src/routes/layout.css`.

```css
[data-floating] {
	width: max-content;
	position: absolute;
	top: 0;
	left: 0;
}
```

## Usage

### Popover

Add the following to any page within your application to generate a basic popover.

```svelte
<script lang="ts">
	import { Popover } from './popover';
	import { slide } from 'svelte/transition';

	const popover = new Popover();
</script>

<span>
	<button {...popover.reference()} class="btn preset-filled">Trigger</button>
	{#if popover.isOpen()}
		<div {...popover.floating()} data-floating class="card preset-filled-surface-100-900 z-10 p-4" transition:slide={{ duration: 150 }}>
			<p>This is an example popover.</p>
		</div>
	{/if}
</span>
```

1. First, import the Popover attachment and generate an instance using `new Popover()`.
2. Next, create a wrapping `<span>` to ensure your popover is not affected by the flow of the document.
3. Add your trigger button and spread the `popover.reference()`
4. Add your popover element and spread the `popover.floating()`
5. Apply `data-floating` to the popover element.
6. Wrap the popover element with `#if popover.isOpen()` to show/hide the popover.

> [!TIP]
> You can optionally import a [Svelte transition](https://svelte.dev/docs/svelte/svelte-transition), such as `slide`. Then use this to trigger animations on the open/close state for the popover.

### Tooltip

Add the following to any page within your application to generate a basic tooltip.

```svelte
<script lang="ts">
	import { Popover } from './popover';
	import { fade } from 'svelte/transition';

	const tooltip = new Popover({ interaction: 'hover', placement: 'top' });
</script>

<span>
	<p>This triggers a <span class="underline" {...tooltip.reference()}>tooltip</span>.</p>
	{#if tooltip.isOpen()}
		<div {...tooltip.floating()} data-floating class="card preset-filled-surface-100-900 z-10 p-4" transition:fade={{ duration: 150 }}>
			<p>This is an example tooltip.</p>
		</div>
	{/if}
</span>
```

1. Similar to the Popover - we import, initialize, and scaffold the common attachment requirements.
2. Unlike the Popover though, we configure `new Popover({ ... })` to adjust `interaction` and `placement` settings.
3. We can also use a different transition, such as `fade`, as shown above.

## Handling Accessibility

We recommend you follow the [Aria APG patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) when generating popover interfaces for production use. We've linked a few of the common patterns below to help you get started. This covers `aria` and `role` attributes, keyboard interactions, and other best practices.

- [Alert and Message Dialogs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/)
- [Alert Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)
- [Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [Menu and Menubar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/)
- [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
