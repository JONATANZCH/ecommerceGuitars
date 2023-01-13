// Carrito
// #1 BASE DE DATOS
const db = [
  {
    id: 1,
    nombre: 'Lukather',
    descripcion: 'Lukather clásica 1985',
    precio: 10000.000,
    imagen: '/img/guitarra_01.jpg',
    categoria: 'vintage',
    cantidad: 5
  },
  {
    id: 2,
    nombre: 'SRV',
    descripcion: 'SRV clásica 1970',
    precio: 15000.000,
    imagen: '/img/guitarra_02.jpg',
    categoria: 'vintage',
    cantidad: 5
  },
  {
    id: 3,
    nombre: 'Borland',
    descripcion: 'Borland clásica 1990',
    precio: 12000.000,
    imagen: '/img/guitarra_03.jpg',
    categoria: 'vintage',
    cantidad: 4
  },
  {
    id: 4,
    nombre: 'VAI',
    descripcion: 'VAI clásica',
    precio: 16000.000,
    imagen: '/img/guitarra_04.jpg',
    categoria: 'vintage',
    cantidad: 3
  },
  {
    id: 5,
    nombre: 'Thompson',
    descripcion: 'Thompson clásica de 1960',
    precio: 20000.000,
    imagen: '/img/guitarra_05.jpg',
    categoria: 'vintage',
    cantidad: 2
  },
  {
    id: 6,
    nombre: 'White',
    descripcion: 'White stratocaster 1930',
    precio: 140000.000,
    imagen: '/img/guitarra_06.jpg',
    categoria: 'vintage',
    cantidad: 1
  },
  {
    id: 7,
    nombre: 'Cobain',
    descripcion: 'Cobain N.1951B',
    precio: 13000.00,
    imagen: '/img/guitarra_07.jpg',
    categoria: 'coleccionable',
    cantidad: 5
  },
  {
    id: 8,
    nombre: 'Dale',
    descripcion: 'Dale N.84965X',
    precio: 8000.00,
    imagen: '/img/guitarra_08.jpg',
    categoria: 'coleccionable',
    cantidad: 8
  },
  {
    id: 9,
    nombre: 'Krieger',
    descripcion: 'Krieger N.4984DS',
    precio: 5000.00,
    imagen: '/img/guitarra_09.jpg',
    categoria: 'coleccionable',
    cantidad: 15
  },
  {
    id: 10,
    nombre: 'Campbell',
    descripcion: 'Campbell N.1594V',
    precio: 5000.00,
    imagen: '/img/guitarra_10.jpg',
    categoria: 'coleccionable',
    cantidad: 15
  },
  {
    id: 11,
    nombre: 'Reed',
    descripcion: 'Reed N.1683dT',
    precio: 5000.00,
    imagen: '/img/guitarra_11.jpg',
    categoria: 'coleccionable',
    cantidad: 15
  },
  {
    id: 12,
    nombre: 'Hazel',
    descripcion: 'Hazel N.1184JKd',
    precio: 5000.00,
    imagen: '/img/guitarra_12.jpg',
    categoria: 'coleccionable',
    cantidad: 15
  }
]

// #2 Pintar los productos en el DOM
const productos = db

function pintarProductos() {
  for (let { id, nombre, precio, cantidad } of productos) {
    console.log(id, nombre, 'price', precio, 'qty:', cantidad)
  }
}

console.log('#1 pintando productos')
pintarProductos()

// #3 Carrito
let carrito = []

console.log('#Creando el carrito')

// #4 agregar al carrito
function agregarCarrito(id, cantidad = 1) {
  const productoEncontrado = productos.find((p) => p.id === id)

  if (productoEncontrado && productoEncontrado.cantidad > 0) {
    const articuloEncontrado = carrito.find((p) => p.id === id)

    if (articuloEncontrado) {
      if (checarStock(id, cantidad + articuloEncontrado.cantidad)) {
        articuloEncontrado.cantidad++
      } else {
        window.alert('No hay stock suficiente')
      }
    } else {
      carrito.push({ id: productoEncontrado.id, cantidad })
    }
  } else {
    window.alert('Producto agotado')
  }
}

console.log('Agregando productos')
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(2)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)

function checarStock(id, cantidad) {
  const producto = productos.find((p) => p.id === id)

  return producto.cantidad - cantidad >= 0
}

// #5 remover articulos
function removerDelCarrito(id, cantidad = 1) {
  const articulo = carrito.find((p) => p.id === id)

  if (articulo && articulo.cantidad - cantidad > 0) {
    articulo.cantidad--
  } else {
    carrito = carrito.filter((p) => p.id !== id)
  }
}

console.log('Removiendo uno por uno del carrito')
removerDelCarrito(1)

// #6 Eliminar del carrito
function eliminarDelCarrito(id) {
  console.log(id)
  const articulo = carrito.find((p) => p.id === id)
  const findIndex = carrito.indexOf(articulo)

  carrito.splice(findIndex, 1)
}

console.log('Eliminando un producto del carrito')
eliminarDelCarrito(5)

// #7 Contar Articulos
function contadorDeArticulos() {
  let suma = 0

  for (let articulo of carrito) {
    suma += articulo.cantidad
  }

  return suma
}

// #8 El total
function obtenerTotal() {
  let suma = 0

  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    suma += producto.precio * articulo.cantidad
  }

  return suma
}

// #9 Limpiar carrito
function limpiarCarrito() {
  carrito = []
}

// limpiarCarrito()

// #10 Comparar
function comprar() {
  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    producto.cantidad -= articulo.cantidad
  }
  console.log('Productos actualizados')
  pintarProductos()
}


console.log('#Carrito:', carrito)
console.log('Total a pagar:', obtenerTotal())
console.log('Cantidad de articulos agregados al carrito:', contadorDeArticulos())

comprar()