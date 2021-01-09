// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
  apiKey: "AIzaSyCMch00ysO-OKEfawLX_EOLGvYb0RuCsfQ",
  authDomain: "doc-ef951.firebaseapp.com",
  projectId: "doc-ef951",
  storageBucket: "doc-ef951.appspot.com",
  messagingSenderId: "933859470443",
  appId: "1:933859470443:web:8edbc19885bae88257552e",
  measurementId: "G-8MZ871W9TB"
};

firebase.initializeApp(config);
var firestore = firebase.firestore();

const docRef = firestore.doc("/samples/messiORronaldo");
const outputHeader = document.querySelector('#goatStatus');
const inputTextField = document.querySelector('#RMStatus');
const saveButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");

saveButton.addEventListener("click", function(){
	const textToSave = inputTextField.value;
	console.log("I am going to store "+ textToSave + " to Firestore");
	
	docRef.set({
		MRstatus: textToSave
	}).then(function(){
		console.log("Status saved");
	}).catch(function(){
		console.log("Got an error: ", error);
	});
})

loadButton.addEventListener("click", function(){
	docRef.get().then(function(doc){
		if(doc && doc.exists){
			const myData = doc.data();
			outputHeader.innerText = "Real GOAT is "+ myData.MRstatus;
		}
	}).catch(function(error){
		console.log("Got an Error ", error);
	})
})


getRealTimeUpdate = function(){
	docRef.onSnapshot(function(doc){
		if(doc && doc.exists){
			const myData = doc.data();
			outputHeader.innerText = "Real GOAT is "+ myData.MRstatus;
		}
	})
}

getRealTimeUpdate();
