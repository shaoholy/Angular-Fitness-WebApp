import { NgModule } from '@angular/core';
import { MatToolbarModule, MatListModule, MatIconModule,
    MatDatepickerModule, MatSidenavModule, MatCheckboxModule, MatNativeDateModule,
    MatButtonModule, MatDialogModule, MatProgressSpinnerModule, MatFormFieldModule,
    MatInputModule, MatTabsModule, MatCardModule, MatSelectModule, MatTableModule,
    MatSortModule, MatPaginatorModule, MatSnackBarModule } from '@angular/material';

@NgModule({
 imports: [
     MatCheckboxModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatButtonModule,
     MatIconModule,
     MatFormFieldModule,
     MatInputModule,
     MatToolbarModule,
     MatSidenavModule,
     MatListModule,
     MatTabsModule,
     MatCardModule,
     MatSelectModule,
     MatProgressSpinnerModule,
     MatDialogModule,
     MatTableModule,
     MatSortModule,
     MatPaginatorModule,
     MatSnackBarModule
     ],
 exports: [
     MatCheckboxModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatButtonModule,
     MatIconModule,
     MatFormFieldModule,
     MatInputModule,
     MatToolbarModule,
     MatSidenavModule,
     MatListModule,
     MatTabsModule,
     MatCardModule,
     MatSelectModule,
     MatProgressSpinnerModule,
     MatDialogModule,
     MatTableModule,
     MatSortModule,
     MatPaginatorModule,
     MatSnackBarModule
     ]
})

export class MaterialModule{}
