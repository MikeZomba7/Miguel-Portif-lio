document.querySelectorAll('div h2').forEach(title => {
    title.addEventListener('click', () => {
        const parentDiv = title.parentElement;
        const content = parentDiv.querySelector('p, ul');
        if (content) {
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        }
    });
});

const toggleContainer = document.createElement('div');
toggleContainer.style.textAlign = 'center';
toggleContainer.style.margin = '20px 0';

const expandAllButton = document.createElement('button');
expandAllButton.textContent = 'Expandir Todos';
expandAllButton.style.margin = '0 10px';
expandAllButton.style.padding = '10px 20px';
expandAllButton.style.border = '1px solid #0f62fe';
expandAllButton.style.backgroundColor = '#0f62fe';
expandAllButton.style.color = '#fff';
expandAllButton.style.borderRadius = '5px';
expandAllButton.style.cursor = 'pointer';

const collapseAllButton = document.createElement('button');
collapseAllButton.textContent = 'Recolher Todos';
collapseAllButton.style.margin = '0 10px';
collapseAllButton.style.padding = '10px 20px';
collapseAllButton.style.border = '1px solid #444';
collapseAllButton.style.backgroundColor = '#444';
collapseAllButton.style.color = '#fff';
collapseAllButton.style.borderRadius = '5px';
collapseAllButton.style.cursor = 'pointer';

const linkedinButton = document.createElement('button');
linkedinButton.textContent = 'Visite meu LinkedIn';
linkedinButton.style.margin = '20px 0';
linkedinButton.style.padding = '10px 20px';
linkedinButton.style.border = '1px solid #0077b5';
linkedinButton.style.backgroundColor = '#0077b5';
linkedinButton.style.color = '#fff';
linkedinButton.style.borderRadius = '5px';
linkedinButton.style.cursor = 'pointer';
linkedinButton.onclick = () => {
    window.open('https://www.linkedin.com/in/miguel-bomfim-nascimento-8aa2a233a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank');
};

toggleContainer.appendChild(expandAllButton);
toggleContainer.appendChild(collapseAllButton);
toggleContainer.appendChild(linkedinButton);

const profileSection = document.querySelector('.profile');
profileSection.appendChild(toggleContainer);

expandAllButton.addEventListener('click', () => {
    document.querySelectorAll('div p, div ul').forEach(content => {
        content.style.display = 'block';
    });
});

collapseAllButton.addEventListener('click', () => {
    document.querySelectorAll('div p, div ul').forEach(content => {
        content.style.display = 'none';
    });
});
