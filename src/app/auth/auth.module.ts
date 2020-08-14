import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        SharedModule, CommonModule, FormsModule,
        RouterModule.forChild([
            { path: '', component: AuthComponent }
        ])
    ],
    exports: [
        AuthComponent
    ]
})
export class AuthModule{

}