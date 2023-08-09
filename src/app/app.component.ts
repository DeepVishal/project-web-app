import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-deep';
  public bodyText = 'This text can be updated in modal 1';

  constructor(protected modalService: ModalService) { }
}
