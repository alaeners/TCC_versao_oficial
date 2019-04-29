import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLocalComponent } from './delete-local.component';

describe('DeleteLocalComponent', () => {
  let component: DeleteLocalComponent;
  let fixture: ComponentFixture<DeleteLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
