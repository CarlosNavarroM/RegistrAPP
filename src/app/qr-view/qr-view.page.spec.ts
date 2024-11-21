import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrViewPage } from './qr-view.page';
import { AngularFireModule } from '@angular/fire/compat'; 
import { environment } from 'src/environments/environment';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';
import { RouteReuseStrategy } from '@angular/router';
describe('QrViewPage', () => {
  let component: QrViewPage;
  let fixture: ComponentFixture<QrViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
        ],
      providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    });
    fixture = TestBed.createComponent(QrViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
