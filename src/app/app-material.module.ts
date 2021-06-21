import { NgModule } from '@angular/core'; 

import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatMenuModule } from '@angular/material/menu'; 
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
      MatButtonModule, 
      MatCardModule, 
      MatInputModule, 
      MatMenuModule, 
      MatProgressBarModule, 
      MatSelectModule
    ],
    exports: [ 
      MatButtonModule, 
      MatCardModule, 
      MatInputModule, 
      MatMenuModule, 
      MatProgressBarModule, 
      MatSelectModule
    ]
  })
  export class AppMaterialModule { }