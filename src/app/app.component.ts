import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'typing';
  sentences = [
    "Ko rano rani, dvije sreće grabi.",
    "Klin se klinom izbija.",
    "Tuđeg ata sjaši na sred blata!", 
    "U laži su kratke noge.",
    "Ko drugome jamu kopa sam u nju upada."
  ];

  randomText = this.sentences[Math.floor((Math.random()*this.sentences.length))];
  
  enteredText = '';
  displayText = this.getDisplayText();

  getDisplayText() {
    let ret = ''
    for (var i = 0; i < this.randomText.length; i++) {
      let className = '';
      if (!this.enteredText[i]) {
        className = "pending";
      } else {
        className = this.enteredText[i] === this.randomText[i] ? "correct" : "incorrect";
      }
      ret = ret + "<span class=" + className + ">" + this.randomText[i] + "</span>";
    }
    return ret;
  }

  getLetterClass(randomLetter: string, enteredLetter: string) {
      if (!enteredLetter)
      {
        return "pending";
      }
      else {
        return randomLetter === enteredLetter ? "correct" : "incorrect";
      }
  }

  onChangeInput(event: any) {
    this.enteredText = event.target.value;
    this.displayText = this.getDisplayText();
  }
}
