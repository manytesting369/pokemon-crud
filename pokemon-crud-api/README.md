# Pokémon CRUD API

Este proyecto es una API RESTful para gestionar un CRUD (Crear, Leer, Actualizar, Eliminar) de Pokémon. Está diseñado para ser utilizado como backend en aplicaciones relacionadas con Pokémon, utilizando Spring Boot.

## Características

- Crear nuevos Pokémon.
- Obtener la lista de todos los Pokémon.
- Consultar detalles de un Pokémon específico.
- Actualizar información de un Pokémon.
- Eliminar un Pokémon.

## Tecnologías utilizadas

- **Java**: Lenguaje de programación principal.
- **Spring Boot**: Framework para construir la API.
- **Spring Data JPA**: Para interactuar con la base de datos.
- **H2 Database**: Base de datos en memoria para desarrollo y pruebas (puede ser reemplazada por otra como MySQL o PostgreSQL).
- **Maven**: Herramienta de gestión de dependencias y construcción.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/pokemon-crud-api.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd pokemon-crud-api
   ```
3. Configura las propiedades de la base de datos en el archivo `application.properties`:
   ```properties
   spring.datasource.url=jdbc:h2:mem:testdb
   spring.datasource.driverClassName=org.h2.Driver
   spring.datasource.username=sa
   spring.datasource.password=password
   spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
   ```
4. Construye el proyecto con Maven:
   ```bash
   mvn clean install
   ```

## Uso

1. Inicia el servidor:
   ```bash
   mvn spring-boot:run
   ```
2. Accede a la API en `http://localhost:8080`.

## Endpoints

### 1. Crear un Pokémon

- **POST** `/api/pokemon`
- **Body**:
  ```json
  {
    "name": "Pikachu",
    "type": "Electric",
    "level": 10
  }
  ```

### 2. Obtener todos los Pokémon

- **GET** `/api/pokemon`

### 3. Obtener un Pokémon por ID

- **GET** `/api/pokemon/{id}`

### 4. Actualizar un Pokémon

- **PUT** `/api/pokemon/{id}`
- **Body**:
  ```json
  {
    "name": "Raichu",
    "level": 20
  }
  ```

### 5. Eliminar un Pokémon

- **DELETE** `/api/pokemon/{id}`

## Contribución

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad:
   ```bash
   git checkout -b nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Sube tus cambios:
   ```bash
   git push origin nueva-funcionalidad
   ```
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
