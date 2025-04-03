function updateClock() {
    const now = new Date();
    
    // Получаем компоненты времени
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Конвертируем в 12-часовой формат
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');
    
    // Обновляем отображение
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
    
    // Обновляем дату
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('ru-RU', options);
}

// Обновляем время сразу и каждую секунду
updateClock();
setInterval(updateClock, 1000);