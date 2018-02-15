import { NavLifecycles } from './../../utils/ionic/nav/nav-lificycle';
import { CarrosServiceProvider } from './../../providers/carros-service/carros-service';
import { Carro } from './../modelos/carros';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { EscolhaPage } from '../escolha/escolha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles{

  public carros: Array<Carro>;

  constructor(public navCtrl: NavController, private _loadingCtrl: LoadingController
    , private _alertCtrl: AlertController, private carrosService: CarrosServiceProvider) {}

  //Carregar após carregar o componente
  ionViewDidLoad() {
    let loading = this._loadingCtrl.create({
      content: 'Carregando carros ...'
    });

    loading.present();

    this.carrosService.listar()
      .then(data => data.json())
      .then(data => {
        this.carros = data;
        loading.dismiss();
      })
      .catch((error) => {
        loading.dismiss();

        this._alertCtrl.create({
          title: 'Falha',
          subTitle: 'Não foi possível carregar a lista de carros. Tente novamente!',
          buttons: [
            {
              text: 'OK'
            }
          ]
        }).present();
      });
  }

  selecionaCarro(carro: Carro) {
    this.navCtrl.push(EscolhaPage, {
      carroSelecionado: carro
    });
  }

}
