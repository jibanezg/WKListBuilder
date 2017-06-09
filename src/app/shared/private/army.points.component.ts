import {Component, OnInit} from "@angular/core";

declare var jQuery:any;
declare var $:any;

@Component({
   selector: 'wk-army-points',
   templateUrl: './army.points.component.html'
})

export class ArmyPointsComponent implements OnInit{

    isVisible: boolean = false;

    constructor(

    ){}

    ngOnInit(){
    

    }

    clicked(event){

        this.isVisible = !this.isVisible;
    }

    setClasses(){


        return{
            'btn': true,
            'black': true,
            'scale-transition': this.isVisible ==true,
            'scale-out': this.isVisible
        }
    }

}