import { HomeComponent } from "./components/home/home.component";
import { DetallesseriesComponent } from "./components/detallesseries/detallesseries.component";
import { DetallespersonajesComponent } from "./components/detallespersonajes/detallespersonajes.component";
import { InsertarpersonajeComponent } from "./components/insertarpersonaje/insertarpersonaje.component";
import { ModificarpersonajeComponent } from "./components/modificarpersonaje/modificarpersonaje.component";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//DEFINIMOS UN ARRAY DE OBJETOS Routes
const appRoutes: Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "serie/:idSerie", component: DetallesseriesComponent
    },
    {
        path: "personajes/:id", component: DetallespersonajesComponent
    },
    {
        path: "nuevopersonaje", component: InsertarpersonajeComponent
    },
    {
        path: "modificarpersonaje", component: ModificarpersonajeComponent
    },
]

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

