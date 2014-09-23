/** global jQuery **/

(function($) {

  $(document).foundation();


})(jQuery);


/**
 * Draggable interface
 */
(function(window, document) {
  window.onload = function() {

    var droppable = document.querySelectorAll('.droppable');
    var dragElements = document.querySelectorAll('#drag-elements li');
    var elementDragged = null;
    var dragClassOver = 'over';

    var textArea = '<textarea></textarea>';

    var handleDragOver = function(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.dataTransfer.dropEffect = 'move';
      return false;
    };

    var handleDragEnter = function(e) {
      this.classList.add(dragClassOver);
    };

    var handleDragLeave = function(e) {
      this.classList.remove(dragClassOver);
    };

    var handleDrop = function(e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();

      this.classList.remove(dragClassOver);
      this.innerHTML = textArea;

      // Remove the element from the list.
      elementDragged = null;

      return false;
    };

    var toolHandleDragStart = function(e) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
      elementDragged = this;
    };

    var toolHandleDragEnd = function(e) {
      elementDragged = null;
    };

    for (var i =0; i < droppable.length; i++) {
      droppable[i].addEventListener('dragover', handleDragOver, false);
      droppable[i].addEventListener('dragenter', handleDragEnter, false);
      droppable[i].addEventListener('dragleave', handleDragLeave, false);
      droppable[i].addEventListener('drop', handleDrop, false);
    }

    for (var i = 0; i < dragElements.length; i++) {
      // Event Listener for when the drag interaction starts.
      dragElements[i].addEventListener('dragstart', toolHandleDragStart, false);

      // Event Listener for when the drag interaction finishes.
      dragElements[i].addEventListener('dragend', toolHandleDragEnd, false);
    }
  };

})(this, document);
