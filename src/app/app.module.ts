import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ImportantTopicsComponent } from './important-topics/important-topics.component';
import { QuestionAnswersComponent } from './question-answers/question-answers.component';
import { MainPortfolioComponent } from './main-portfolio/main-portfolio.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { PlayGroundComponent } from './play-ground/play-ground.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    ImportantTopicsComponent,
    QuestionAnswersComponent,
    MainPortfolioComponent,
    CardComponent,
    ModalComponent,
    PlayGroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
