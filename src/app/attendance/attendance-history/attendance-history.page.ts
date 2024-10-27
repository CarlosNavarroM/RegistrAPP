import { Component, inject } from '@angular/core';
import { Asistencias } from 'src/app/models/asistencias.model';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-attendance-history',
  templateUrl: './attendance-history.page.html',
  styleUrls: ['./attendance-history.page.scss'],
})

export class AttendanceHistoryPage {

  utilsSvc = inject(UtilsService);
  firebaseSvc = inject(FirebaseService);

  asistencias: Asistencias[] = [];

  ngOnInit() {
  }

  user(): User{
    return this.utilsSvc.getFromLocalStorage('user');
  }
  ionViewWillEnter() {
    this.getAsistencias();
  }

  getAsistencias() {
    let path = `users/${this.user().uid}/asistencias`;
    let sub = this.firebaseSvc.getCollectionData(path).subscribe({
      next: (res: any) => {
        console.log(res);
        this.asistencias = res; 
        sub.unsubscribe();  
      }
    })
  }

}

