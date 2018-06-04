import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the insertarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insertar',
  templateUrl: 'insertar.html',
})
export class InsertarPage {

  nombre_serie:string = '';
  temporadas_serie:string = '';
  genero_serie:string = '';
  cadena_serie:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }
}