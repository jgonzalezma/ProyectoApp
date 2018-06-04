import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
	serie;
  constructor(private navParams: NavParams, private view: ViewController) {
	  this.serie = this.navParams.get('item');
  }

  ionViewDidLoad() {
	  console.log('ionViewDidLoad ModalPage');
  }
  
  closeModal() {
		this.view.dismiss();
	}
}
