const inputNombrePais = document.getElementById("nombrePais");
const botonBuscar = document.getElementById("botonBuscar");
const capital = document.getElementById("capital");
const poblacion = document.getElementById("poblacion");
const bandera = document.getElementById("bandera");

async function buscarInfoPais() {
    try {
        const respuesta = await fetch("https://restcountries.com/v3.1/name/" 
                                    + inputNombrePais.value);
        
        const infoPais = await respuesta.json();

        const pais = infoPais[0]; 

        capital.innerText = pais.capital[0];

        poblacion.innerText = pais.population.toLocaleString();
        
        bandera.src = pais.flags.png;

    } catch (error) {
        alert("No se encontró el país. ¡Intenta de nuevo!");
        console.log("Hubo un error:", error);
    }
}

botonBuscar.addEventListener("click", e => {
    e.preventDefault();
    buscarInfoPais();
});
