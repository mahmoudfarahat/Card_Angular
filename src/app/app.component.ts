import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  posts =
  [
{title: 'Neat Tree',  imageUrl:'assets/tree.jpeg' , username:'nature' , content:'I saw this neat tree today'},
{title: 'Snowy',  imageUrl:'assets/mountain.jpeg' , username:'mountainlover' , content:'Here is a picture of a snowy mountain'},
{title: 'Mounatain Biking',  imageUrl:'assets/biking.jpeg' , username:'biking' , content:'I did some biking today'},
{title: 'Snowy',  imageUrl:'assets/mountain.jpeg' , username:'mountainlover' , content:'Here is a picture of a snowy mountain'}
  ]
}
