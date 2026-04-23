# Productos NestJS API

Este proyecto es una API RESTful básica para la gestión de productos, construida con NestJS y TypeORM.

Fue generado en el FLISOL 2026.

**Repositorio:** https://github.com/franciscohiguera1975/productos-nestjs-api

## Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/franciscohiguera1975/productos-nestjs-api.git
    cd productos-nestjs-api
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Configura tu base de datos en el archivo `ormconfig.json` o en las variables de entorno.
4.  Ejecuta las migraciones (si las tienes):
    ```bash
    npm run typeorm migration:run
    ```
5.  Inicia la aplicación:
    ```bash
    npm run start:dev
    ```

## Endpoints del CRUD de Productos

*   `GET /products`: Obtener todos los productos.
*   `GET /products/:id`: Obtener un producto por ID.
*   `POST /products`: Crear un nuevo producto.
*   `PUT /products/:id`: Actualizar un producto existente.
*   `DELETE /products/:id`: Eliminar un producto.

## Tecnologías Utilizadas

*   NestJS
*   TypeORM
*   PostgreSQL (o tu base de datos preferida)
*   TypeScript
