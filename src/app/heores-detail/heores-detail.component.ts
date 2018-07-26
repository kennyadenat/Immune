import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../data/hero'

@Component({
  selector: 'app-heores-detail',
  templateUrl: './heores-detail.component.html',
  styleUrls: ['./heores-detail.component.css']
})
export class HeoresDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
