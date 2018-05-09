import { Profile } from "../models/profile";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


export class userdetailService{

    constructor( private http: Http){}
    private users: Profile[]= [];
   
   getuser(){
        this.http.get("https://sheetsu.com/apis/v1.0su/0ba4069455sbb/sheets/Users")
       .map(res => res.json())
          .subscribe( res=>{
          this.users = res;
          })
   }

    addUser(username : string,
        firstname: string,
        lastname: string){
   this.http.get("https://sheetsu.com/apis/v1.0su/0ba4069455sbb/sheets/Users")
   .map(res => res.json())
      .subscribe( res=>{
      this.users = res;
      })
    }
    

}