import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = '';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver 1', 'Testserver 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Server name is: ' + this.serverName; 
    this.serverName = ''
    
  }

  // onUpdateServerName(event: Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  username = '';

  resetUsername(){
    this.username = '';
  }
  paragraph = '';
  allowDetails = true;
  x = 0;

  clicks = [];

  display = false;

  toggleDisplayDetails(){
    this.display = !this.display;
    this.clicks.push(new Date());
  }

}
