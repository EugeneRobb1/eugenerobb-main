import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGithubComponent } from './my-github.component';

describe('MyGithubComponent', () => {
  let component: MyGithubComponent;
  let fixture: ComponentFixture<MyGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
