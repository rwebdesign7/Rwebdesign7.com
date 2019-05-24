import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
import * as firebase from 'firebase/app';
import {FormControl, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  currentUser: firebase.User = null;
  displayName: string = null;

  name: string;
  email: string;
  password: string;
  error: string;
  photoURL;
  user = firebase.auth().currentUser;
zip: string;
  constructor(private router: Router , public afAuth: AngularFireAuth, private authService: AuthService) {}

  ngOnInit(): void {
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


  register(): void {
    if (this.name && this.email && this.password && this.zip) {
      this.authService.register(this.email, this.password)
        .then(res => {
          this.user.sendEmailVerification().then(function() {
            alert('verifier votre boite mail');
          }).catch(function() {
            alert('erreur fatal');
          });
          console.log('updating profile');
          this.authService.updateProfile(this.name)
            .then(res => {
              console.log('profile updated');
              this.router.navigateByUrl('/home');
            })

            .catch(err => {
              console.error(err);
              this.error = 'Imposible de metre le profil a jour';
            });
        })


    .catch(err => {
          console.error(err);
          this.error = 'Impossible de creer le compte';
        });
    } else {
      this.error = 'Merci de renseigner tous les champs';
    }
  }

  cancel(): void {
    this.name = null;
    this.email = null;
    this.password = null;
  }

}
