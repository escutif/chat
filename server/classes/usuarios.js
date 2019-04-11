//La clase Usuarios se encarga de todos los usuarios conectados
class Usuarios {

    constructor() {
        //Se inicializa el constructor
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };

        //Se agrega la persona al arreglo de personas
        this.personas.push(persona);

        return this.personas;
    }

    getPersona(id) {
        //retorna el primer elemento que coincida con la posicion 0
        let persona = this.personas.filter(persona => persona.id === id)[0];

        return persona;
    }

    getPersonas() {
        //Regresa todas las personas
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) {
        //Se guarda la referencia de la persona que se desea borrar
        let personaBorrada = this.getPersona(id);

        //Deja solo las personas activas en el chat (saca al id de la persona)
        this.personas = this.personas.filter(persona => persona.id != id);

        //Retorna la persona borrada
        return personaBorrada;
    }

}

module.exports = {
    Usuarios
}