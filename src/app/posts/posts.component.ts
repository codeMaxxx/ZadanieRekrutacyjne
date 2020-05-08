import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private http: HttpClient) { }
    postsLoading = true;
    wordpressPosts: any;
    error: boolean;

    getWPPosts() {
        this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts', {}).subscribe({
            next: data => {
                console.log(data);
                this.wordpressPosts = data;
                this.postsLoading = false;
            },
            error: () => this.error = true
        });
    }

  ngOnInit() {
        this.getWPPosts();
  }

}
