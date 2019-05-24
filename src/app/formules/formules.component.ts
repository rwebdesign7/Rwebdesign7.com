
import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Form} from '@angular/forms';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { UserInfo} from 'firebase';
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
  private Devis = '/Devis';
  besoins: string[] = ['Site Web', 'Application mobile', 'Les deux', 'autres'];
  chartes : string[] = ['oui', 'non ' , 'partiellement'];
  sociales : string[] = ['oui', 'non ' , 'partiellement'];
  modeles: string [] = ['Gratuit avec pubs', 'Application payantes', 'Achats intégrés -in app', 'Gratuit'];
  logos: string[] = ['oui', 'non'];
  cos: string[] = ['oui', 'non'];
  profils: string[] = ['oui', 'non'];
  rendus: string[] = ['Normal', 'Avancé', 'Sur mesure'];
  outils: string[] = ['Appareil photo', 'GPS', 'QR CODE', 'NFC/ Bluetooth / WIFI', 'non'];
  currentUser: firebase.User = null;
  besoin: FormControl;
  charte: FormControl;
  modele: FormControl;
  logo: FormControl;
  co: FormControl;
  profil: FormControl;
  rendu: FormControl;
  outil: FormControl;
  noms = FormControl;
  prénoms = FormControl;
  tel = FormControl;
  email = FormControl;
  database = firebase.database();



  createFormControls() {
    this.besoin = new FormControl('', Validators.required),
      this.charte = new FormControl('', Validators.required),
      this.modele = new FormControl('', Validators.required),
      this.logo = new FormControl('', Validators.required),
      // this.noms = new FormControl("", Validators.required),
      // this.prénoms = new FormControl("", Validators.required),
      // this.tel = new FormControl("", Validators.required),
      // this.email = new FormControl("", Validators.required),
      this.profil = new FormControl('', Validators.required),
      this.rendu = new FormControl('', Validators.required),
      this.outil = new FormControl('', Validators.required);

  }

  createForm() {
    this.firstFormGroup = new FormGroup({
      besoin: this.besoin,
      charte: this.charte,
      Modele: this.modele,
      logo: this.logo,
      co: this.logo,
      profil: this.profil,
      rendu: this.rendu,
      outil: this.outil,
      // prénom : this.prénom,
      // nom : this.nom,
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

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  favoriteSeason: string;


  constructor(private router: Router, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
