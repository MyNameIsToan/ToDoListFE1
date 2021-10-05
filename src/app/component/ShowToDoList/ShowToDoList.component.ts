import { NoteService } from './../../c_service/Note.service';
import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/common/Notes';

@Component({
  selector: 'app-ShowToDoList',
  templateUrl: './ShowToDoList.component.html',
  styleUrls: ['./ShowToDoList.component.css']
})
export class ShowToDoListComponent implements OnInit {
  Condition = "0";
  ListOfNote !: Notes[];
  constructor(private NoteService : NoteService) { }

  ngOnInit() {
    this.GetAll();
  }

  GetAll(){
    this.NoteService.GetAll().subscribe(data=>{
      this.ListOfNote = data as Notes[];
    });
  }

  RemoveNote(NoteID : bigint){
    this.NoteService.RemoveNote(NoteID).subscribe();
    window.location.reload();
  }
}
