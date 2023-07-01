import {Component, computed, inject, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styles: [
  ]
})
export class DashboardLayoutComponent implements OnInit{
  private authService = inject(AuthService);

  public user =
    computed(() => this.authService.currentUser());

  ngOnInit(): void {
    console.log('user ::: ', this.user())
  }

  // alternative to use the computed option
  // get user() {
  //   return this.authService.currentUser;
  // }

  onLogout() {
    this.authService.logout();
  }
}
