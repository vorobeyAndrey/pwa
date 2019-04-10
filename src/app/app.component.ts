import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa';
  constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar){
    console.log('new version 5');
    const t = 5;
    const tt = 5;
    const tttrt = 5345;
    const ttttrt = 5;
    const tttdtd = 523234;
    const tttdtdd = 5234234234;
    const tttdddtdd = 5234234234;
    const tttdddtddd = 5234234234;



    const tttdt = 5;
    if('serviceWorker' in navigator){
      // Handler for messages coming from the service worker
      navigator.serviceWorker.addEventListener('message', function(event){
          console.log("Client 1 Received Message: " + event);
          // event.ports[0].postMessage("Client 1 Says 'Hello back!'");
      });
  }
    this.swUpdate.available.subscribe(evt => {
      const snack = this.snackbar.open('Update Available', 'Reload');

      snack
        .onAction()
        .subscribe(() => {
          window.location.reload();
        });

    });
  }

}
