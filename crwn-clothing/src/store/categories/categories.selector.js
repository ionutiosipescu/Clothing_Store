import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

// Memoize Selector
// Pe scurt, un selector mai special care tine minte state-ul
// in cazul in care state-ul este acelasi pe care la mai intalnit
// outputul va fii la fel
// in spate, le va stoca undeva si verifica === daca state-ul nou este la fel ca cel vechi
// in cazul in care sunt va returna acelasi output automat fara sa mai calculeze sau sa foloseaza resurse degeaba
// pentru ca logica este, daca inputurile sunt la fel de ce sa mai calculez inca o data ... si outputul va fi la fel
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

// problema era ca toate useSelectorii se rerandau cand se schimba un state
