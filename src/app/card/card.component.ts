import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ModalService } from './../services/modal.service';

export interface IExp {
  company: string,
  tenure: string,
  logo: string,
  designation: string
}

export interface IProject {
  project: string,
  client: string;
  description: string,
  responsibilities: string[],
  tools: string;
}

export interface IEducation {
  education: string,
  institution: string,
  board: string,
  yearOfPassing: string,
  mark: string
}

export interface IPersonal {
  nationality: string,
  languages: []
}

export interface IDetails {
  exp: IExp[],
  projects: IProject[],
  education: IEducation[],
  personalDetails: IPersonal[]
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges, OnDestroy {
  @Input() load: 'about' | 'experience' | 'project' | 'education' | 'personal' = 'about';

  public details: IExp[] | undefined = undefined;
  public projectDetails: IProject[] | undefined = undefined;
  public education: IEducation[] | undefined = undefined;
  public personal: IPersonal[] | undefined = undefined;
  public url: string = '';
  public base: string = '';
  

  constructor(private http: HttpClient, protected modalService: ModalService) {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.url = './assets/experience.json';
    this.base = './assets/'
    this.http.get<IDetails>(this.url).subscribe((details) => {
      console.log(details);
      this.details = details.exp;
      this.projectDetails = details.projects;
      this.education = details.education;
      this.personal = details.personalDetails;
    })

  }

  ngOnDestroy(): void {

  }
}
