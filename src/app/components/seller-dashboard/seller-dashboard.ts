import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-seller-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seller-dashboard.html',
  styleUrls: ['./seller-dashboard.css']
})
export class SellerDashboardComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = { name: '', description: '', price: 0 };
  editingProduct: Product | null = null;
  showForm = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadMyProducts();
  }

  loadMyProducts(): void {
    this.productService.getMyProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error loading products:', err)
    });
  }

  addProduct(): void {
    this.productService.createProduct(this.newProduct).subscribe({
      next: () => {
        this.loadMyProducts();
        this.newProduct = { name: '', description: '', price: 0 };
        this.showForm = false;
      },
      error: (err) => console.error('Error creating product:', err)
    });
  }

  editProduct(product: Product): void {
    this.editingProduct = { ...product };
  }

  updateProduct(): void {
    if (this.editingProduct && this.editingProduct.id) {
      this.productService.updateProduct(this.editingProduct.id, this.editingProduct).subscribe({
        next: () => {
          this.loadMyProducts();
          this.editingProduct = null;
        },
        error: (err) => console.error('Error updating product:', err)
      });
    }
  }

  deleteProduct(id: number | undefined): void {
  if (id && confirm('Are you sure you want to delete this product?')) {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        console.log('Product deleted successfully');
        this.loadMyProducts();  // This reloads the list
      },
      error: (err) => {
        // Even if we get an error, try reloading - it might have worked
        console.log('Checking if delete succeeded...');
        this.loadMyProducts();
      }
    });
  }
}

  cancelEdit(): void {
    this.editingProduct = null;
  }
}