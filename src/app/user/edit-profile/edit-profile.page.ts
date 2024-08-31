import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage {

  constructor() {}

  changeProfilePicture() {
    // Lógica para cambiar la imagen de perfil
    console.log('Cambiar imagen de perfil');
  }

  saveChanges() {
    // Lógica para guardar los cambios del perfil
    console.log('Guardar cambios del perfil');
  }
}
