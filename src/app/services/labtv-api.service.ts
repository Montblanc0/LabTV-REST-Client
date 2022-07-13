import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class LabtvApiService {
	constructor(private http: HttpClient) {}

	mostPopular(): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				Origin: "http://localhost:4200",
			}),
		};
		return this.http.get(
			`http://localhost:8082/labtv-api/api/evidenze`,
			httpOptions
		);
	}

	movieDetail(id: string): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				Origin: "http://localhost:4200",
			}),
		};
		return this.http.get(
			`http://localhost:8082/labtv-api/api/films/${id}`,
			httpOptions
		);
	}

	searchMovie(expression: string): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				Origin: "http://localhost:4200",
			}),
		};
		return this.http.get(
			`http://localhost:8082/labtv-api/api/films/titoli/${expression}`,
			httpOptions
		);
	}

	ytTrailer(id: string): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				Origin: "http://localhost:4200",
			}),
		};
		return this.http.get(
			`http://localhost:8082/labtv-api/api/trailers/${id}`,
			httpOptions
		);
	}

	/////////////////////
	/* TESTING METHODS */
	/////////////////////

	prova() {
		const httpOptions = {
			headers: new HttpHeaders({
				Origin: "http://localhost:4200",
			}),
		};
		return this.http.get<string[]>(
			"http://localhost:8082/labtv-api/api/prova",
			httpOptions
		);
	}

	searchAll(): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				Origin: "http://localhost:4200",
			}),
		};
		return this.http.get(
			`http://localhost:8082/labtv-api/api/all-evidenze`,
			httpOptions
		);
	}
}
