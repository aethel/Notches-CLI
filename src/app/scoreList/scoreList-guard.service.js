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
var ScoreListGuard = (function () {
    function ScoreListGuard(_router) {
        this._router = _router;
    }
    ScoreListGuard.prototype.canActivate = function (route) {
        var _a = route.params, players = _a.players, points = _a.points;
        if (isNaN(+players)
            || players == null
            || +players <= 0
            || +players > 8
            || isNaN(+points)
            || +points > 999
            || points == null) {
            alert('Incorrect setup values');
            return false;
        }
        return true;
    };
    return ScoreListGuard;
}());
ScoreListGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], ScoreListGuard);
exports.ScoreListGuard = ScoreListGuard;
//# sourceMappingURL=scoreList-guard.service.js.map