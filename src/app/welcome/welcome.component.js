"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// import { InternalDataService }  from './shared/internalDataservice.component';
var WelcomeComponent = (function () {
    function WelcomeComponent(_router) {
        this._router = _router;
        this.players = 1;
        this.points = 0;
    }
    WelcomeComponent.prototype.sendSetupObj = function () {
        var errorMessage;
        switch (true) {
            case (isNaN(+this.players) || isNaN(+this.points)):
                errorMessage = 'The values must be numbers';
                alert(errorMessage);
                break;
            case (this.players == null || this.points == null):
                errorMessage = 'You must specify both values';
                alert(errorMessage);
                break;
            case (+this.players <= 0 || +this.players > 8):
                errorMessage = "Can\'t have fewer than 1 and more than 8 players";
                alert(errorMessage);
                break;
            case (+this.points > 999):
                errorMessage = "Max 999 points";
                alert(errorMessage);
                break;
            default:
                errorMessage = null;
                this._router.navigate(['/scoreList', this.players, this.points]);
                break;
        }
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        selector: 'n-welcome',
        templateUrl: 'app/welcome/welcome.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map