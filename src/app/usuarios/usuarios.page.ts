import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

// import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { IonicModule } from '@ionic/angular';




@Component({

  selector: 'app-usuarios',

  templateUrl: './usuarios.page.html',

  styleUrls: ['./usuarios.page.scss'],

  standalone: true,

  imports: [ IonicModule ],

  // imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]

})

export class UsuariosPage implements OnInit {




  constructor() { }

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  ngOnInit() {

  }
}









