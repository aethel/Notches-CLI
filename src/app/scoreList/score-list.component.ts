import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  // selector: 'n-list',
  templateUrl: './score-list.html'
})
export class ScoreListComponent implements OnInit {
  public setupObj: Object;
  private playersArr: any[];
  public popover = false;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this.setupObj = this._route.snapshot.params;
    this.playersArr = Array(+this.setupObj['players']).fill(
      +this.setupObj['points']
    );
  }

  restart(): void {
    if (window.confirm('Really reset?')) {
      this._router.navigate(['/welcome']);
    }
  }
}
