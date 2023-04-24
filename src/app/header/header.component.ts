import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  // userdefined event creation
  @Output() onMenuBtnClick=new EventEmitter()
  
  menubtnClicked(){
    //To occur an userdefined event
    this.onMenuBtnClick.emit()


    // to resize screen
    // to maike the chart resize when header menu btn clicked
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    },100)
  }
}
function output(): (target: HeaderComponent, propertyKey: "onMenuBtnClick") => void {
  throw new Error('Function not implemented.');
}

