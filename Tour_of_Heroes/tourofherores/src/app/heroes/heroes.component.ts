import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Hero } from '../hero';
import { HEROES} from '../mock-heroes'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = []

  heroes: Hero[] = [];

  }
  
  ggetHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  constructor(private heroService: HeroService, private messageService: MessageService) {}


  ngOnInit(): void {
    this.getHeroes();



  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }






