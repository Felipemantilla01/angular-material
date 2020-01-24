import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { SysmanControlService } from './sysman-control.service';

@Directive({
  selector: '[SysmanValidator]'
})
export class SysmanValidatorDirective {

  @Input('SysmanValidator') typeValidator: string;

  constructor(private el: ElementRef, private _sysmanControl: SysmanControlService) { }

  ngOnInit() {
    this.el.nativeElement.addEventListener('keydown', (event) => {

      console.log(event.keyCode)
      let code = event.keyCode
      switch (this.typeValidator) {
        case 'letters':
          if (!((code > 64 && code < 91) || code == 8 || code == 32 || code == 9)) { event.preventDefault() }
          break;
        case 'intNumbers':
          if (!((code > 46 && code < 65) || (code > 95 && code < 106) || code == 8 || code == 32 || code == 9)) { event.preventDefault() }
          break;
        case 'decNumbers':
          if (!((code > 46 && code < 65) || (code > 95 && code < 106) || code == 8 || code == 32 || code == 9 || code==188 )) { event.preventDefault() }
          break;
      }


    })
  }


}
