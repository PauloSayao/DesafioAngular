import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit() {
    this.http.get<{ vehicles: any[] }>('http://localhost:3001/vehicles').subscribe((data) => {
      for (let i = 0; i < data.vehicles.length; i++) {
        console.log(data.vehicles[i].volumetotal);
      this.vendas = data.vehicles[i].volumetotal;
      this.conectado = data.vehicles[i].connected;
      this.software = data.vehicles[i].softwareUpdates;
      this.imagem = data.vehicles[i].img;

      }
    });
  }
  vendas: number = 0;
  conectado: number = 0;
  software: number = 0;
  imagem: string = "";


  codigo: string = "";
  odometro: number = 0
  nivelCombustivel: number = 0;
  status: string = "";
  lat: number = 0;
  long:number = 0;

  preencher(event: Event): void {
    const vin = (event.target as HTMLInputElement).value;
    this.codigo = vin;
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
  // veiculo!: any;
}

