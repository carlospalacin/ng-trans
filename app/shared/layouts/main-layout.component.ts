import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

import { TranslatorService }    from '../translator/translator.service';
import { AuthService }          from '../auth/auth.service';

import config                   = require('../app-globals');

@Component({
    moduleId: module.id,
    templateUrl: 'main-layout.component.html'
})

export class MainLayoutComponent implements OnInit
{
    constructor(
        private trans: TranslatorService,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() { }

    logout()
    {
        this.authService.logout();

        // Redirect to the root
        this.router.navigate([config.appUrlPrefix]);
    }
}