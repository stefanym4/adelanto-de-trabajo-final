//algoritmo con un condicional, ciclo y función.
//aplicar codigo de descuento y hacer la operación
for (let i=1;i<=5;i++){
    let Codigo= prompt("ingresa código de descuento");

    if(Codigo==543){
       alert("bienvenido a la promoción de un bono de 300");
       break;
       }
       else{
           alert("este código no es valido"); } }


function AplicarDescuento(precio){
   let descuento= precioArti - 300;
   alert("el precio total con descuento es $"+ descuento)

}
let precioArti=parseFloat(prompt("ingresa precio del articulo"));
AplicarDescuento(precioArti);


const productos =[
    {nombre: 'jabon con ph neutro', precio:520},
    {nombre:'crema hidratant', precio:780 },
    {nombre:'contorno de ojos', precio:600 },
    {nombre:'serum de vitamina c', preio:580 },
   
]
 
let carrito=[]

let seleccion = prompt("deseas adquirir algun producto si o no")

while (seleccion != "si" && seleccion !="no"){
    alert( "por favor ingresa si o no")
    sleccion= prompt ("hola deseas comprar algo si o no")
}
if(seleccion=="si"){
    alert(" a continuación una lista de nuestros productos ")

let nuestrosProductos=productos.map( (producto)=producto.nombre + " " + producto.precio +"$");
alert(todoslosproductos.join(" - "))
} else if (seleccion =="no"){
    alert("gracias por venir, vuelva pronto!!" )
}
