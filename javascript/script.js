const blog = document.getElementById("blog");
blog.addEventListener("click", function () {
  window.location.href = "../html/blog.html";
});

// TODO Global
document.getElementById('modalClose').addEventListener('click' , function(){
    document.getElementById('modal').classList.add('hidden')
})

function valueGet(id) {
  const value = document.getElementById(id).value;
  const numValue = parseFloat(value);
  return numValue;
}
function valueFloat(id) {
  const valuecall = document.getElementById(id).innerText;
  const numfloat = parseFloat(valuecall);
  return numfloat;
}
//

//! cart-1

const cart1 = document.getElementById("donatenow1");
cart1.addEventListener("click", function () {
  const mainBalance = valueFloat("mianBalace");
  const cart1Balance = valueFloat("cart1-Balance");
  const inputValue1 = valueGet("donateAmount1");

  const title1 = document.getElementById('title1').innerText;
  const currentDateTime = new Date();
  const time = 'Date:'+ currentDateTime.toString();

  if (mainBalance > inputValue1 || inputValue1 === Number || inputValue1 > 0) {
    const newBalance1 = cart1Balance + inputValue1;
    document.getElementById("cart1-Balance").innerText = newBalance1;

    const newMainBanalce = mainBalance - inputValue1;
    document.getElementById("mianBalace").innerText = newMainBanalce;
    document.getElementById("donateAmount1").value = "";

    document.getElementById('modal').classList.remove('hidden')

    const div = document.createElement("div");
    div.className = "bg-slate-100 border-[1px]  border-gray-300 p-4 rounded-xl"
    div.innerHTML = `
          <h1 class=" text-xl font-bold">${inputValue1} Taka is Donated For ${title1}</h1>
          <p class="font-semibold">${time}</p>
`;

    const historySection = document.getElementById("history-section");
    historySection.insertBefore(div, historySection.firstChild);
  } else {
    alert("Invalide Donated Amount");
  }
});

//*...............

//! cart-2

const cart2 = document.getElementById("donatenow2");
cart2.addEventListener("click", function () {
  const mainBalance = parseFloat(
    document.getElementById("mianBalace").innerText);
  const cart1Balance = parseFloat(
    document.getElementById("cart2-Balance").innerText);
  const inputValue2 = parseFloat(
    document.getElementById("donateAmount2").value);

    const title2 = document.getElementById('title2').innerText;
    const currentDateTime = new Date();
    const time = 'Date:'+ currentDateTime.toString();

  if (mainBalance > inputValue2 || inputValue2 === Number || inputValue2 > 0) {
    const newBalance2 = cart1Balance + inputValue2;
    document.getElementById("cart2-Balance").innerText = newBalance2;

    const newMainBanalce = mainBalance - inputValue2;
    document.getElementById("mianBalace").innerText = newMainBanalce;
    document.getElementById("donateAmount2").value = "";

    document.getElementById('modal').classList.remove('hidden')

    const div = document.createElement("div");
    div.className = "bg-slate-100 border-[1px]  border-gray-300 p-4 rounded-xl"
    div.innerHTML = `
          <h1 class=" text-xl font-bold">${inputValue2} Taka is Donated For ${title2}</h1>
          <p class="font-semibold">${time}</p>
`;
    const historySection = document.getElementById("history-section");
    historySection.insertBefore(div, historySection.firstChild);
  } 
  
  else {
    alert("Invalide Donated Amount");
  }
});

//*...............

//! cart-3

const cart3 = document.getElementById("donatenow3");
cart3.addEventListener("click", function () {
  const mainBalance = parseFloat(
    document.getElementById("mianBalace").innerText
  );
  const cart1Balance = parseFloat(
    document.getElementById("cart3-Balance").innerText
  );
  const inputValue3 = parseFloat(
    document.getElementById("donateAmount3").value
  );

  const title3 = document.getElementById('title3').innerText;
  const currentDateTime = new Date();
  const time = 'Date:'+ currentDateTime.toString();

  if (mainBalance > inputValue3 || inputValue3 === Number || inputValue3 > 0) {
    const newBalance3 = cart1Balance + inputValue3;
    document.getElementById("cart3-Balance").innerText = newBalance3;

    const newMainBanalce = mainBalance - inputValue3;
    document.getElementById("mianBalace").innerText = newMainBanalce;
    document.getElementById("donateAmount3").value = "";

    document.getElementById('modal').classList.remove('hidden')

    const div = document.createElement("div");
    div.className = "bg-slate-100 border-[1px]  border-gray-300 p-4 rounded-xl"
    div.innerHTML = `
          <h1 class=" text-xl font-bold">${inputValue3} Taka is Donated For ${title3}</h1>
          <p class="font-semibold">${time}</p>
`;
    const historySection = document.getElementById("history-section");
    historySection.insertBefore(div, historySection.firstChild);

  } else {
    alert("Invalide Donated Amount");
  }
});

//*...............

// 
const cart5 = document.getElementById("donatenow5");
cart5.addEventListener("click", function () {
  const mainBalance = parseFloat(
    document.getElementById("mianBalace").innerText
  );
  const cart5Balance = parseFloat(
    document.getElementById("cart5-Balance").innerText
  );
  const inputValue5 = parseFloat(
    document.getElementById("donateAmount5").value
  );

  const title5 = document.getElementById('title5').innerText;
  const currentDateTime = new Date();
  const time = 'Date:'+ currentDateTime.toString();
  

  if (mainBalance > inputValue5 || inputValue5 === Number || inputValue5 > 0) {
    const newBalance5 = cart5Balance + inputValue5;
    document.getElementById("cart5-Balance").innerText = newBalance5;
    const newMainBanalce = mainBalance - inputValue5;

    document.getElementById("mianBalace").innerText = newMainBanalce;
    document.getElementById("donateAmount5").value = "";

    document.getElementById('modal').classList.remove('hidden')

    const div = document.createElement("div");
    div.className = "bg-slate-100 border-[1px]  border-gray-300 p-4 rounded-xl"
    div.innerHTML = `
          <h1 class=" text-xl font-bold">${inputValue5} Taka is Donated For ${title5}</h1>
          <p class="font-semibold">${time}</p>
`;
    const historySection = document.getElementById("history-section");
    historySection.insertBefore(div, historySection.firstChild);

  } else {
    alert("Invalide Donated Amount");
  }
});

//*...............

//! History

const historyButtton = document.getElementById("history");
historyButtton.addEventListener("click", function () {
  document
    .getElementById("history")
    .classList.add(
      "bg-[#b4f461]",
      "py-2",
      "px-10",
      "rounded-lg",
      "text-black",
      "font-bold"
    );
  document
    .getElementById("donation")
    .classList.remove(
        "bg-[#b4f461]",
        "py-2",
        "px-10",
        "rounded-lg",
        "text-black",
        "font-bold"
    );
  document
    .getElementById("donation")
    .classList.add(
        "outline",
        "outline-gray-300",
        "py-2",
        "px-10",
        "rounded-lg",
        "text-black",
        "font-bold"
    );
  document.getElementById("history-section").classList.remove("hidden");
  document.getElementById("card-prt").classList.add("hidden");
});

const donateButtton = document.getElementById("donation");
donateButtton.addEventListener("click", function () {
  document
    .getElementById("history")
    .classList.remove(
      "bg-[#b4f461]",
      "py-2",
      "px-10",
      "rounded-lg",
      "text-black",
      "font-bold"
    );
  document
    .getElementById("donation")
    .classList.add(
      "bg-[#b4f461]",
      "py-2",
      "px-10",
      "rounded-lg",
      "text-black",
      "font-bold"
    );
  document
    .getElementById("history")
    .classList.add(
      "outline",
      "outline-gray-300",
      "py-2",
      "px-10",
      "rounded-lg",
      "text-black",
      "font-bold"
    );
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("card-prt").classList.remove("hidden");
});

//TODO History List
