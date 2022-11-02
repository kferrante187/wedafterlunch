import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UiModule } from '@adt/ui';
const routes: Routes = [
  {
    path: 'tools',
    loadChildren: () => import('@adt/tools').then((m) => m.ToolsModule),
  },
];
@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
  ],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
