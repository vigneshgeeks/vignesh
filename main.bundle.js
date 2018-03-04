webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.html":
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"row\">\n        <div class=\"col s12 m6\">\n          <div class=\"card medium\">\n            <div class=\"card-content black-text\">\n              <span class=\"card-title\"><h4>Vignesh Karunakaran</h4></span>\n              <p>I am a vignesh who is passionate on computer Science,i Love to develop geek stuffs, exploring New Things,Always Trying to Make  impossible Things to Possible around my Life, and Always Food Lover.</p>\n            </div>\n            \n            \n          </div>\n        </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutmeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutmeComponent = /** @class */ (function () {
    function AboutmeComponent() {
    }
    AboutmeComponent.prototype.ngOnInit = function () {
    };
    AboutmeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-aboutme',
            template: __webpack_require__("./src/app/aboutme/aboutme.component.html"),
            styles: [__webpack_require__("./src/app/aboutme/aboutme.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutmeComponent);
    return AboutmeComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "nav {\r\n  background-color:#9c27b0!important;\r\n}\r\n.wrapper {\r\n    padding-left:300px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n  \n  \n  <nav class=\"nav-extended\">\n    <div class=\"nav-wrapper\">\n<a href=\"#\" class=\"brand-logo\">Vignesh</a>\n    </div>\n    <div class=\"nav-content\">\n      <ul class=\"tabs tabs-transparent\">\n        <li class=\"tab\"><a routerLink=\"/aboutme\" routerLinkActive=\"active\">aboutme</a>\n        </li>\n        <li class=\"tab\"><a routerLink=\"/skills\" routerLinkActive=\"active\">skills</a>\n        </li>\n     <li class=\"tab\"><a routerLink=\"/projects\" routerLinkActive=\"active\">projects</a>\n     </li>\n     <li class=\"tab\"><a routerLink=\"/contactme\" routerLinkActive=\"active\">contactme</a>\n     </li>\n      </ul>\n      </div>\n\n  </nav>\n  <!--<router-outlet></router-outlet>-->\n <!-- <div id=\"test1\" class=\"col s12\"><router-outlet></router-outlet></div>\n  <div id=\"test2\" class=\"col s12\">Test 2</div>\n <div id=\"test4\" class=\"col s12\">Test 4</div>-->\n        <br>\n        <router-outlet></router-outlet>\n        <!--<router-outlet></router-outlet>-->\n      <!--<router-outlet></router-outlet>-->\n  \n  <!-- <div class=\"row\">\n      <div class=\"col s12 m5\">\n        <div class=\"card-panel teal\">\n          <span class=\"white-text\">I am a very simple card. I am good at containing small bits of information.\n          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.\n          </span>\n        </div>\n      </div>\n    </div>-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aboutme_aboutme_component__ = __webpack_require__("./src/app/aboutme/aboutme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__skills_skills_component__ = __webpack_require__("./src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contactme_contactme_component__ = __webpack_require__("./src/app/contactme/contactme.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__aboutme_aboutme_component__["a" /* AboutmeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contactme_contactme_component__["a" /* ContactmeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: 'aboutme',
                        component: __WEBPACK_IMPORTED_MODULE_4__aboutme_aboutme_component__["a" /* AboutmeComponent */]
                    },
                    {
                        path: 'projects',
                        component: __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__["a" /* ProjectsComponent */]
                    },
                    {
                        path: 'skills',
                        component: __WEBPACK_IMPORTED_MODULE_5__skills_skills_component__["a" /* SkillsComponent */]
                    },
                    {
                        path: 'contactme',
                        component: __WEBPACK_IMPORTED_MODULE_7__contactme_contactme_component__["a" /* ContactmeComponent */]
                    }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactme/contactme.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contactme/contactme.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n        <div class=\"col s12 m6\">\n          <div class=\"card small\">\n            <div class=\"card-content black-text\">\n              <span class=\"card-title\">\n              \t<h4><i class=\"small material-icons\">contact_mail</i> official2vignesh@gmail.com </h4>\n<h4><i class=\"small material-icons\">contact_phone</i> +91 9840051399 </h4>\n     <h4> <i class=\"small material-icons\">explore</i>Address</h4></span>\n              <p>SriniVasan Raghavan Street,no 19,<br>perambur,<br>chennai-600011</p>\n            </div>\n            \n            \n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/contactme/contactme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactmeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactmeComponent = /** @class */ (function () {
    function ContactmeComponent() {
    }
    ContactmeComponent.prototype.ngOnInit = function () {
    };
    ContactmeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contactme',
            template: __webpack_require__("./src/app/contactme/contactme.component.html"),
            styles: [__webpack_require__("./src/app/contactme/contactme.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactmeComponent);
    return ContactmeComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col s12 m6\">\n          <div class=\"card small\">\n            <div class=\"card-content black-text\">\n              <span class=\"card-title\">\n      <i class=\"large material-icons\">assignment</i>\n            <h4>Document Quality Checker</h4></span>\n              <p>It compares the two documents which is (docx) or two files and shows error on the Lines ,basicaly document is xml file not ordinaryy file to check easily.</p>\n            </div>\n            \n            \n          </div>\n        </div>\n      </div>\n\n\n<div class=\"row\">\n        <div class=\"col s12 m6\">\n          <div class=\"card small\">\n            <div class=\"card-content black-text\">\n              <span class=\"card-title\">\n      <i class=\"large material-icons\">opacity</i>\n            <h4>Blood donars app</h4></span>\n              <p>It is Android Native app which helps to search blood donars in certain Location.</p>\n            </div>\n            \n            \n          </div>\n        </div>\n      </div>\n<div class=\"row\">\n        <div class=\"col s12 m6\">\n          <div class=\"card small\">\n            <div class=\"card-content black-text\">\n              <span class=\"card-title\">\n      <i class=\"large material-icons\">timeline</i>\n            <h4>Twitter Sentiment Analiysis</h4></span>\n              <p>It is program to analyse sentiment by people on certain word Which is approach to be possitive or negative feedback by the polarity level of the peoples on it.</p>\n            </div>\n            \n            \n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"col s12 m6\">\n          <div class=\"card small\">\n            <div class=\"card-content black-text\">\n              <span class=\"card-title\">\n      <i class=\"large material-icons\">translate</i>\n            <h4>Natural Language processing Without NLPTK</h4></span>\n              <p>It is program to find area of circle,square,triangle,rectangle where you can type questions and it will analyise your question and show the result.</p>\n            </div>\n            \n            \n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"col s12 m6\">\n          <div class=\"card small\">\n            <div class=\"card-content black-text\">\n              <span class=\"card-title\">\n      <i class=\"large material-icons\">notifications_active</i>\n            <h4>Simple Logical programs</h4></span>\n              <p>It is simple Logical programs which is writtenin java where it covers most of the logics in simple coding.</p>\n            </div>\n            \n            \n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"row\">\n        <div class=\"col s12 m6\">\n          <div class=\"card large white\">\n            <div class=\"card-content black-text\">\n             <h6>java 78%</h6>\n             <div class=\"progress\">\n                  <div class=\"determinate\" style=\"width: 78%\"></div>\n             </div>\n             <h6>Machine Learning</h6>\n            <div class=\"progress\">\n                  <div class=\"indeterminate\"></div>\n            </div>\n            <h6>Python 60%</h6>\n             <div class=\"progress\">\n                  <div class=\"determinate\" style=\"width: 60%\"></div>\n             </div>\n             <h6>Angular </h6>\n             <div class=\"progress\">\n                  <div class=\"indeterminate\"></div>\n            </div>\n              <h6>Logical Thinking 80%</h6>\n             <div class=\"progress\">\n                  <div class=\"determinate\" style=\"width: 80%\"></div>\n             </div>\n             <h6>Stress Handleing 90%</h6>\n             <div class=\"progress\">\n                  <div class=\"determinate\" style=\"width: 90%\"></div>\n             </div>\n             \n            \n\n\n\n\n            </div>\n            \n          </div>\n        </div>\n      </div>\n            "

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("./src/app/skills/skills.component.html"),
            styles: [__webpack_require__("./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map