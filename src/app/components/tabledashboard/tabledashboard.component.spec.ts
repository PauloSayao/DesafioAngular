import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabledashboardComponent } from './tabledashboard.component';

describe('TabledashboardComponent', () => {
  let component: TabledashboardComponent;
  let fixture: ComponentFixture<TabledashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabledashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabledashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
