import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendChatComponent } from './send-chat.component';

describe('SendChatComponent', () => {
  let component: SendChatComponent;
  let fixture: ComponentFixture<SendChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
