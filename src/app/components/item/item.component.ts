import { Component, Input, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input () item!: Item;

  faTrash: IconProp = faTrash as IconProp;
  faPen: IconProp = faPen as IconProp;

  constructor() { }

  ngOnInit(): void { }

}
