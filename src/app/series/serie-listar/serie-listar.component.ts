import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/serie.service';
import { Serie } from 'src/app/serie';
import { SerieDetail } from 'src/app/serieDetail';

@Component({
  selector: 'app-serie-listar',
  templateUrl: './serie-listar.component.html',
  styleUrls: ['./serie-listar.component.css']
})
export class SerieListarComponent implements OnInit {
  selectedSerie: SerieDetail;
  selected = false;


  onSelected(b: SerieDetail): void {
    this.selected = true;
    this.selectedSerie = b;
  }

  constructor(private serie: SerieService) {   }
  seasonsAverage(): any{
    let a=0;
   for(let i=0; i<this.series.length; i++){
        a+=this.series[i].seasons;
   }}
  public series: Array<SerieDetail>;
  getSerieList() {
    this.serie.getSeries().subscribe(cs => {
      this.series = cs;
      console.log(this.series);
    });}
  ngOnInit(): void {
    this.getSerieList();
    
  }

}
