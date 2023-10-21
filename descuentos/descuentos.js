const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const result = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const discount = Number(inputDiscount.value);

  console.log({ price, discount });

  if (!price || !discount) {
    result.innerText = `POR FAVOR LLENA EL FORMULARIO`;
    return;
  }

  if (discount > 100) {
    result.innerText = `ERROR!!! Ingrese un descuento menor a 100`;
    return;
  }

  const newPrice = (price * (100 - discount)) / 100;

  result.innerText = `El nuevo precio con descuento es $${newPrice}`;
}
