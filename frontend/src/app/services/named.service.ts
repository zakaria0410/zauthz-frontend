import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept':'*/*'

  })
}

@Injectable({
  providedIn: 'root'
})
export class NamedService {

  private readonly baseUrl = 'http://localhost:8080/' ;
  constructor(private http:HttpClient) { }

  public get(path:any):Observable<any>{
    return this.http.get<any>(this.baseUrl+path, httpOptions);
  }
  public listAll(path:any):Observable<any>{
    return this.http.get<any>(this.baseUrl+path+"/all", httpOptions);
  }
save(object:any,path):Observable<any>{

  return this.http.post<any>(this.baseUrl+path,object, httpOptions);
}
update(object:any,id:any,path):Observable<any>{

    return this.http.put<any>(this.baseUrl+path+'/'+id,object, httpOptions);
  }
delete(id:any,path):Observable<any>{
  return this.http.delete<any>(this.baseUrl+path+'/'+id, httpOptions);
}
upload(file: File,path): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();
  formData.append('file', file);
  const req = new HttpRequest('POST', `${this.baseUrl}${path}/upload`, formData, {
    reportProgress: true,
    responseType: 'json'
  });
  return this.http.request(req);
}
}
