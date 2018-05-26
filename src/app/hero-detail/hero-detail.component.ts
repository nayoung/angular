import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()
  Hero: Hero;

  constructor(private route: ActivatedRoute,
              private  heroService: HeroService) { }

  ngOnInit() {
    console.log('detail');
    // detail/:id url에서 id값 추출
    this.route.params
      .subscribe(params => {
        //console.log(params);
        const id = +params['id'];  // string을 number로 변환
        // 서비스에서 id에 해당하는 Hero 모델 추출
        this.getHero(id);
      });
  }
  getHero(id: number) {
    this.heroService.getHero(id)
      .subscribe(data => this.Hero = data);
  }
}
