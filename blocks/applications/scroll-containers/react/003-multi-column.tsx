// Image Attribution: https://www.themoviedb.org/

import { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

interface Movie {
	name: string;
	imageUrl: string;
	url: string;
}

const movies: Movie[] = [
	{
		name: 'The Fantastic Four: First Steps',
		imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/abqOz6EL3yXyOOafCPZxjL1M5bQ.jpg',
		url: 'https://www.themoviedb.org/movie/617126-the-fantastic-4-first-steps',
	},
	{
		name: 'Thunderbolts*',
		imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg',
		url: 'https://www.themoviedb.org/movie/986056-thunderbolts',
	},
	{
		name: 'Captain America: Brave New World',
		imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg',
		url: 'https://www.themoviedb.org/movie/822119-captain-america-brave-new-world',
	},
	{
		name: 'Deadpool & Wolverine',
		imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
		url: 'https://www.themoviedb.org/movie/533535-deadpool-wolverine',
	},
	{
		name: 'The Marvels',
		imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg',
		url: 'https://www.themoviedb.org/movie/609681-the-marvels',
	},
	{
		name: 'Guardians of the Galaxy Vol. 3',
		imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
		url: 'https://www.themoviedb.org/movie/447365-guardians-of-the-galaxy-vol-3',
	},
	{
		name: 'Ant-Man and the Wasp: Quantumania',
		imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg',
		url: 'https://www.themoviedb.org/movie/640146-ant-man-and-the-wasp-quantumania',
	},
	{
		name: 'Black Panther: Wakanda Forever',
		imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
		url: 'https://www.themoviedb.org/movie/505642-black-panther-wakanda-forever',
	},
	{
		name: 'Thor: Love and Thunder',
		imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
		url: 'https://www.themoviedb.org/movie/616037-thor-love-and-thunder',
	},
];

export default function MultiColumn() {
	const elemMoviesRef = useRef<HTMLDivElement>(null);

	function multiColumnLeft() {
		if (!elemMoviesRef.current) return;
		const elemMovies = elemMoviesRef.current;
		let x = elemMovies.scrollWidth;
		if (elemMovies.scrollLeft !== 0) {
			x = elemMovies.scrollLeft - elemMovies.clientWidth;
		}
		elemMovies.scroll(x, 0);
	}

	function multiColumnRight() {
		if (!elemMoviesRef.current) return;
		const elemMovies = elemMoviesRef.current;
		let x = 0;
		// -1 is used because different browsers use different methods to round scrollWidth pixels.
		if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1) {
			x = elemMovies.scrollLeft + elemMovies.clientWidth;
		}
		elemMovies.scroll(x, 0);
	}

	return (
		<div className="w-full">
			<div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
				{/* Button: Left */}
				<button type="button" className="btn-icon preset-filled" onClick={multiColumnLeft} title="Scroll left" aria-label="Scroll left">
					<ArrowLeftIcon size={16} />
				</button>
				{/* Carousel */}
				<div ref={elemMoviesRef} className="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-auto">
					{movies.map((movie) => (
						<a key={movie.name} href={movie.url} target="_blank" className="shrink-0 w-[28%] snap-start">
							<img
								className="rounded-container hover:brightness-125"
								src={movie.imageUrl}
								alt={movie.name}
								title={movie.name}
								loading="lazy"
							/>
						</a>
					))}
				</div>
				{/* Button: Right */}
				<button type="button" className="btn-icon preset-filled" onClick={multiColumnRight} title="Scroll right" aria-label="Scroll right">
					<ArrowRightIcon size={16} />
				</button>
			</div>
		</div>
	);
}
