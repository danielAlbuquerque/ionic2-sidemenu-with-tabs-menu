import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabonePage } from '../tabone/tabone';
import { TabtwoPage } from '../tabtwo/tabtwo';
import { TabthreePage } from '../tabthree/tabthree';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root: any = TabonePage;
	tab2Root: any = TabtwoPage;
	tab3Root: any = TabthreePage;


	constructor(public navCtrl: NavController, public navParams: NavParams) {

  	}


}
