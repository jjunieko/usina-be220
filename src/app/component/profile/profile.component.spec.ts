import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render profile image and text', () => {
    component.title = 'John Doe';
    component.level = 'Beginner';
    component.imageUrl = 'path_to_image.jpg';
    component.alt = 'Profile Image';
    fixture.detectChanges();

    const profileImage = fixture.nativeElement.querySelector('.content-profile-image img');
    expect(profileImage).toBeTruthy();
    expect(profileImage.src).toContain('path_to_image.jpg');

    const profileText = fixture.nativeElement.querySelector('.content-profile-text');
    expect(profileText).toBeTruthy();
    expect(profileText.innerText).toContain('John Doe');
    expect(profileText.innerText).toContain('Beginner');
  });

  it('should render profile items', () => {
    fixture.detectChanges();

    const profileItems = fixture.nativeElement.querySelectorAll('.content-items-profile-icon');
    expect(profileItems.length).toBe(2);

    expect(profileItems[0].querySelector('ion-icon').getAttribute('name')).toBe('accessibility-outline');
    expect(profileItems[0].querySelector('span').innerText).toBe('MEU CORPO');

    expect(profileItems[1].querySelector('ion-icon').getAttribute('name')).toBe('trophy-outline');
    expect(profileItems[1].querySelector('span').innerText).toBe('OBJETIVOS E CONQUISTAS');
  });
});
