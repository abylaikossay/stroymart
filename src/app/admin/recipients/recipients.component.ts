import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipients} from '../../@core/models/recipients';

@Component({
  selector: 'ngx-recipients',
  templateUrl: './recipients.component.html',
  styleUrls: ['./recipients.component.scss'],
})
export class RecipientsComponent implements OnInit {
  id: number;
  recipients: any = [];
  chosenRecipients: any = [];

  constructor(private activateRoute: ActivatedRoute) {
    this.id = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    for (let i = 1; i < 10; i ++) {
      const recipient = {id: i, name: `Категория ${i}`};
      this.recipients.push(recipient);
    }
  }

  goToInfo(recipient: any) {
    console.log(recipient);
  }

  deleteChosen(chosenRecipient: any) {
    console.log('delete');
    console.log(chosenRecipient);
    this.chosenRecipients.splice(chosenRecipient, 1);
    this.recipients.push(chosenRecipient);
  }

  addToChosen(recipient: any) {
    console.log(recipient);
    this.recipients.splice(recipient, 1);
    this.chosenRecipients.push(recipient);
  }

  addNewCategory() {
    console.log('adding new');
  }
}
