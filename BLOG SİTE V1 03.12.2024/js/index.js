// var name = 'murat';
// var age = 26;

// function go(name,age){
//     alert(name);
//     alert(age);
// }
// go('murat',26);
// go('mete',35);

// var name = prompt();

// function add(first,second){
//     return first+second    
// }
// var sum = add(3,4);
// alert(add(3,4));

// function go(name,age){
//     if(age<20){
//         return name + ' küçük';    
//     }
//     else{
//         return name + ' büyüktür';
//     }
// }
// alert(go('murat',19));

// recursion javascript

let countDownFrom = (num) => {
    if (num < 0) return;
    console.log(num)
    countDownFrom(num - 1)
}
countDownFrom(10)


let categories = [
    { id: 'animals', 'parent': null },
    { id: 'mamals', 'parent': 'animals' },
    { id: 'cats,', 'parent': 'mamals' },
    { id: 'dogs,', 'parent': 'mamals' },
    { id: 'labrador,', 'parent': 'dogs' },
    { id: 'husky,', 'parent': 'dogs' },
    { id: 'persian,', 'parent': 'cats' },
    { id: 'exotix,', 'parent': 'cats' },
]
// animals :{
//     mamals:{
//         dogs:{
//             labrador:null
//             husk:null
//         };
//         cats:{
//             persian:null
//             exotix:null
//         }
//     }
// }


// let makeTree = (categories, parent=null) =>{
//     let node= {}
//     categories
//     .filter(x=>x.parent === parent)
//     .forEach(x => {
//         node[x.id]=makeTree(categories, x.id)
//     });
//     return node
// }
// console.log(
//     JSON.stringify(
//         makeTree(categories),
//         null,
//         2)

// );

function go() {
    console.log(arguments);

}
go(1, 2, 3)
consoleArguments(1, 2, 3, 4, 5, 6)
function consoleArguments() {
    for (i = 0; i < arguments.length; i++) {
        console.log("argüman" + (i + 1) + "=" + arguments[i])
    }

}
let meyve = ['banana', 'berry'];
meyve.push('cherry');
console.log(meyve);
meyve.pop();
console.log(meyve);


var obj = {};
obj.name = "ülker holding";
var ogrenci = new Object();
ogrenci["ad"] = "murat";
ogrenci["yas"] = 26;
console.log(ogrenci["ad"]);
console.log(ogrenci["yas"]);

// var arr = [1,"mete", 12,"osman"];
// var aet =0;
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// var arr =[
//     [1,3,5],
//     [2,4,6]    
// ];
// alert(arr[0][1]);

// var arr=[1,2,-5,80,120];
// var index=arr.indexOf(80);
// console.log(index);

// var arr=[12,45,-3,82,12,78,12,45,82];
// var counter =0;
// var index = arr.indexOf(12);
// while(index !=-1){
//     counter++;
//     index= arr.indexOf(12, index+1);
// }
// alert(index);

// var index =  arr.lastIndexOf(12);
// console.log(index);

// var index= arr.lastIndexOf(12);
// while(index !=-1){
//     counter++;
//     if (index==0)
//         break;
//     index=arr.lastIndexOf(12,index-1);
// }
// console.log(counter);

// var array=[10,1,20,21,30,3,2,15,28,37,100];

// function compareFunc(a,b){
//     if(a>b)
//         return 1;
//     else if (b>a)
//         return -1;
//     else
//     return 0;
// }
// array.sort(compareFunc);
// console.log(array);

// var icecek = "kola, kavhe , çay";
// var array = icecek.split(',');
// console.log(array[0]);

// var array =["kola", "kahve", "çay"];
// var str = array.join();
// console.log(str);

// var str ="murat\narpacıoğlu";
// var str2="osman";
// var toplam = str +"ve"+str2;
// console.log(toplam);
// console.log(str.length);
// var upperstr = str.toUpperCase();
// console.log(upperstr);

// var str3 = " mete mete mete osman murat berk  mete osman murat berk berkn berk";
// var bull = "mete";
// içinde kaç tane osman geçiyo bul

// var yenistr =str2.substring(1,3);
// alert(yenistr);

// var str =" me ";
// var str2=" te ";
// var str3 =str.trim()+ str2.trim();
// console.log(str3);
// var str4="merhaba js";
// var str5= str4.replace("js","dünya");
// console.log(str5);
// str6="Mavi gök yüzündeki mavi kuşlar mavi denizlerde uçuyor."
// // str7=str6.replace(/mavi/g, "yeşil");
// str7=str6.replace(/mavi/gi, "yeşil");
// console.log(str7);

var d1 = new Date();
console.log(d1.toDateString());
console.log(d1.toUTCString());

var d2 = new Date(2018, 1, 3, 42, 43, 23, 23);
console.log(d2.toString());

var d3 = new Date(929397621000);
console.log(d3.toString());

var d4 = new Date("03/10/1998");

console.log(d4.getDay()); 
d4.setFullYear(2024);
console.log(d4.toString());

function getMonthNameFromNumber(monthNumber){
    var monthName=[
        "ocak","şubat","mart","nisan","mayıs","haziran","temmuz","ağutos","eylül","ekim","kasım","aralık"
    ]
    return monthName[monthNumber];
}
var monthName=getMonthNameFromNumber(new Date(1990,0,14,11,20,0,0).getMonth());
document.write(monthName);

var dateOfBirth =new Date("january 13, 1980 11:20:00");
var monthNumber =dateOfBirth.getMonth();
document.write(monthNumber);

// let ogrenciler = {
//     ad : "Murat",
//     soyad : "Arpacıoğlu",
//     dogumTarihi:'10/02/1998',
//     bilgiGöster : function(){
//         document.getElementById('ögrenciler').innerHTML="Öğrenci adı - soyadı : "+ this.ad+' '+this.soyad;
//     },
//     yasGöster: function(){
//         const fark =Date.now() - Date.parse(this.dogumTarihi);
//         const ÖğrenciYasi = Math.floor(fark/(365*24*60*60*1000));
//         document.getElementById('öğrenciYasi').innerHTML =(this.ad+' '+this.soyad+' şu anda '+ÖğrenciYasi+' yaşında.');
//     }

// };
// ogrenciler.bilgiGöster();
// ogrenciler.yasGöster();

function kisiler(ad, soyad, doğumTarihi){
    this.ad =ad;
    this.soyad=soyad;
    this.doğumTarihi=doğumTarihi;
    this.bilgiGöster= function(){
        document.getElementById('ögrenciler').innerHTML="Öğrenci adı - soyadı : "+ this.ad+' '+this.soyad;
    },
    this.yasGöster= function(){
        const fark =Date.now() - Date.parse(this.doğumTarihi);
        const ÖğrenciYasi = Math.floor(fark/(365*24*60*60*1000));
        document.getElementById('öğrenciYasi').innerHTML =(this.ad+' '+this.soyad+' şu anda '+ÖğrenciYasi+' yaşında.');
    }
}
let murat = new kisiler('murat','arpacıoğlu','10/02/1998');
murat.bilgiGöster();
murat.yasGöster();

function Otel(name, şehir, yıldız, odaSayisi, rezerveOda){
    this.name=name;
    this.şehir=şehir;
    this.yıldız=yıldız;
    this.odaSayisi=odaSayisi;
    this.rezerveOda=rezerveOda;
    this.bosOda= function(){
        return this.odaSayisi-this.rezerveOda;
    }
    this.musaitlikOranı = function(){
        return Math.floor(this.bosOda()/(this.odaSayisi)*100) + ' % ';
    }
}

let Anemon = new Otel('Anemon','Denizli',4,100,26),
Dedaman= new Otel('Club Dedeman','Denizli',5,150,59),
Montebello= new Otel('Montebello','Muğla',5,300,250);
document.getElementById('Otel1').innerHTML='Anemeon '+Anemon.yıldız+ ' yıldızlı otelin '+ Anemon.bosOda()+' '+Anemon.musaitlikOranı();

class otelYönetimi{
    Otel(name, şehir, yıldız, odaSayisi, rezerveOda){
        this.name=name;
        this.şehir=şehir;
        this.yıldız=yıldız;
        this.odaSayisi=odaSayisi;
        this.rezerveOda=rezerveOda;
        this.bosOda= function(){
            return this.odaSayisi-this.rezerveOda;
        }
        this.musaitlikOranı = function(){
            return Math.floor(this.bosOda()/(this.odaSayisi)*100) + ' % ';
        }
    }
}
class insanlar{
    #id
    constructor(ad, soyad, doğumTarihi){
        this.ad=ad;
        this.soyad=soyad;
        this.doğumTarihi=doğumTarihi;
        this.#id = Math.floor(Math.random()*100);
    } 
    get id() {
        return this.#id;
    }
}
let Görkem = new insanlar('görkem','demirkol','04/19/2000');
console.log(Görkem);

class teacher extends insanlar{
    constructor(ad, soyad, doğumTarihi, subjects = []){
        super (ad, soyad, doğumTarihi);
        this.subjects=subjects;
    }
    showSubjects(){
        console.log(this.ad+' '+this.soyad+' derse girecek. '+this.subjects.join(' ,'));
    }

}
const meteB= new teacher('Mete', 'BAŞKAFA', '14/06/1990', ['yazılım', 'matematik'] );

// class It extends teacher{
//     constructor(ad, soyad, doğumTarihi, subjects=[], kıdem){
//         super (ad, soyad, doğumTarihi, subjects = []);
//         this.kıdem= kıdem;
//     }
//     kıdemGöster(){
//         console.log(this.ad+' '+this.soyad+ ' ' +this.kıdem +' seviyesine sahiptir. ');
//     }
// }
// const Osman = new It('Osman', 'Şenel', '01/04/1992', ['css', 'html', 'js'],'Kıdemsiz');
// Osman.showSubjects();
// Osman.kıdemGöster();
// console.log(Osman);

class It extends teacher{
    constructor(ad, soyad, doğumTarihi, subjects=[], kıdem){
        super (ad, soyad, doğumTarihi, subjects =[]);
        this.kıdem= kıdem;
    }
    showSubjects(){
        console.log(this.ad+' '+this.soyad+ 'ile birlikte bt derslerini öğrenebilirsiniz.' + this.subjects.join(',') );
        document.write('<p>' + this.ad + ' ' + this.soyad + '</p><li>' + this.subjects.join('</li><li>') + '</li>');
             
         
    }
}
const Osman = new It('Osman', 'Şenel', '01/04/1992', ['css', 'html', 'js'],'Kıdemsiz');
Osman.showSubjects();

console.log(Osman instanceof insanlar);



