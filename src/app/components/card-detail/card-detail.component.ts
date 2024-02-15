import { RouterLink } from '@angular/router';
import { CardModel, cards } from './../../card.model';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CardDetailComponent {
  @Input() id:number = 0;
  card:CardModel
  ngOnInit(){
    this.getCardDetail();
  }


  getCardDetail(){
    this.card = cards.find(card => card.id == this.id) as CardModel;
  }
}
