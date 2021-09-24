
var admin = require("firebase-admin");

var serviceAccount = require("./notification-67a14-firebase-adminsdk-htbt0-e76a78fb6a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const token="f2_DvVC9R-ueJz2yz_VQoL:APA91bH34UxVyadEqoEB0b7y6XPhvOmCbrnZpwrjVZ1pzTS3dNcBz_IIop23jCp5W3-wtwK5mIwWpoLVYN36Na-1f7uvCSTuVf6NIjbirmrsxL1TY8pq0Q36SUDpyxRm5JspDoPA2mVX"

admin.messaging().send({
    token: token,
    data: {
        customData: "Deneme",
        id: "1",
        ad: "Yasin",
        subTitle: "Nodejs Bildirimiii"
    },
    android: {
        notification: {
            body: "Nodejsden Gelen Bildirim 😊",
            title: "Nodejs Title 😊",
            color: "#fff566",
            priority: "high",
            sound: "default",
            vibrateTimingsMillis: [200, 500, 800],
            imageUrl: "https://images.unsplash.com/photo-1516475429286-465d815a0df7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    }
}).then((msg) => {
    console.log(msg)
})