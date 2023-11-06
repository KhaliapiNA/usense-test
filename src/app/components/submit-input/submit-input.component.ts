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
    //just added console.log which will display the event details in browser on click of the button.
    alert("Thank you for checking my solution");
  }
  ngOnInit() {
  }
}
