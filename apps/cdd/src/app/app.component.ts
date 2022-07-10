import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nx-vsoft-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  domEntryForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) {
    this.domEntryForm = this.fb.group({
      whatever: ['', [Validators.required]],
      whatever2: ['', [Validators.required]],
    });
  }
}
