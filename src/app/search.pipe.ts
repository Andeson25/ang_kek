import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(cards, value) {
    if (value != null) {
      return cards.filter(user => {
        return user.title.includes(value);
      });
    }else{
      return cards;
    }
  }
}
