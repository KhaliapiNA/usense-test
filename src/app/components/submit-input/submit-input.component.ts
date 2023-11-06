import {Component, OnInit} from '@angular/core';

class AlertService {
}

@Component({
  selector: 'submit-input',
  templateUrl: './submit-input.component.html',
  styleUrls: ['./submit-input.component.scss']
})
export class SubmitInputComponent implements OnInit {
  myClickFunction(event: any) {
    alert("Thank you for checking my solution");
  }

  ngOnInit() {
  }
}
