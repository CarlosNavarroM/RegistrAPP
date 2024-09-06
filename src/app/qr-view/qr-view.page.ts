import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qr-view',
  templateUrl: './qr-view.page.html',
  styleUrls: ['./qr-view.page.scss'],
})
export class QrViewPage implements OnInit {
  codigoQR: string | null = null;
  fecha: string | null = null;
  seccion: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Recoger los datos pasados desde la página anterior
    this.codigoQR = this.route.snapshot.paramMap.get('codigoQR');
    this.fecha = this.route.snapshot.paramMap.get('fecha');
    this.seccion = this.route.snapshot.paramMap.get('seccion');
  }
}
