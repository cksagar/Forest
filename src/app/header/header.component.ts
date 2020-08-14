import { AuthService } from './../auth/auth.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy, OnInit {

  headerTitle = 'Recipe Book';
  isAuthenticated = false;
  userSub: Subscription;
  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.userSubject.subscribe(
      user => {
        // this.isAuthenticated = !user ? false : true;
        this.isAuthenticated = !!user;
        console.log(!user);
        console.log(!!user);
      }
    );
  }


  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes()
      .subscribe();
  }

  onLogOut() {
    this.authService.logOut();
    // this.isAuthenticated = false;
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
