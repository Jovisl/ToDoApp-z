import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat-picture',
  template: `
    <div class="cat-container">
      <h2>Random Cat Picture</h2>
      <div class="button-container">
        <button (click)="fetchCat()">Get a new cat picture</button>
      </div>
      <div *ngIf="catUrl" class="cat-image">
        <img [src]="catUrl" alt="Random Cat" />
      </div>
    </div>
  `,
  styles: [
    `
      .cat-container {
        text-align: center;
        margin: 20px;
      }
      .button-container {
        margin-bottom: 20px;
      }
      .cat-image img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      button {
        background-color: #3498db;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s;
      }
      button:hover {
        background-color: #2980b9;
      }
    `,
  ],
})
export class CatPictureComponent implements OnInit {
  catUrl: string | null = null;

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.fetchCat();
  }

  fetchCat() {
    this.catService.getRandomCat().subscribe((data) => {
      if (data && data.length > 0) {
        this.catUrl = data[0].url;
      }
    });
  }
}
