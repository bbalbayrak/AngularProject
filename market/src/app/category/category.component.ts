import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  title = 'Category List';
  categories!: Category[];

  ngOnInit() {
    this.categoryService.getCategoriess().subscribe((data) => {
      this.categories = data;
    });
  }
}
