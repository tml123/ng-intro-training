import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import sdk from '@stackblitz/sdk';
@Component({
  selector: 'app-stackblitz',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.scss']
})
export class StackblitzComponent implements AfterViewInit {
  @ViewChild('stackblitz', { read: ElementRef, static: true }) stackblitz: ElementRef;
  @Input() gitrepo: string;
  constructor() { }

  ngAfterViewInit() {
    sdk.embedGithubProject(
      'stackblitz',
      this.gitrepo,
      {
        height: '100%'
      }
    );
  }

}
