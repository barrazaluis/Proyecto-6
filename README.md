# Proyecto-6 Aplicación Backend con Autenticación

Aplicación construida con Node.js, Express y MongoDB Atlas, que permite **gestionar usuarios y productos** mediante **autenticación JWT**.  
Los usuarios pueden registrarse, iniciar sesión y administrar productos (crear, leer, actualizar y eliminar), mientras que las rutas protegidas requieren un token válido para acceder.

---

## 🔹 Tecnologías

- Node.js 22.x
- Express 5.x
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- Bcryptjs
- Swagger (Documentación API)
- Cors
- Nodemon (desarrollo)

---

## 🔹 Cómo funciona el proyecto

1. El usuario se **registra** a través del endpoint `https://proyecto-6-3c7e.onrender.com/api-docs/#/Users/post_api_user_register`.
2. Luego puede **iniciar sesión** en `https://proyecto-6-3c7e.onrender.com/api-docs/#/Users/post_api_user_login` para obtener un **Token JWT**.
3. Este token se utiliza para acceder a rutas protegida para
   - Crear productos
   - Actualizar productos
   - Eliminar productos.
4. Rutas públicas
   - Listar todos los productos
   - Obtener un producto por ID
5. Swagger UI está disponible para **probar todos los endpoints** y enviar el JWT automáticamente para las rutas protegidas.

## 🔹 Instalación

1. Clonar repositorio:

```bash
git clone https://github.com/barrazaluis/Proyecto-6.git

