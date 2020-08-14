import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { SendDataComponent } from './send-data.component';
import { NgModule } from '@angular/core';
@NgModule({
    declarations: [
        SendDataComponent
    ],
    imports: [SharedModule,
        FormsModule,
        CommonModule, RouterModule.forChild([
            { path: '', component: SendDataComponent }
        ])],
    exports: [
        SendDataComponent
    ]
})
export class SendDataModule {

}