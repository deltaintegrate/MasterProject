## Prueba Backend Master Fase 2
Esta es el readme de la prueba de 3 secciones

##Estructura

El siguiente proyecto esta compuesto por una aplicacion en nodejs con typescript el cual nos ayudara a implementar
el principio de diseño SOLID cuya implementacion primordial sera el DI (inversion de dependencias) donde usaremos el patron IoC
el cual se aplica mediante inversify en la inyeccion de dependencias a los servicios donde se puede evidenciar en la doble conexion
a BD que maneja el projecto, teniendo conexion a MYSQL y POSTGRES juntas gracias al diseño previamente establecido a la
arquitectura hexagonal que compone el projecto.

## Respuestas

Las respuestas se encuentran ubicadas de la siguiente manera: 


- Respuesta de la sección 1, 2, 3 están dentro de la estructura del código y también se evidencian al ejecutar
```javascript
npm run start
```

### Consideraciones

la respuesta 3 esta compuesta por la lambda la cual se conecta a la BD MYSQL y puede ser integrada a una cuenta AWS
mediante la ejecucion 

```javascript
sls deploy
```

El cual conectara con la sección activa de AWS CLI configurada en la maquina, gestionando la creacion de las lambdas
y sus metodos a consultar. En caso de ejecutar la respuesta directamente solo se debera escribir en terminal 

```javascript
npm run start
```

para obtener todas las respuestas

