import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import * as firebase from 'firebase/app';
import { FormControl, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {
  currentUser: firebase.User = null;
  displayName: string = null;
  loginFormModalEmail = new FormControl('', Validators.email);
  loginFormModalPassword = new FormControl('', Validators.required);
  name: string;
  email: string;
  password: string;
  error: string;
  photoURL;
  user = firebase.auth().currentUser;
  constructor(private router: Router , public afAuth: AngularFireAuth, private authService: AuthService) {


  }

  ngOnInit(): void {

    this.authService.getAuthState().subscribe(user => {
      if (user) {

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

  login(): void {
    if (this.email && this.password) {
      this.authService.loginWithEmailAndPassword(this.email, this.password)
        .then(res => {
          this.router.navigateByUrl('/home');
        })
        .catch(err => {
          console.error(err);
          this.error = 'Unable to login!';
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

  register(): void {
    if (this.name && this.email && this.password) {
      this.authService.register(this.email, this.password)
        .then(res => {
          console.log('updating profile');
          this.authService.updateProfile(this.name)
            .then(() => {
              console.log('profile updated');
              this.router.navigateByUrl('/home');
            })
            .catch(err => {
              console.error(err);
              this.error = 'Unable to update profile!';
            });
        })
        .catch(err => {
          console.error(err);
          this.error = 'Unable to register!';
        });
    } else {
      this.error = 'Please provide all mandatory fields!';
    }
  }
  logOut(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  cancel(): void {
    this.name = null;
    this.email = null;
    this.password = null;
  }

}
