import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private router: Router) {
    this.db.object('retail').valueChanges().subscribe((state) => {
      if (state === 'idle') {
        this.router.navigate(['/idle']);
      }
    })
  }

  ngOnInit() {
  }

}
