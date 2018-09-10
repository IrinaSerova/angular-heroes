import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReversePhoneService {
url: string = "https://proapi.whitepages.com/3.1/location_intel?api_key=d044457c08d4431baec5e3ed7b8f7b79";

  constructor(private http: HttpClient) { }
  getData (){
    return this.http.get(this.url)
  }

}
