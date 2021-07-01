import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productos: any = [];
  productDetail: any;
  id: any;

  constructor(private ProductosService: ProductosService) {}

  async getProductos() {
    this.productos = await this.ProductosService.getAll();
  }

  ngOnInit(): void {
    this.getProductos();
  }
}
