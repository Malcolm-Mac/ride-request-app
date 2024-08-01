import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclineRequestComponent } from './decline-request.component';

describe('DeclineRequestComponent', () => {
  let component: DeclineRequestComponent;
  let fixture: ComponentFixture<DeclineRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeclineRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeclineRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
