import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tdf';
  topics=['Angular','React','Vue']
  topicHasError = true;

  userModel = new User('','ktm','bagmati','rob@Test.com',335355,'default','morning',true);

  validateTopic(value:string){
    if(value==='default'){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }
  }
}
