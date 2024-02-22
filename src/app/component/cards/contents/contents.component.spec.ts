import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';

import { ContentsComponent } from './contents.component';

describe('ContentsComponent', () => {
  let component: ContentsComponent;
  let fixture: ComponentFixture<ContentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct number of items', () => {
    const items = fixture.debugElement.queryAll(By.css('.container-card-2'));
    expect(items.length).toEqual(component.content.length);
  });

  it('should render correct titles', () => {
    const titles = fixture.debugElement.queryAll(By.css('.container-title'));
    titles.forEach((title, index) => {
      expect(title.nativeElement.textContent.trim()).toEqual(component.content[index].title);
    });
  });
});
