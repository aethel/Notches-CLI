"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./welcome/welcome.component");
var score_list_component_1 = require("./scoreList/score-list.component");
var score_list_item_component_1 = require("./scoreList/score-list-item.component");
var internalDataservice_component_1 = require("./shared/internalDataservice.component");
var scoreList_guard_service_1 = require("./scoreList/scoreList-guard.service");
var longtap_directive_1 = require("./scoreList/longtap.directive");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'scoreList/:players/:points',
                    canActivate: [scoreList_guard_service_1.ScoreListGuard],
                    component: score_list_component_1.ScoreListComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' }
            ], { useHash: true })
        ],
        declarations: [
            app_component_1.AppComponent,
            score_list_component_1.ScoreListComponent,
            score_list_item_component_1.ScoreListItemComponent,
            welcome_component_1.WelcomeComponent,
            longtap_directive_1.LongPress
        ],
        providers: [internalDataservice_component_1.InternalDataService, scoreList_guard_service_1.ScoreListGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map