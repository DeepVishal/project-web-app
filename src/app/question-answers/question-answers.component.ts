import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IQuestions {
  question: string;
  answer: string;
  important?: boolean;
}
@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.scss']
})
export class QuestionAnswersComponent implements OnInit, OnChanges, OnDestroy {
  public questions: IQuestions[] = [];
  public url: string = '';

  constructor(private http: HttpClient) {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.url = './assets/question-bank.json';
    this.http.get<IQuestions[]>(this.url).subscribe((quest) => {
      console.log(quest);
      this.questions = quest;
    })

  }

  ngOnDestroy(): void {

  }
}
