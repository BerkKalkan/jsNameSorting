let names = [];

function listNames(){
    console.log("girilen isimler: ")
    for(const namesInList of names){
        console.log(namesInList);
    }

    names.sort();
    console.log("alfabetik siralanmis hali:")
    for(const ascendList of names){
        console.log(ascendList)
    }
}

function getInput(){
    let manyName = Number(prompt("kac isim gireceksin?"));

    for (let i = 0; i < manyName; i++) {
        newName = prompt(i + 1+". ismi gir");
        names.push(newName);
    }
    listNames();
}