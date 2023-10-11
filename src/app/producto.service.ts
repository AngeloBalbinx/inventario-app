import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase = "http://localhost:8080/inventario-app/productos";
  private urlAgregar = "http://localhost:8080/inventario-app/agregarprod";

  constructor(private clienteHtpp:HttpClient) { }
  obtenerProductosLista():Observable<Producto[]>{
    return this.clienteHtpp.get<Producto[]>(this.urlBase);
  }
  agregarProducto(producto:Producto):Observable<Object>{
    return this.clienteHtpp.post(this.urlAgregar,producto);
  }
  obtenerProductoPorId(id:number){
    return this.clienteHtpp.get<Producto>(`${this.urlBase}/${id}`);
  }
  editarProducto(id:number,producto:Producto):Observable<Object>{
    return this.clienteHtpp.put(`${this.urlBase}/${id}`,producto);
  }
  eliminarProducto(id:number):Observable<Object>{
    return this.clienteHtpp.delete(`${this.urlBase}/${id}`);
  }
}
