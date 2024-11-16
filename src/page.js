import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Container,
} from '@mui/material';
import { ShoppingCart, Favorite } from '@mui/icons-material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    alert('Gracias por contactarnos. Te responderemos pronto.');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextField
        label="Nombre"
        variant="outlined"
        value={formData.nombre}
        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        required
      />
      <TextField
        label="Apellido"
        variant="outlined"
        value={formData.apellido}
        onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
        required
      />
      <TextField
        label="Teléfono"
        variant="outlined"
        type="tel"
        value={formData.telefono}
        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Enviar
      </Button>
    </form>
  );
};

const FacialProductsStore = () => {
  const [cartItems, setCartItems] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Crema Hidratante',
      price: 29.99,
      description: 'Hidratación profunda para todo tipo de piel',
      image: '/api/placeholder/300/200',
    },
    {
      id: 2,
      name: 'Limpiador Facial',
      price: 19.99,
      description: 'Limpieza suave y efectiva',
      image: '/api/placeholder/300/200',
    },
    {
      id: 3,
      name: 'Sérum Antiarrugas',
      price: 39.99,
      description: 'Reduce líneas de expresión',
      image: '/api/placeholder/300/200',
    },
    {
      id: 4,
      name: 'Mascarilla Facial',
      price: 24.99,
      description: 'Revitaliza y purifica la piel',
      image: '/api/placeholder/300/200',
    },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      {/* AppBar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bella Piel
          </Typography>
          <IconButton color="inherit" onClick={() => setOpenDialog(true)}>
            <Typography>Contacto</Typography>
          </IconButton>
          <IconButton color="inherit">
            <Favorite />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Cuida tu piel con los mejores productos
        </Typography>
        <Typography variant="body1" color="textSecondary" align="center" gutterBottom>
          Descubre nuestra selección de productos premium para el cuidado facial
        </Typography>

        {/* Product Grid */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card>
                <CardMedia component="img" height="140" image={product.image} alt={product.name} />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    ${product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => addToCart(product)}>
                    Agregar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
        <DialogTitle>Contáctanos</DialogTitle>
        <DialogContent>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FacialProductsStore;