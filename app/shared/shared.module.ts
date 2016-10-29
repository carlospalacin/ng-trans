import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';

import { MainLayoutComponent }      from './layouts/main-layout.component';
import { PulsarSideBarComponent }   from "./nav/pulsar-side-bar.component";

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        MainLayoutComponent,
        PulsarSideBarComponent
    ],
    exports: [
        CommonModule
    ]
})

export class SharedModule { }