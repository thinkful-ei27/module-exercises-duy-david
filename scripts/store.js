const store = (function () {
    items = [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
      ];
      hideCheckedItems = false;
      searchTerm = '';

      const findById = function(id) {
        return store.items.find( (element) => element.id === id);
      }

      const addItem = function(name) {
        try {
          Item.validateName(name);
          this.items.push(Item.create(name))
        } catch (error) {
          console.log(`Can't add item because: ${error.message}`)
        }
      }
      const findAndToggleChecked = function(id) {
        let object = this.findById(id)
        object.checked = !object.checked;
      }

      const findAndUpdateName = function(id, newName) {
        try {
          this.findById(id).name = newName;
        } catch (error) {
          console.log(`Cannot update name because: ${error.message}`);
        }
      }

      const findAndDelete = function(id) {
        this.items = this.items.filter( object => object.id !== id);
      }


      return {
        items,
        hideCheckedItems,
        searchTerm,
        findById,
        addItem,
        findAndToggleChecked,
        findAndUpdateName,
        findAndDelete
      };
}());