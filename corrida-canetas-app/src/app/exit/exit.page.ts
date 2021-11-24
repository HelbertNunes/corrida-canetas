import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.page.html',
  styleUrls: ['./exit.page.scss'],
})
export class ExitPage implements OnInit {

  constructor(private navCtrl: NavController){}

  goBack() {
      this.navCtrl.back();
  }

  ngOnInit() {
  }

}
