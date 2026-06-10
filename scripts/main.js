import { allCourses, getCategoryCounts, getUniqueCategories } from './data.js';
import { renderCards, renderFilters, updateLoadMoreButton } from './render.js';
import { filterCourses } from './filters.js';


let state = {
    activeCategory: 'All',
    searchText: '',
    visibleCount: 9,
    filteredCourses: []  };

const coursesGrid = document.querySelector('.courses__grid');
const filtersContainer = document.querySelector('.filters__buttons');
const searchInput = document.querySelector('.filters__search-input');
const loadMoreButton = document.querySelector('.courses__load-more');

function init() {
    const categories = getUniqueCategories();
    const counts = getCategoryCounts();

    renderFilters(categories, counts, state.activeCategory, filtersContainer);

    updateFilteredCourses();

    renderVisibleCourses();

    attachEventListeners();
}

function updateFilteredCourses() {
    state.filteredCourses = filterCourses(
        allCourses, 
        state.activeCategory, 
        state.searchText
    );

    state.visibleCount = 9;
}

function renderVisibleCourses() {
    const visibleCourses = state.filteredCourses.slice(0, state.visibleCount);
    renderCards(visibleCourses, coursesGrid);

    updateLoadMoreButton(loadMoreButton, state.filteredCourses.length, state.visibleCount);
}

function fullUpdate() {
    updateFilteredCourses();
    renderVisibleCourses();
}

function handleCategoryClick(event) {
    const button = event.target.closest('.filter__button');
    if (!button) return;
    
    const category = button.getAttribute('data-category');
    if (!category) return;

    state.activeCategory = category;

    const allButtons = document.querySelectorAll('.filter__button');
    allButtons.forEach(btn => {
        const btnCategory = btn.getAttribute('data-category');
        if (btnCategory === category) {
            btn.classList.add('filter__button--active');
            const textSpan = btn.querySelector('.filter__text');
            if (textSpan) textSpan.classList.add('filter__text--active');
        } else {
            btn.classList.remove('filter__button--active');
            const textSpan = btn.querySelector('.filter__text');
            if (textSpan) textSpan.classList.remove('filter__text--active');
        }
    });

    fullUpdate();
}

function handleSearch(event) {
    state.searchText = event.target.value;
    fullUpdate();
}

function handleLoadMore() {
    state.visibleCount = Math.min(
        state.visibleCount + 8, 
        state.filteredCourses.length
    );
    renderVisibleCourses();
}

function attachEventListeners() {
    if (filtersContainer) {
        filtersContainer.addEventListener('click', handleCategoryClick);
    }

    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', handleLoadMore);
    }
}

document.addEventListener('DOMContentLoaded', init);
