
let wonderwoman = {
   hull: 20,
   fire: 5,
   accuracy: .7

};
console.log(wonderwoman);

let alienship1 = {
    hull: 3 && 6,
    firepower: 2 && 4,
    accuracy: .6 && .8

};
console.log(aliens); 


let alienship2 = {
    hull: 3 && 6,
    firepower: 2 && 4,
    accuracy: .6 && .8
}
    
let alienship3 = {
    hull: 3 && 6,
    firepower: 2 && 4,
    accuracy: .6 && .8
    

}

let alienship4 = {
    hull: 3 && 6,
    firepower: 2 && 4,
    accuracy: .6 && .8
}

let alienship5 = {
    hull: 3 && 6,
    firepower: 2 && 4,
    accuracy: .6 && .8
}

let alienship6 = {
    hull: 3 && 6,
    firepower: 2 && 4,
    accuracy: .6 && .8
}

function strike(alienship1, alienship2)
    if(Math.random() <alienship1.accuracy) {
        alienship1.hull = alienship1.hull - alienship2.firepower;
        console.log(alienship1, + "Strike!", + alienship2); 
    }

else {
    console.log(alienship1 + 'missed', + alienship2)
}

function strike(alienship3, alienship4)
    if(Math.random() <=  alienship4.accuracy) {
        alienship3.hull = alienship3.hull - alienship4.firepower;
        console.log(alienship3, + "Strike!", + alienship4)
    }
else {
    console.log(alienship3, + 'missed', + alienship4)
}

function Strike(alienship5, alienship6)
    if(Math.random() <= alienship6.accuracy) {
        alienship5.hull = alienship5.hull - alienship6.firepower;
        console.log(alienship5, + "STRIKE!", + alienship6)
    }

else{
    console.log(alienship5, + 'missed', + alienship6)
}

function Strike(wonderwoman, alienship6)
    if(Math.random() <= alienship6.accuracy) {
        wonderwoman.hull = wonderwoman.hull - alienship6.firepower;
        console.log(wonderwoman, + 'Strike!', + alienship6)
        
    }
else {
    console.log(wonderwoman, + "strike!", + alienship6)
}

for(let i = 0; i < alienship1.lenght; i++) {
    strike(alienship2 && alienship3)
    if(alienship2.hull > alienship3.hull){

    }
}

    