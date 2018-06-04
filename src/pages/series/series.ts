import { Component } from '@angular/core';
import { IonicPage, ModalController, AlertController } from 'ionic-angular';

/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {
	
	series:any[]; //arraylist de series
	serie:any;		//toda la informacion de series
	nombre:string;
	temporadas:string;
	genero:string;
	cadena:string;
	imagen:string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeriesPage');
	}
	//constructor con lo del modal y el alert, y dentro la informacion de cada serie que estan ya creadas
	constructor(private modal: ModalController, public alertCtrl: AlertController) {
		this.series=[
		{
			nombre:"Juego de tronos",
			temporadas:"7",
			genero:"Fantasía",
			cadena:"HBO",
			imagen:"http://r2.abcimg.es/resizer/resizer.php?imagen=http%3A%2F%2Fwww.abc.es%2Fmedia%2Fseries%2F000%2F002%2F180%2Fgame-of-thrones-4563-1.jpg&nuevoancho=620&medio=abc"
	},
	{
			nombre:"American horror story",
			temporadas:"7",
			genero:"Drama sobrenatural",
			cadena:"FX",
			imagen:"https://i2.wp.com/www.generacionfriki.es/wp-content/uploads/2016/12/American-Horror-Story-portada.jpg?resize=618%2C307"
	},
	{
			nombre:"Daredevil",
			temporadas:"2",
			genero:"Acción, ciencia ficción",
			cadena:"Netflix",
			imagen:"https://cdn2.areajugones.es/wp-content/uploads/2016/03/marvels-daredevil-2-810x400.jpg"
	},
	{
			nombre:"The punisher",
			temporadas:"1",
			genero:"Acción, genero policíaco",
			cadena:"Netflix",
			imagen:"http://lacosacine.com/www/resize/aHR0cDovL3NpdGUubGFjb3NhY2luZS5jb20vaW1nL3R2L3IzZmU0dmFfXzE1MTQ0MDQyNDIuanBlZw==/80/800/"
	},
	{
			nombre:"Narcos",
			temporadas:"3",
			genero:"Drama televisivo",
			cadena:"Netflix",
			imagen:"https://3.bp.blogspot.com/-DFDcaJnsDqA/WbVswiixY9I/AAAAAAAACZk/c_I15_Qmxzw28GSCydycOSRlH-sw4jlvwCLcBGAs/s1600/Portada.jpg"
	},
	{
			nombre:"Gotham",
			temporadas:"5",
			genero:"Drama televisivo",
			cadena:"FOX",
			imagen:"https://www.cherencov.com/wp-content/uploads/2016/07/Gotham-temporada-3-trailer-y-hechos-m%C3%A1s-destacados.jpg"
	}
	];
}
	openModal(serie) {
		
		let infoSerie = this.modal.create('ModalPage', { item:serie});	
		infoSerie.present();
}

	insertar_serie(data) {
		this.series.push(data);
		this.nombre='';
		this.temporadas='';
		this.genero='';
		this.cadena='';
		this.imagen='';
	}

	//funcion para que salga el formulario de insertar la serie
	doPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Formulario para insertar serie',
      message: 'Introducir serie',
      inputs: [
        {
          name: 'nombre',						//introducimos uno por uno la informacion que tenemos que introducir (nombre de serie, temporadas, genero...)
          placeholder: 'Nombre de la serie'
        },
        {
          name: 'temporadas',
          placeholder: 'temporadas'
        },
         {
          name: 'genero',
          placeholder: 'genero'
		},
		{
			name: 'cadena',
			placeholder: 'cadena'
		},
		{
		  name: 'imagen',
		  placeholder: 'url imagen'
		  },
      ],
      buttons: [	//botones de cancelar y de insertar
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Insertar',
          handler: data => {

          	this.insertar_serie(data); //esto llama al metodo de insertar_serie de arriba
        
          }
        }
      ]
    });

    alert.present();

  }
}