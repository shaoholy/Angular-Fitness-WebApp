import { NgModule } from '@angular/core'; 
import { MatIconModule, MatDatepickerModule, MatCheckboxModule, MatNativeDateModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material'; 

@NgModule({
 imports: [
     MatCheckboxModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatButtonModule,
     MatIconModule, 
     MatFormFieldModule, 
     MatInputModule
     ],   
 exports: [
     MatCheckboxModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatButtonModule,
     MatIconModule,
     MatFormFieldModule, 
     MatInputModule
     ]
})

export class MaterialModule{}