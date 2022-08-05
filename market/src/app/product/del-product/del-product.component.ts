import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { DeleteService } from 'src/app/services/delete.service';
import { Product } from '../product';

@Component({
  selector: 'app-del-product',
  templateUrl: './del-product.component.html',
  styleUrls: ['./del-product.component.css']
})
export class DelProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
    private deleteservice: DeleteService,
    private activatedRoute: ActivatedRoute) { }
    title = 'Product List';
    filterText = '';
    products!: Product[];
    providers!: [DeleteService];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.deleteservice.delProducts(params["categoryId"]).subscribe(data=>{
        this.products = data
      });
    })
    
  }

  delToBasket(product: { name: string }) {
    this.alertifyService.success(product.name + ' Deleted');
  }
}

