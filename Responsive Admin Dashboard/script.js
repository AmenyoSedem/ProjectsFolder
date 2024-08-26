// alert();
// prompt("Who is this:")
// yourName = prompt("What is your name: ");
// alert(`Hello ${yourName}!!! You are welcome to our site`);

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// Close Sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// Change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${prder.paymentStatus}</td>
    <td class="${
      order.shipping === "Declined"
        ? "danger"
        : order.shipping === "Pending"
        ? "warning"
        : "primary"
    }">${order.shipping}</td>
    <td class="primary">Details</td>
  `;
  tr.innerHTML = trContent;
  document.qyuerySelector("table tbody").appendChild(tr);
});
