import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Item } from 'src/models/CardItems';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private firestore: AngularFirestore) {}

  getItems(): Observable<Item[]> {
    return this.firestore.collection<Item>('items').valueChanges();
  }
  getContents(): Observable<Item[]> {
    return this.firestore.collection<Item>('contents').valueChanges();
  }
  getTeacherOnline(): Observable<Item[]> {
    return this.firestore.collection<Item>('modeOnline').valueChanges();
  }
}
