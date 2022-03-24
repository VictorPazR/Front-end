const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pikachu.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeType = data.types[0].type.name;
            let pokeMov1 = data.abilities[0].ability.name;
            let pokeMov2 = data.abilities[1].ability.name;
            let pokeWeight = data.weight/10;
            let pokeHeight = data.height/10;
            let pokeHP = data.stats[0].base_stat;
            let pokeAt = data.stats[1].base_stat;
            let pokeDef = data.stats[2].base_stat;
            let pokeSA = data.stats[3].base_stat;
            let pokeSD = data.stats[4].base_stat;

            pokeImage(pokeImg,pokeName,pokeType,pokeWeight,
                pokeHeight,pokeMov1,pokeMov2,pokeHP,pokeAt,pokeDef,pokeSA,pokeSD);
        }
    });
}
const pokeImage = (url,nombre,tipo,peso,tamaño,mov1,mov2,hp,ataque,defensa,ataqueE,defensaE) => {
    const pokePhoto = document.getElementById("pokeImg");
    document.getElementById("dato1").innerHTML= nombre;
    document.getElementById("dato2").innerHTML= tipo;
    document.getElementById("dato3").innerHTML = peso;
    document.getElementById("dato4").innerHTML = tamaño;
    document.getElementById("dato5").innerHTML = mov1;
    document.getElementById("dato6").innerHTML = mov2;
    document.getElementById("dato7").innerHTML = hp;
    document.getElementById("dato8").innerHTML = ataque;
    document.getElementById("dato9").innerHTML = defensa;
    document.getElementById("dato10").innerHTML = ataqueE;
    document.getElementById("dato11").innerHTML = defensaE;

    pokePhoto.src = url;
}