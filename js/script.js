/*modal*/

var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

var form = popup.querySelector("form");
var names = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");


var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");


  if (storage) {
    names.value = storage;
    email.focus();
  } else {
    names.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function () {
  if (!name.value || !email.value) {
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

/*modal-map*/

var mapLink = document.querySelector(".show-modal-map");
var mapPopup = document.querySelector(".modal-map");

var close = mapPopup.querySelector(".modal-content-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

/*slider*/

// var slideIndex = 0;
// var dotIndex = 0;

// var i;
// var slides = document.querySelectorAll(".slider-wrapper");
// var dots = document.querySelectorAll(".slider-radio");

// showSlides();
// changeSlides();

// function showSlides() {


//   console.log(dots);

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   };

//   slideIndex++;

//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   };


//   for (i = 0; i < dots.length; i++) {
//     dots[i].removeAttribute("checked", "checked");
//     dots[dotIndex].setAttribute("checked", "checked");
//     console.log(dots[i]);
//   };

//   dotIndex++;

//   console.log(dotIndex);

//   if (dotIndex > dots.length - 1) {
//     dotIndex = 0;
//   };


//   slides[slideIndex - 1].style.display = "flex";

//   setTimeout(showSlides, 2000); // Change image every 2 seconds
//   debugger
// };

// function changeSlides() {
//   for (i = 0; i < dots.length; i++) {
//     if (dots[i].type == "radio" && dots[i].checked) {
//       console.log(dots[i])
//       slides[i].style.display = "flex";
//     }
//   };
// };

const intervalId = setInterval(changeSlide, 2000);

const slides = document.querySelectorAll(".slider-wrapper");
const dots = document.querySelectorAll(".slider-control");

let currentIndex = 0;

function changeSlide() {
  if (currentIndex === slides.length) {
    currentIndex = 0;
  }

  slides.forEach((slide, idx) => {
    if (idx === currentIndex) {
      slide.style.display = 'flex';
      dots[idx].classList.add('active');
    } else {

      slide.style.display = 'none';
      dots[idx].classList.remove('active');
    }
  });

  currentIndex++;
};

function removeStyle(el) {
  el.style.display = 'none';
}

function removeClass(el) {
  el.classList.remove('active');
}

dots.forEach(dot => {
  dot.addEventListener('click', evt => {
    const id = evt.target.dataset.id;

    slides.forEach(removeStyle);
    slides[id].style.display = 'flex';

    dots.forEach(removeClass);
    dots[id].classList.add('active');

  });
});
