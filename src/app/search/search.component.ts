import { Component, OnInit } from "@angular/core";
import { LabtvApiService } from "../services/labtv-api.service";
import { LocalStorageService } from "../services/local-storage.service";

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
	isLoading: boolean = false;
	isDataReady: boolean = false;
	data: any = "";
	searchTerm: string = "";
	resultCount: number = 0;
	movie: any = "";
	isOverlayVisible: boolean = false;
	errorMessage = "";
	submittedText = "";

	constructor(
		private api: LabtvApiService,
		private ls: LocalStorageService
	) {}

	ngOnInit(): void {}

	getMovieDetail(id: any): void {
		if (!this.ls.get(id) || this.movie?.id != id) {
			let movieObject: Object;
			this.api
				.movieDetail(id)
				.subscribe(
					data => {
						movieObject = data;
						if (data.errorMessage) {
							this.errorMessage = data.errorMessage;
						}
						//Ottengo contemporaneamente il link di YouTube da passare al player component
					},
					err => {
						this.errorMessage = err.errorMessage;
					}
				)
				.add(() => {
					this.api.ytTrailer(id).subscribe(data => {
						this.movie = { ...movieObject, videoId: data.videoId };
						console.log(this.movie);
						this.ls.set(id, this.movie);
					});
				});
		} else {
			this.movie = this.ls.get(id);
		}
		this.isOverlayVisible = true;
	}

	hideOverlay(bit: boolean): void {
		if (bit) this.isOverlayVisible = false;
	}

	search(e: SubmitEvent): void {
		this.isLoading = true;
		e.preventDefault();
		this.errorMessage = "";
		this.submittedText = this.searchTerm;
		this.api.searchMovie(this.searchTerm).subscribe(
			data => {
				this.isLoading = false;
				this.data = data;
				console.log(data);
				this.resultCount = data.length;
				this.isDataReady = true;
			},
			err => {
				console.log(err);
				this.isLoading = false;
			}
		);
	}
}
