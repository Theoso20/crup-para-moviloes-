import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule, ActionSheetController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { star } from 'ionicons/icons';




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
  maxItems : number = 15;
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
      '2': {
        nombre: "juan",
        apellidos: "perez",
        direccion: "jr patita 147"
      },
      '3': {
        nombre: "juan",
        apellidos: "perez",
        direccion: "jr patita 147"
      },
        '4': {
          nombre: "juan",
          apellidos: "perez",
          direccion: "jr patita 147"
        },
        '5': {
          nombre: "juan",
          apellidos: "perez",
          direccion: "jr patita 147"
        },
          '6': {
            nombre: "juan",
            apellidos: "perez",
            direccion: "jr patita 147"
          },
          '7': {
            nombre: "juan",
            apellidos: "perez",
            direccion: "jr patita 147"
          },
            '8': {
              nombre: "juan",
              apellidos: "perez",
              direccion: "jr patita 147"
            },
            '9': {
              nombre: "juan",
              apellidos: "perez",
              direccion: "jr patita 147"
            },
              '10': {
                nombre: "juan",
                apellidos: "perez",
                direccion: "jr patita 147"
              },
              '11': {
                nombre: "juan",
                apellidos: "perez",
                direccion: "jr patita 147"
              },
                '12': {
                  nombre: "juan",
                  apellidos: "perez",
                  direccion: "jr patita 147"
                },
                '13': {
                  nombre: "juan",
                  apellidos: "perez",
                  direccion: "jr patita 147"
                },
                  '14': {
                    nombre: "juan",
                    apellidos: "perez",
                    direccion: "jr patita 147"
                  },
                  '15': {
                    nombre: "juan",
                    apellidos: "perez",
                    direccion: "jr patita 147"
                  },



  }
  currentsUsers: any = {};
  itemsPerPage : number = 5;

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

  loadUsers(){
    const keys = Object.keys(this.usuarios);
    const start = Object.keys(this.currentsUsers).length;
    const end = Math.min(start + this.itemsPerPage, keys.length);

    for(let i =start; i < end;i++){
      const key = keys[i];
      this.currentsUsers[key] = this.usuarios;
    }
  }

  loadMore(event:any){
  setTimeout(()=>{
    if(Object.keys(this.usuarios).length < this.maxItems){
      this.loadUsers ();
      event?.target.compplete();
    }
    else{
      event.target.disable = true;
    }
  },2000);

  }

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







