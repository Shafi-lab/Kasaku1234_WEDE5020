document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="text"]');
    const productGrid = document.querySelector('.product-grid');
    
    if (!searchInput || !productGrid) return;

    // Add placeholder info text above the input dynamically
    const filterTip = document.createElement('small');
    filterTip.textContent = 'Type to instantly filter items by name or description below.';
    filterTip.style.display = 'block';
    filterTip.style.marginBottom = '0.5rem';
    filterTip.style.color = '#666';
    searchInput.parentNode.insertBefore(filterTip, searchInput);

    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        const cards = productGrid.querySelectorAll('.product-card');

        cards.forEach(card => {
            const heading = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
            const textContent = card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : '';
            
            // Check if search terms align with card content elements
            if (heading.includes(searchTerm) || textContent.includes(searchTerm)) {
                card.style.display = 'flex'; // Preserve existing css flex-direction rules
            } else {
                card.style.display = 'none'; // Hide non-matching structural items
            }
        });
    });
});
