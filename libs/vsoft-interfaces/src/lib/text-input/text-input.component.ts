import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'nx-vsoft-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input', { static: true })
  input!: ElementRef;
  @Input() type = 'text';
  @Input() label = 'string';
  @Input() warningMessage = 'string';

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators = control?.validator ? [control.validator] : [];
    const asyncValidators = control?.asyncValidator
      ? [control.asyncValidator]
      : [];

    control?.setValidators(validators);
    control?.setAsyncValidators(asyncValidators);
    control?.updateValueAndValidity();
  }

  onChange(event: unknown) {
    event;
  }

  onTouched() {
    ('');
  }

  writeValue(obj: unknown): void {
    this.input.nativeElement.value = obj || '';
  }

  registerOnChange(fn: never): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: never): void {
    this.onTouched = fn;
  }
}
