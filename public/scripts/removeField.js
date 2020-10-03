
function removeField(e) {
    const scheduleItems = document.querySelector('#schedule-items')
    const totalOfContainers = document.querySelectorAll('.schedule-item').length
    const fieldContainer = e.target.parentNode
    
    totalOfContainers > 1 && scheduleItems.removeChild(fieldContainer)
}