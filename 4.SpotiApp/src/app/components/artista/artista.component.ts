import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista: any;
  constructor(private activatedRouter: ActivatedRoute, private  spotifyService: SpotifyService) {
  }

  ngOnInit() {

    this.activatedRouter.params
      .map(parametros => parametros['id'])
      .subscribe(id => {
        // console.log(id);
        this.spotifyService.getArtista(id)
          .subscribe( data => this.artista = data);
      });
  }

}
