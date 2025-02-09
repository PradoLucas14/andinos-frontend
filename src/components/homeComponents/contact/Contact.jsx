import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Alert } from "@mui/material";
import "./Contact.css";

function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="contact">
      <div className="contactBanner">
        <Grid container spacing={0} className="contactContainer" style={{ height: "100%" }}>
          {/* Columna izquierda vacía */}
          <Grid item xs={12} md={6} className="leftColumn" style={{ height: "100%" }}></Grid>
          
          {/* Columna derecha con el formulario */}
          <Grid item xs={12} md={6} className="rightColumn" style={{ height: "100%" }}>
            <Paper elevation={3} className="formContainer">
              <h2>Contacto</h2>
              {showAlert && <Alert severity="success">Mensaje enviado con éxito!</Alert>}
              <form onSubmit={handleSubmit}>
                <TextField fullWidth className="input" label="Nombre" variant="outlined" margin="normal" />
                <TextField fullWidth className="input" label="Correo Electrónico" variant="outlined" margin="normal" />
                <TextField fullWidth className="input" label="Mensaje" variant="outlined" margin="normal" multiline rows={6} />
                <Button variant="contained" color="primary" fullWidth type="submit">
                  Enviar
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Contact;