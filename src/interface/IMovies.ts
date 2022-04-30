export interface IMovies {
	show: {
		genres: string[];
		image: {
			medium: string;
			original: string;
		};
		name: string;
		network: {
			country: {
				name: string;
			};
		};
		premiered: string;
		rating: {
			average: number;
		}
		summary: JSX.Element
	};
}