const swapi = require('swapi-node');
const Response = require("../Helper/Response");

const getSwapiPeople = async (event) => {

  const { idPersona } = event.pathParameters;
  console.log("id:" + idPersona);

  try {
    const people = await swapi.getPerson(idPersona);
    const resp = Response(200, "ok", people);
    return {
      status: 200,
      body: resp
    };
  } catch (error) {
    console.log("Error en el controlador:" + error);
  }
};

module.exports = {
  getSwapiPeople
};
