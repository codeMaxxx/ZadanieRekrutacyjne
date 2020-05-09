import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {

  constructor(private http: HttpClient) { }

  activePostData: any;

  getPost(id) {
    this.activePostData = {};
    this.http.get(`https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/${id}`, {}).subscribe({
      next: data => {
        this.activePostData = data;
      },
    });
  }

  ngOnInit() {
  }

}
