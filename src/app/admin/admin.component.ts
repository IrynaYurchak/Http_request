import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../shared/services/blog.service';
import { IpostResponse, IpostRequest } from '../shared/interfaces/interface';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [BlogService]
})
export class AdminComponent implements OnInit {
  public editStatus = false;
  public title: string = '';
  public img : string = 'https://wallpaper.forfun.com/fetch/78/7857d629d5c61e7a78441ac2e525d810.jpeg';
  public author: string = '';
  public text: string = '';
  public id: number | undefined;
  public editID!: number;
  public adminPost: IpostResponse[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.blogService.getAll().subscribe((data) => {
      this.adminPost = data;
    });
  }

  create(): void {
    const newPost: IpostRequest = {
      title: this.title,
      text: this.text,
      author: this.author,
      img: this.img // Зміни для відповідності інтерфейсу
    };
    this.blogService.create(newPost).subscribe(() => {
      this.getPost();
      this.resetForm();
    });
  }

  updata(post:IpostResponse): void {
    this.title=post.title,
    this.text= post.text,
    this.author=post.author,
    this.img= post.img 
    this.editStatus = true;
    this.editID = post.id;
  }

  saveEdit():void{
    const updataPost={
      title: this.title,
      text: this.text,
      author: this.author,
      img: this.img 
    };
    this.blogService.updata(updataPost,this.editID).subscribe(() => {
      this.getPost();
      this.resetForm();
      this.editStatus = false;

    })
  }
  delete(post: IpostResponse): void {
    if (confirm('Are you sure?')) {
      this.blogService.delete(post.id).subscribe(() => {
        this.getPost();
      });
    }
  }

  private resetForm(): void {
    this.title = '';
    this.text = '';
    this.author = '';
    this.editStatus = false;
  }
}