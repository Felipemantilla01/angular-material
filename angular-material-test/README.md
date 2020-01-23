# Angular material test

## init the Angular project 
to create the app `ng new angular-material-test`

## adding the angular material 
to install Angular Material `ng add @angular/material` and for more information [Angular-Material-Started](https://material.angular.io/guide/getting-started)

### Use components
 to use components we need to import the component in the app.component.ts as `import { MatButtonModule } from '@angular/material';`, and add the component in the module imports.
 then just tagged in the html like `<button mat-button>Hello world</button>`

 to use a different componentes of material, we need import his modules, so we created a new module called material use de angular cli `ng g m material` and inside them create a class with a lot of module components instanced -- to see the documentation of components [Angular-Material-Components](https://material.angular.io/components/categories)