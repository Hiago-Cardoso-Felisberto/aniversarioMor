function updateClock() {
    const startTime = new Date('2022-08-09T10:00:00');
    const currentTime = new Date();
    const timeDiff = currentTime - startTime;

    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('time-together').textContent = 
        `Tempo juntos: ${years} anos, ${months} meses, ${days} dias, ` +
        `${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

setInterval(updateClock, 1000);
updateClock();