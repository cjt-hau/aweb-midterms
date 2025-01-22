import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewerCmpComponent } from './newer-cmp.component';

describe('NewerCmpComponent', () => {
  let component: NewerCmpComponent;
  let fixture: ComponentFixture<NewerCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewerCmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewerCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
