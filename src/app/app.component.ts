import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  accounts:{name:string,status:string}[]=[];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
  serverElements=[{type:'server', name:'Testserver', content:'just a test!'}];

  onServerAdded(serverData:{serverName:string, serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData:{serverName:string, serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent
    })
  }

  onChangeFirst(){
    this.serverElements[0].name='changed';
  }

  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }
}
