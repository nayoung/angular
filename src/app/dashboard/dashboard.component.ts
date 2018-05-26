import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // data 받아서 heroes index 1~4까지 넣기
  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(data => this.heroes = data.slice(1, 5));

  }
}
