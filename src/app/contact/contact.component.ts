import { ConnectionService } from './connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../auth.service';
import {auth} from 'firebase';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton = true;
  optionsSelect: Array<any>;
  currentUser: firebase.User = null;
  displayName: string = null;
photoURL;
  name: string;
  email: string;
  password: string;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private connectionService: ConnectionService, private authService: AuthService) {

    this.contactForm = fb.group({
      'contactFormName': [ '', Validators.required ],
      'contactFormEmail': [ '', Validators.compose([ Validators.required, Validators.email ]) ],
      'contactFormSubjects': [ '',  ],
      'contactFormMessage': [ '', Validators.required ],
      'contactFormCopy': [ '' ],
    });
  }

  ngOnInit() {
    this.authService.getAuthState().subscribe(user => {
      if (user) {
        this.email = user.email;
        this.photoURL = user.photoURL;
        this.currentUser = user;
        this.displayName = user.displayName ? user.displayName : user.email ? user.email : user.uid;
        if (this.currentUser.isAnonymous) {
          this.displayName = 'Anonymous';
        }
      } else {
        this.currentUser = null;
        this.displayName = null;
      }
    });
  }



  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Votre message a été envoyé.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('erreur de formulaire', error);
    });
  }

}
