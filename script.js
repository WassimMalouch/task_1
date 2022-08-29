
// includes
function find(liste,x){
for(let i=0;i<liste.length;i++)
    if(liste[i]==x){
    return true;
    break}
return false;
}

function deleteFromListe(liste,i){
liste.splice(i, 1);
console.log(liste)


}
function editListe(liste,i,val){
    liste[i]=val;
    console.log(liste)
}


/*
console.log(find([1,2,3],2));
console.log(deleteFromListe([1,2,3],1))
console.log(editListe([1,2,3],2,4));
*/

//-------------------------------------------------


function entierEnChaine(x){
    
    if(typeof(x)!='number'){
        console.log(`this input can't be converted`);
        return
    }
    else
        return x.toString();
}


//console.log(entierEnChaine(500));

//-------------------------------------------------

//somme tableau;
tab=[1,2,3]
let x=tab.reduce((sommeFinal,element)=>sommeFinal+element,0);
console.log(x);

//console.log(sommeTableau([0,1]))

//-------------------------------------------------
let moy=(tab.reduce((moyFinal,element)=>moyFinal+element,0))/tab.length;
console.log(moy);

//console.log(moyenneTableau([1,2,3]))

//-------------------------------------------------

T = [
    {
    id : 1,
    first:'ahmed',
    last:'ben ali',
    age : 23,
    email : 'ahmed.benali@gmail.com',
    address :'Tunis'
    },
    {
    id : 2,

    first:'aziz',
    last:'ameri',
    age : 44,
    email : 'ahmed.benali@gmail.com',
    address :'Tunis'
    },
    {
    id : 3,
    first:'khalil',
    last: 'ben lamine',
    age : 18,
    email : 'ahmed.benali@gmail.com',
    address :'Tunis'
    },
    ]

    tab=[1,3]
tab.forEach(function(element ,index,array) {
    element++
    console.log(element)
    
});



function getUserById(users,id){
    if(id>=users.length || users.length==0){
        console.log(`this id isn't found or list is empty`);
        return;
    }
    else{
        let user= users.filter(u => u.id == id );
        return user;
    }

}
//console.log(getUserById(T,7))

//-------------------------------------------------
function sortUsers(users){
    if( users.length==0){
        console.log(`this list is empty`);
        return;
    }
    else{
        users.sort((a, b) => a.age - b.age);
        return users;
        }
}
/*T=sortUsers(T);

T.forEach(element => {
console.log(element)});

*/
