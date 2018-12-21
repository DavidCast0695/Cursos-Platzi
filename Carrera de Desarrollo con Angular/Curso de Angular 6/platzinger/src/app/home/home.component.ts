import { Component, OnInit } from '@angular/core';
import {User} from "../interfaces/user";
import {UserService} from "../services/user.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    friends: User[];
    query: string = '';
    constructor(private userService: UserService) {
        // // console.log('OK');
        // let c: number = 1;
        // let b: number = 2;
        // let e: string = '1';
        // let f: string = '2';
        // console.log(e+f);
        //
        // let g: boolean = true;
        // let h: object = {};
        // console.log(g);
        // console.log(h);
        //
        // let i = [c,b,e,f,g];
        // console.log(i);
        //
        // let j: boolean [] = [true, g];
        //
        // let k: object[] = [{},h];
        //
        // let l: any[] = [1,'aoe', {}, []];
        // console.log(l);
        //
        // console.log(myUser);

        this.friends = userService.getFriends();
    }

    ngOnInit() {
    }
}
