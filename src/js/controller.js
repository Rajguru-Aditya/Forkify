import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js"
import resultsView from "./views/resultsView.js"
import paginationView from "./views/paginationView.js";
import bookmarksView from "./views/bookmarksView.js"
<<<<<<< HEAD
import addRecipeView from "./views/addRecipeView.js"
=======
>>>>>>> c2d426eb39fb1177a349322af292abc642711003

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime/runtime";

if (module.hot){
  module.hot.accept();
}

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controlRecipes = async function(){

  try {

    const id = window.location.hash.slice(1);

    if(!id) return;
    recipeView.renderSpinner();

    // 0. Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
<<<<<<< HEAD
    
    // 3. Updating bookmarks view
    bookmarksView.update(model.state.bookmarks)
    
    // 1. Loading recipe
    await model.loadRecipe(id);
    
    // 2. Rendering recipe
    recipeView.render(model.state.recipe)
    
=======
    bookmarksView.update(model.state.bookmarks)

    // 1. Loading recipe
    await model.loadRecipe(id);

    // 2. Rendering recipe
    recipeView.render(model.state.recipe)
  
>>>>>>> c2d426eb39fb1177a349322af292abc642711003
  } catch (err) {
    recipeView.renderError()
  }
};


const controlSearchResults = async function(){
  try {

    resultsView.renderSpinner();

    // Get search quert
    const query = searchView.getQuery();
    if(!query) return;

    // Load search results
    await model.loadSearchResults(query)

    // Render results
    resultsView.render(model.getSearchResultsPage());

    // Render initial pagination
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err)
  }
}

const controlPagination = function(goToPage){
  // Render new results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // Render new pagination buttons
  paginationView.render(model.state.search);
}

const controlServings = function(newServings){
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view 
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function(){
  // 1. Add/Remove Bookmarks
  if(!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2. Update recipe view
  recipeView.update(model.state.recipe);

  // 3. Render bookmarks
  bookmarksView.render(model.state.bookmarks)
}

<<<<<<< HEAD
const controlBookmarks = function(){
  bookmarksView.render(model.state.bookmarks)
}

const controlAddRecipe = function(newRecipe){
  console.log(newRecipe);

  // Upload new recipe
}

const init = function(){
  bookmarksView.addHandlerRender(controlBookmarks);
=======
const init = function(){
>>>>>>> c2d426eb39fb1177a349322af292abc642711003
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
<<<<<<< HEAD
  addRecipeView.addHandlerUpload(controlAddRecipe);
=======
>>>>>>> c2d426eb39fb1177a349322af292abc642711003
};

init();