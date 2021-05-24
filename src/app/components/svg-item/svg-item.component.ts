import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-item',
  templateUrl: './svg-item.component.html',
  styleUrls: ['./svg-item.component.scss']
})
export class SvgItemComponent implements OnInit {

  @Input()
  svgPath: string = '';

  @Input()
  label: string = '';

  @Input()
  height: number = 50;

  @Input()
  width: number = 50;

  svg?: SafeHtml;

  showLabel: boolean = false;


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const svgString =
      `<svg viewBox="0 0 128 128" style="height: ${this.height}px; width: ${this.width}px;">${this.svgPath}</svg>`
    this.svg = this.sanitizer.bypassSecurityTrustHtml(svgString)
  }

}
