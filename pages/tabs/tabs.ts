import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import{Conversao} from '../conversao/conversao';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root= Conversao;
  

  constructor() {

  }
}
