// ============================================
// REDCap Page - Menu Lateral e Seções
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle (minimizar/expandir)
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleSidebar');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }
    
    // Navegação entre seções
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = {
        overview: document.getElementById('overview'),
        setup: document.getElementById('setup'),
        howto: document.getElementById('howto'),
        datasharing: document.getElementById('datasharing')
    };
    
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remover active de todos
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            // Esconder todas as seções
            Object.values(sections).forEach(section => {
                if (section) section.classList.remove('active');
            });
            
            // Mostrar seção selecionada
            const sectionId = item.getAttribute('data-section');
            if (sections[sectionId]) {
                sections[sectionId].classList.add('active');
                
                // 🔧 CORREÇÃO: Rolar para o topo da nova seção
                sections[sectionId].scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
});