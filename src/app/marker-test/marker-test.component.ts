import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-marker-test',
  templateUrl: './marker-test.component.html',
  styleUrls: ['./marker-test.component.scss']
})
export class MarkerTestComponent implements OnInit {
  overlay: boolean = true;

  @Input()
  set opened(value: boolean) {
    this.overlay = value;
  }

  constructor() { }

  ngOnInit(): void {
  }
  closeOverlay() {
    this.overlay = false;
  }


}
