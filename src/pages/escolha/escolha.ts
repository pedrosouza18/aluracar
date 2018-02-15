import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Carro } from '../modelos/carros';

/**
 * Generated class for the EscolhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage {

  public carro: Carro;
  public fotos: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carro = this.navParams.get('carroSelecionado');

    this.fotos = this.carro.fotos.map(foto => {
      return foto.replace('http://localhost:8080', 'http://192.168.40.37:8080');
    });
  }

  ionViewDidLoad() {
  }

}
