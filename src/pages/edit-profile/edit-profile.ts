/*import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProviders } from '../../providers/auth/auth';
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  newName: string;
  user: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public auth: AuthProviders,
              public afs: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  updateProfile(user){
       console.log(this.newName, user)
       const ref =   this.afs.collection('users').doc(user.uid)

       return ref.update({ displayName: this.newName})
  }


}
*/
