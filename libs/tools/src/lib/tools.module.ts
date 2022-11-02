import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { RouterModule, Routes } from '@angular/router';
import { GolfCounterComponent } from './golf-counter/golf-counter.component';
import { PrefsComponent } from './prefs/prefs.component';
import { CounterPrefsComponent } from './counter-prefs/counter-prefs.component';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './state';

const routes: Routes = [
  {
    path: '',
    component: ToolsComponent,
    children: [
      {
        path: 'golf-counter',
        component: GolfCounterComponent,
      },
      {
        path: 'prefs',
        component: PrefsComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(FEATURE_NAME, reducers),
  ],
  declarations: [
    ToolsComponent,
    GolfCounterComponent,
    PrefsComponent,
    CounterPrefsComponent,
  ],
})
export class ToolsModule {}
