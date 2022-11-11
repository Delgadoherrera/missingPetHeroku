const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const session = require('express-session');
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(session({ secret: 'missingPetsssss' }));
app.use(express.json({ limit: "10mb", extended: true }))
app.use(express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 }))
app.use(express.urlencoded({ extended: false }));
app.use(cors())


const PORT = process.env.PORT || 3500

app.listen(PORT, () => {
    console.log("Servidor corriendo correctamente en el puerto", PORT)

});