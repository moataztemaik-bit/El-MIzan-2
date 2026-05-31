function convert() {
  const input = document.getElementById("amount").value;
  const result = document.getElementById("result");

  let value = input.replace(/[^0-9]/g, "");

  if (value) {
    let total = value * 54.33; 

    let formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EGP"
    }).format(total);

    result.textContent = formatted;
  } else {
    result.textContent = "enter the number";
  }
}
