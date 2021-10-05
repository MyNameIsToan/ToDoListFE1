import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../common/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:8082/User';
  constructor(private HttpClient : HttpClient) {

  }

  GetAll(){
    return this.HttpClient.get(this.url);
  }

  SaveUser(users : Users){
    return this.HttpClient.post(this.url, users);
  }

  UpdateUser(users: Users){
    return this.HttpClient.put(this.url, users);
  }

  RemoveUser(id : string){
    return this.HttpClient.delete(this.url+'/'+id);
  }
}
