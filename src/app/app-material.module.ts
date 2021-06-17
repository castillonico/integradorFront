import { NgModule } from '@angular/core'; 

import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatMenuModule } from '@angular/material/menu'; 
import { MatProgressBarModule } from '@angular/material/progress-bar'; 

@NgModule({
    imports: [
      MatButtonModule, 
      MatCardModule, 
      MatInputModule, 
      MatMenuModule, 
      MatProgressBarModule
    ],
    exports: [ 
      MatButtonModule, 
      MatCardModule, 
      MatInputModule, 
      MatMenuModule, 
      MatProgressBarModule
    ]
  })
  export class AppMaterialModule { }