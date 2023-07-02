import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-merge-concat',
  templateUrl: './merge-concat.component.html',
  styleUrls: ['./merge-concat.component.scss'],
})
export class MergeConcatComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // this.operatorMerge();
    this.operatorConcat();
  }

  operatorMerge() {
    this.apiService.getUsersWithMerge().subscribe((res) => console.log(res)); // Retorna cada valor que é emitido em respostas diferentes na ordem em que são emitidos
  }

  operatorConcat() {
    this.apiService.getUsersWithConcat().subscribe((res) => console.log(res)); // Retorna cada valor que é emitido em respostas diferentes na ordem declarada, só retorna o valor do próximo observable quando o anterior for completado
  }
}
