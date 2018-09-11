import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css']
    
})

export class AddressComponent implements OnInit{
    @Input() addressInput: string;
    constructor(){
        
    }
    isShow: boolean  = false;
  changeShow(){
  this.isShow =  !this.isShow 
  
}
    ngOnInit(){
        
    }
}