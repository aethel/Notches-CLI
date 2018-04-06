import {Component} from '@angular/core';
import {Router} from '@angular/router';

// import { InternalDataService }  from './shared/internalDataservice.component';

@Component({
  selector: 'n-welcome',
  templateUrl: './welcome.html'
})
export class WelcomeComponent {
  players = 1;
  points = 0;

  constructor(private _router: Router) {}

  sendSetupObj(): void {
    let errorMessage: string;
    switch (true) {
      case isNaN(+this.players) || isNaN(+this.points):
        errorMessage = 'The values must be numbers';
        alert(errorMessage);
        break;
      case this.players == null || this.points == null:
        errorMessage = 'You must specify both values';
        alert(errorMessage);
        break;
      case +this.players <= 0 || +this.players > 8:
        errorMessage = 'Can\'t have fewer than 1 and more than 8 players';
        alert(errorMessage);
        break;
      case +this.points > 999:
        errorMessage = 'Max 999 points';
        alert(errorMessage);
        break;
      default:
        errorMessage = null;
        this._router.navigate(['/scoreList', this.players, this.points]);
        break;
    }
  }
}
