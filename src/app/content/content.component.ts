import { Component } from "@angular/core";
import { CardsService } from '../cards.service';

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
  providers: [CardsService]
})
export class ContentComponent {
  cards = [];
  constructor(private cardsService: CardsService) {
  }
  ngOnInit() {
     this.cards = this.cardsService.cards;
  }
}
