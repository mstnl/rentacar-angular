export interface Reservation {
    id: number;
    kullaniciId?: number;
    aracId?: number;
    baslangicTarihi?: Date;
    bitisTarihi?: Date;
    onayDurumu?: boolean;
    toplamUcret?: number;

  }
  