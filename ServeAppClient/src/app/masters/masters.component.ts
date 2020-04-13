import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {

  constructor(private route : Router) { }

  
  ngOnInit() {
  }

  save(event){
   switch(event){
     case 'item':
                this.route.navigate(['/item-master'], { replaceUrl: true });
                break;

      case 'category':
                this.route.navigate(['/category-master'], { replaceUrl: true });
                break;
      
      case 'customer':
                this.route.navigate(['/customer-master'], { replaceUrl: true });
                break;
      case 'combo':
                  this.route.navigate(['/combo-master'], { replaceUrl: true });
                  break;
      case 'customer-group':
                    this.route.navigate(['/customer-group-master'], { replaceUrl: true });
                    break;     
      case 'kitchen':
                      this.route.navigate(['/kitchen-master'], { replaceUrl: true });
                      break;   
       
   }
    
  }
  undo(){
    console.log('undo');
    
    this.route.navigate(['/item-master'], { replaceUrl: true });

  }
}
