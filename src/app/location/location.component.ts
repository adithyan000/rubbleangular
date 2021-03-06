import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  openDialog() {
    this.dialog.open(DialogComponent);

}

  control = new FormControl();
  streets: string[] = ['Mylapore', 'Anna Nagar', 'T Nagar', 'Chebauk', 'Virudhunagar', 'Madurai', 'Nesapakkam', 'Koyambedu', 'Perambur', 'Velachery'];
  filteredStreets!: Observable<string[]>;

  
  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}




@Component({
  selector: 'app-login',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent {}

