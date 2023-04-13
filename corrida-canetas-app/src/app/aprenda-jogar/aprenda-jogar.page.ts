import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aprenda-jogar',
  templateUrl: './aprenda-jogar.page.html',
  styleUrls: ['./aprenda-jogar.page.scss'],
})
export class AprendaJogarPage implements OnInit {  

  constructor()
    {
    
  }
  
  ngOnInit() {
  }

  // download() {
  //   const url = 'http://www.example.com/file.pdf';
  //   this.fileTransfer.download(url, this.file.dataDirectory + 'tutorialCorridaDeCanetas.pdf').then((entry) => {
  //     console.log('download complete: ' + entry.toURL());
  //   }, (error) => {
  //     // handle error
  //   });
  // }
}
