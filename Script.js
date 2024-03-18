// Function For toggle dropdown visibility

let droplist = function (i) {
    if (i.style.display === "none") {
      i.style.display = "block";
    } else {    
      i.style.display = "none";
    }
  };
  
  let pressedBtn = document.getElementById("dropDown");
  let listElements = document.getElementById("dropElements");
  
  let pressedBtn1 = document.getElementById("dropDown1");
  let listElements1 = document.getElementById("dropElements1");
  
  let pressedBtn2 = document.getElementById("dropDown2");
  let listElements2 = document.getElementById("dropElements2");
  
  let pressedBtn3 = document.getElementById("dropDown3");
  let listElements3 = document.getElementById("dropElements3");
  
  let pressedBtn4 = document.getElementById("dropDown4");
  let listElements4 = document.getElementById("dropElements4");
  
  pressedBtn.addEventListener("click", function () {
    droplist(listElements);
  });
  
  pressedBtn1.addEventListener("click", function () {
    droplist(listElements1);
  });
  
  pressedBtn2.addEventListener("click", function () {
    droplist(listElements2);
  });
  
  pressedBtn3.addEventListener("click", function () {
    droplist(listElements3);
  });
  
  pressedBtn4.addEventListener("click", function () {
    droplist(listElements4);
  });

// Function to toggle checkbox state
let toggleCheckbox = function(checkbox) {
  checkbox.checked = !checkbox.checked;
};

// Add event listener to each checkbox
document.querySelectorAll('.checkbox').forEach(function(checkbox) {
  checkbox.addEventListener("click", function() {
    toggleCheckbox(this);
  });
});

// Select all brands functionality
document.getElementById('selectAllBrands').addEventListener('click', function() {
  var checkboxes = document.querySelectorAll('.brandCheckbox');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = this.checked;
  }, this); // Pass 'this' as the second argument to ensure it refers to the checkbox element
});

document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  let searchTerm = document.getElementById("searchInput").value.toLowerCase();
  let rows = document.querySelectorAll(".tableData tbody tr");

  // Loop through each row and hide/show based on search term
  rows.forEach(function(row) {
    let companyName = row.querySelector(".brand-Name").textContent.toLowerCase();
    if (companyName.includes(searchTerm)) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
});





  

// Function to update the count of selected brands
function updateSelectedCount() {
  var selectedCount = document.querySelectorAll('.brandCheckbox:checked').length;
  document.getElementById('selectedCountText').innerText = ' (' + selectedCount + ')';
}

// Add event listener to the checkbox beside the text "Brand"
document.getElementById('selectAllBrands').addEventListener('change', function() {
  updateSelectedCount();
});

// Add event listener to each brand checkbox
var checkboxes = document.querySelectorAll('.brandCheckbox');
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', updateSelectedCount);
});

// Update selected count on page load
updateSelectedCount();