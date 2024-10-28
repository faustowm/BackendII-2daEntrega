Inzara Aromas - Backend II (Entrega 4) 🌸🕯️
Programación Backend II: Diseño y Arquitectura Backend - CODERHOUSE

Descripción del proyecto
Este proyecto es la cuarta entrega del curso de Backend, en la cual se han integrado nuevas funcionalidades para Inzara Aromas , una tienda online especializada en velas aromáticas . Se han optimizado aspectos de seguridad, autenticación, manejo de sesiones y carritos de compra, brindando una experiencia sólida y acogedora para el usuario.

Aplicación de Comercio Electrónico: Inzara Aromas
Inzara Aromas ofrece una plataforma online donde los amantes de las velas aromáticas pueden explorar y adquirir productos personalizados.

Estructura del proyecto
La aplicación sigue una arquitectura MVC (Modelo-Vista-Controlador), complementada con capas adicionales para la gestión de datos y lógica de negocio. Aquí se muestra una visión general de los directorios principales:

📂 src/ : Directorio raíz del código fuente.
📂 controladores/ : Controladores de lógica de negocio.
📂 dao/ : Capa de acceso a datos (DAO).
📂 db/ : Configuración de base de datos.
📂 modelos/ : Definición de esquemas de Mongoose.
📂 repositories/ : Implementación de patrones de repositorio.
📂 dto/ : Objetos de Transferencia de Datos (DTO).
📂 middlewares/ : Autenticación y autorizaciones personalizadas.
📂 public/ : Recursos estáticos (CSS, JavaScript, imágenes).
📂rutas/ : Rutas de Express para APIs y vistas.
📂 servicios/ : Lógica de negocio central.
📂 utils/ : Funciones de utilidad y ayudantes.
📂 views/ : Plantillas Manillar para vistas del cliente.
Características principales
🌸 Modelo de Usuario Mejorado
Campos como first_name, last_name, email, age, password, cart, y role.
Carrito generó automáticamente al registrarse.
Contraseñas encriptadas con bcrypt para seguridad.
🔒 Autenticación y Autorización
Autenticación basada en JWT (JSON Web Tokens).
Rutas segregadas para usuarios autenticados y API.
🕯️ Gestión de Productos (Velas Aromáticas)
CRUD completo para productos, con soporte de paginación y filtrado.
Administración de acciones desde el panel de administración.
🛒 Carrito de compras
Funcionalidad para agregar, eliminar y modificar productos en el carrito.
Cálculo total en tiempo real para mejorar la experiencia de compra.
🧾 Procesamiento de Pedidos y Generación de Tickets
Generación de tickets de compra con detalles de productos adquiridos.
📋 Panel de Administración para Stock y Productos
Solo administradores pueden gestionar productos y stock.
Sistema de autorización basado en roles ( usuarioy administrador).
Puntos finales Clave
Administración

GET /admin/stock/update: Actualizar stock de productos.
GET /admin/categories:Obtener categorías.
Carrito

POST /api/carts/add: Agregar artículo al carrito.
DELETE /api/carts/remove/{itemId}: Quitar artículo del carrito.
GET /api/carts/count: cantidad Obtener de artículos en el carrito.
PUT /api/carts/update/{itemId}: Actualizar cantidad en el carrito.
DELETE /api/carts/clear: Vaciar carrito.
POST /api/carts/finalize:Finalizar compra.
GET /api/carts/{cId}: Obtener carrito de usuario.
Productos (Velas)

GET /api/products: Obtener todos los productos.
GET /api/products/{pid}:Obtener un producto por ID.
PUT /api/products/{pid}:Actualizar un producto.
DELETE /api/products/{pid}:Eliminar un producto.
Sesión de usuario

POST /api/sessions/login:Iniciar sesión.
POST /api/sessions/logout:Cerrar sesión.
Usuarios

POST /api/users/register:Registrar un nuevo usuario.
GET /api/users/profile:Obtener perfil de usuario.
PUT /api/users/profile: Actualizar perfil de usuario.
DELETE /api/users:Eliminar cuenta de usuario.
Tecnologías utilizadas
Backend : Node.js con Express.js.
Base de datos : MongoDB, con Mongoose como ODM.
Autenticación : Passport.js y JWT.
Vistas : Manillar para HTML dinámico.
Seguridad : Bcrypt para encriptación de contraseñas.
Tiempo Real : Socket.io para comunicación en tiempo real.
Manejo de Sesiones : express-session y cookie-parser.
Variables de entorno : dotenv para configuración de entornos.
Instalación y configuración
Clonar el repositorio

intento

Copiar código
git clone https://github.com/faustowm/InzaraAromas.git
Instalar dependencias

intento

Copiar código
cd InzaraAromas
npm install
Configurar variables de entorno : Crear un archivo .enven la raíz del proyecto y agregar:

texto sin formato

Copiar código
MONGODB_URI=tu_uri_de_mongodb
JWT_SECRET=tu_secreto_jwt
SESSION_SECRET=tu_secreto_de_sesion
PORT=8080
Iniciar el servidor

intento

Copiar código
npm run dev
Scripts Útiles 🛠️
Asignar rol de administrador
intento

Copiar código
node src/utils/agregarAdministrador.js <userId>
Explora y disfruta
Inzara Aromas te espera en http ://localhost :8080 para una experiencia aromática única y envolvente. ¡Disfruta de tu viaje en el mundo de las velas! 🌸🕯️