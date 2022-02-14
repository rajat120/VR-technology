import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyCJ_hlMHtVm8FmZHC_Tgq9QCxIw86pjGSw",
	authDomain: "vr-tech-4fcb8.firebaseapp.com",
	projectId: "vr-tech-4fcb8",
	storageBucket: "vr-tech-4fcb8.appspot.com",
	messagingSenderId: "355016780325",
	appId: "1:355016780325:web:a42533c37640a51473edcc",
	measurementId: "G-0Y19RNP0GE",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export default auth;
