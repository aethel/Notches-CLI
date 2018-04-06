import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'n-item',
  templateUrl: './score-list-item.html'
})
export class ScoreListItemComponent implements OnInit {
  step = 1;
  public playerName: string;
  private longTap = false;

  @Input() points = 0;
  @Input('index') playerAlias = 0;

  ngOnInit(): void {
    this.playerName = `Player ${this.playerAlias}`;
  }

  add(): void {
    if (!this.longTap) {
      this.points += this.step;
    }
  }

  subtract(): void {
    if (!this.longTap) {
      this.points -= this.step;
    }
  }

  longPressingAdd(event: any = null) {
    this.points += this.step * 10;
  }

  longPress(event: any) {
    this.longTap = true;
  }

  longPressEnd(event: any) {
    setTimeout(() => {
      this.longTap = false;
    }, 5);
  }

  longPressingSubtract(event: any) {
    this.points -= this.step * 10;
  }
}
