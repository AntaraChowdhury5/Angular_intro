import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @Input()account!: { name: string; status: string; };
  @Input()id!: number;
  
  constructor(private loggingService:LoggingService,private accountService:AccountsService) { }

  onSetTo(status: string) {
    this.accountService.onStatusChanged(this.id,status);
    this.accountService.statusUpdated.emit(status);
  }

  ngOnInit(): void {
  }
}