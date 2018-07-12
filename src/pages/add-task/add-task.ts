import { WORK } from './../list/Modules/Mocks/Person.Mocks';
import { ListPage } from './../list/list';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';

/**
 * Generated class for the AddTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {
name;
myTask;
start;
Finish;
WORK;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }
  Add(){
    WORK.push({name: this.name, StartTime: this.start, FinishTime: this.Finish})
    this.navCtrl.pop();
    // this.navCtrl.push("ListPage",{variable1:this.startTime});
    // this.navCtrl.push("ListPage",{variable2:this.finishTime});
  }
  OnClickBack(){
    this.navCtrl.push(ListPage) 
  }
  
}

