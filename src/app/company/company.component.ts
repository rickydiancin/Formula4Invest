import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
   price:any;


  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { 
 

  }

  ngOnInit() {
        // Get PRICE
    this.price = this.route.snapshot.params['price'];
    console.log(this.price);
  }

}
