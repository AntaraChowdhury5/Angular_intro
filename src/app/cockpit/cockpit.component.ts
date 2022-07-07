import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated= new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated= new EventEmitter<{serverName:string, serverContent:string}>();

  @ViewChild('newServerContentInput') newServerContentInput!: ElementRef;
  //newServerContent='';
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement){
    //console.log(this.newServerContentInput);
      this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.newServerContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement){
    this.blueprintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.newServerContentInput.nativeElement.value='blue'
      //serverContent:this.newServerContent
    });
  }
}
