import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproductformComponent } from './editproductform.component';

describe('EditproductformComponent', () => {
  let component: EditproductformComponent;
  let fixture: ComponentFixture<EditproductformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproductformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproductformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
