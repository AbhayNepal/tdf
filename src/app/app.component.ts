import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from './user';
import { HttpClientModule } from '@angular/common/http';
import { EnrollmentService } from './enrollment.service';
import { error } from 'console';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  _enrollmentService = inject(EnrollmentService);

  submitted = false;
  title = 'tdf';
  topics=['Angular','React','Vue']
  topicHasError = true;
  userModel = new User('','ktm','bagmati','rob@Test.com',335355,'default','morning',true);

  onSubmit() {
    this.submitted = true;
  this._enrollmentService.enroll(this.userModel)
  .subscribe(
    data=> console.log('Success!',data),
    error=>console.log('Error!',error)
  )
  }

  validateTopic(value:string){
    if(value ==='default'){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }
  }

}
