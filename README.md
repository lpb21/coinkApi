# 📋 API coink - Para consulta y registro de usuarios

¡Bienvenido! 🚀 Este proyecto contiene los **scripts SQL** necesarios para la creación de tablas y un **Stored Procedure (SP)**, diseñado para gestionar un sistema de usuarios. Además, he incluido un video tutorial 📹 que te dara una vision mas clara de lo que realize en la aplicacion.

---

## 📑 Contenido

1. [📂 Scripts SQL](#-scripts-sql)
2. [🔧 Creación del Stored Procedure](#-creación-del-stored-procedure)
3. [🎥 Video Tutorial](#-video-tutorial)
4. [🚀 Cómo Ejecutar los Scripts](#cómo-ejecutar-los-scripts)
5. [🌐 Endpoints API](#endpoints-api)
6. [📜 Requisitos](#requisitos)
7. [⚠️ Notas Importantes](#notas-importantes)
8. [📋 Notas del Autor](#notas-del-autor)


## 📂 Scripts SQL

### 1 Base de Datos: `Coink`
```sql
CREATE DATABASE coink;
```

### 1.1 Tabla: `Pais`
```sql
CREATE TABLE Pais(
PaisID INT PRIMARY KEY IDENTITY(1,1),
Nombre NVARCHAR(100) NOT NULL
);
```
### 1.2 Tabla: `Departamanto`
```sql
CREATE TABLE Departamento(
DepartamentoID INT PRIMARY KEY IDENTITY(1,1),
Nombre NVARCHAR(100) NOT NULL,
PaisID INT NOT NULL,
FOREIGN KEY (PaisID) REFERENCES Pais(PaisID)
);
```

### 1.3 Tabla: `Municipio`
```sql
CREATE TABLE Municipio(
MunicipioID INT PRIMARY KEY IDENTITY(1,1),
Nombre NVARCHAR(100) NOT NULL,
DepartamentoID INT NOT NULL,
FOREIGN KEY (DepartamentoID) REFERENCES Departamento(DepartamentoID)
);
```

### 1.4 Tabla: `Usuario`
```sql
CREATE TABLE Usuario(
UsuarioID INT PRIMARY KEY IDENTITY(1,1),
Nombre NVARCHAR(100) NOT NULL,
Telefono NVARCHAR(15) NOT NULL,
Direccion NVARCHAR(200) NOT NULL,
PaisID INT NOT NULL,
DepartamentoID INT NOT NULL,
MunicipioID INT NOT NULL,
FOREIGN KEY (PaisID) REFERENCES Pais(PaisID),
FOREIGN KEY (DepartamentoID) REFERENCES Departamento(DepartamentoID),
FOREIGN KEY (MunicipioID) REFERENCES Municipio(MunicipioID),
);
```
---
## 🔧 Creación del Stored Procedure
### 2 El siguiente Stored Procedure valida los datos de entrada y realiza la inserción de un nuevo usuario:

```sql
CREATE PROCEDURE sp_InsertarUsuarioConValidacion
@Nombre NVARCHAR(100),
@Telefono NVARCHAR(15),
@Pais NVARCHAR(100),
@Departamento NVARCHAR(100),
@Municipio NVARCHAR(100),
@Direccion NVARCHAR(200)
AS
BEGIN
	SET NOCOUNT ON;

DECLARE @PaisID INT;
DECLARE @DepartamentoID INT;
DECLARE @MunicipioID INT;

-- Verificar si el Pais existe
SELECT @PaisID = PaisID FROM Pais WHERE Nombre = @Pais;
IF  @PaisID IS NULL
BEGIN
	RAISERROR('El pais Especificado no existe', 16, 1);
	RETURN
END

-- Verificar si el Departamento existe
SELECT @DepartamentoID = DepartamentoID FROM Departamento WHERE Nombre = @Departamento AND PaisID = @PaisID;
IF  @DepartamentoID IS NULL
BEGIN
	RAISERROR('El departamento especificado no existe', 16,1);
RETURN;
END

-- Verificar si el Municipio existe
SELECT @MunicipioID = MunicipioID FROM Municipio WHERE Nombre = @Municipio AND DepartamentoID = @DepartamentoID;
IF  @MunicipioID IS NULL
BEGIN
	RAISERROR('El Municipio especificado no existe', 16,1);
RETURN;
END

--Insertar el usuario
INSERT INTO Usuario (Nombre, Telefono, Direccion, PaisID, DepartamentoID, MunicipioID)
VALUES (@Nombre, @Telefono, @Direccion, @PaisID, @DepartamentoID, @MunicipioID)

--En caso de error al insertar
IF @@ERROR <> 0
    BEGIN
        RAISERROR('Error al insertar el usuario. Por favor, verifica los datos ingresados.', 16, 1);
       RETURN;
    END
    
-- Mensaje de éxito
    SELECT 'Usuario registrado exitosamente' AS Mensaje;
END
```
---
## 🎥 Video Explicativo
Para ver el video que explica cómo implementar y ejecutar estos scripts SQL y el Stored Procedure, haz clic en el siguiente enlace:

[**Ver Video Explicativo**](https://drive.google.com/drive/folders/1nnjH2p0i6n7rIAM88BfP1SnwrPHEo9u5?usp=sharing)

---

## 🚀 Cómo Ejecutar los Scripts

1. **Abre SQL Server Management Studio (SSMS) o tu gestor favorito, en mi caso es DBeaver**.
2. **Crea la base de datos** y las tablas correspondientes.
3. **Crea el Stored Procedure**.
4. **Inserta un usuario** 

---

## 🌐 Endpoints API

Aquí puedes detallar los **endpoints** de la API que interactúan con el sistema de usuarios.

### GET `/v1/getTablaUsuario`
Este endpoint permite consultar los usuarios registrados en la base de datos.
### POST `/v1/getTablaUsuarioSP`
Este endpoint permite agregar un nuevo usuario a la base de datos.

- **Request Body** (JSON) "Un Ejemplo":
```json
{
    "Nombre": "Justin Bieber",
    "Telefono": "4444444",
    "Pais": "Canada",
    "Departamento": "Ontario",
    "Municipio": "Ottawa",
    "Direccion": "Street Aveniu 123"
}
```
---
## 📜 Requisitos
- **SQL Server 2016 o superior**.
- **SQL Server Management Studio (SSMS)**.
- **POSTMAN**.

---
## 🚀 Cómo Configurar el Proyecto y Ejecutarlo
## Prerrequisitos

Asegúrate de tener instalado Node.js y npm en tu sistema. Puedes descargarlos desde [Node.js](https://nodejs.org/).

Sigue estos pasos para ejecutar el proyecto en tu entorno de desarrollo local:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/lpb21/coinkApi.git

2. **Navega al directorio del proyecto**:

   ```bash
   cd tu-proyecto-angular
   
3. **Instala las dependencias**:

   Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

   ```bash
   npm install

* Esto descargará todas las dependencias especificadas en el archivo package.json y las instalará localmente en la carpeta node_modules.


4. **Inicia el servidor**:

   Utiliza el siguiente comando para iniciar el servidor:

   ```bash
   npm run dev
   

*   El servidor se ejecutará en http://localhost:3000/ de forma predeterminada. Puedes abrir este enlace en tu navegador para ver la aplicación en ejecución.

  * Navega a la aplicación:

 *  Abre tu navegador web y navega a http://localhost:3000/ para acceder a la aplicación.

*   Detener el servidor de desarrollo
   Para detener el servidor de desarrollo, simplemente presiona Ctrl + C en la terminal donde se está ejecutando el comando ng serve.
---
## ⚠️ Notas Importantes

- Como los scripts de bases de datos estan en sql server, si tienen alguna inquietud sobre como se habilita el usuario 'sa' o se habilitan los puertos TCP, estare encantado de comentarles el proceso

---

## 📋 Notas del Autor
- He diseñado este readme con un enfoque detallado y explicativo, con la intención de facilitar la comprensión de cada aspecto del sistema. Mi objetivo es asegurar que tanto los desarrolladores novatos como los más experimentados puedan seguir las instrucciones sin dificultad. No pretendo subestimar las capacidades de nadie; más bien, deseo proporcionar una guía clara y accesible para todos.

- Aprecio cualquier retroalimentación constructiva que pueda ayudarme a mejorar la documentación o el proyecto en general.

