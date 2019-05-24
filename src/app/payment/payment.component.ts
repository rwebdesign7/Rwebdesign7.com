import { Component } from '@angular/core';



@Component({

  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})

export class PaymentComponent {
handler: any;
  openCheckout() {
   this.handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_23p8pkci95NVhEC5hi2lKacf005wYR3IgL',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    this.handler.open({
      name: 'RWEBDESIGN',
      description: 'Site sur mesure',
      amount: 2000
    });

  }


}
