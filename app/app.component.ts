import { Component }            from '@angular/core';

import { TranslatorService }    from './shared/translator/translator.service';

@Component({
    moduleId: module.id,
    selector: 'pulsar-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    constructor(
        private trans: TranslatorService
    ){}

    testRender()
    {
        console.log('traza 01');
        return 'esto es una prueba que ejecuta un console log'
    }
 }