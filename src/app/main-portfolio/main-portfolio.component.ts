import { Component, OnInit, OnChanges, AfterContentInit, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main-portfolio',
  templateUrl: './main-portfolio.component.html',
  styleUrls: ['./main-portfolio.component.scss']
})
export class MainPortfolioComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy {
  public words: any;
  public wordArray: any = [];
  public currentWord = 0;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    this.words = document.getElementsByClassName('word');
    this.words[this.currentWord].style.opacity = 1;
    for (let i = 0; i < this.words.length; i++) {
      this.splitLetters(this.words[i]);
    }
    this.changeWord();
    setInterval(() => {
      this.changeWord();;
    }, 4000);
  }

  public changeWord(): void {
    let cw: any = this.wordArray[this.currentWord];
    let nw: any = this.currentWord == this.words.length - 1 ? this.wordArray[0] : this.wordArray[this.currentWord + 1];
    for (let i = 0; i < cw['length']; i++) {
      this.animateLetterOut(cw, i);
    }

    for (let i = 0; i < nw['length']; i++) {
      nw[i]['className'] = 'letter behind';
      nw[0]['parentElement']['style']['opacity'] = 1;
      this.animateLetterIn(nw, i);
    }

    this.currentWord = (this.currentWord == this.wordArray.length - 1) ? 0 : this.currentWord + 1;
  }

  public animateLetterOut(cw: any, i: any): void {
    setTimeout(() => {
      cw[i].className = 'letter out';
    }, i * 80);
  }

  public animateLetterIn(nw: any, i: any): void {
    setTimeout(() => {
      nw[i].className = 'letter in';
    }, 340 + (i * 80));
  }

  public splitLetters(word: any): void {
    let content = word.innerHTML;
    word.innerHTML = '';
    let letters: any = [];
    for (let i = 0; i < content.length; i++) {
      let letter = document.createElement('span');
      letter.className = 'letter';
      letter.innerHTML = content.charAt(i);
      word.appendChild(letter);
      letters.push(letter);
    }

    this.wordArray.push(letters);
  }



  ngOnDestroy(): void {

  }
}
