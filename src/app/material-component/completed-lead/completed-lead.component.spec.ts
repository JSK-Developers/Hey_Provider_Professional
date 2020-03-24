import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedLeadComponent } from './completed-lead.component';

describe('CompletedLeadComponent', () => {
  let component: CompletedLeadComponent;
  let fixture: ComponentFixture<CompletedLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
