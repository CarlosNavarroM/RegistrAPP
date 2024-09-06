import { Component, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnDestroy {

  constructor(private navCtrl: NavController) {}

  changeProfilePicture() {
    // Lógica para cambiar la imagen de perfil
    console.log('Cambiar imagen de perfil');
  }

  saveChanges() {
    // Lógica para guardar los cambios del perfil
    console.log('Guardar cambios del perfil');
  }

  // Método para regresar a la vista anterior
  goBack() {
    this.navCtrl.back();
  }

  ngOnDestroy() {
    console.log('EditProfilePage destruido');
  }
}
