import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule, ActionSheetController } from '@ionic/angular';
import { RouterModule } from '@angular/router';




@Component({

  selector: 'app-usuarios',

  templateUrl: './usuarios.page.html',

  styleUrls: ['./usuarios.page.scss'],

  standalone: true,

  imports: [ IonicModule, CommonModule, IonicModule, RouterModule ]

})

export class UsuariosPage  {

  //array
  items = ['item1','item2','item3','item4'];

  //json

  usuarios = {
    '0': {
      nombre: "juan",
      apellidos: "perez",
      direccion: "jr patita 147"
    },
    '1': {
      nombre: "juan",
      apellidos: "perez",
      direccion: "jr patita 147"
    },


  }

  // public actionSheetButtons = [
  //   {
  //     text: 'Editar',
  //     role: 'destructive',
  //     data: {
  //       action: 'edit',
  //     },
  //   },
  //   {
  //     text: 'Eliminar',
  //     role: 'destructive',
  //     data: {
  //       action: 'delete',
  //     },
  //   },

  // ];


  constructor(private actionSheetCtrl: ActionSheetController) { }

  async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Lista de opciones",
      buttons: [
        {
          text: "Editar",
          handler: () => {
            alert("Seleccionaste editar")
          }
        },
        {
          text: "Eliminar",
          handler: () => {
            alert("Seleccionaste eliminar")
          }
        },
      ]
    });
    await actionSheet.present();
  }









}







