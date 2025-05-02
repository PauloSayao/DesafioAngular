import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, MatMenuModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  router = inject(Router);

onLogout() {
  localStorage.removeItem('angular19User');
  // window.location.reload();
  this.router.navigate(['/login']);
}
onHome() {
  this.router.navigate(['/home']);

}
onDashboard() {
  this.router.navigate(['/dashboard']);
}
}