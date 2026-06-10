function getCategoryClass(category) {
    switch(category) {
        case 'Marketing': return 'card__category--marketing';
        case 'Management': return 'card__category--management';
        case 'HR & Recruiting': return 'card__category--hr';
        case 'Design': return 'card__category--design';
        case 'Development': return 'card__category--development';
        default: return '';
    }
}

const template = document.getElementById('course-card-template');

function createCardElement(course) {
    const card = template.content.cloneNode(true);
    
    const img = card.querySelector('.card__img');
    img.src = course.image;
    img.alt = course.title;
    
    const categoryElement = card.querySelector('.card__category');
    const categoryClass = getCategoryClass(course.category);
    categoryElement.textContent = course.category;
    categoryElement.className = `card__category ${categoryClass}`;
    
    card.querySelector('.card__title').textContent = course.title;
    card.querySelector('.card__price').textContent = `$${course.price}`;
    card.querySelector('.card__speaker').textContent = `|  by ${course.speaker}`;
    
    return card;
}

export function renderCards(courses, container) {
    if (!container) return;
    
    if (courses.length === 0) {
        container.innerHTML = '<div class="courses__empty">No courses found</div>';
        return;
    }
    
    container.innerHTML = '';
    
    courses.forEach(course => {
        container.appendChild(createCardElement(course));
    });
}

export function renderFilters(categories, counts, activeCategory, container) {
    if (!container) return;
    
    container.innerHTML = categories.map(category => {
        const count = counts[category] || 0;
        const isActive = activeCategory === category;
        const activeClass = isActive ? 'filter__button--active' : '';
        const textActiveClass = isActive ? 'filter__text--active' : '';
        
        return `
            <button class="filter__button ${activeClass}" data-category="${category}">
                <span class="filter__inner">
                    <span class="filter__text ${textActiveClass}">${category}</span>
                    <span class="filter__count">${count}</span>
                </span>
            </button>
        `;
    }).join('');
}

export function updateLoadMoreButton(button, totalItems, visibleItems) {
    if (!button) return;
    
    if (visibleItems >= totalItems) {
        button.classList.add('hidden');
    } else {
        button.classList.remove('hidden');
    }
}
