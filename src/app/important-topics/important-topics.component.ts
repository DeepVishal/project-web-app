import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ITopics {
  tech: string,
  stack: [
    {
      type: string,
      topics: []
    }
  ]
}
@Component({
  selector: 'app-important-topics',
  templateUrl: './important-topics.component.html',
  styleUrls: ['./important-topics.component.scss']
})
export class ImportantTopicsComponent implements OnInit, OnChanges, OnDestroy {
  public topics: ITopics[] = [];
  public url: string = '';

  constructor(private http: HttpClient) {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.url = './assets/important-topics.json';
    this.http.get<ITopics[]>(this.url).subscribe((topics) => {
      console.log(topics);
      this.topics = topics;
    })

  }

  ngOnDestroy(): void {

  }
}
