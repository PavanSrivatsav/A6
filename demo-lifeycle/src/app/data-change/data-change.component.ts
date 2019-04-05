import { Component, Output, EventEmitter, Input, ChangeDetectorRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-data-change',
  templateUrl: './data-change.component.html',
  styleUrls: ['./data-change.component.css']
})
export class DataChangeComponent {
  @Input() myFriend: string;
  @Output() clicked = new EventEmitter();
  status: string;

  constructor(private cdRef:ChangeDetectorRef) {
    this.status =`new - data is ${this.myFriend}`; 
     console.log(`new - data is ${this.myFriend}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) { 
      let change = changes[propName];
    console.log('previous value -> ',JSON.stringify(change.previousValue));
    console.log('current value -> ',JSON.stringify(change.currentValue));
  }
    this.status = `ngOnChanges - data is ${this.myFriend}`
     console.log(`ngOnChanges - data is ${this.myFriend}`);
     this.cdRef.detectChanges(); //
  }

  ngOnInit() {
    this.myFriend = this.myFriend + '!'
    this.status = `ngOnInit  - data is ${this.myFriend}`;
     console.log(`ngOnInit  - data is ${this.myFriend}`);
     this.cdRef.detectChanges(); //
  }

  ngDoCheck() {
     console.log('ngDoCheck', this.myFriend)
    this.status = 'ngDoCheck - '+ this.myFriend;
    this.cdRef.detectChanges(); //
  }

  ngAfterContentInit() {
     console.log('ngAfterContentInit', this.myFriend);
    this.status = 'ngAfterContentInit - '+ this.myFriend;
    this.cdRef.detectChanges(); //
  }

  ngAfterContentChecked() {
     console.log('ngAfterContentChecked', this.myFriend);
    this.status = 'ngAfterContentChecked - '+ this.myFriend;
  }

  ngAfterViewInit() {
     console.log('ngAfterViewInit', this.myFriend);
    this.status = 'ngAfterViewInit - '+ this.myFriend;
    this.cdRef.detectChanges();
  }

  ngAfterViewChecked() {
     console.log('ngAfterViewChecked', this.myFriend);
    this.status = 'ngAfterViewChecked - '+ this.myFriend;
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
     console.log('ngOnDestroy');
    this.status = 'ngOnDestroy';
  }
}
