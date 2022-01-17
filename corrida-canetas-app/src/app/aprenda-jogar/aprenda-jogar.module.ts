import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AprendaJogarPageRoutingModule } from './aprenda-jogar-routing.module';
import { AprendaJogarPage } from './aprenda-jogar.page';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { File } from '@awesome-cordova-plugins/file';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprendaJogarPageRoutingModule,  
  ],
  providers:[
    YoutubeVideoPlayer,
    FileTransfer,
    FileTransferObject
  ],
  declarations: [AprendaJogarPage]
})
export class AprendaJogarPageModule {}
