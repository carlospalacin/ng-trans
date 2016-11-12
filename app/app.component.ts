import { Component }            from '@angular/core';

import { TranslatorService }    from './shared/translator/translator.service';

@Component({
    moduleId: module.id,
    selector: 'pulsar-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    private var01: string = "default value";
    constructor(
        private trans: TranslatorService
    ){}

    testRender()
    {
        console.log('trace 01');
        return 'This is a test that runs a console log'
    }

    cambio(): void
    {
        this.var01 = "Change value";
    }

    cambioVacio(): void
    {
        // no hago nada de nada
    }
 }