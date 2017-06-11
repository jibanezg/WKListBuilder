import {Component, OnInit} from "@angular/core";

declare var jQuery:any;
declare var $:any;

@Component({
   selector: 'wk-army-points',
   templateUrl: './army.points.component.html'
})

export class ArmyPointsComponent implements OnInit{

    isVisible: boolean = true;
    isDisplayNone: boolean = false;

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

    getHideAfterTimeout():boolean{

        let hide: boolean;

        setTimeout(function() {
            hide = this.isVisible;
        }, 2000);
        return hide;
    }

    setClassesInPointLimitButton(){


        return{
            'btn': true,
            'black': true,
            'scale-transition': true,
            'scale-out': !this.isVisible,
            'hide': !this.getHideAfterTimeout()
        }
    }

    setClassesInPointLimitInput(){


        return{
            'input-field': true,
            'col': true,
            's6': true,
            'scale-transition': true,
            'scale-out': this.isVisible,
            'scale-in': !this.isVisible,
            'hide': !this.getHideAfterTimeout()

        }
    }

}