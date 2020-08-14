import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesResolverService } from './recipes-resolver.service';
import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from './../auth/auth.guard';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


const recipesRoutes: Routes = [
    {
        path: '',
        component: RecipesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: RecipesStartComponent },
            { path: 'new', component: RecipeEditComponent },
            {
                path: ':id', component: RecipeDetailComponent,
                resolve: [RecipesResolverService]
            },
            {
                path: ':id/edit', component: RecipeEditComponent,
                resolve: [RecipesResolverService]
            },
        ]
    }
];

@NgModule({
    declarations: [
    ],
    imports: [RouterModule.forChild(recipesRoutes)]
})
export class RecipessRoutingModule {
}
