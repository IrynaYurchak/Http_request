import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IpostResponse } from '../shared/interfaces/interface';
import { BlogService } from '../shared/services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  providers:[BlogService]
})

export class BlogComponent implements OnInit {

  public userPost: Array<IpostResponse> = [];
  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.blogService.getAll().subscribe(data => {
      this.userPost = data;
    })
  }

}
