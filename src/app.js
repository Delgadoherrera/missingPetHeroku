const express = require('express');
const path = require('path');

const app = express();

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());



const PORT = process.env.PORT || 3500

app.listen(PORT, () => {
    console.log("Servidor corriendo correctamente en el puerto", PORT)

});