export function filterCourses(courses, activeCategory, searchText) {
    let filtered = [...courses];

    if (activeCategory !== 'All') {
        filtered = filtered.filter(course => course.category === activeCategory);
    }

    if (searchText.trim() !== '') {
        const searchLower = searchText.toLowerCase().trim();
        filtered = filtered.filter(course => 
            course.title.toLowerCase().includes(searchLower)
        );
    }
    
    return filtered;
}

export function updateCountersOnButtons(counts, container) {
    if (!container) return;
    
    const buttons = container.querySelectorAll('.filter__button');
    buttons.forEach(button => {
        const category = button.getAttribute('data-category');
        const count = counts[category] || 0;
        const categoryName = category;
        button.textContent = `${categoryName} ${count}`;
        button.setAttribute('data-category', category);
    });
}