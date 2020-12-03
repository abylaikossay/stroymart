import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {SmartTableData} from '../../../@core/data/smart-table';
import {MongoService} from '../../../@core/services/mongo.service';

@Component({
  selector: 'ngx-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'string',
      },
      Code: {
        title: 'Code',
        type: 'string',
      },
      NameKaz: {
        title: 'NameKaz',
        type: 'string',
      },
      NameRus: {
        title: 'NameRus',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  loading: boolean = false;

  constructor(
    private mongoService: MongoService) {
  }

  onDeleteConfirm(event): void {
    console.log(event.data);
    if (window.confirm('Вы уверены, что хотите удалить?')) {
      this.loading = true;
      this.mongoService.deleteCountry(event.data).subscribe(resp => {
        console.log(resp);
        event.confirm.resolve();
        this.loading = false;
      }, error => {
        event.confirm.reject();
        this.loading = false;
      });
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit(): void {
    this.mongoService.getCountries().subscribe(resp => {
      console.log(resp);
      this.source.load(resp);
    });
  }

  onCreateConfirm(event) {
    this.loading = true;
    this.mongoService.saveCountry(event.newData).subscribe(response => {
      event.confirm.resolve(response);
      this.loading = false;
    }, error => {
      console.error(error);
      event.confirm.reject();
      this.loading = false;
    });
  }

  onSaveConfirm(event) {
    this.loading = true;
    this.mongoService.updateCountry(event.newData, event.data.id).subscribe(response => {
      event.confirm.resolve(response);
      this.loading = false;
    }, error => {
      console.error(error);
      event.confirm.reject();
      this.loading = false;
    });
  }

}
