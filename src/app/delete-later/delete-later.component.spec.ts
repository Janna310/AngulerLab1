import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLaterComponent } from './delete-later.component';

describe('DeleteLaterComponent', () => {
  let component: DeleteLaterComponent;
  let fixture: ComponentFixture<DeleteLaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
