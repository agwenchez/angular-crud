import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-crud';

  constructor(private dialog: MatDialog){

  }

  openDialog(){
    console.log("Clicked")
    this.dialog.open(DialogComponent,{
      width:"30%"
    })
  }
}
