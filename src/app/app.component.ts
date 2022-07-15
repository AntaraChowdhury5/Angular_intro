import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements=[{type:'server', name:'Testserver', content:'just a test!'}];

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

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
