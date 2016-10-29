import { Component, OnInit } from '@angular/core';

import config                = require('../app-globals');

@Component({
    moduleId: module.id,
    selector: 'pulsar-side-bar',
    templateUrl: 'pulsar-side-bar.component.html'
})
export class PulsarSideBarComponent implements OnInit {

    private config = config;

    constructor() { }

    ngOnInit() { }
}