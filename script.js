function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    const sidebar = document.getElementById('sidebar');
    
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
        menu.style.display = 'none';
    }
}
