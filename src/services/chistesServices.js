import  APIRequest  from "../utils/Config"

export  function getRandomJokes( ){
    return APIRequest.get('/', {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        }
    }) //Respuesta de HTTPS://RANDOMUSER.ME/API
    // APIRequest.post('/')
}