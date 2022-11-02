import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'adt-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css'],
})
export class ButtonGroupComponent {
  @Input() buttons: ButtonGroupItem[] = [];
  @Output() selected = new EventEmitter<ButtonGroupItem>();

  clicked(item: ButtonGroupItem) {
    this.selected.emit(item);
    // write the code here that toggles the selected property.
  }
}

export type ButtonGroupItem = {
  label: string;
  selected?: boolean;
  value: string;
};
