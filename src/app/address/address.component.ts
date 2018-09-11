import { Component, OnInit, Input } from '@angular/core';
import{ ReversePhoneService} from "../reverse-phone.service";

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
 
    this._user.getdata(this.addressInput)
       .subscribe( res => {
         this.results = res
       
  }
  
}
    ngOnInit(){
        
    }
}