class Storage{


    constructor(){

    }

    saveData(data){

        const dataString = JSON.stringify(data);
        localStorage.setItem('publications', dataString);         //nel local storage (la cache) posso mettere soltanto stringhe

    }


    loadData(){

        const dataString = localStorage.getItem('publications')

        if (dataString) {
            const data = JSON.parse(dataString);
            return data;
        }

        return null;

    }


}