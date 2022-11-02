import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { RouterModule, Routes } from '@angular/router';
import { GolfCounterComponent } from './golf-counter/golf-counter.component';
import { PrefsComponent } from './prefs/prefs.component';
import { CounterPrefsComponent } from './counter-prefs/counter-prefs.component';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './state';
import { ListComponent } from './songs/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolsEffects } from './state/effects/tools.effects';
import { EffectsModule } from '@ngrx/effects';
import { SongEffects } from './state/effects/songs.effects';

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
      {
        path: 'songs',
        component: ListComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(FEATURE_NAME, reducers),
    HttpClientModule,
    EffectsModule.forFeature([
      ToolsEffects,
      SongEffects,
    ]),
  ],
  declarations: [
    ToolsComponent,
    GolfCounterComponent,
    PrefsComponent,
    CounterPrefsComponent,
    ListComponent,
  ],
})
export class ToolsModule {}
