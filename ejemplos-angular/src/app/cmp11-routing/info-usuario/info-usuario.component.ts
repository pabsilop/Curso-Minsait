import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css'],
})
export class InfoUsuarioComponent implements OnInit, OnDestroy {
  userId: string = '';
  // userInfo$: Observable<any> | null = null;
  usuario: any = {}
  subscription: Subscription | null = null
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // const routerData: any = this.activatedRoute.snapshot
    // console.log(routerData)
    // this.userInfo$ = this.http.get(`http://localhost:3000/users/${this.userId}`)

    this.subscription = this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
      const navigation = this.router.getCurrentNavigation();
      console.log(navigation)
      // this.userInfo$ = new Observable(o => o.next(navigation?.extras?.state?.['usuario']))
      this.usuario = navigation?.extras?.state?.['usuario']
      this.userId = this.usuario.id
    })

    // this.activatedRoute.paramMap.subscribe((params) => {
    //   if (params.has('id')) {
    //     this.userId = params.get('id')!;

    //     this.userInfo$ = this.http.get(
    //       `http://localhost:3000/users/${this.userId}`
    //     );
    //   }
    // });
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe()
  }
}
