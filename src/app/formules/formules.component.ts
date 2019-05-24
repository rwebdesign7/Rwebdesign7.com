
import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Form} from '@angular/forms';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
/**
 * @title Stepper vertical
 */

@Component({
  selector: 'app-formules',
  templateUrl: './formules.component.html',
  styleUrls: ['./formules.component.scss']
})

export class FormulesComponent implements OnInit {
  firstFormGroup: FormGroup;
  private Devis = '/Devis';
  besoins: string[] = ['Site Web', 'Application mobile', 'Les deux', 'autres'];
  chartes: string[] = ['oui', 'non ' , 'partiellement'];
  sociales: string[] = ['oui', 'non ' , 'partiellement'];
  modeles: string [] = ['Gratuit avec pubs', 'Application payantes', 'Achats intégrés -in app', 'Gratuit'];
  logos: string[] = ['oui', 'non'];
  cos: string[] = ['oui', 'non'];
  profils: string[] = ['oui', 'non'];
  rendus: string[] = ['Normal', 'Avancé', 'Sur mesure'];
  outils: string[] = ['Appareil photo', 'GPS', 'QR CODE', 'NFC/ Bluetooth / WIFI', 'non'];
  currentUser: firebase.User = null;
  besoin = FormControl;
  charte = FormControl;
  modele = FormControl;
  logo = FormControl;
  co = FormControl;
  profil = FormControl;
  rendu = FormControl;
  outil = FormControl;
  tel = FormControl;
  email = FormControl;
  database = firebase.database();

  constructor ( private router: Router, private fb: FormBuilder) {

  }
  ngOnInit() {
    this.firstFormGroup = new FormGroup({
        besoin: new FormControl(),
        charte: new FormControl(),
        modele: new FormControl(),
        logo: new FormControl(),
        profil: new FormControl(),
        rendu: new FormControl(),
        outil: new FormControl(),
      });
    this.firstFormGroup = this.fb.group({
      besoin: [ '', Validators.required ],
      charte: [ '', Validators.compose([ Validators.required, Validators.email ]) ],
      modele: [ '',  ],
      logo: [ '', Validators.required ],
      profil: [ '' ],
      rendu: [ '' ],
      outil: [ '' ],
    });
  }




  // Return an observable list with optional query
  // You will usually call this from OnInit in a component

// todo finir firebase crud

Onsubmit() {

    console.log('Form Submitted!');
    console.log(this.firstFormGroup.value);
      // @ts-ignore
  firebase.database().ref('Devis/' + UserInfo).set({
        devis: this.firstFormGroup.value,
      }).then(res => {
        this.router.navigateByUrl('/home');
      });
    }

}
