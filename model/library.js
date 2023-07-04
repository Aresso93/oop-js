class Library{

    constructor(publications = []){

    this.publications = publications;

}

addPublication(pub){
    this.publications.push(pub);
    }

deletePublication(index){
    //this.publications = this.publications.filter((_, i) => i !== index);             //inserendo l'indice di un libro, questo viene cancellato

    this.publications.splice(index, 1);              //questo modifica l'array originale invece di farne uno nuovo, quindi potrebbe non essere il massimo

}                                                                                   //per farlo crea un array nuovo senza la i che abbiamo deciso di togliere

    getAllBookCards(){

        let allCards = '';
        for (let i = 0; i < this.publications.length; i++){
        const pub = this.publications[i]
        const humanIndex = i + 1; 
        allCards += humanIndex + ') ' + pub.toString();
        allCards += '--------------------------------------------------------------------------\n'
        }

        return allCards;
    }
    

    fromDbObjects(data){
       for (const genericObject of data) {
            const book = new Book(genericObject.title, genericObject.author, genericObject.dop, genericObject.publisher)
            this.publications.push(book);
       }
    }

}