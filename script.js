const labels = document.querySelectorAll('label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) => `<span 
        style="transition:${index * 100}ms">${letter}</span>`)
        .join('')
})