import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/componentes/user.service';
import {User} from'src/app/views/criar-user/Criar.model'
import { UploadFileServiceService } from 'src/app/componentes/Servicos/upload-file-service.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-criar-user',
  templateUrl: './criar-user.component.html',
  styleUrls: ['./criar-user.component.css']
})



export class CriarUserComponent implements OnInit {
user:User={
  nome:"",
  username:"",
  isadmin:false,
  password: ""

}
selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;

url="http://localhost:7979/criar";
  constructor(private uploadService: UploadFileServiceService,private http:HttpClient,private userservice: UserService,private rota:Router) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();

  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  onFileSelected():void{
    const inputNode:any=document.querySelector('#file');
    if(typeof(FileReader)!=='undefined'){

      const reader=new FileReader();

      reader.onload=(e:any)=>{
        
      }
      reader.readAsArrayBuffer(inputNode.files[0])
    }

  }

  Criar():void{
    console.log(this.user)
    const headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
  

    this.http.post(this.url,this.user,{headers, responseType: 'text' as 'json'}).subscribe(data=>{
      
      this.userservice.showMessage(JSON.stringify(data));
      
     
      

   
      })
   

      }
      upload(): void {
        this.progress = 0;
      
        if (this.selectedFiles) {
          const file: File | null = this.selectedFiles.item(0);
      
          if (file) {
            this.currentFile = file;
      
            this.uploadService.upload(this.currentFile).subscribe(
              (event: any) => {
                if (event.type === HttpEventType.UploadProgress) {
                  this.progress = Math.round(100 * event.loaded / event.total);
                } else if (event instanceof HttpResponse) {
                  this.message = event.body.message;
                  this.fileInfos = this.uploadService.getFiles();
                }
              },
              (err: any) => {
                console.log(err);
                this.progress = 0;
      
                if (err.error && err.error.message) {
                  this.message = err.error.message;
                } else {
                  this.message = 'Não foi possivel carregar a imagem';
                }
      
                this.currentFile = undefined;
              });
          }
      
          this.selectedFiles = undefined;
        }
      }

}
