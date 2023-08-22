import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss'],
})
export class CustomDialogComponent {
  visible!: boolean;
  position!: "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright";
  @Input()
  maximizable!: boolean
  @Input()
  header!: string
  @Input()
  modal!: boolean
  @Input()
  customStyle!: any
  showDialog(position: "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright") {
    this.position = position;
    this.visible = true;
  }
  onHide(){
    this.visible = false
    
  }
}
