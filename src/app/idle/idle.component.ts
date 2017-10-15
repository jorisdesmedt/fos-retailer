import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idle',
  templateUrl: './idle.component.html',
  styleUrls: ['./idle.component.scss']
})
export class IdleComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private router: Router) {
    this.db.object('retail').valueChanges().subscribe((state) => {
      if (state === 'welcome') {
        this.router.navigate(['/welcome']);
      } else if (state === 'checkout') {
        this.router.navigate(['/checkout']);
      }
    })
  }

  ngOnInit() {
  }

}
