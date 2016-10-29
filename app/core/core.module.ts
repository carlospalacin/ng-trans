import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule }                 from '@angular/common';
import './rxjs-extensions';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations:   [],
    providers:      [],
    bootstrap:      []
})

export class CoreModule {

    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule
    )
    {
        if (parentModule)
        {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}