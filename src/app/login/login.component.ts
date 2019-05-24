import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  user = firebase.auth().currentUser;
  currentUser: firebase.User = null;
  displayName: string = null;

  name: string;

  error: string;
  photoURL;


  constructor(private router: Router, private authService: AuthService, public auth: AuthService) { }

  ngOnInit(): void {    if (this.user != null) {
    this.user.providerData.forEach(function (profile) {
      console.log('Sign-in provider: ' + profile.providerId);
      console.log('  Provider-specific UID: ' + profile.uid);
      console.log('  Name: ' + profile.displayName);
      console.log('  Email: ' + profile.email);
      console.log('  Photo URL: ' + profile.photoURL);
    });
  } }
  login(): void {


    if (this.email && this.password) {
      this.authService.loginWithEmailAndPassword(this.email, this.password)
        .then(res => {
          this.router.navigateByUrl('/contact');
        })
        .catch(err => {
          console.error(err);
          this.error = 'impossible de se logger';
        });
    } else {
      this.error = 'Please provide all mandatory fields!';
    }
  }

  loginWithFacebook(): void {
    this.authService.loginWithFacebook()
      .then(res => {
        this.router.navigateByUrl('/home');
      })
      .catch(err => {
        console.error(err);
        this.error = 'Unable to login with Facebook!';
      });
  }

  loginWithTwitter(): void {
    this.authService.loginWithTwitter()
      .then(res => {
        this.router.navigateByUrl('/home');
      })
      .catch(err => {
        console.error(err);
        this.error = 'Unable to login with Twitter! ';
      });
  }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle()
      .then(res => {
        this.router.navigateByUrl('/home');
      })
      .catch(err => {
        console.error(err);
        this.error = 'Impossible de se logger avec Gogole';
      });
  }

  loginWithGithub(): void {
    this.authService.loginWithGithub()
      .then(res => {
        this.router.navigateByUrl('/home');
      })
      .catch(err => {
        console.error(err);
        this.error = 'Unable to login with Facebook!';
      });
  }

  loginAnonymously(): void {
    this.authService.loginAnonymously()
      .then(res => {
        this.router.navigateByUrl('/home');
      })
      .catch(err => {
        console.error(err);
        this.error = 'Unable to login anonymously!';
      });
  }

  cancel(): void {
    this.email = null;
    this.password = null;
  }

}
