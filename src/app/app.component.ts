import { Component, Output } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  b: string = "_";
  flag:boolean=false;
  toggle: number = 0;
  flagred:boolean=true;
  flaggreen:boolean=true;

  c: number[] = [3,3,3,3, 3, 3, 3, 3, 3, 3,3,3,3];
  co:number[]=[1,1,1,1, 1, 1, 1, 1, 1, 1,1,1,1];
  array1: number[][] = [
    [4,4,4,4, 4, 4, 4, 4, 4,4,4,4],
    [4,4,4,4, 4, 4, 4, 4, 4,4,4,4],
    [4,4,4,4, 4, 4, 4, 4, 4,4,4,4],
    [4,4,4,0, 0, 0, 0, 0, 0,4,4,4],
    [4,4,4,0, 0, 0, 0, 0, 0,4,4,4],
    [4,4,4,0, 0, 0, 0, 0, 0,4,4,4],
    [4,4,4,0, 0, 0, 0, 0, 0,4,4,4],
    [4,4,4,0, 0, 0, 0, 0, 0,4,4,4],
    [4,4,4,0, 0, 0, 0, 0, 0,4,4,4],
    [4,4,4,4, 4, 4, 4, 4, 4,4,4,4],
    [4,4,4,4, 4, 4, 4, 4, 4,4,4,4],
    [4,4,4,4, 4, 4, 4, 4, 4,4,4,4],
    
    
  ];
  i :number;
  j :number;
  
  k :number;
  l :number;
  
  
  
  change(m: any) {
 
    
    console.log(m.value);
    let a = parseInt(m.value, 10);
  if (a>=0 && a <7 && this.co[a]<=6 ) {
    a=a+3;
      if (this.toggle == 0) {
        this.array1[this.c[a]][a] = 1;
        this.co[a-3]=this.co[a-3]+1;
        let r :number= this.c[a];
        let put: number =a; 
        this.c[a] = this.c[a]+1;

        this.toggle =1;   
        
                  if((this.array1[r][put]==1 &&this.array1[r-1][put]==1 &&this.array1[r-2][put]==1 && this.array1[r-3][put]==1)||
        (this.array1[r+1][put]==1 &&this.array1[r][put]==1 &&this.array1[r-1][put]==1 && this.array1[r-2][put]==1)||
        (this.array1[r+2][put]==1 &&this.array1[r+1][put]==1 &&this.array1[r][put]==1 && this.array1[r-1][put]==1)||
        (this.array1[r+3][put]==1 &&this.array1[r+2][put]==1 &&this.array1[r+1][put]==1 && this.array1[r][put]==1)
        ){
            //alert("red wins");
          this.flag=true;
          this.flagred=false;
            }
        if((this.array1[r][put]==1 &&this.array1[r][put+1]==1 &&this.array1[r][put+2]==1 && this.array1[r][put+3]==1)||
        (this.array1[r][put-1]==1 &&this.array1[r][put]==1 &&this.array1[r][put+1]==1 && this.array1[r][put+2]==1)||
        (this.array1[r][put-2]==1 &&this.array1[r][put-1]==1 &&this.array1[r][put]==1 && this.array1[r][put+1]==1)||
                (this.array1[r][put-3]==1 &&this.array1[r][put-2]==1 &&this.array1[r][put-1]==1 && this.array1[r][put]==1)
        ){
          //alert("red wins");
          this.flag=true;
          this.flagred=false;
          
                      }
        
        if((this.array1[r][put]==1 &&this.array1[r-1][put-1]==1 &&this.array1[r-2][put-2]==1 && this.array1[r-3][put-3]==1)||
        (this.array1[r+1][put+1]==1 &&this.array1[r][put]==1 &&this.array1[r-1][put-1]==1 && this.array1[r-2][put-2]==1)||
        (this.array1[r+2][put+2]==1 &&this.array1[r+1][put+1]==1 &&this.array1[r][put]==1 && this.array1[r-1][put-1]==1)||
        (this.array1[r+3][put+3]==1 &&this.array1[r+2][put+2]==1 &&this.array1[r+1][put+1]==1 && this.array1[r][put]==1)
        ){
           alert("red wins");
          this.flag=true;
          this.flagred=false;
          
            }
        
        if((this.array1[r][put]==1 &&this.array1[r-1][put-1]==1 &&this.array1[r-2][put-2]==1 && this.array1[r-3][put-3]==1)||
        (this.array1[r+1][put+1]==1 &&this.array1[r][put]==1 &&this.array1[r-1][put-1]==1 && this.array1[r-2][put-2]==1)||
        (this.array1[r+2][put+2]==1 &&this.array1[r+1][put+1]==1 &&this.array1[r][put]==1 && this.array1[r-1][put-1]==1)||
        (this.array1[r+3][put+3]==1 &&this.array1[r+2][put+2]==1 &&this.array1[r+1][put+1]==1 && this.array1[r][put]==1)
        ){
         // alert("red wins");
          this.flag=true;
          this.flagred=false;
          
            }
        if((this.array1[r][put]==1 &&this.array1[r+1][put-1]==1 &&this.array1[r+2][put-2]==1 && this.array1[r+3][put-3]==1)||
        (this.array1[r-1][put+1]==1 &&this.array1[r][put]==1 &&this.array1[r+1][put-1]==1 && this.array1[r+2][put-2]==1)||
        (this.array1[r-2][put+2]==1 &&this.array1[r-1][put+1]==1 &&this.array1[r][put]==1 && this.array1[r+1][put-1]==1)||
        (this.array1[r][put]==1 &&this.array1[r-1][put+1]==1 &&this.array1[r-2][put+2]==1 && this.array1[r-3][put+3]==1)
        ){
        ///  alert("red wins");
          this.flag=true;
          this.flagred=false;
          
            }
        
        
        
        if((this.array1[r][put]==1 &&this.array1[r+1][put-1]==1 &&this.array1[r+2][put-2]==1 && this.array1[r+3][put-3]==1)||
        (this.array1[r-1][put+1]==1 &&this.array1[r][put]==1 &&this.array1[r+1][put-1]==1 && this.array1[r+2][put-2]==1)||
        (this.array1[r-2][put+2]==1 &&this.array1[r-1][put+1]==1 &&this.array1[r][put]==1 && this.array1[r+1][put-1]==1)||
        (this.array1[r][put]==1 &&this.array1[r-1][put+1]==1 &&this.array1[r-2][put+2]==1 && this.array1[r-3][put+3]==1)
        ){//  alert("red wins");
          this.flag=true;
          this.flagred=false;
            }
            
            
            
            
            
            




      } else {
        this.array1[this.c[a]][a] = 2;
        this.co[a-3]=this.co[a-3]+1;
        let r :number= this.c[a];
        let put: number =a; 
        this.c[a] = this.c[a]+1;

        this.toggle = 0;
        
    if((this.array1[r][put]==2 &&this.array1[r-1][put]==2 &&this.array1[r-2][put]==2 && this.array1[r-3][put]==2)||
        (this.array1[r+1][put]==2 &&this.array1[r][put]==2 &&this.array1[r-1][put]==2 && this.array1[r-2][put]==2)||
        (this.array1[r+2][put]==2 &&this.array1[r+1][put]==2 &&this.array1[r][put]==2 && this.array1[r-1][put]==2)||
        (this.array1[r+3][put]==2 &&this.array1[r+2][put]==1 &&this.array1[r+1][put]==2 && this.array1[r][put]==2)
        ){
          //  alert("blue wins");
          this.flag=true;
          this.flaggreen=false;
            }
        if((this.array1[r][put]==2 &&this.array1[r][put+1]==2 &&this.array1[r][put+2]==2 && this.array1[r][put+3]==2)||
        (this.array1[r][put-1]==2 &&this.array1[r][put]==2 &&this.array1[r][put+1]==2 && this.array1[r][put+2]==2)||
        (this.array1[r][put-2]==2 &&this.array1[r][put-1]==2 &&this.array1[r][put]==2 && this.array1[r][put+1]==2)||
                (this.array1[r][put-3]==2 &&this.array1[r][put-2]==2 &&this.array1[r][put-1]==2 && this.array1[r][put]==2)
        ){this.flag=true;
          
        //  alert("blue wins");
          this.flaggreen=false;
          
            }
        
        if((this.array1[r][put]==2 &&this.array1[r-1][put-1]==2 &&this.array1[r-2][put-2]==2 && this.array1[r-3][put-3]==2)||
        (this.array1[r+1][put+1]==2 &&this.array1[r][put]==2 &&this.array1[r-1][put-1]==2 && this.array1[r-2][put-2]==2)||
        (this.array1[r+2][put+2]==2 &&this.array1[r+1][put+1]==2 &&this.array1[r][put]==2 && this.array1[r-1][put-1]==2)||
        (this.array1[r+3][put+3]==2 &&this.array1[r+2][put+2]==2 &&this.array1[r+1][put+1]==2 && this.array1[r][put]==2)
        ){
         //  alert("blue wins");
          this.flag=true;
          this.flaggreen=false;
            }
        
        if((this.array1[r][put]==2 &&this.array1[r-1][put-1]==2 &&this.array1[r-2][put-2]==2 && this.array1[r-3][put-3]==2)||
        (this.array1[r+1][put+1]==2 &&this.array1[r][put]==2 &&this.array1[r-1][put-1]==2 && this.array1[r-2][put-2]==2)||
        (this.array1[r+2][put+2]==2 &&this.array1[r+1][put+1]==2 &&this.array1[r][put]==2 && this.array1[r-1][put-1]==2)||
        (this.array1[r+3][put+3]==2 &&this.array1[r+2][put+2]==2 &&this.array1[r+1][put+1]==2 && this.array1[r][put]==2)
        ){
          this.flag=true;
          this.flaggreen=false;
         
         // alert("blue wins");
            }
        if((this.array1[r][put]==2 &&this.array1[r+1][put-1]==2 &&this.array1[r+2][put-2]==2 && this.array1[r+3][put-3]==2)||
        (this.array1[r-1][put+1]==2 &&this.array1[r][put]==2 &&this.array1[r+1][put-1]==2 && this.array1[r+2][put-2]==2)||
        (this.array1[r-2][put+2]==2 &&this.array1[r-1][put+1]==2 &&this.array1[r][put]==2 && this.array1[r+1][put-1]==2)||
        (this.array1[r][put]==2 &&this.array1[r-1][put+1]==2 &&this.array1[r-2][put+2]==2 && this.array1[r-3][put+3]==2)
        ){
         // alert("blue wins");
          this.flag=true;
          this.flaggreen=false;
         
            }
        
        
        
        if((this.array1[r][put]==2 &&this.array1[r+1][put-1]==2 &&this.array1[r+2][put-2]==2 && this.array1[r+3][put-3]==2)||
        (this.array1[r-1][put+1]==2&&this.array1[r][put]==2 &&this.array1[r+1][put-1]==2 && this.array1[r+2][put-2]==2)||
        (this.array1[r-2][put+2]==2 &&this.array1[r-1][put+1]==2 &&this.array1[r][put]==2 && this.array1[r+1][put-1]==2)||
        (this.array1[r][put]==2 &&this.array1[r-1][put+1]==2 &&this.array1[r-2][put+2]==2 && this.array1[r-3][put+3]==2)
        ){ // alert("blue wins");
          this.flag=true;
          this.flaggreen=false;
          
            }

  
    } 
    
      
  }
  else{
    alert('wrong input');
  }
  }
  }
