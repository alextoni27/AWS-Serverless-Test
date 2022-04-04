@api = https://dkv03fhvol.execute-api.us-west-2.amazonaws.com

##  Integrar la API de prueba StarWars API 
### get people
## {{id}} : id Obtener una persona
GET {{api}}/people/{{id}}



### create task
POST {{api}}/tasks
Content-Type: application/json

{
  "title": "Nodejs Serverless",
  "description": "Desarrolle y supervise fácilmente aplicaciones de escalado automático en AWS Lambda, API Gateway, DynamoDB, etc., con Serverless Framework y Serverless Monitoring"
}

### get tasks
## Obtener listado de todas las tareas
GET {{api}}/tasks


### get single task
## Obtener una tarea por el id del registro
GET {{api}}/tasks/0c3378f1-d857-4db4-a283-e1ca2074ab2d

### update single task
## Actualizar una tarea por el id del registro
PUT {{api}}/tasks/0c3378f1-d857-4db4-a283-e1ca2074ab2d
Content-Type: application/json

{
  "done": true
}

### delete single task
## Eliminar una tarea por el id del registro
DELETE {{api}}/tasks/5a2aefd9-7d78-4bbb-a02b-78505679db91