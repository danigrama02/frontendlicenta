import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteCardComponent } from './autocomplete-card.component';

describe('AutocompleteCardComponent', () => {
  let component: AutocompleteCardComponent;
  let fixture: ComponentFixture<AutocompleteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutocompleteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
