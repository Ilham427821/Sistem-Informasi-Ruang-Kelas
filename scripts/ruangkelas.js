document.addEventListener("DOMContentLoaded", function () {
  // Hide all rooms initially
  hideAllRooms();

  // Show theoretical building rooms by default
  showTheoreticalBuilding();
});

function hideAllRooms() {
  const allRooms = document.querySelectorAll(".class-box");
  allRooms.forEach((room) => (room.style.display = "none"));
}

function showTheoreticalBuilding() {
  hideAllRooms();
  const theoreticalRooms = document.querySelectorAll(".class-box.theoretical");
  theoreticalRooms.forEach((room) => (room.style.display = "block"));
}

function showLaboratoryBuilding() {
  hideAllRooms();
  const laboratoryRooms = document.querySelectorAll(".class-box.laboratory");
  laboratoryRooms.forEach((room) => (room.style.display = "block"));
}
