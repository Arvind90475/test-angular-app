import { Component, OnInit } from '@angular/core';
import { ImageSearchServiceService } from '../services/image-search-service.service';
import { ThrowStmt } from '@angular/compiler';
import { APIResult } from '../services/image-search-service.service'
import { ImageResult } from '../services/image-search-service.service'


@Component({
  selector: 'app-image-search-form',
  templateUrl: './image-search-form.component.html',
  styleUrls: ['./image-search-form.component.css']
})
export class ImageSearchFormComponent implements OnInit {
  public errorMessage: string = '';
  public loadingImage = false;
  public searchTerm = '';
  public images = [];

  constructor(private imageService: ImageSearchServiceService) { }

  ngOnInit(): void {
  }

  public searchFormSubmit() {
    this.errorMessage = '';
    this.images = [];
    if (!this.searchTerm.trim()) {
      return this.errorMessage = 'Please enter something'
    }
    this.loadingImage = true;
    this.imageService.getImages(this.searchTerm)
      .subscribe((images: string[]) => {
        this.images = images;
        this.loadingImage = false;
      });

  }
}
