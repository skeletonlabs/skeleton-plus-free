import { ChevronRight, Cog, House } from 'lucide-react';

export default function BreadcrumbsIcons() {
	return (
		<ol className="flex items-center gap-4">
			<li>
				<a className="opacity-60 hover:opacity-100" href="/">
					<House className="size-elem-lg" />
				</a>
			</li>
			<li className="opacity-50" aria-hidden="true">
				<ChevronRight className="size-elem-sm" />
			</li>
			<li>
				<a className="opacity-60 hover:opacity-100" href="/">
					<Cog className="size-elem-lg" />
				</a>
			</li>
			<li className="opacity-50" aria-hidden="true">
				<ChevronRight className="size-elem-sm" />
			</li>
			<li>Current</li>
		</ol>
	);
}
