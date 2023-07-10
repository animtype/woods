import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pohistvo',
  templateUrl: './pohistvo.component.html',
  styleUrls: ['./pohistvo.component.scss']
})
export class PohistvoComponent implements OnInit {


  public sliderWidth: number = 0;
  public sliderHeight: number = 0;
  public sliderDepth: number = 0;

  public min: number = 40;
  public max: number = 200;
  public step: number = 10;

  

  constructor() { }

  ngOnInit(): void {
    this.sliderWidth = 100;
    this.sliderHeight = 60;
    this.sliderDepth = 60;
  }

  onSliderChange() { }


}
