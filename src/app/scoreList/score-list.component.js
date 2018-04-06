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
var ScoreListComponent = (function () {
    function ScoreListComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.popover = false;
    }
    ScoreListComponent.prototype.ngOnInit = function () {
        this.setupObj = this._route.snapshot.params;
        this.playersArr = Array(+this.setupObj['players']).fill(+this.setupObj['points']);
    };
    ScoreListComponent.prototype.restart = function () {
        if (window.confirm('Really reset?')) {
            this._router.navigate(['/welcome']);
        }
    };
    return ScoreListComponent;
}());
ScoreListComponent = __decorate([
    core_1.Component({
        // selector: 'n-list',
        templateUrl: 'app/scoreList/score-list.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], ScoreListComponent);
exports.ScoreListComponent = ScoreListComponent;
//# sourceMappingURL=score-list.component.js.map