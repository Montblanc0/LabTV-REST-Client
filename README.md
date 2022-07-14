# LabTV REST Client

A fork of the original [LabTV v1.1.0](https://github.com/Montblanc0/LabTV/tree/c9921283550ccea79695638b0797b890e1f44a1b "LabTV v1.1.0") made to work in conjunction with [LabTV REST Server](https://github.com/Montblanc0/LabTV-REST-Server "LabTV REST Server").

Movie information is no longer retrieved from [IMDb-API](https://imdb-api.com/), but from a local server provided by [LabTV REST Server](https://github.com/Montblanc0/LabTV-REST-Server "LabTV REST Server"). It still uses [json-server](https://github.com/typicode/json-server) + [json-server-auth](https://github.com/jeremyben/json-server-auth#readme) to simulate user authentication and personal database entries for bought and liked movies.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

> A patch to json-server to enable the [--no-delete-cascade](https://github.com/typicode/json-server/pull/756/files) flag is included and applied automatically

See the original LabTV[ README](https://github.com/Montblanc0/LabTV/blob/master/README.md " README") to get more information on the website structure.

![LabTV Homepage](https://i.ibb.co/s1gv13v/labtv1-1.jpg "LabTV Homepage")

## Instructions

- Point your terminal to the project root and run `npm install` to download project dependencies;
> *json-server* will be automatically patched via a post-install script
- Run `npm run start:server` to start json-server on port 3000;
- Make sure [LabTV REST Server](https://github.com/Montblanc0/LabTV-REST-Server "LabTV REST Server") is running on `http://localhost:8082/labtv-api/`;
- Run `ng serve --open` and let it build the project. Your browser will open and take you to the project page.
- **Optional step** - only required if you imported the **initial** version of the database:
	- navigate to `/onetime`;
	- click on "Send All Movies" and wait for it to finish;
	- click on "Send All Trailers" and wait for it to finish.

## Build

### Requirements
A build is also provided, but still requires [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install some dependencies to enable login and database features.
> If you don't install npm and/or project dependencies, the only features available will be Most Popular Movies (**Home**) and Search (**Ricerca**)

### Instructions

- [Download the build](https://github.com/Montblanc0/LabTV-REST-Client/releases) and extract the archive;
- Open a terminal into the extracted folder and run `npm i json-server json-server-auth patch-package` (just once);
- Run `npx  patch-package` (just once);
- Run `npx json-server --no-delete-cascade --watch db/db.json -m ./node_modules/json-server-auth -r db/routes.json` (anytime you want to test the project);
- Make sure [LabTV REST Server](https://github.com/Montblanc0/LabTV-REST-Server "LabTV REST Server") is running on `http://localhost:8082/labtv-api/`;
- Run `index.html` on any local server (like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)).
- **Optional step** - only required if you imported the **initial** version of the database:
	- navigate to `/onetime`;
	- click on "Send All Movies" and wait for it to finish;
	- click on "Send All Trailers" and wait for it to finish.

### Credits

Icons: [Uicons by Flaticon](https://www.flaticon.com/uicons)

Font: [MADE Tommy by MadeType](https://www.behance.net/madetype)
