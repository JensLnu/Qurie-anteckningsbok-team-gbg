document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('.headings')
    const toolbarButtons = document.querySelectorAll('.toolbar-button')
    
    function modifyText(command, defaultUi, value) {
        document.execCommand(command, defaultUi, value);
    }
    
    toolbarButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            btn.classList.toggle('active');
            const textarea = document.getElementById('text-area');
            modifyText(btn.id, false, null);
            textarea.focus();
        });
    })
    
    headings.forEach((btn) => {
        btn.addEventListener('change', () => {
            const textarea = document.getElementById('text-area');
            modifyText(btn.id, false, btn.value)
            textarea.focus();
        })
    })
})