import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';

@Component({
  selector: 'app-aprenda-jogar',
  templateUrl: './aprenda-jogar.page.html',
  styleUrls: ['./aprenda-jogar.page.scss'],
})
export class AprendaJogarPage implements OnInit {

  constructor(private youtube: YoutubeVideoPlayer) { }

  ngOnInit() {    
  }
  videoTutorialPlay(){
    this.youtube.openVideo('Kzuo6hJit8Q&t=20s');
  }

}
