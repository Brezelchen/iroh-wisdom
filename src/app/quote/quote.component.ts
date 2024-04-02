import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { quotes } from "../quotes";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  public quote: string = "";

  ngOnInit(): void {
    this.getRandomQuote();
  }

  public getRandomQuote(): void {
    const index: number = Math.floor(Math.random() * (quotes.length));
    console.log("index",index);
    
    this.quote = quotes[index];
  }
}
