import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
	providedIn: "root",
})
export class OneTimeService {
	constructor(private http: HttpClient, private api: ApiService) {}

	getAll() {
		const httpOptions = {
			headers: new HttpHeaders({
				"content-type": "application/json",
			}),
		};
		//Ottiene una lista di ID dalla tabella Evidenza
		return this.http.get<string[]>(
			"http://localhost:8082/labtv-api/onetime/getall",
			httpOptions
		);
	}

	getFile(filename: string): Observable<JSON> {
		//ottiene le response di IMDB relative agli ID presenti in Evidenza
		let movieDetails = this.http.get<JSON>(
			`assets/files/${filename}`
			// httpOptions
		);
		return movieDetails;
	}

	sendAllToServer(movies: any) {
		const httpOptions = {
			headers: new HttpHeaders({
				// "Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			}),
		};
		//Inserisce tutte le entity "Film" collegate agli id di "Evidenza"
		return this.http.post<any>(
			"http://localhost:8082/labtv-api/onetime/post-all",
			movies,
			httpOptions
		);
	}

	sendTrailersToServer(movies: any) {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json",
			}),
		};
		//Inserisce tutte le entity "Trailer" collegate agli id di "Evidenza"
		return this.http.post<any>(
			"http://localhost:8082/labtv-api/onetime/post-all-trailers",
			movies,
			httpOptions
		);
	}

	/////////////////////
	/* TESTING METHODS */
	/////////////////////

	sendOneToServer(movies: any) {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json",
			}),
		};
		return this.http.post<any>(
			"http://localhost:8082/labtv-api/onetime/post",
			movies,
			httpOptions
		);
	}

	sendTestToServer(movies: any) {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json",
			}),
		};
		return this.http.post<any>(
			"http://localhost:8082/labtv-api/onetime/test",
			movies,
			httpOptions
		);
	}

	prova() {
		const httpOptions = {
			headers: new HttpHeaders({
				"content-type": "application/json",
			}),
		};
		return this.http.get<string[]>(
			"http://localhost:8082/labtv-api/api/prova",
			httpOptions
		);
	}
}
