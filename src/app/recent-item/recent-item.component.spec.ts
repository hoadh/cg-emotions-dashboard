import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentItemComponent } from './recent-item.component';

describe('RecentItemComponent', () => {
  let component: RecentItemComponent;
  let fixture: ComponentFixture<RecentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
