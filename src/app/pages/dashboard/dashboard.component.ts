import { Component, inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabledashboardComponent } from '../../components/tabledashboard/tabledashboard.component';
import { SelectService } from '../../services/select.service';
import { Carro } from '../../interfaces/Carro.interface';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, TabledashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  private service = inject(SelectService);

  constructor(private http: HttpClient) {}

  carros: Carro[] | null = null;
  selecionado = 0;
  carSelect: number = 0;
  carroSelecionado() {
    this.service.getApi().subscribe({
      next: (resposta: any) => {
        this.carros = resposta.vehicles;
        this.selecionado = this.carSelect;
      },
    });
  }
}
