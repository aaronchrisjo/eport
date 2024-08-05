import { Component } from '@angular/core';

@Component({
  selector: 'app-achievments',
  templateUrl: './achievments.component.html',
  styleUrl: './achievments.component.css'
})
export class AchievmentsComponent {
  selectedImage: string | null=null;
  openModal(imageUrl:string){
    this.selectedImage = imageUrl;
  }
  closeModal(){
    this.selectedImage = null;
  }
}
