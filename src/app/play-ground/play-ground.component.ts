import { Component } from '@angular/core';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.scss']
})
export class PlayGroundComponent {

  public zoomin(): any {
    var myImg = document.getElementById("map") as HTMLElement;
    var currWidth = myImg?.clientWidth || 0;
    if (currWidth == 2500) return false;
    else {
      myImg.style.width = (currWidth + 100) + "px";
    }
  }
  public zoomout(): any {
    var myImg = document.getElementById("map") as HTMLElement;
    var currWidth = myImg?.clientWidth || 0;
    if (currWidth == 100) return false;
    else {
      myImg.style.width = (currWidth - 100) + "px";
    }
  }

}
