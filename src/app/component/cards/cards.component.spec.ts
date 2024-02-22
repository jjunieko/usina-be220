import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('CardsComponent screen', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsComponent ],
      imports: [IonicModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render items correctly', () => {
    component.items = [
      {
        title: 'Item 1',
        icon: 'icon1',
        imageSrc: 'image1.jpg',
        imageAlt: 'Image 1',
        subtitle: 'Subtitle 1',
        description: 'Description 1',
        isRegister: false
      },
      {
        title: 'Item 2',
        icon: 'icon2',
        imageSrc: 'image2.jpg',
        imageAlt: 'Image 2',
        subtitle: 'Subtitle 2',
        description: 'Description 2',
        isRegister: false
      }
    ];
    fixture.detectChanges();

    const containerCards = fixture.debugElement.queryAll(By.css('.container-card'));
    expect(containerCards.length).toBe(2);

    const titleElements = fixture.debugElement.queryAll(By.css('.container-title-card'));
    expect(titleElements.length).toBe(2);

    const imageElements = fixture.debugElement.queryAll(By.css('ion-img'));
    expect(imageElements.length).toBe(2);

    const overlayElements = fixture.debugElement.queryAll(By.css('.overlay'));
    expect(overlayElements.length).toBe(2);

    const subtitleElements = fixture.debugElement.queryAll(By.css('.centered-text'));
    expect(subtitleElements.length).toBe(1);
  });
});
