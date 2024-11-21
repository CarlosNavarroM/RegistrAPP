import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilePage } from './profile.page';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';

describe('ProfilePage', () => {
  let component: ProfilePage;
  let fixture: ComponentFixture<ProfilePage>;

  // Mock de usuario
  const mockUser: User = {
    uid: '1',
    name: 'John Doe',
    email: 'johndoe@example.com',
    rut: '12345678-9',
    role: 'Docente',
    password: 'password123',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        UtilsService, 
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePage);
    component = fixture.componentInstance;

    spyOn(TestBed.inject(UtilsService), 'getFromLocalStorage').and.returnValue(mockUser);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('datos del usuario cargados correctamente', () => {
    expect(component.user).toEqual(mockUser);
  });
});
