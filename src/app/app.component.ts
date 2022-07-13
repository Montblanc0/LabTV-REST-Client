import { OnInit, Component } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { LocalStorageService } from "./services/local-storage.service";
import ReglogOverlayService from "./services/reglog-overlay.service";
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
	title = "LabTV REST Client";
	isFormsVisible: boolean = false;
	isRegLogVisible: boolean = false;
	isProfileVisible: boolean = false;
	isLoggedIn: boolean = false;

	constructor(
		private auth: AuthService,
		private ls: LocalStorageService,
		private emitter: ReglogOverlayService
	) {}

	ngOnInit() {
		this.auth.authStatus.subscribe(bool => (this.isLoggedIn = bool));

		this.emitter.opener$.subscribe(bool => {
			if (bool) this.showForms(true);
		});

		this.checkUser();
	}

	onActivate(e: Event) {
		window.scroll(0, 0);
	}

	checkUser(): void {
		if (this.auth.getUser()) console.log(this.ls.get("user"));
	}

	showForms(bit: boolean): void {
		if (bit) {
			this.isRegLogVisible = true;
			this.isFormsVisible = true;
		}
	}

	showProfile(bit: boolean): void {
		if (bit) {
			this.isProfileVisible = true;
			this.isFormsVisible = true;
		}
	}
	hideForms(bit: boolean): void {
		if (bit) {
			this.isFormsVisible = false;
			this.isRegLogVisible = false;
			this.isProfileVisible = false;
		}
	}
}
