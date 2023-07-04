class GUI{


constructor(){
    this.library = new Library();
    this.storage = new Storage();

    const data = this.storage.loadData();
    if (data) {
        this.library.fromDbObjects(data);
    } 
    
    console.log(data);
}                                                   //GUI = graphic user interface. Mettiamo un constructor vuoto, ma è anche possibile ometterlo ed è uguale



start(){

    while (true) {                                                  //inserendo questo ciclo while, ogni volta che il programma si chiude, si resetta e ti dà di nuovo il prompt
        
    

    const firstChoice = prompt('Hai 4 opzioni:\n'+
                            '1) Guarda la lista dei libri\n' +
                            '2) Aggiungi un libro\n'+
                            '3) Rimuovi un libro\n'+
                            '4) Esci dal programma\n'+
                            'Inserisci il numero dell\'operazione');
    if (firstChoice === '1') {
        this.showBooks();
    } else if (firstChoice === '2') {
        this.insertBook();
    } else if (firstChoice === '3') {
        this.deleteBook();
    } else if (firstChoice === '4') {
        break;                                                         //qui ho messo un break che dice di smettere di ciclare il programma se viene selezionato 4
    } else {
        alert('Ma vai a cagare');
    }


        }

    }

    insertBook(){
        const title = prompt('Inserisci il titolo del libro');
        const author = prompt('Inserisci l\'autore del libro');
        const dop = prompt('Inserisci la data di pubblicazione del libro nel formato gg/mm/aaaa');
        const publisher = prompt('Inserisci la casa editrice del libro');

        const book = new Book(title, author, dop, publisher);

        this.library.addPublication(book);
//questa è una funzione che voglio chiamare quando l'utente deve inserire il libro, ma per non scriverla tutta nel body di firstChoice, la faccio a parte

        this.storage.saveData(this.library.publications);       //mettendo questa riga di codice, dico al programma di salvare ogni volta che aggiungo qualcosa
    }

    showBooks(){
        const allBooks = this.library.getAllBookCards();

        alert(allBooks);
    }

    deleteBook(){
        const humanIndex = prompt('Inserisci il numero del libro da eliminare');
        const index = humanIndex - 1;
        this.library.deletePublication(index);
        this.storage.saveData(this.library.publications);
    }

}