import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    //  http 를 호출하여 hero 데이터 가져옴
    // 메시지 생산
    this.messageService.add('heroes data fetched');
    return of(HEROES);
  }

  // id에 해당하는 Hero객체 추출
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(item => item.id === id);
    return of(hero);
  }
}
