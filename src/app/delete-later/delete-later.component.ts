import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-later',
  templateUrl: './delete-later.component.html',
  styleUrls: ['./delete-later.component.css']
})
export class DeleteLaterComponent implements OnInit {
  constructor() {}

  whatUserTypes: string = '';

  birthday = new Date(1988, 12, 3);

  ngOnInit(): void {}
}
