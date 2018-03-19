import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterailComponent } from './materail.component';

describe('MaterailComponent', () => {
  let component: MaterailComponent;
  let fixture: ComponentFixture<MaterailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
