import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MentionComponent } from "./mention/mention.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [MentionComponent],
  imports: [CommonModule, FormsModule],
  exports: [MentionComponent]
})
export class NgMentionModule {}
