import {Component, OnInit} from "@angular/core";

declare var jQuery:any;
declare var $:any;

@Component({
   selector: 'wk-army-points',
   templateUrl: './army.points.component.html'
})

export class ArmyPointsComponent implements OnInit{

    isVisible: boolean = true;


    constructor(

    ){}

    ngOnInit(){
    

    }

    clicked(event){

        this.isVisible = !this.isVisible;
    }

    pressedEnter(){
         this.isVisible = !this.isVisible;
    }

    setClassesInPointLimitButton(){


        return{
            'btn': true,
            'black': true,
            'scale-transition': true,
            'scale-out': !this.isVisible
        }
    }

    setClassesInPointLimitInput(){


        return{
            'input-field': true,
            'col': true,
            's6': true,
            'scale-transition': true,
            'scale-out': this.isVisible,
            'scale-in': !this.isVisible
        }
    }



}