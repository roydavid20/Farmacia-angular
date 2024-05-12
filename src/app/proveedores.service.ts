import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private apiUrl = 'http://localhost:8080/api'; // Ajusta según sea necesario

  constructor(private http: HttpClient) {}

  getProveedores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/proveedores`);
  }

  getProveedorById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/proveedor/${id}`);
  }

  addProveedor(proveedor: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/proveedor`, proveedor);
  }

  updateProveedor(proveedor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/proveedor/${proveedor.id}`, proveedor);
  }

  deleteProveedor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/proveedor/${id}`);
  }
}
