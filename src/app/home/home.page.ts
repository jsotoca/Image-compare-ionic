import { Component, ElementRef, ViewChild } from '@angular/core';
import ImageCompare from "image-compare-viewer";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('compare', { static: true }) compare: ElementRef;
  constructor() {
    
  }
  ngAfterViewInit() {
    const options = {

      // UI Theme Defaults
    
      controlColor: "#FFFFFF",
      controlShadow: true,
      addCircle: false,
      addCircleBlur: true,
    
      // Label Defaults
    
      showLabels: false,
      labelOptions: {
        before: 'Before',
        after: 'After',
        onHover: false
      },
    
      // Smoothing
    
      smoothing: true,
      smoothingAmount: 100,
    
      // Other options
    
      hoverStart: false,
      verticalMode: false,
      startingPoint: 50,
      fluidMode: false
    };
    const viewer = new ImageCompare(this.compare.nativeElement,options).mount();
  }

}
