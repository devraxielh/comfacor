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
      image: 'data:image/jpeg;base64,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',
    },
    {
      id: 2,
      name: 'Limpiador Facial',
      price: 19.99,
      description: 'Limpieza suave y efectiva',
      image: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/177B/production/_97211060_capture.jpg.webp',
    },
    {
      id: 3,
      name: 'Sérum Antiarrugas',
      price: 39.99,
      description: 'Reduce líneas de expresión',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJh7Ei9T160cKcgPFMg-tI2huww8Neh3MgBw&s',
    },
    {
      id: 4,
      name: 'Mascarilla Facial',
      price: 24.99,
      description: 'Revitaliza y purifica la piel',
      image: 'https://stronglify-1.s3.sa-east-1.amazonaws.com/farmadodo/Mejor-crema-hidratante-para-rostro-con-piel-seca.png',
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