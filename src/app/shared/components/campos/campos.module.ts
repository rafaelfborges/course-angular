import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MaterialModule } from "./../../material/material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputTextComponent } from "./input-text/input-text.component";
import { InputNumberComponent } from "./input-number/input-number.component";
import { InputDateComponent } from "./input-date/input-date.component";
import { InputSelectComponent } from "./input-select/input-select.component";
import { InputTextareaComponent } from "./input-textarea/input-textarea.component";

@NgModule({
  declarations: [
    InputTextComponent,
    InputNumberComponent,
    InputDateComponent,
    InputSelectComponent,
    InputTextareaComponent
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [
    InputTextComponent,
    InputNumberComponent,
    InputDateComponent,
    InputSelectComponent,
    InputTextareaComponent
  ]
})
export class CamposModule {}
