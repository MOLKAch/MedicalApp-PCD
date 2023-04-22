import { Component, OnInit } from '@angular/core';
import { Therapie } from 'src/app/common/therapie';
import { TherapieService } from 'src/app/services/therapie.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/common/appointment';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/common/comment';
@Component({
  selector: 'app-therapie',
  templateUrl: './therapie.component.html',
  styleUrls: ['./therapie.component.css']
})
export class TherapieComponent implements OnInit {
  comment:Comment=new Comment();
  comments:Comment[]=[];
  therapie:Therapie=new Therapie();
  id!:number;
  constructor(private therapiService: TherapieService,private appointmentService:AppointmentService,private commentService:CommentService,
    private route: ActivatedRoute) { }

 /*ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleThDetails();
      })
  }*/

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.therapiService.getTherapieById(this.id).subscribe(data =>{
      this.therapie=data;
      this.commentService.getCommentByThId(this.therapie.name).subscribe(data => {
        this.comments=data;
      });
    });
   
  }

  add(){
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#addAppointmentModal');
    container!.appendChild(button);
    button.click();

    
 }
 public onAddAppointment(addForm: NgForm): void {
  document.getElementById('add-Rdv-form')!.click();
  this.appointmentService.addAppointment(addForm.value).subscribe({
    next : (response: Appointment) => {
      console.log(response);
      this.handleThDetails();
      addForm.reset();
    },
    error : (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
});
}
/*getComments(): void {
  this.commentService.getCommentByThId(this.therapie.name).subscribe(data => {
    this.comments=data;
  });
}
*/
 handleThDetails() {

  // get the "id" param string. convert string to a number using the "+" symbol
  const theTherapieId: number = +this.route.snapshot.paramMap.get('id')!;
  
  this.therapiService.getTherapieById(theTherapieId).subscribe(
  data => {
  this.therapie = data;
  }
  )
  }
}
