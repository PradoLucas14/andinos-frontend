import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Paper, Alert } from "@mui/material";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({ nombre: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({ nombre: false, email: false, password: false, confirmPassword: false });
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
      password: formData.password.trim().length < 10,
      confirmPassword: formData.confirmPassword !== formData.password,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      setFormData({ nombre: "", email: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <div className="register">
      <div className="registerBanner">
        <Grid container spacing={0} className="registerContainer" style={{ height: "100vh", position: "relative" }}>
          {!isMobile && (
            <Grid item xs={12} md={6} className="leftColumn" style={{ height: "100vh" }}></Grid>
          )}
          
          <Grid 
            item xs={12} md={6} 
            className="rightColumn" 
            style={{ height: "100vh", position: isMobile ? "absolute" : "static", top: 0, left: 0, right: 0, margin: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <Paper elevation={3} className="formContainer" style={{ maxWidth: "500px", width: isMobile ? "90%" : "auto", padding: "20px" }}>
              <h2>Registrarse</h2>
              {showAlert && <Alert severity="success">Registro exitoso!</Alert>}
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
                  label="Contraseña" 
                  type="password"
                  variant="outlined" 
                  margin="normal"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  helperText={errors.password ? "La contraseña debe tener al menos 10 caracteres" : ""}
                  autoComplete="off"
                />
                <TextField 
                  fullWidth 
                  className="input" 
                  label="Confirmar Contraseña" 
                  type="password"
                  variant="outlined" 
                  margin="normal"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  helperText={errors.confirmPassword ? "Las contraseñas no coinciden" : ""}
                  autoComplete="off"
                />
                <Button className="btnContact" fullWidth type="submit">
                  <span>Registrarse</span>
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Register;
