document.getElementById('view').addEventListener('click', () => {
    const jsonInput = document.getElementById('json-input').value;
    try {
        const jsonData = JSON.parse(jsonInput);
        document.getElementById('output').textContent = JSON.stringify(jsonData, null, 2);
    } catch (error) {
        document.getElementById('output').textContent = 'Invalid JSON';
    }
});
