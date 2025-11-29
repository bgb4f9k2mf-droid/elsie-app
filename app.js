console.log("Elsie App Loaded");

function trackActivity(page) {
    localStorage.setItem("currentPage", page);
}

document.getElementById("assistant").onclick = () => {
    alert("Hi! I'm your helper 💜");
};
