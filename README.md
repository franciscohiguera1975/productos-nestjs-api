# Productos NestJS API

Este proyecto es una API RESTful básica para la gestión de productos, construida con NestJS y TypeORM.

Fue generado en el FLISOL 2026.
linea agregada para testear en el fliso

**Repositorio:** https://github.com/franciscohiguera1975/productos-nestjs-api

## Características

*   CRUD completo para la gestión de productos.
*   API RESTful siguiendo principios REST.
*   Integración con base de datos mediante TypeORM.
*   Desarrollado con TypeScript para mayor robustez.

## Instalación

Para poner en marcha este proyecto, sigue los siguientes pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/franciscohiguera1975/productos-nestjs-api.git
    cd productos-nestjs-api
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    ```
3.  **Configura las variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto basado en el ejemplo `.env.example` (si existe) o con las siguientes variables:

    ```env
    # Configuración de la Base de Datos
    DATABASE_TYPE=postgres
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USERNAME=your_username
    DATABASE_PASSWORD=your_password
    DATABASE_NAME=your_database_name

    # Otras configuraciones (ej. puerto de la aplicación)
    PORT=3000
    ```
    Asegúrate de reemplazar `your_username`, `your_password`, y `your_database_name` con tus credenciales de PostgreSQL.

4.  **Ejecuta las migraciones de la base de datos:**
    ```bash
    npm run typeorm migration:run
    ```
    Esto creará las tablas necesarias en tu base de datos.

5.  **Inicia la aplicación en modo desarrollo:**
    ```bash
    npm run start:dev
    ```
    La API estará disponible en `http://localhost:3000` (o el puerto que hayas configurado).

## Endpoints del CRUD de Productos

Aquí se detallan los endpoints disponibles para interactuar con la API de productos:

*   **`GET /products`**: Obtener todos los productos.
    *   Respuesta: `200 OK` con un array de productos.
*   **`GET /products/:id`**: Obtener un producto específico por su ID.
    *   Parámetros: `id` (UUID)
    *   Respuesta: `200 OK` con el objeto del producto, o `404 Not Found` si no existe.
*   **`POST /products`**: Crear un nuevo producto.
    *   Body: `{ "name": "string", "description": "string", "price": number }`
    *   Respuesta: `201 Created` con el objeto del producto creado.
*   **`PUT /products/:id`**: Actualizar un producto existente por su ID.
    *   Parámetros: `id` (UUID)
    *   Body: `{ "name"?: "string", "description"?: "string", "price"?: number }` (campos opcionales)
    *   Respuesta: `200 OK` con el objeto del producto actualizado, o `404 Not Found`.
*   **`DELETE /products/:id`**: Eliminar un producto por su ID.
    *   Parámetros: `id` (UUID)
    *   Respuesta: `200 OK` (sin contenido), o `404 Not Found`.

## Ejecución de Tests

Para ejecutar los tests automatizados del proyecto:

```bash
npm run test
```

## Tecnologías Utilizadas

*   [NestJS](https://nestjs.com/) - Framework progresivo de Node.js para construir aplicaciones del lado del servidor.
*   [TypeORM](https://typeorm.io/) - ORM para TypeScript y JavaScript (ES7, ES6, ES5).
*   [PostgreSQL](https://www.postgresql.org/) - Sistema de gestión de bases de datos relacionales.
*   [TypeScript](https://www.typescriptlang.org/) - Lenguaje de programación que se basa en JavaScript.
*   [Docker](https://www.docker.com/) (Opcional, para entorno de desarrollo)

## Contribución

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor:

1.  Haz un fork del repositorio.
2.  Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3.  Realiza tus cambios y asegúrate de que los tests pasen.
4.  Haz commit de tus cambios (`git commit -am 'feat: Añade nueva característica'`).
5.  Sube tu rama (`git push origin feature/nueva-caracteristica`).
6.  Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
