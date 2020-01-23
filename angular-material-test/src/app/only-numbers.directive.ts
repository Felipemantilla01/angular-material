import { Directive, ElementRef, HostListener, OnInit, Input  } from '@angular/core';

@Directive({
  selector: '[SysmanValidator]'
})
export class OnlyNumbersDirective {

  @Input('SysmanValidator') typeValidator: string;

  constructor(private el: ElementRef) { }
  @HostListener('keyup') keypress() {
        
  }

  ngOnInit() {

    this.el.nativeElement.pattern = "[a-z]{1,15}"
    
    this.el.nativeElement.addEventListener('keyup', (e)=>{
      

      /*
      let keyPress = e.keyCode ? e.keyCode : e.which
      if(keyPress==8){return true}
      let pattern = /[A-Za-z]/;
      let tecla_final = String.fromCharCode(keyPress);
      return pattern.test(tecla_final);
      */
      

    })
    
  }

  check(e) {
    let tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    let patron = /[A-Za-z0-9]/;
    let tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

}
