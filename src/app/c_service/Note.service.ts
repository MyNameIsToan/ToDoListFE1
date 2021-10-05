import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notes } from '../common/Notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  url = 'http://localhost:8082/Note';
  constructor(private HttpClient : HttpClient) {

  }

  GetAll(){
    return this.HttpClient.get(this.url);
  }

  SaveNote(note: Notes){
    return this.HttpClient.post(this.url, note);
  }

  UpdateNote(note: Notes){
    return this.HttpClient.put(this.url, note);
  }

  RemoveNote(id : bigint){
    return this.HttpClient.delete(this.url+'/'+id.toString());
  }

}
