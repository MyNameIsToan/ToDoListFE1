import { NoteService } from './../../c_service/Note.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Notes } from 'src/app/common/Notes';

@Component({
  selector: 'app-AddNewToDo',
  templateUrl: './AddNewToDo.component.html',
  styleUrls: ['./AddNewToDo.component.css']
})
export class AddNewToDoComponent implements OnInit {
  NoteForm!: FormGroup;

  constructor(private NoteService : NoteService) {
    this.NoteForm = new FormGroup({
      'Username': new FormControl(null,Validators.required),
      'ParentID': new FormControl(null),
      'Content': new FormControl(null,Validators.required)
    })
  }

  ngOnInit() {
  }

  OnSubmit(){
    if(this.NoteForm.invalid){
      console.log('invalid');
      return;
    }
    this.SaveNote();
  }

    SaveNote(){
      var note = new Notes();
      note.parentid = this.NoteForm.controls['ParentID'].value;
      note.username = this.NoteForm.controls['Username'].value;
      note.content = this.NoteForm.controls['Content'].value;
      this.NoteService.SaveNote(note).subscribe(data=>{
        console.log(note);
        window.location.reload();
      });
    }
}
