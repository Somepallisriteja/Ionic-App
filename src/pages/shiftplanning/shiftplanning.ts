import { Component } from '@angular/core';
import { NavController, LoadingController} from 'ionic-angular';
import { ComingshiftsPage } from '../comingshifts/comingshifts';
import { OpenshiftsPage } from '../openshifts/openshifts';
import { ClosedshiftsPage } from '../closedshifts/closedshifts';
import { MyshiftsPage } from '../myshifts/myshifts';
import { Http } from '@angular/http';







@Component({
  selector: 'page-shiftplanning',
  templateUrl: 'shiftplanning.html',
  
})
export class ShiftplanningPage {
  comingshiftspage = ComingshiftsPage;
  openshiftspage = OpenshiftsPage;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public http: Http
 ){

  }

   load(){
     this.navCtrl.push(ComingshiftsPage);
   }

   onload(){
     this.navCtrl.push(OpenshiftsPage);
   }
   
   
    users: any;

    onloadJson(){
      
      const loading = this.loadingCtrl.create({
        content: 'Loading open shifts'
       
      });
      loading.present();
     
      //this.navCtrl.isTransitioning(OpenshiftsPage)
      this.http.get("https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Open")
      .map(res => res.json())
      .subscribe( res=>{
      loading.dismiss();
        
        this.users = res;
        
      },
      
      
      (err) =>{
        
      alert("failed loading json data");
      });
    
  

      this.navCtrl.push(OpenshiftsPage);
    }
  
     

   
 
   pageload(){
     this.navCtrl.push(ClosedshiftsPage);
   }
   Onclick(){
     this.navCtrl.push(ShiftplanningPage);
   }
   On(){
     this.navCtrl.push(MyshiftsPage);
   }
  

  }


