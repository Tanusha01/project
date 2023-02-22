import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  openDialog() {
    throw new Error('Method not implemented.');
  }

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
