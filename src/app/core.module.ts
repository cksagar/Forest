import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostsService } from './send-data/posts.service';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';

@NgModule({
  providers: [RecipeService,
    ShoppingListService,
    AuthService,
    RecipesResolverService,
    DataStorageService,
    PostsService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: SendDataInterceptorService,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoggingInterceptorService,
    //   multi: true
    // },
  ]
})
export class CoreModule {
}
