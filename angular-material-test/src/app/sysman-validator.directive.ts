import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { SysmanControlService } from './sysman-control.service';

@Directive({
  selector: '[SysmanValidator]'
})
export class SysmanValidatorDirective {

  @Input('SysmanValidator') typeValidator: string;
  @HostListener('keyup') keyUp() {
    this.el.nativeElement.value = this._sysmanControl.validator(this.el.nativeElement.value, this.typeValidator)
  }
  constructor(private el: ElementRef, private _sysmanControl: SysmanControlService) { }

  ngOnInit() { }


}
