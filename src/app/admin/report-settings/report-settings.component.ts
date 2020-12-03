import {Component, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NbDialogService} from '@nebular/theme';
import {MatDialog} from '@angular/material/dialog';
import {MaterialClassifierDialogComponent} from './dialog/material-classifier-dialog/material-classifier-dialog.component';

@Component({
  selector: 'ngx-report-settings',
  templateUrl: './report-settings.component.html',
  styleUrls: ['./report-settings.component.scss'],
})
export class ReportSettingsComponent implements OnInit {
  id: number;
  report: any;

  constructor(private activateRoute: ActivatedRoute,
              private dialogService: NbDialogService,
              private matDialog: MatDialog) {
    this.id = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log(this.id);
    this.report = {
      id: 1,
      autoSend: false,
      isSending: true,
    };
  }

  choseDates(dialog: TemplateRef<any>) {
    console.log(dialog);
    this.dialogService.open(dialog, {
      context: this.report,
    });
  }
  changed(report: any) {
    console.log(report);
  }

  openMatClassifier(report: any) {
    console.log('salam');
    const dialogRef = this.matDialog.open(MaterialClassifierDialogComponent, {
      data: report,
      panelClass: 'additional-info-modal',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
