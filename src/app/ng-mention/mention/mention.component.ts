import { Component, OnInit } from "@angular/core";

export enum stringType {
  PLAIN_TEXT,
  MENTION
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: "ng-mention",
  templateUrl: "./mention.component.html",
  styleUrls: ["./mention.component.css"]
})
export class MentionComponent implements OnInit {
  stringType = stringType;
  rawText: string;
  data: Array<{ type: stringType; value: string; width: number }>;

  constructor() {}

  ngOnInit(): void {
    // this.data = [
    //   { type: stringType.PLAIN_TEXT, value: "one", width: 10 },
    //   // tslint:disable-next-line: quotemark
    //   { type: stringType.MENTION, value: "two", width: 20 }
    // ];
  }
  onTextChange($event): void {
    // debugger;
    console.log(this.rawText);
    let split = this.rawText.split(" ");
    let flag = true;
    this.data = new Array<{ type: stringType; value: string; width: number }>();
    split.forEach(splited => {
      flag = !flag;
      this.data.push({
        type: flag ? stringType.MENTION : stringType.PLAIN_TEXT,
        value: splited,
        width: splited.length
      });
    });
  }
}
