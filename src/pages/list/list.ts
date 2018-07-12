
//import { ListPage } from './list/list';

import {AddTaskPage} from './../add-task/add-task';
import { HomePage } from './../home/home';
import { WORK } from './Modules/Mocks/Person.Mocks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

tasklist=WORK;
myTask="";
mystartTime=""
myfinishTime=""

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myTask=this.navParams.get("variable")
    this.mystartTime=this.navParams.get("variable1")
    this.myfinishTime=this.navParams.get("variable2")

    console.log(this.myTask)
    console.log(this.mystartTime)
    console.log(this.myfinishTime)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  OnClickBack(){
    this.navCtrl.push(HomePage)

  }
  OnClickAdd(){
  this.navCtrl.push(AddTaskPage)
  }
  }
  


