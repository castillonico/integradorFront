import { NgModule } from '@angular/core'; 

import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatMenuModule } from '@angular/material/menu'; 
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatSelectModule } from '@angular/material/select'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    imports: [
      MatButtonModule, 
      MatCardModule, 
      MatInputModule, 
      MatMenuModule, 
      MatProgressBarModule, 
      MatSelectModule, 
      MatProgressSpinnerModule
    ],
    exports: [ 
      MatButtonModule, 
      MatCardModule, 
      MatInputModule, 
      MatMenuModule, 
      MatProgressBarModule, 
      MatSelectModule, 
      MatProgressSpinnerModule
    ]
  })
  export class AppMaterialModule { }