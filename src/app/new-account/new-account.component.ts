import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
  //providers:[LoggingService]
})
export class NewAccountComponent {
  
  constructor(private logginService:LoggingService,private accountService:AccountsService){
    this.accountService.statusUpdated.subscribe((status:string)=>
    alert('New Status:'+status));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onAccountAdded(accountName,accountStatus)
    /* const service= new LoggingService();
    service.logStatusChange(accountStatus) */ 
    this.logginService.logStatusChange(accountStatus); 
  }
}
  