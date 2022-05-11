export const initializeApp = () => Promise.resolve({});
export const getAuth = () => Promise.resolve({});
// export const createUserWithEmailAndPassword = jest.fn((auth, email, password)
// =>Promise.resolve({ currentUser: {
//     Password: password,
//     Email: email,
//   },
// }), );
export const signInWithEmailAndPassword = () => Promise.resolve({});
export class GoogleAuthProvider {}
export const signInWithPopup = () => Promise.resolve({});
export const sendEmailVerification = () => Promise.resolve({});
export const onAuthStateChanged = () => Promise.resolve({});
export const signOut = () => Promise.resolve({});
export const getFirestore = () => Promise.resolve({});
export const collection = () => Promise.resolve({});
export const addDoc = () => Promise.resolve({});
export const getDocs = () => Promise.resolve({});
export const onSnapshot = () => Promise.resolve({});
export const db = jest.fn();
export const deleteDoc = jest.fn(() => {});
export const doc = jest.fn((_db_, nameCol, idDoc) => Object({
  [nameCol]: idDoc,
}));
export const getDoc = () => Promise.resolve({});
export const updateDoc = () => Promise.resolve({});
export const query = () => Promise.resolve({});
export const orderBy = () => Promise.resolve({});
export const collectionGroup = () => Promise.resolve({});
