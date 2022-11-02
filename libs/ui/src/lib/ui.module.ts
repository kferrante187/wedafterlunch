import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent } from './button-group/button-group.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonGroupComponent],
  exports: [ButtonGroupComponent],
})
export class UiModule {}
