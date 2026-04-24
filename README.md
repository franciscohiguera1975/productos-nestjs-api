# Productos NestJS API

Este proyecto es una API RESTful para la gestión de productos y clientes, construida con **NestJS** y **TypeORM**.

> 🎉 **Desarrollado y presentado en el [FLISOL 2026](https://flisol.info/)** — Festival Latinoamericano de Instalación de Software Libre.

**Repositorio:** https://github.com/franciscohiguera1975/productos-nestjs-api

---

## Módulos disponibles

| Módulo | Descripción |
|--------|-------------|
| **Productos** | CRUD completo para gestión de productos con categorías |
| **Categorías** | Clasificación de productos |
| **Tipo de Envío** | Gestión de modalidades de envío |
| **Usuarios** | Gestión de usuarios y autenticación |
| **Clientes** | CRUD completo para gestión de clientes *(FLISOL 2026)* |

---

## Módulo de Clientes *(creado en el FLISOL 2026)*

Este módulo fue construido en vivo durante la sesión del **FLISOL 2026** como demostración práctica del desarrollo de APIs con NestJS siguiendo principios SOLID y arquitectura limpia.

### Entidad `Cliente`

Campos principales:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `number` | Identificador autoincremental |
| `nombre` | `string` | Nombre del cliente (obligatorio) |
| `apellido` | `string` | Apellido del cliente (obligatorio) |
| `email` | `string` | Email único del cliente (obligatorio) |
| `telefono` | `string` | Teléfono de contacto (opcional) |
| `direccion` | `string` | Dirección (opcional) |
| `isActive` | `boolean` | Estado activo/inactivo |
| `createdAt` | `Date` | Fecha de creación |
| `updatedAt` | `Date` | Fecha de última actualización |

### Endpoints del CRUD de Clientes

| Método | Ruta | Descripción | Respuesta |
|--------|------|-------------|-----------|
| `POST` | `/clientes` | Crear un nuevo cliente | `201 Created` |
| `GET` | `/clientes` | Listar todos los clientes activos | `200 OK` |
| `GET` | `/clientes/:id` | Obtener un cliente por ID | `200 OK` / `404` |
| `PATCH` | `/clientes/:id` | Actualizar parcialmente un cliente | `200 OK` / `404` |
| `DELETE` | `/clientes/:id` | Eliminar un cliente | `204 No Content` / `404` |
| `PATCH` | `/clientes/:id/deactivate` | Desactivar un cliente (soft) | `200 OK` / `404` |

### Ejemplo de body para crear un cliente

```json
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juan.perez@email.com",
  "telefono": "0999999999",
  "direccion": "Av. Siempre Viva 123"
}
```

---

## Características generales

- CRUD completo para productos y clientes.
- API RESTful con principios REST.
- Validación de datos con `class-validator`.
- Integración con base de datos mediante TypeORM.
- Arquitectura modular siguiendo principios SOLID.
- Desarrollado con TypeScript para mayor robustez.

---

## Instalación

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
    Crea un archivo `.env` basado en `.env.example`:

    ```env
    DATABASE_TYPE=postgres
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USERNAME=your_username
    DATABASE_PASSWORD=your_password
    DATABASE_NAME=your_database_name
    PORT=3000
    ```

4.  **Inicia la aplicación en modo desarrollo:**
    ```bash
    npm run start:dev
    ```
    La API estará disponible en `http://localhost:3000`.

---

## Ejecución de Tests

```bash
npm run test
```

---

## Tecnologías Utilizadas

- [NestJS](https://nestjs.com/) — Framework progresivo de Node.js.
- [TypeORM](https://typeorm.io/) — ORM para TypeScript.
- [PostgreSQL](https://www.postgresql.org/) — Base de datos relacional.
- [TypeScript](https://www.typescriptlang.org/) — Lenguaje tipado.
- [class-validator](https://github.com/typestack/class-validator) — Validación de DTOs.

---

## Contribución

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y asegúrate de que los tests pasen.
4. Haz commit (`git commit -am 'feat: descripción del cambio'`).
5. Sube tu rama (`git push origin feature/nueva-caracteristica`).
6. Abre un Pull Request.

---

## Licencia

Este proyecto está bajo la licencia MIT.
