import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss'],
})
export class CustomDialogComponent {
  visible!: boolean;
  position!: string;
  @Input()
  maximizable!: boolean
  @Input()
  header!: string
  showDialog(position: string) {
    this.position = position;
    this.visible = true;
  }
}
