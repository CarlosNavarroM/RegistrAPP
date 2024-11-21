import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendanceHistoryPage } from './attendance-history.page';
import { AngularFireModule } from '@angular/fire/compat'; 
import { environment } from 'src/environments/environment';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouteReuseStrategy } from '@angular/router';
describe('AttendanceHistoryPage', () => {
  let component: AttendanceHistoryPage;
  let fixture: ComponentFixture<AttendanceHistoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
        ],
      providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    });
    fixture = TestBed.createComponent(AttendanceHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
