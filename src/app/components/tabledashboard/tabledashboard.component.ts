import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabledashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './tabledashboard.component.html',
  styleUrl: './tabledashboard.component.scss',
})
export class TabledashboardComponent {
  private vinSubject = new Subject<string>();
  codigo: string = '';
  odometro: number = 0;
  nivelCombustivel: number = 0;
  status: string = '';
  lat: number = 0;
  long: number = 0;

  constructor(private http: HttpClient) {
    this.vinSubject
      .pipe(
        debounceTime(300),
        filter((timer: string) => timer.trim().length > 19)
      )
      .subscribe((vin) => {
        this.buscarInformacoes(vin);
      });
  }

  preencher(event: Event): void {
    const vin = (event.target as HTMLInputElement).value;
    this.codigo = vin;
    this.vinSubject.next(vin);
  }

  private buscarInformacoes(vin: string): void {
    this.http.post('http://localhost:3001/vehicleData', { vin }).subscribe(
      (res: any) => {
        this.odometro = res.odometro;
        this.nivelCombustivel = res.nivelCombustivel;
        this.status = res.status;
        this.lat = res.lat;
        this.long = res.long;
      },
      (error) => {
        console.error('Erro ao buscar informações:', error);
        this.odometro = 0;
        this.nivelCombustivel = 0;
        this.status = '';
        this.lat = 0;
        this.long = 0;
      }
    );
  }
}
