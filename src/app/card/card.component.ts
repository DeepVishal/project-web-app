import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IExp {
  "company": string,
  "tenure": string,
  "logo": string,
  "designation": string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges, OnDestroy {
  public exp: IExp[] = [];
  public url: string = '';
  public base: string = '';

  constructor(private http: HttpClient) {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.url = './assets/experience.json';
    this.base = './assets/'
    this.http.get<IExp[]>(this.url).subscribe((exp) => {
      console.log(exp);
      this.exp = exp;
    })

  }

  ngOnDestroy(): void {

  }
}
