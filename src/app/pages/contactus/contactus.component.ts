import { Component } from '@angular/core';
import { ListComponent } from "../../unit/list/list.component";

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

}
