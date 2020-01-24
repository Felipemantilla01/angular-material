import { Injectable } from '@angular/core';

/* VALIDATOR CONSTANTS */
const validatorsCodes = {
  onlyLetters: {min:64,max:91},
}
/* FORMATTER CONSTANTS */
@Injectable({
  providedIn: 'root'
})

export class SysmanControlService {

  constructor() { }
  /* VALIDATOR FUNCTIONS */
  validator(event: any, typeValidator: string) {
    var min = validatorsCodes[typeValidator].min
    var max = validatorsCodes[typeValidator].max
        
    event.preventDefault()
  
    
  }
  /* FORMATTER FUNCITONS */
  formatter(event:any, el: any, formatType: String) {
    switch (formatType) {
      case 'creditCard':
        //validamos que sean solo numeros 
        var position = el.value.slice(0, el.selectionStart).length;
        var stringOutput=''
        var temporalOutput = '' // this.validator(el.value, 'onlyNumbers')
        for(var i = 0 ; i < temporalOutput.length ; i++ ){
          if ((i == 4) || (i == 8) || (i == 12))
            stringOutput += ' ';
            stringOutput += temporalOutput.charAt(i)
        }
        if (event.keyCode == 8 ) {//Tecla borrar presionada          
          el.selectionStart = position;
          el.selectionEnd = position;
        }
        return stringOutput // se retorna valor solo por manejar el mismo formato del validador 
          // se puede asignar el valor al elemento desde aqui y hacer uso del break
        break;
        case 'upperCase':
          return el.value.toUpperCase()
        break;
        case 'lowerCase':
          return el.value.toLowerCase()
        break;
        case 'milesDecimalDots':
          
          //el.value = this.validator(el.value, 'milesDecimalNumbers')         

          var formatNumber = {
            separador: ".", // separador para los miles
            sepDecimal: ',', // separador para los decimales
            formatear:function (num){
            num +='';
            var splitStr = num.split(',');
            var splitLeft = splitStr[0];
            var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
            var regx = /(\d+)(\d{3})/;
            while (regx.test(splitLeft)) {
            splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
            }
            return this.simbol + splitLeft +splitRight;
            },
            new:function(num, simbol){
            this.simbol = simbol ||'';
            return this.formatear(num);
            }
           }

           return (formatNumber.new(el.value,''))
        break;
        case 'milesDots':
          //el.value = this.validator(el.value, 'onlyNumbers')          
          var num = el.value.replace(/\./g,'');          
          num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
          num = num.split('').reverse().join('').replace(/^[\.]/,'');
          //el.value = num;
          return num                                            
          
          break;
    }
  }


  /* end */
}
