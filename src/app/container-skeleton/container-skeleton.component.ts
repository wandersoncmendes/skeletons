import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-skeleton',
  templateUrl: './container-skeleton.component.html',
  styleUrls: ['./container-skeleton.component.css']
})
export class ContainerSkeletonComponent implements OnInit {
  
  public loading = true;
  public addMoreLoading = false;

  public element: any

  public array = new Array(4)

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.findItemsApi(4).subscribe((data) => {
      this.array = data;
      this.element = document.getElementById('infinite-scroll')
      this.element.addEventListener("scroll", (ev: any) => {
        if (ev.target.scrollTop >= ((ev.target.scrollHeight - ev.target.clientHeight) - 50) && !this.addMoreLoading) {
          this.addMoreLoading = true;
          this.addElementsToInfinitScroll();
        }
      })
      this.loading = false;

    })


  }

  public addElementsToInfinitScroll() {
    this.apiService.findItemsApi(4).subscribe(data => {
      this.array = [...this.array, ...data];
      this.addMoreLoading = false;
    })
  }


}
