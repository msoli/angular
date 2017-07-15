import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SpotifyService]
})
export class SearchComponent implements OnInit {

  termino: string = '';


  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {


  }


  buscarTermino() {


    this.spotifyService.getArtistas(this.termino)
      .subscribe(item => {
        // console.log(item);
      });

  }

}
