import { Component } from '@angular/core';
import { Result } from '@adt/shared';
import { ButtonGroupItem } from '@adt/ui';
@Component({
  selector: 'adt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  thing!: Result<string>;

  buttonsToShow: ButtonGroupItem[] = [
    {
      label: 'Tacos',
      value: 'tacos',
    },
    {
      label: 'Burritos',
      value: 'burritos',
    },
    {
      label: 'Enchiladas',
      value: 'enchilads',
      selected: true,
    },
  ];

  theyDidIt(item: ButtonGroupItem) {
    console.log(item);
  }
}
