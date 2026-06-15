---
title: Table of Contents
description: Navigate the hierarchy of headings for the current page.
---

**React**

```tsx
interface PageHeadings {
	/** The text value within the heading tag; stripped of HTML. */
	text: string;
	/** A generated slug value based on the text. */
	slug: string;
	/** Depth indicates headings H1-H6. */
	depth: number;
}

/** The generated list of page headings, slugs, and depth. */
const headings: PageHeadings[] = [
	{ text: 'Real World Example', slug: 'real-world-example', depth: 1 },
	{ text: 'Semantic Markup', slug: 'semantic-markup', depth: 1 },
	{ text: 'Utilities', slug: 'utilities', depth: 1 },
	{ text: 'Grid', slug: 'grid', depth: 2 },
	{ text: 'Alignment', slug: 'alignment', depth: 2 },
	{ text: 'Responsive Design', slug: 'responsive-design', depth: 2 },
	{ text: 'In Conclusion', slug: 'in-conclusion', depth: 1 },
];

const indentations = {
	0: 'pl-0',
	1: 'pl-2',
	2: 'pl-4',
	3: 'pl-6',
	4: 'pl-8',
	5: 'pl-10',
} as const;

/** Provide a padding-left class based on the depth. */
function setIndentationClass(depth: number) {
	return indentations[depth as keyof typeof indentations] ?? 'pl-0';
}

export default function Default() {
	return (
		<nav className="card bg-surface-100-900 p-4">
			{/* Table of Contents */}
			<div className="text-sm space-y-2">
				{/* Label */}
				<div className="font-bold">On This Page</div>
				{/* Links */}
				<ul className="space-y-2">
					{/* Consider a fixed scroll position at the top of your page layouts. */}
					<li>
						<a href={`#_top`} className="anchor block">
							Overview
						</a>
					</li>
					{/* Loop through the available headings. */}
					{headings.map((heading: PageHeadings) => (
						<li key={heading.slug}>
							{/* Apply a indentation class based on the depth. */}
							<a href={`#${heading.slug}`} className={`anchor block ${setIndentationClass(heading.depth)}`}>
								{heading.text}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
```

**Svelte**

```svelte
<script lang="ts">
	interface PageHeadings {
		/** The text value within the heading tag; stripped of HTML. */
		text: string;
		/** A generated slug value based on the text. */
		slug: string;
		/** Depth indicates headings H1-H6. */
		depth: number;
	}

	/** The generated list of page headings, slugs, and depth. */
	const headings: PageHeadings[] = [
		{ text: 'Real World Example', slug: 'real-world-example', depth: 1 },
		{ text: 'Semantic Markup', slug: 'semantic-markup', depth: 1 },
		{ text: 'Utilities', slug: 'utilities', depth: 1 },
		{ text: 'Grid', slug: 'grid', depth: 2 },
		{ text: 'Alignment', slug: 'alignment', depth: 2 },
		{ text: 'Responsive Design', slug: 'responsive-design', depth: 2 },
		{ text: 'In Conclusion', slug: 'in-conclusion', depth: 1 },
	];

	/** Provide a padding-left class based on the depth. */
	function setIndentationClass(depth: number) {
		return (
			{
				0: 'pl-0',
				1: 'pl-2',
				2: 'pl-4',
				3: 'pl-6',
				4: 'pl-8',
				5: 'pl-10',
			}[depth] ?? 'pl-0'
		);
	}
</script>

<nav class="card bg-surface-100-900 p-4">
	<!-- Table of Contents -->
	<div class="text-sm space-y-2">
		<!-- Label -->
		<div class="font-bold">On This Page</div>
		<!-- Links -->
		<ul class="space-y-2">
			<!-- Consider a fixed scroll position at the top of your page layouts. -->
			<li><a href={`#_top`} class="anchor block">Overview</a></li>
			<!-- Loop through the available headings. -->
			{#each headings as heading}
				<li>
					<!-- Apply a indentation class based on the depth. -->
					<a href={`#${heading.slug}`} class="anchor block {setIndentationClass(heading.depth)}">
						{heading.text}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
```

## Deep Linking

Browsers allow you to deep link to any element via the ID. This is accomplished with an anchor tag and hashed (`#`) href value. When interacting with these anchors, the viewport will automatically attempt to scroll the `<body>` element and bring the element into view.

```html
<h2 class="#some-example-slug">
	Some Example Heading
	<h2></h2>
</h2>
```

```html
<a href="#real-world-example" class="anchor">Some Example Heading</a>
```

> [!TIP]
> If you abstract scrolling away from the `<body>` element, this will not work.

## Scroll Behavior

You may optionally choose to implement a smooth [scroll behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior) using CSS.

```html
<body class="smooth-scroll"></body>
```

```css
body {
	scroll-behavior: smooth;
}
```

## Generate a Slug

The following provides a barebones implementation for generating a slug based on a heading text value.

```ts
function generateSlug(text: string, prefix?: string = '', suffix?: string = '') {
	// Format the slug from the text value.
	const slug = text
		.toLowerCase()
		.replaceAll(/[^a-zA-Z0-9 ]/g, '')
		.replaceAll(' ', '-')
		.toLowerCase();
	// Note that you can optionally apply a prefix/suffix.
	return `${prefix}${slug}${suffix}`;
}

// Usage
generateSlug('An Example Header'); // result: an-example-header
generateSlug('An Example Header', 'skeleton-'); // result: skeleton-an-example-header
generateSlug('An Example Header', '', '-skeleton'); // result: an-example-header-skeleton
```

## Guides

Specific instructions for generating headings will differ based on your meta-framework and your application architecture. Below are a few suggestions, but this is neither a definitive or exhaustive list of all available options.

- [Astro](https://kld.dev/building-table-of-contents/) - enables you to automatically generate headings using built-in MDX features.
- [Svelte](https://www.melt-ui.com/docs/builders/table-of-contents) - Melt UI provides a headless component solution for Svelte.
- [Next.js](https://nextra.site/docs/docs-theme/theme-configuration#toc-sidebar) - Nextra provides a headless component solution for Next.js + MDX.
- [Rehype Plugin](https://github.com/stefanprobst/rehype-extract-toc) - a general purpose Rehype plugin for generating a table of contents.
