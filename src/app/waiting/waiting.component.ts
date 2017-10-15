import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss']
})
export class WaitingComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private router: Router) {
    this.db.object('retail').valueChanges().subscribe((state) => {
      if (state === 'bye') {
        this.router.navigate(['/bye']);
      }
    });
  }

  ngOnInit() {
  }

}
