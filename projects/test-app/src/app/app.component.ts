import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = this.fb.group({
      number: ['']
  });

  constructor(private fb: FormBuilder) {
  }
}
