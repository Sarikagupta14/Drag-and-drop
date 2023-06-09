const items = document.querySelectorAll('.item');
    const container2 = document.getElementById('container2');
  
  // Drag items from the first container to the second container.
    items.forEach((item) => {
      item.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
        event.target.classList.add('dragging');
      });
    });
  // Drop items from the first container to the second container.
    function drop(event) {
      event.preventDefault();
      const itemId = event.dataTransfer.getData('text/plain');
      const item = document.getElementById(itemId);
      event.target.appendChild(item);
      item.classList.remove('dragging');
      alert('Drag sucessful')
    }
    //  Reset button to clear the second container and reset the first container to its original state. 
    function resetContainers() {
      window.location.reload()
    }

