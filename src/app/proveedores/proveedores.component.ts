import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {
  proveedores: any[] = [];
  proveedorActual: any = {};

  constructor(private proveedoresService: ProveedoresService) {}

  ngOnInit(): void {
    this.cargarProveedores();
  }

  cargarProveedores(): void {
    this.proveedoresService.getProveedores().subscribe((data: any) => {
      this.proveedores = data;
    });
  }

  guardarProveedor(): void {
    if (this.proveedorActual.id) {
      this.proveedoresService.updateProveedor(this.proveedorActual).subscribe(() => {
        this.cargarProveedores();
      });
    } else {
      this.proveedoresService.addProveedor(this.proveedorActual).subscribe(() => {
        this.cargarProveedores();
      });
    }
    this.proveedorActual = {};
  }

  editarProveedor(proveedor: any): void {
    this.proveedorActual = {...proveedor};
  }

  eliminarProveedor(id: number): void {
    this.proveedoresService.deleteProveedor(id).subscribe(() => {
      this.cargarProveedores();
    });
  }
}
