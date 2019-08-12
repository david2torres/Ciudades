import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  transform( value: String): any {

    const url = 'https://open.spotify.com/embed/album/';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
