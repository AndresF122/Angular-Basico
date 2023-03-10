import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //exports me dice que cosas quiero hacer publicas
        ListadoComponent
    ],
    imports: [  //imports sirve para importar los modulos que necesitemos 
        CommonModule 
    
    ],
})
export class HeroesModule {}