# nt2_parcial

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Consigna

- [x] Crear una aplicación Vue CLI 2 para ingresar gastos realizados.
- [x] El proyecto debe poseer dos vistas manejadas por un router y linkeadas a una barra de navegación. En una de las vistas se encontrará un formulario para el ingreso de gastos y por debajo una tabla con la representación del detalle de gastos. En la segunda vista presentar los resultados del múltiple choice (el formato se detalla más abajo)
- [x] El formulario contendrá el nombre de quién realizó el gasto, la descripción y el importe. Cada campo será obligatorio, el campo nombre debe aceptar entre 3 y 15 caracteres, sin espacios por delante ni por detrás ó intermedios. El campo importe debe ser numérico. Presentar los carteles de error de validación debajo de cada campo.
- [x] La tabla representará el detalle de los gastos almacenados por el formulario. Cada fila de la tabla mostrará la persona que realizó el gasto, la descripción, el importe y la fecha de creación del gasto en formato dd/mm/yyyy h:mm:ss. Para el importe, agregar un $ delante del valor.
- [x] Agregar una fila adicional en la tabla, al final, que mostrará el gasto total calculado automáticamente. Si el gasto total es inferior a $1000 representarlo en verde, de $1000 a $5000 en magenta y por encima de los $5000 en naranja.
- [x] Extra (opcional): incluir un input, en la vista de gastos, por encima de la tabla, donde me permita ingresar el presupuesto que tengo asignado, y si sólo el gasto total supera al presupuesto me lo marque en rojo.
- [x] Los resultados del múltiple choice se almacenarán en un array de objetos, donde cada pregunta y respuesta será un objeto con este formato:
```
preguntas : [
{ numero: 1, respuestas: [‘a’,’c’] }, { numero: 2, respuestas: [‘d’] }, ....
]
```


Representar este array en forma de tabla en la segunda vista. Ej
 | Número de pregunta  | Respuesta |
| ------------- |:-------------:|
| 1      | ['a','c']     |
| 2     | ['b']     |

 
## Preguntas
- Pregunta 1
**Como es la forma correcta para registrar un evento de click en Vue.js?**
a) :click
b) @click
c) v-on@click d) v-on:click e) v-bind:click
- Pregunta 2
**El modificador trim recorta...**
a) Los espacios puestos adelante en una entrada de texto
b) Los espacios puestos atrás en una entrada de texto
c) Los espacios adelante y atrás en una entrada de texto
d) Saca los espacios intermedios puestos en una entrada de texto
- Pregunta 3
**¿Cuál de estas directivas se utiliza para modificar estilos a través de Vue.js?**
a) v-bind:src b) v-bind:style c) v-class
d) v-style
e) :style
