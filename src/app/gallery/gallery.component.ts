import { Component} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent{
  btn = false;
  urlImage = '';
  imageTitle = '';
  password = '';

  images = [
    {title: 'Sea', url: 'https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg'},
    {title: 'Sea and beautiful beach', url: 'https://thumbs.dreamstime.com/b/palms-tropical-beach-white-sand-summer-vacation-travel-holiday-background-concept-caribbean-paradise-beach-palms-136606345.jpg'},
    {title: 'Sea and temple', url: 'https://media.nationalgeographic.org/assets/photos/298/607/e0a5c0a2-f084-47a8-a41c-e3223146cd9e.jpg'},
  ]

  getPassword(event: Event){
    const target = <HTMLInputElement> event.target;
    this.password = target.value;
  }

  getImageUrl(event: Event){
    const target = <HTMLInputElement> event.target;
    this.urlImage = target.value;
  }

  getImageTitle(event: Event){
    const target = <HTMLInputElement> event.target;
    this.imageTitle = target.value;
  }

  addImage(event: Event){
    event.preventDefault();
    this.images.push({
      title: this.imageTitle,
      url: this.urlImage
    })

    this.clearField()
  }

  clearField(){
    this.urlImage = '';
    this.imageTitle = '';
  }


}
