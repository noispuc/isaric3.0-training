// ============================================
// ISARIC Data Tools - Mapa Interativo com Bordas
// ============================================

// Coordenadas relativas à imagem (%) ou pixels absolutos
// Use % para ser responsivo
const toolPositions = {
    ccp: {
        top: '42.5%',
        left: '44.5%',
        width: '11%',
        height: '4.5%',
        name: 'CCP',
        page: 'ccp.html'
    },
    arc: {
        top: '33.7%',
        left: '44.5%',
        width: '11%',
        height: '4.5%',
        name: 'ARC',
        page: 'arc.html'
    },
    bridge: {
        top: '25.4%',
        left: '44.5%',
        width: '11%',
        height: '4.5%',
        name: 'BRIDGE',
        page: 'bridge.html'
    },
    redcap: {
        top: '16.7%',
        left: '44.5%',
        width: '11%',
        height: '4.5%',
        name: 'REDCap',
        page: 'redcap.html'
    },
    vertex: {
        top: '3.3%',
        left: '44.5%',
        width: '11%',
        height: '4.5%',
        name: 'VERTEX',
        page: 'vertex.html'
    }
};

// Conteúdo para o painel
const toolContent = {
    ccp: {
        title: "CCP",
        subtitle: "Clinical Characterization Protocol",
        description: "CCP is the foundational layer for managing individual clinical cases, patient records, and case report forms. It provides structured data entry, case tracking, and clinical workflow management capabilities.",
        details: "As the base of our analytical framework, CCP ensures accurate and complete capture of clinical data at the patient level."
    },
    arc: {
        title: "ARC",
        subtitle: "Automated Reporting and Compliance",
        description: "ARC streamlines the creation of regulatory reports, study documentation, and compliance monitoring. It automates routine reporting tasks while ensuring adherence to regulatory standards.",
        details: "Integrated with case report forms and protocol management systems, ARC reduces manual effort and minimizes errors."
    },
    bridge: {
        title: "BRIDGE",
        subtitle: "Integration Layer",
        description: "BRIDGE serves as the critical integration layer connecting multiple data sources, systems, and analytical tools. It enables seamless data flow between case report forms and analytical platforms.",
        details: "Acting as the middleware, BRIDGE ensures data consistency and maintains interoperability across the entire analytical ecosystem."
    },
    redcap: {
        title: "REDCap",
        subtitle: "External Tool",
        description: "REDCap is developed and maintained by Vanderbilt University. It is not an ISARIC tool but integrates seamlessly with the ISARIC analytical framework.",
        details: "Research Electronic Data Capture provides secure, web-based data collection for research studies."
    },
    vertex: {
        title: "VERTEX",
        subtitle: "Advanced Analytics Platform",
        description: "VERTEX is the top-level analytical platform providing advanced data analysis, statistical modeling, and visualization capabilities for healthcare research.",
        details: "As the apex of the analytical tool stack, VERTEX integrates data from all underlying systems to provide comprehensive insights."
    }
};

let currentTool = null;

function setupInteractiveMap() {
    const container = document.querySelector('.ecosystem-container');
    const infoPanel = document.getElementById('info-panel');
    
    if (!container || !infoPanel) return;
    
    // Criar overlay
    let overlay = container.querySelector('.map-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'map-overlay';
        container.style.position = 'relative';
        container.appendChild(overlay);
    }
    
    // Criar áreas para cada ferramenta
    for (const [toolId, pos] of Object.entries(toolPositions)) {
        const area = document.createElement('div');
        area.className = 'tool-area';
        area.style.top = pos.top;
        area.style.left = pos.left;
        area.style.width = pos.width;
        area.style.height = pos.height;
        area.setAttribute('data-tool', toolId);
        
        area.addEventListener('mouseenter', () => {
            if (currentTool === toolId) return;
            currentTool = toolId;
            const content = toolContent[toolId];
            
            if (content && infoPanel) {
                infoPanel.innerHTML = `
                    <div class="info-content">
                        <h3>${content.title}</h3>
                        <h4>${content.subtitle}</h4>
                        <p>${content.description}</p>
                        <p><strong>Key role:</strong> ${content.details}</p>
                        <a href="pages/${pos.page}" class="tool-link">Learn more →</a>
                    </div>
                `;
            }
        });
        
        overlay.appendChild(area);
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    setupInteractiveMap();
});