const getDate = () => {
    const days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const date = new Date();
    const day = date.getDate();
    const dayString = days[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const actualDate = `${dayString}, ${month} ${day}/${year}`;

    return actualDate;
}

export default getDate;