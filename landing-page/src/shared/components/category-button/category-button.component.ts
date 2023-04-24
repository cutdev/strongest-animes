import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.sass'],
  standalone: true
})
export class CategoryButtonComponent implements OnInit {
  category: string = 'SHOUNEN'
  constructor() { }

  ngOnInit(): void {
  }

}
