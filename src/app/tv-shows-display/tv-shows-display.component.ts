import { Component, OnInit } from '@angular/core';
import { IarrayTvShowsDisplay } from '../itv-shows-display';
import { TvShowService } from '../tv-show.service';

@Component({
  selector: 'app-tv-shows-display',
  templateUrl: './tv-shows-display.component.html',
  styleUrls: ['./tv-shows-display.component.css']
})
export class TvShowsDisplayComponent implements OnInit {
currentdata: IarrayTvShowsDisplay;
  constructor(private tvshowservice: TvShowService) { }

  ngOnInit(): void {
    this.tvshowservice.getShowDetails('girls').subscribe(data => this.currentdata = data)
  }

}
