//llenando referencias
const udavinci = {
    rector : document.getElementById('rector'),
    vision : document.getElementById('vision'),
    mision : document.getElementById('mision'),
    logo : document.getElementById('logo'),
    philosophy : document.getElementById('philosophy'),
    dipes : document.getElementById('dipes'),
    ree : document.getElementById('ree')
}

//ip de la api
const apiUrl = 'http://localhost:8080/udavinci/';

//Buscar respuesta de la api
const getData = async url =>{
    const response = await fetch(`${url}history`);
    const data = await response.json();
    console.log(data);
    const {rector, vision, mision, logo, philosophy, dipes, ree} = data;

    udavinci.rector.innerText = `Rector: ${rector}`;
    udavinci.vision.innerText = `Vision: ${vision}`;
    udavinci.mision.innerText = `Misión: ${mision}`;
    udavinci.logo.src = logo;
    udavinci.philosophy.innerText = `Filosofía: ${philosophy}`;
    udavinci.dipes.innerText = `Registro de Establecimiento Educativo con clave de centro de trabajo: ${dipes}`;
    udavinci.ree.innerText = `Registro Nacional de Instituciones y Empresas Científicas y Tecnológicas (RENIECYT): ${ree}`;
}

//Obtención de datos
getData(apiUrl);