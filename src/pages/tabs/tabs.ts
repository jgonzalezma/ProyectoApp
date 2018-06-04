import { Component } from '@angular/core';

import { SeriesPage } from '../series/series';
import { InsertarPage } from '../insertar/insertar';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
//aqui se definen los tabs
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SeriesPage;
  tab3Root = InsertarPage;

  constructor() {

  }
}
