import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngb-leads';
  modalRef?: BsModalRef;
  constructor(
    private bms: BsModalService
  ){
    setTheme('bs5');
  }

  /**
   * openModal
   * @param tref 
   */
  openModal(tref: TemplateRef<any>){
    this.modalRef = this.bms.show(tref)
  }
}
