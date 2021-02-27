# notify js

**notify** es una libreria de notificaciones similar a **toastr** pero esta escrita en Vanilla JavaScript y CSS3, personalizable y escalable.

## Versión Actual
1.0.0
## Demo
- En construcción 

## Instalación
#### Github
```
git clone https://github.com/AngeloOZ/notify-alert-js.git
```
## Inicio Rápido

### 4 Pasos

1. Enlazar notify.css `<link href="notify.css" rel="stylesheet"/>`

2. Enlazar notify.js `<script src="notify.js"></script>`

3. Instanciar un objeto notify 
    ```js
        <script type="text/javascript">
            const notify = new Notify();
        </script>
    ```

4. Use notify para mostrar notificaciones de: infor, success, warning o error
	```js
	notify.infor('Hola bienvenido','Bienvenida');
	```

### Otras Opciones
```js
// Mostrar una notificación de adertencia sin titulo
notify.warning('Advertencia esta a punto de usar la mejor libreria xD');

// Mostrar una notificación de exito con titulo
notify.success('Notify está funcionando correctamente', 'Notify');

// Mostrar una notificación de error con titulo
notify.error('Upps parece que no cargo la BDD', 'Error Database');

// Limpia todas las notificaciones existentes
notify.clear();

// Cambiar las configuraciones globales metodo 1
notify.success('Notify está funcionando correctamente', 'Notify', {'timeOut': 2000});

// Cambiar las configuraciones globales metodo 2
notify.options.timeOut = 2000;
notify.success('Notify está funcionando correctamente', 'Notify');
```
### Botón de Cerrar
Se puede activar opcionalmente un botón para cerrar la notificación

```js
notify.options.closeButton = true;
```
### Progress Bar
Muestra visualmente el tiempo que estará la notificación activa
```js
notify.options.progressBar = true;
```
### Posicionamiento de la Notificación en la pantalla
Existen varias opciones de posicionamiento:
- top-right (default)
- bottom-right
- top-left
- bottom-left
- top-full-width
- bottom-full-width
```js
notify.options.positionClass = 'bottom-right';
```
### Evitar duplicados
En lugar de tener una pila de notificaciones, establezca la propiedad preventDuplicates en true. Los duplicados se comparan con la notificación anterior según el contenido de su mensaje.
```js
notify.options.preventDuplicates = true;
```
### Escape de caracteres HTML
En caso de que desee escapar de los caracteres HTML en el título y el mensaje
```js
notify.options.escapeHtml = true;
```
### Iconos Personalizados
En caso de que desee poner sus propios iconos para las notificaciones, puede hacerlo mediante **fontawesome**, **boxicons**, **Bootstrap Icons** o cualquier otra fuente de iconos que proporcione fuente web.
```js
// Se debe opción de iconos personalisables 
notify.options.activeCustomIcon = true;

// Debe enlazar la fuente de los iconos externos
// Poner la fuente web del icono
notify.options.customIcon = '<i class="fas fa-envelope"></i>';

// Puede personalizar el tamaño del icono
notify.options.fontSizeIcon = 30;

// Resultado
notify.infor('Este es un icono personalizado ', 'Todo ok');
```
### Tiempos de espera
Controle cómo la notificaicón interactúa con los usuarios estableciendo tiempos de espera de forma adecuada.
- Tiempo establecido en milisegundos (1000ms - 1s)
```js
// Cuánto tiempo se mostrará la notificaicón sin la interacción del usuario
notify.options.timeOut = 6000; 

// Cuánto tiempo se mostrará la notificaicón después de que un usuario pase el mouse sobre él
notify.options.extendedTimeOut = 1000;
```

## Autores

**Angello Ordoñez**

**Jessica Ballesteros**

## Creditos
Inspirado por https://github.com/CodeSeven/toastr/.

## Copyright
Copyright © 2021

## Licencia
toastr está bajo licencia MIT - http://www.opensource.org/licenses/mit-license.php