import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero;
//  heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {
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
    this.getHeroes();
  }

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

  getHeroes() {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
      });
  }
}
