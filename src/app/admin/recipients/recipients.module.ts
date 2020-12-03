import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipientsRoutingModule } from './recipients-routing.module';
import { RecipientsComponent } from './recipients.component';
import {NbButtonModule, NbCardModule, NbIconModule, NbListModule} from '@nebular/theme';


@NgModule({
  declarations: [RecipientsComponent],
  imports: [
    CommonModule,
    RecipientsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbListModule,
  ],
})
export class RecipientsModule { }
