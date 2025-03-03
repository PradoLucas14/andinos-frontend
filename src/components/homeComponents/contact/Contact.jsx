import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Paper, Alert } from "@mui/material";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState({ nombre: false, email: false, mensaje: false });
  const [showAlert, setShowAlert] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 991);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 991);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {
      nombre: formData.nombre.trim().length < 10,
      email: formData.email.trim().length < 10,
      mensaje: formData.mensaje.trim().length < 10,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      setFormData({ nombre: "", email: "", mensaje: "" });
    }
  };

  return (
    <div className="contact">
      <div className="contactBanner">
        <Grid container spacing={0} className="contactContainer" style={{ height: "100%", position: "relative" }}>
          {/* Columna izquierda oculta en pantallas menores a 991px */}
          {!isMobile && (
            <Grid item xs={12} md={6} className="leftColumn" style={{ height: "100%" }}></Grid>
          )}
          
          {/* Columna derecha con el formulario */}
          <Grid item xs={12} md={6} className="rightColumn" style={{ height: "100%", position: isMobile ? "absolute" : "static", top: 0, left: 0, right: 0, margin: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Paper elevation={3} className="formContainer" style={{ maxWidth: "600px", width: isMobile ? "90%" : "auto", padding: "20px" }}>
              <h2>Contactanos</h2>
              {showAlert && <Alert severity="success">Mensaje enviado con éxito!</Alert>}
              <form onSubmit={handleSubmit} autoComplete="off">
                <TextField 
                  fullWidth 
                  className="input" 
                  label="Nombre" 
                  variant="outlined" 
                  margin="normal"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  error={errors.nombre}
                  helperText={errors.nombre ? "El nombre debe tener al menos 10 caracteres" : ""}
                  autoComplete="off"
                />
                <TextField 
                  fullWidth 
                  className="input" 
                  label="Correo Electrónico" 
                  variant="outlined" 
                  margin="normal"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email ? "El correo debe tener al menos 10 caracteres" : ""}
                  autoComplete="off"
                />
                <TextField 
                  fullWidth 
                  className="input" 
                  label="Mensaje" 
                  variant="outlined" 
                  margin="normal" 
                  multiline 
                  rows={6}
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  error={errors.mensaje}
                  helperText={errors.mensaje ? "El mensaje debe tener al menos 10 caracteres" : ""}
                  autoComplete="off"
                />
                <Button className="btnContact" fullWidth type="submit">
                  <span>Enviar</span>
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
