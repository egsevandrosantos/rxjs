import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss'],
})
export class ZipComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.operatorZip();
  }

  operatorZip() {
    this.apiService.getUsersWithZip().subscribe((res) => console.log(res)); // Retorna um array com os resultados dos observables dentro
  }
}
