import { Component, OnInit,Input } from '@angular/core';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  @Input() product: IProduct

  ngOnInit(): void {
  }

}
