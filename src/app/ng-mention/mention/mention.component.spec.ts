import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MentionComponent } from './mention.component';

describe('MentionComponent', () => {
  let component: MentionComponent;
  let fixture: ComponentFixture<MentionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
