import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distribution-server',
  templateUrl: './distribution-server.component.html',
  styleUrls: ['./distribution-server.component.css']
})
export class DistributionServerComponent implements OnInit {

  displayNew : boolean  =  false ;
  constructor() { }

  ngOnInit() {
  }


  addServerAddress(){
    this.displayNew = true ;
  }


  deleteDS() {

  }

  toggleSwitch(){

  }


  addNewServer() {

  }

}
