import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()

export class ScoreListGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(route: ActivatedRouteSnapshot):boolean {
    let {players, points} = route.params;
    if(isNaN(+players)
        || players == null
        || +players <= 0
        || +players > 8
        || isNaN(+points)
        || +points > 999
        || points == null
      ){
      alert('Incorrect setup values');
      return false;
    }
    return true;
  }
}
