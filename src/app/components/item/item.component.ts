import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();

  faTrash: IconProp = faTrash as IconProp;
  faPen: IconProp = faPen as IconProp;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  editarItem() : void{
    this.emitindoItemParaEditar.emit(this.item);
  }
}
