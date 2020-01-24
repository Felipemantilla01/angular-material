import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { SysmanControlService } from './sysman-control.service';


@Directive({
  selector: '[SysmanFormatter]'
})
export class SysmanFormatterDirective {

  @Input('SysmanFormatter') typeFormat: string
  constructor(private el: ElementRef, private _sysmanControl: SysmanControlService) { }

  ngOnInit() {
    this.el.nativeElement.addEventListener('keyup', (event) => {
      this.el.nativeElement.value = this._sysmanControl.formatter(event,this.el.nativeElement,this.typeFormat)
    })

  }
  
/* End */

}
