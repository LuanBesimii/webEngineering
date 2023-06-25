import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePropertyComponent } from './article-property.component';

describe('ArticlePropertyComponent', () => {
  let component: ArticlePropertyComponent;
  let fixture: ComponentFixture<ArticlePropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlePropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
