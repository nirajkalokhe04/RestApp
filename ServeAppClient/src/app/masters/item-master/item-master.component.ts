import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FormControl, Validators} from '@angular/forms';
import { EmployeeService } from 'src/app/shared/EmployeeService';

@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  

  
  ngOnInit() {
    
  }



}
@Component({
  selector: 'item-dailogue',
  templateUrl: 'item-dailogue.html',
})
export class DialogContentExampleDialog {
  myControl = new FormControl();
  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  constructor(private service: EmployeeService){}
    emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}