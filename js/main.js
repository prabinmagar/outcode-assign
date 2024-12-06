document.addEventListener('DOMContentLoaded', function () {
  // ANNOUNCEMENT BAR 
  const announcementBar = document.querySelector(".announcement-bar");
  const closeAnnouncementBtn = document.querySelector(".close-announcement-btn");

  closeAnnouncementBtn.addEventListener("click", () => {
    announcementBar.style.display = "none";
  });

  // LARGE NAV MENU SHOW/HIDE FEATURE
  const navItems = document.querySelectorAll(".lg-nav-list .nav-item:not(.no-megamenu)");
  const megaMenuBlocks = document.querySelectorAll(".megamenu-block");
  const navMegaMenu = document.querySelector(".nav-megamenu");
  const navbarWrapper = document.querySelector('.navbar-wrapper');

  const resetMegaMenu = () => {
    navItems.forEach((navItem) => {
      navItem.querySelector(".nav-link-text").classList.remove("bg-alice-blue");
    });
    megaMenuBlocks.forEach((megaMenuBlock) => {
      megaMenuBlock.classList.add("hide");
    });
    navMegaMenu.classList.add("hide");
  };

  navItems.forEach((navItem, index) => {
    navItem.addEventListener("mouseenter", () => {
      resetMegaMenu();
      navItem.querySelector(".nav-link-text").classList.add("bg-alice-blue");
      megaMenuBlocks[index].classList.remove("hide");
      navMegaMenu.classList.remove("hide");
    });
  });

  navbarWrapper.addEventListener("mouseleave", () => {
    if (window.innerWidth >= 991.98) {
      resetMegaMenu()
    }
  });
  navMegaMenu.addEventListener("mouseleave", () => {
    if (window.innerWidth >= 991.98) {
      resetMegaMenu();
    }
  });

  // SMALL NAV MENU TOGGLE FEATURE
  const smNavItems = document.querySelectorAll(".sm-nav-list .nav-item:not(.no-overlay-submenu)");

  const resetMegaMenuSm = () => {
    megaMenuBlocks.forEach((megaMenuBlock) => {
      megaMenuBlock.classList.add("hide");
    });
    navMegaMenu.classList.add("hide");
  };

  const handleClick = (index) => {
    const megaMenuBlock = megaMenuBlocks[index];

    if (megaMenuBlock.classList.contains("hide")) {
      resetMegaMenuSm();
      megaMenuBlock.classList.remove("hide");
      navMegaMenu.classList.remove("hide");
    } else {
      megaMenuBlock.classList.add("hide");
      navMegaMenu.classList.add("hide");
    }
  };

  smNavItems.forEach((navItem, index) => {
    navItem.addEventListener("click", (e) => {
      const megaMenuBlock = megaMenuBlocks[index];
      if (megaMenuBlock && megaMenuBlock.classList.contains("hide")) {
        e.preventDefault();
      }

      handleClick(index);
    });
  });

  const smNavList = document.querySelector(".sm-nav-list");
  const smNavOpenBtn = document.querySelector(".nav-open-btn");
  const smNavCloseBtn = document.querySelector(".nav-close-btn");
  const megamenuCloseBtns = document.querySelectorAll(".megamenu-close-btn");
  const megamenuBackBtns = document.querySelectorAll(".megamenu-back-btn");
  const smMegamenuFeatured = document.querySelector('.sm-megamenu-featured');

  smNavOpenBtn.addEventListener("click", () => {
    smNavList.classList.add("show");
    smNavCloseBtn.classList.add("show");
    smNavOpenBtn.classList.add("hide");
    smMegamenuFeatured.classList.remove("hide");
  });

  smNavCloseBtn.addEventListener("click", () => {
    smNavList.classList.remove("show");
    smNavCloseBtn.classList.remove("show");
    smNavOpenBtn.classList.remove("hide");
    smMegamenuFeatured.classList.add("hide");
  });

  megamenuCloseBtns.forEach(megamenuCloseBtn => {
    megamenuCloseBtn.addEventListener("click", () => {
      smNavCloseBtn.classList.remove("show");
      smNavOpenBtn.classList.remove("hide");
      megaMenuBlocks.forEach((megaMenuBlock) => {
        megaMenuBlock.classList.add("hide");
      });
      smNavList.classList.remove("show");
      smMegamenuFeatured.classList.add("hide");
    });
  });

  megamenuBackBtns.forEach(megamenuBackBtn => {
    megamenuBackBtn.addEventListener('click', () => {
      resetMegaMenuSm();
    });
  })
})

$(".featured-slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  variableWidth: true,
  prevArrow:
    '<button type="button" class="slick-prev"><img class="slick-disabled-arrow" src="./assets/icons/caret_light.svg" alt="Previous"><img class="slick-enabled-arrow" src="./assets/icons/caret_dark.svg" alt="Previous"></button>',
  nextArrow:
    '<button type="button" class="slick-next"><img class="slick-disabled-arrow" src="./assets/icons/caret_light.svg" alt="Previous"><img class="slick-enabled-arrow" src="./assets/icons/caret_dark.svg" alt="Previous"></button>',
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.screenY > 0) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const timeButtons = document.querySelectorAll(".time-btn");
  const timeLists = document.querySelectorAll(".time-list");

  if (timeButtons.length === 0 || timeLists.length === 0) {
    console.error("No .time-btn or .time-list elements found!");
    return;
  }

  const handleTabSwitch = (index) => {
    timeButtons.forEach((btn) => btn.classList.remove("active"));
    timeLists.forEach((list) => list.classList.remove("active"));

    timeButtons[index]?.classList.add("active");
    timeLists[index]?.classList.add("active");
  };

  timeButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => handleTabSwitch(index));
  });

  handleTabSwitch(0);
});



