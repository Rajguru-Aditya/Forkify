import View from "./View.js"
import previewView from "./previewView.js"
import icons from "url:../../img/icons.svg"

class BookmarksView extends View {
    _parentElement = document.querySelector(".bookmarks__list");
    _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it :)"
    _message = "";

<<<<<<< HEAD
    addHandlerRender(handler){
        window.addEventListener("load", handler)
    }

=======
>>>>>>> c2d426eb39fb1177a349322af292abc642711003
    _generateMarkup(){
        return this._data.map(bookmark => previewView.render(bookmark, false)).join("");
    }
}

export default new BookmarksView();