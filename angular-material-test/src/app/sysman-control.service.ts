import { Injectable } from '@angular/core';

/* VALIDATOR CONSTANTS */
const patterns = {
  onlyNumbers: '1234567890',
  onlyLowerCaseLetters: 'abcdefghijklmnñopqrstuvwxyz',
  onlyUpperCaseLetters: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
  onlyLetters: 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
  decimalNumbers: '1234567890.'
}
/* FORMATTER CONSTANTS */



@Injectable({
  providedIn: 'root'
})

export class SysmanControlService {

  constructor() { }
  /* VALIDATOR FUNCTIONS */
  validator(stringInput: any, patternType: string) {
    var stringOutput = '';
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < stringInput.length; i++)
      if (patterns[patternType].indexOf(stringInput.charAt(i)) != -1)
        //Se añaden a la salida los caracteres validos
        stringOutput += stringInput.charAt(i);
    //Retornar valor filtrado
    return stringOutput;
  }
  /* FORMATTER FUNCITONS */
  formatter(event:any, el: any, formatType: String) {
    switch (formatType) {
      case 'creditCard':
        //validamos que sean solo numeros 
        var position = el.value.slice(0, el.selectionStart).length;
        var stringOutput=''
        var temporalOutput = this.validator(el.value, 'onlyNumbers')
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
        case 'milesDots':
          
          el.value = this.validator(el.value, 'onlyNumbers')          
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
