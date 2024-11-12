import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc, addDoc, collection, collectionData, query } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);

  // ==================== Auth ====================
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  // ==================== SignUp ====================
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //=============== Recuperar contraseña ===============
  resetPassword(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }
  
  // ==================== Update User ====================
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName });
  }

  // ==================== Data Base ====================
  // ==================== Obtener documentos de una coleccion ====================
  getCollectionData(path: string, collectionQuery?: any) {
    const ref = collection(getFirestore(), path);
    return collectionData(query(ref, collectionQuery), { idField: 'id' });
  }

  // ==================== Set ====================
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  // ==================== Get ====================
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }

  // ==================== Add ====================
  addDocument(path: string, data: any) {
    return addDoc(collection(getFirestore(), path), data);
  }
}
