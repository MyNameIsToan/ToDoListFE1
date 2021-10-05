import { NoteService } from './../../c_service/Note.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Notes } from 'src/app/common/Notes';

@Component({
  selector: 'app-UpdateNote',
  templateUrl: './UpdateNote.component.html',
  styleUrls: ['./UpdateNote.component.css']
})
export class UpdateNoteComponent implements OnInit {

  Num!: number;
  NoteForm!: FormGroup;

  constructor(private NoteService : NoteService) {
    this.NoteForm = new FormGroup({
      'Username': new FormControl(null,Validators.required),
      'ID': new FormControl(null,Validators.required),
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
    this.UpdateNote();
  }

    UpdateNote(){
      var note = new Notes();
      note.id = this.NoteForm.controls['ID'].value;
      note.username = this.NoteForm.controls['Username'].value;
      note.content = this.NoteForm.controls['Content'].value;
      this.NoteService.UpdateNote(note).subscribe(data=>{
        console.log(note);
        window.location.reload();
      });
    }
}
