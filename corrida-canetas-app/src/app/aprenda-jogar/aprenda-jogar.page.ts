import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
// import { File } from '@awesome-cordova-plugins/file';

@Component({
  selector: 'app-aprenda-jogar',
  templateUrl: './aprenda-jogar.page.html',
  styleUrls: ['./aprenda-jogar.page.scss'],
})
export class AprendaJogarPage implements OnInit {  

  constructor(private youtube: YoutubeVideoPlayer)
    // private transfer: FileTransfer
    // , private file: File) 
    {
    
  }

  // const fileTransfer: FileTransferObject = this.transfer.create();
  
  ngOnInit() {
  }
  videoTutorialPlay() {
    this.youtube.openVideo('Kzuo6hJit8Q&t=20s');    
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
