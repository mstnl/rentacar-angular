//import { Rezervasyon } from "./rezervasyon";

export interface Car {
    Id: any;
    aracId: number;
    marka?: string;
    model?: string;
    tipi?: string;
    resim?: string;
    vitesTuru?: string;
    yakitTuru?: string;
    gunlukKiralamaUcreti?: number;
    kisiSayisi?: number;
    kapiSayisi?: number;
    klima?: boolean;
    plaka?: string;
    modelYili?: number;

   // rezervasyon?: Rezervasyon;
  }