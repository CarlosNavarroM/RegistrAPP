import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qr-view',
  templateUrl: './qr-view.page.html',
  styleUrls: ['./qr-view.page.scss'],
})
export class QrViewPage implements OnInit, OnDestroy {
  codigoQR: string | null = null;
  fecha: string | null = null;
  seccion: string | null = null;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    // Obtener los datos de la URL
    this.codigoQR = this.route.snapshot.paramMap.get('codigoQR');
    this.fecha = this.route.snapshot.paramMap.get('fecha');
    this.seccion = this.route.snapshot.paramMap.get('seccion');
  }

  // Este método es para retroceder y terminar el componente de manera limpia
  goBack() {
    this.navCtrl.back();  // Navegar hacia atrás en el historial
  }

  // Se ejecuta cuando el componente se destruye
  ngOnDestroy() {
    console.log('QrViewPage destruido');
  }
}
