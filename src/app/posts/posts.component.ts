import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {

  constructor(private http: HttpClient) { }
    postsLoading = true;
    wordpressPosts: any;
    error: boolean;

    paginatorConfig = {
      itemsPerPage: 5,
      itemsCount: '',
      activePage: 1,
      pages: 0,
      activePosts: []
    }

    getPaginatedItems(dataSrc) {
      this.paginatorConfig.itemsCount = dataSrc.length;
      this.paginatorConfig.pages = dataSrc.length/this.paginatorConfig.itemsPerPage;
      console.log(dataSrc)
      this.paginatorConfig.activePosts = dataSrc.slice((this.paginatorConfig.activePage-1) * this.paginatorConfig.itemsPerPage, this.paginatorConfig.itemsPerPage*this.paginatorConfig.activePage);
      console.log(this.paginatorConfig)
    }

    getPaginationPage(site, dataSrc) {
        this.paginatorConfig.activePage = site;
        this.getPaginatedItems(dataSrc.posts);
    }

    getWPPosts() {
        this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts', {}).subscribe({
            next: data => {
                // @ts-ignore
              this.getPaginatedItems(data.posts);
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
