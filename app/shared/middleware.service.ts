import { Injectable }               from '@angular/core';

import { Router,
         NavigationEnd,
         ActivatedRoute }           from '@angular/router';


@Injectable()
export class MiddlewareService
{
    constructor(
        private router: Router,
        private route: ActivatedRoute
    )
    {
        this.handle();
    }

    private handle(){
        // this.router.events.subscribe((val) => {
        //
        //     console.log(val instanceof NavigationEnd);
        //
        //     if(val instanceof NavigationEnd)
        //     {
        //         console.log(this.route.snapshot.url);
        //         console.log(this.route.snapshot.data);
        //     }
        // });

        //console.log(this.route.snapshot.url);
        console.log(this.route.snapshot.data);

        return false;
    }
}