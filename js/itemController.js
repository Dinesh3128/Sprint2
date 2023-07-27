// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.Fertilizers = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(name, description, imageUrl) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl,
        };

        // Push the item to the items property
        this.Fertilizers.push(item);

        //"12345"  %^ - 2
        //Save items to local storage
        localStorage.setItem("Fertilizers", JSON.stringify(this.Fertilizers));
    }

    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("Fertilizers")
        if (storageItems) {
            const Fertilizers = JSON.parse(storageItems)
            for (var i = 0, size = Fertilizers.length; i < size; i++) {
                const item = Fertilizers[i];
                this.Fertilizers.push(item);
            }
        }
    }
}