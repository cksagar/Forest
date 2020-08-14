import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [SharedModule, FormsModule,
         RouterModule.forChild([{
        path: '',
        component: ShoppingListComponent
    }])
    ],
    exports: [ShoppingListComponent,
        ShoppingEditComponent]
})
export class ShoppingListModule {

}