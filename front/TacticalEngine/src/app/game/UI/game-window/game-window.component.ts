import { Component, OnInit, ViewChild } from '@angular/core';

declare var PIXI:any;

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit {

  constructor()
  {
    //this.app = new PIXI.Application({
    //  width: 800,
    //  height: 600
    //});
    //this.gameWindowView = this.app.view;
  }

  ngOnInit(): void {
    this.app = new PIXI.Application({ 
      width: window.innerWidth,         // default: 800
      height: window.innerHeight,        // default: 600
      antialias: true,    // default: false
      transparent: false, // default: false
      resolution: 1,       // default: 1
      backgroundColor: 0x5577ff55
    });
    // Resize to match resolution.
    this.app.renderer.autoResize = true;
    var leftPanel = document.getElementById("gameWindowContainer").appendChild(this.app.view);

    var basicText = new PIXI.Text('Basic text in pixi');
    basicText.x = 30;
    basicText.y = 90;

    this.app.stage.addChild(basicText);
  }

  ngAfterViewInit() {
    //console.log(this.container.nativeElement.value);
    //this.container.nativeElement.insertAdjacentHTML('beforeeend', this.app.view);
  }

  @ViewChild('gameWindowContainer') container;
  public app: any;
  gameWindowView: any;

}
