import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { OneTimeService } from "../services/one-time.service";

@Component({
	selector: "app-one-time",
	templateUrl: "./one-time.component.html",
	styleUrls: ["./one-time.component.css"],
})
export class OneTimeComponent implements OnInit {
	isLoading: boolean = false;
	movie: any;
	isOverlayVisible: boolean = false;
	movieDetails: any = [];
	errorMessage: string = "";

	constructor(private api: ApiService, private oneTime: OneTimeService) {}

	ngOnInit(): void {}

	hideOverlay(bit: boolean): void {
		if (bit) this.isOverlayVisible = false;
	}

	sendAllMovieDetails(e: SubmitEvent): void {
		this.movieDetails = [];
		this.errorMessage = "";
		this.isLoading = true;
		e.preventDefault();

		let movies: any = [];
		this.oneTime.getFile("movieDetails.har").subscribe(data => {
			//@ts-ignore
			data.log.entries.forEach(entry => {
				console.log(entry);
				movies.push(JSON.parse(entry.response.content.text));
			});
			console.log(movies);
			this.oneTime.sendAllToServer(movies).subscribe(
				res => {
					console.log(res);
					this.isLoading = false;
				},
				err => {
					console.log(err);
					this.errorMessage = err.message;
					this.isLoading = false;
				}
			);
		});
		console.log(movies);
	}

	sendAllMovieTrailers(e: SubmitEvent): void {
		this.movieDetails = [];
		this.errorMessage = "";
		this.isLoading = true;
		e.preventDefault();

		let movies: any = [];
		this.oneTime.getFile("movieTrailers.har").subscribe(data => {
			//@ts-ignore
			data.log.entries.forEach(entry => {
				// console.log(entry);
				movies.push(JSON.parse(entry.response.content.text));
			});
			// console.log(movies);
			this.oneTime.sendTrailersToServer(movies).subscribe(
				res => {
					console.log(res);
					this.isLoading = false;
				},
				err => {
					console.log(err);
					this.errorMessage = err.message;
					this.isLoading = false;
				}
			);
		});
		console.log(movies);
	}

	/////////////////////
	/* TESTING METHODS */
	/////////////////////

	fetchMovieDetails(e: SubmitEvent): void {
		this.movieDetails = [];
		this.errorMessage = "";
		this.isLoading = true;
		e.preventDefault();
		//Ottiene la lista di ID dal database
		this.oneTime.getAll().subscribe(
			ids => {
				console.log(ids);
				ids.forEach(id =>
					//invoca l'api di IMDB per ottenere un array di "Film"
					this.api
						.movieDetail(id)
						.subscribe(movie => this.movieDetails.push(movie))
				);
				this.isLoading = false;
			},
			err => {
				console.log(err);
				this.errorMessage = err.message;
				this.isLoading = false;
			}
		);
	}

	fetchMovieTrailers(e: SubmitEvent): void {
		this.movieDetails = [];
		this.errorMessage = "";
		this.isLoading = true;
		e.preventDefault();
		//Ottiene la lista di ID dal database
		this.oneTime.getAll().subscribe(
			ids => {
				console.log(ids);
				ids.forEach(id =>
					//invoca l'api di IMDB per ottenere un array di "Trailer"
					this.api
						.ytTrailer(id)
						.subscribe(movie => this.movieDetails.push(movie))
				);
				this.isLoading = false;
			},
			err => {
				console.log(err);
				this.errorMessage = err.message;
				this.isLoading = false;
			}
		);
	}

	sendMovieDetails(e: SubmitEvent): void {
		this.movieDetails = [];
		this.errorMessage = "";
		this.isLoading = true;
		e.preventDefault();

		this.oneTime.getFile("movieDetails.har").subscribe(data => {
			//@ts-ignore
			let movie = data.log.entries[0].response.content;
			movie = JSON.parse(movie.text);
			console.log(movie);
			this.oneTime.sendOneToServer(movie).subscribe(
				res => {
					console.log(res);
					this.isLoading = false;
				},
				err => {
					console.log(err);
					this.errorMessage = err.message;
				}
			);
		});

		this.isLoading = false;
	}

	test(e: SubmitEvent): void {
		this.movieDetails = [];
		this.errorMessage = "";
		this.isLoading = true;
		e.preventDefault();

		this.oneTime.getFile("movieDetails.har").subscribe(data => {
			//@ts-ignore
			let movie = data.log.entries[0].response.content;
			movie = JSON.parse(movie.text);
			console.log(movie);
			this.oneTime.sendTestToServer(movie).subscribe(
				res => {
					console.log(res);
					this.isLoading = false;
				},
				err => {
					console.log(err);
					this.errorMessage = err.message;
					this.isLoading = false;
				}
			);
		});
	}

	prova(e: SubmitEvent): void {
		this.movieDetails = [];
		this.errorMessage = "";
		this.isLoading = true;
		e.preventDefault();
		this.oneTime.prova().subscribe(
			res => {
				console.log(res);
				this.movieDetails.push(res);
				this.isLoading = false;
			},
			err => {
				console.log(err);
				this.errorMessage = err.message;
				this.isLoading = false;
			}
		);
		console.log(this.movieDetails);
	}
}
