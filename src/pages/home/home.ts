import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nombreEstacionamiento:any = "Wallmart";
  valor:any="";

  constructor(public navCtrl: NavController) {
    this.nombreEstacionamiento = "SBT";
  }

  public cambiarNombre(valor){
    this.nombreEstacionamiento="mall "+valor;
  }
  

}
