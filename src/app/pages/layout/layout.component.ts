import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
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

}
