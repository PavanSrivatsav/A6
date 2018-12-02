import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.css']
})
export class DemoFormSkuWithBuilderComponent implements OnInit {
  
  myFormGroup : FormGroup;
  constructor(fb :FormBuilder) { 

    this.myFormGroup = fb.group({
        sku:null,
        someThing: null
    });
  }

  ngOnInit() {
  }  

  onSubmit(fromValues : any){
    console.log(fromValues);
  }


}
