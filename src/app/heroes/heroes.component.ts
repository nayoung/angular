import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero;
  heroes = HEROES;
  constructor() {
    /*
    this.hero = {
      id: 1,
      name: 'Hi Webstorm'
    };*/
    this.hero = new Hero();
    this.hero.id = 1;
    this.hero.name = 'Webstorm';
  }

  ngOnInit() {
  }
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

/* es5 형식
  onSelect: function(hero) {
    console.log(hero);
  }

  typescript
  onSelect(hero: Hero) {
    console.log(hero);
  }
  */
}
