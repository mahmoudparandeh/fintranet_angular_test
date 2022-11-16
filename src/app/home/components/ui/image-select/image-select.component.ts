import {Component, Input, OnInit} from '@angular/core';
import {ImageOption} from './image.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-image-select',
  templateUrl: './image-select.component.html',
  styleUrls: ['./image-select.component.sass']
})
export class ImageSelectComponent implements OnInit {
  @Input() file!: File | null;
  @Input() size = 1;
  @Input() onImageSelected!: Function;
  @Input() object: any;
  validation = '';
  imageOption = new ImageOption();

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.imageOption.imagePath = '';
    if (this.file !== null) {
      this.setImage(this.file);
    }
  }

  preview(event: any): void {
    this.file = event.target.files[0];
    this.setImage(this.file!);
  }

  setImage(file: File): void {
    try {
      const oFReader = new FileReader();
      oFReader.readAsDataURL(file);
      const image = new Image();
      image.src = URL.createObjectURL(this.file!);
      oFReader.onload = oFREvent => {
        this.imageOption.imagePath = this.domSanitizer.bypassSecurityTrustUrl(oFREvent!.target!.result!.toString());
        this.validation = '';
        this.onImageSelected(this.object, this.file);
      };
      image.onload = (e: any) => {
        if (this.file!.size > (this.size * 1024 * 1014) && this.size !== undefined) {
          this.imageOption.imagePath = '';
          this.file = null;
          this.validation = `The size of image should be less than ${this.size} MB.`;
          this.onImageSelected(this.object, this.file);
        }
      };
    } catch (e) {
      this.file = null;
      this.imageOption.imagePath = '';
      this.onImageSelected(this.object, this.file);
    }
  }

  removeImage(e: any): void {
    this.imageOption.imagePath = '';
    this.file = null;
    this.onImageSelected(this.object, this.file);
    e.preventDefault();
  }
}
