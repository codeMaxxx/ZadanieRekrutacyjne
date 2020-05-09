import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  id: number;
  activePostData: any;
  comments: any;
  isPostActive = false;
  getPost(id) {
    this.http.get(`https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/${id}`, {}).subscribe({
      next: data => {
        console.log(data);
        this.activePostData = data;
        this.isPostActive = true;
      },
    });
  }

  // getPostComment(id) {
  //   this.http.get(`https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/comments/${id}`, {}).subscribe({
  //     next: data => {
  //       console.log(data);
  //       this.comments = data;
  //     },
  //   });
  // }



  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getPost(this.id);
    // this.getPostComment(this.id);
  }

}
