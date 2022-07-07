import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit,AfterViewChecked, OnDestroy{
  @Input('srvElement')
  element!: { type: string; name: string; content: string; };
  @Input() name!:string;
  @ViewChild('heading')head!:ElementRef;
  @ContentChild('para')paraa!:ElementRef;

  constructor() { 
    console.log("constractor called");
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges called");
    console.log(changes);
  }
  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log("heading: " + this.head);
    console.log("Para : " + this.paraa);
  }

  ngDoCheck(){
    console.log("ngDoCheck called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    console.log("Para : " + this.paraa.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log("heading : " + this.head.nativeElement.textContent);    
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(): void {
    console.log("onDestroy called");
    
  }
}
 