# Rutas

1. USUARIOS
- /api/v1/users
- - GET 

- /api/v1/users/:id
- - GET  
- - PUT (ADMIN)
- - DELETE (ADMIN)

- /api/v1/users/me
- - GET
- - PUT
- - PATCH
- - DELETE

- /api/v1/auth/login
- - POST

- /api/v1/auth/register
- - POST

2. PUBLICACIONES
- /api/v1/publications
    - - GET (Obtener todas las publicaciones de los usuarios)
    - - POST (Crear publicaciones)

- /api/v1/publications/:id
    - - GET (Obtener una publicacion en especifico)

- /api/v1/publications/:id/comments
    - - GET (Obtener todos los comentarios de una publicación)
    - - POST (Crear comentarios nuevos)

- /api/v1/users/me/publications
    - - GET (Obtener las publicaciones que he creado)

- /api/v1/users/me/publications/:id
    - - GET (Obtener una publicacion especifica creada por mi)
    - - PUT / PATCH (Modificar mi propia publicacion)
    - - DELETE (Eliminar mi propia publicación)

