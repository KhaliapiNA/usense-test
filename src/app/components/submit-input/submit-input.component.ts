import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
class AlertService {
}

@Component({
  selector: 'app-submit-input',
  templateUrl: './submit-input.component.html',
  styleUrls: ['./submit-input.component.scss']
})
export class SubmitInputComponent {
  onSubmit(): void {
    alert('Thank you for checking my solution!');
  }
}
