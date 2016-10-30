import { Component }            from '@angular/core';

import { TranslatorService }    from './shared/translator/translator.service';

@Component({
    moduleId: module.id,
    selector: 'pulsar-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    private var01: string = "Valor por defecto";
    constructor(
        private trans: TranslatorService
    ){}

    testRender()
    {
        console.log('traza 01');
        return 'esto es una prueba que ejecuta un console log'
    }

    cambio(): void
    {
        this.var01 = "valor cambiado";
    }

    cambioVacio(): void
    {
        // no hago nada de nada
    }
 }