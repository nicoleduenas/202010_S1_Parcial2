import { Component, OnInit, Input } from '@angular/core';
import { Serie } from 'src/app/serie';
import { SerieDetail } from 'src/app/serieDetail';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {
  @Input() serieDetail: SerieDetail;

  constructor() { }

  ngOnInit(): void {
  }

}