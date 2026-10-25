(function () {
  "use strict";

  const menuItems = [
    {
      id: 1,
      name: "ข้าวมันไก่",
      description: "ไก่ต้มนุ่มฉ่ำ เสิร์ฟบนข้าวหุงมันหอม ๆ พร้อมน้ำจิ้มเต้าเจี้ยวรสกลมกล่อมและน้ำซุปอุ่น ๆ ที่ช่วยให้ทุกคำอร่อยขึ้น",
      image: "assets/images/khao-man-gai.jpg",
      alt: "ข้าวมันไก่ ไก่ต้มนุ่มฉ่ำ เสิร์ฟพร้อมข้าวมันหอม น้ำจิ้ม และน้ำซุป",
      price: 60,
      categoryLabel: "ข้าวจานเดียว",
      tags: ["คลาสสิก", "ไก่ฉ่ำ", "ไม่เผ็ด"]
    },
    {
      id: 2,
      name: "ข้าวกะเพราหมูสับ",
      description: "หมูสับผัดใบกะเพราหอม ๆ กับพริกและกระเทียม เสิร์ฟพร้อมข้าวสวยร้อน ๆ และไข่ดาวที่เยิ้มกลางจาน",
      image: "assets/images/pad-kra-pao.jpg",
      alt: "ข้าวกะเพราหมูสับกับไข่ดาวเยิ้ม เสิร์ฟพร้อมข้าวสวยร้อน ๆ",
      price: 65,
      categoryLabel: "ข้าวจานเดียว",
      tags: ["เผ็ดกำลังดี", "ไข่ดาว", "ยอดนิยม"]
    },
    {
      id: 3,
      name: "ข้าวผัดหมู",
      description: "ข้าวผัดเมล็ดร่วนกลิ่นกระทะหอม หมูสับนุ่ม ไข่ และผักสด พร้อมมะนาวตัดรสให้สดชื่น",
      image: "assets/images/khao-pad-moo.jpg",
      alt: "ข้าวผัดหมูเมล็ดร่วนผัดกับไข่และผักสด",
      price: 55,
      categoryLabel: "ข้าวจานเดียว",
      tags: ["กลิ่นกระทะ", "มื้อเร็ว", "ไม่เผ็ด"]
    },
    {
      id: 4,
      name: "ผัดไทยกุ้งสด",
      description: "เส้นจันทน์เหนียวนุ่มผัดซอสมะขามเปรี้ยวหวานกำลังดี พร้อมกุ้งสด ถั่วงอก และถั่วลิสงบด",
      image: "assets/images/pad-thai.jpg",
      alt: "ผัดไทยกุ้งสดเสิร์ฟพร้อมถั่วงอก ถั่วลิสง และมะนาว",
      price: 70,
      categoryLabel: "เมนูเส้น",
      tags: ["กุ้งสด", "เปรี้ยวหวาน", "เมนูคลาสสิก"]
    },
    {
      id: 5,
      name: "ก๋วยเตี๋ยวหมูน้ำใส",
      description: "เส้นเล็กนุ่มในน้ำซุปหมูรสหวานกลมกล่อม หมูสับ ลูกชิ้น และผักบุ้งลวก โรยกระเทียมเจียวหอม ๆ",
      image: "assets/images/kuay-teaw-moo.jpg",
      alt: "ก๋วยเตี๋ยวหมูน้ำใส เส้นเล็ก หมูสับ และผักบุ้งลวก",
      price: 55,
      categoryLabel: "เมนูเส้น",
      tags: ["ซดคล่อง", "ไม่เผ็ด", "น้ำใส"]
    },
    {
      id: 6,
      name: "ข้าวขาหมู",
      description: "ขาหมูพะโล้ตุ๋นเปื่อยนุ่ม เสิร์ฟราดบนข้าวสวย พร้อมผักกาดดองและน้ำจิ้มพะโล้รสเข้มข้น",
      image: "assets/images/khao-kha-moo.jpg",
      alt: "ข้าวขาหมูพะโล้ ราดบนข้าวสวย พร้อมผักกาดดองและน้ำซุป",
      price: 65,
      categoryLabel: "ข้าวจานเดียว",
      tags: ["เปื่อยนุ่ม", "พะโล้", "จัดเต็ม"]
    },
    {
      id: 7,
      name: "ข้าวหมูแดง",
      description: "หมูแดงย่างหอม ๆ ราดน้ำซอสเข้มข้นบนข้าวสวย ใส่ไข่ต้มผ่าครึ่งและแตงกวาสดเพิ่มความสดชื่น",
      image: "assets/images/khao-moo-daeng.jpg",
      alt: "ข้าวหมูแดงราดน้ำซอส พร้อมไข่ต้มและแตงกวา",
      price: 60,
      categoryLabel: "ข้าวจานเดียว",
      tags: ["หมูแดง", "น้ำราดเข้มข้น", "ไข่ต้ม"]
    },
    {
      id: 8,
      name: "ข้าวไข่เจียวหมูสับ",
      description: "ไข่เจียวฟูกรอบนอกนุ่มใน ผัดกับหมูสับหอม ๆ กินคู่ข้าวสวยร้อน ๆ อิ่มสบายท้องในราคาย่อมเยา",
      image: "assets/images/khao-khai-jiao.jpg",
      alt: "ข้าวไข่เจียวหมูสับ ไข่เจียวฟูกรอบบนข้าวสวยร้อน ๆ",
      price: 45,
      categoryLabel: "ข้าวจานเดียว",
      tags: ["ฟูกรอบ", "สายประหยัด", "มื้อง่าย"]
    },
    {
      id: 9,
      name: "ข้าวผัดกุ้ง",
      description: "ข้าวผัดสีทองหอมกลิ่นกระทะกับกุ้งสดเด้ง ๆ ไข่ และต้นหอม เสิร์ฟพร้อมมะนาวและพริกน้ำปลา",
      image: "assets/images/khao-pad-kung.jpg",
      alt: "ข้าวผัดกุ้งสีทอง พร้อมมะนาว แตงกวา และน้ำจิ้มพริก",
      price: 75,
      categoryLabel: "ข้าวจานเดียว",
      tags: ["กุ้งเด้ง", "หอมกระทะ", "สีสวย"]
    },
    {
      id: 10,
      name: "ส้มตำไทย + ไก่ย่าง",
      description: "ส้มตำไทยรสเปรี้ยวหวานเค็มเผ็ดกำลังดี เสิร์ฟกับไก่ย่างหอมมัน ข้าวเหนียว และน้ำจิ้มแจ่ว",
      image: "assets/images/som-tam-gai-yang.jpg",
      alt: "ส้มตำไทย ไก่ย่าง และข้าวเหนียวในชุดเมนูอีสาน",
      price: 95,
      categoryLabel: "ส้มตำ & ไก่ย่าง",
      tags: ["แซ่บ", "แชร์กันกิน", "ไก่ย่าง"]
    },
    {
      id: 11,
      name: "ผัดซีอิ๊วหมู",
      description: "เส้นใหญ่ผัดซีอิ๊วสีสวย หมูหมักนุ่ม คะน้าสดกรอบ และไข่ ผัดไฟแรงจนหอมกลิ่นกระทะ",
      image: "assets/images/pad-see-ew.jpg",
      alt: "ผัดซีอิ๊วหมูเส้นใหญ่ พร้อมคะน้าและไข่",
      price: 60,
      categoryLabel: "เมนูเส้น",
      tags: ["เส้นเหนียว", "ผักเยอะ", "หอมกระทะ"]
    },
    {
      id: 12,
      name: "ต้มยำกุ้ง",
      description: "ต้มยำกุ้งน้ำข้นรสเปรี้ยวเผ็ดร้อน ใส่กุ้งสด เห็ดฟาง ตะไคร้ ใบมะกรูด และพริกขี้หนู",
      image: "assets/images/tom-yum-kung.jpg",
      alt: "ต้มยำกุ้งน้ำข้นร้อน ๆ ใส่กุ้งสด เห็ดฟาง และสมุนไพรไทย",
      price: 120,
      categoryLabel: "ต้ม & ซุป",
      tags: ["เปรี้ยวเผ็ด", "กุ้งสด", "ซดร้อน ๆ"]
    }
  ];

  const fallbackImage = "assets/images/fallback-food.svg";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const pickerCard = document.getElementById("featured-card");
  const pickerImage = document.getElementById("featured-image");
  const pickerName = document.getElementById("featured-name");
  const pickerDescription = document.getElementById("featured-description");
  const pickerPrice = document.getElementById("featured-price");
  const pickerTags = document.getElementById("featured-tags");
  const pickerCounter = document.getElementById("featured-counter-current");
  const counterTotal = document.querySelector(".counter-total");
  const pickTime = document.getElementById("pick-time");
  const liveStatus = document.getElementById("live-status");
  const siteHeader = document.getElementById("site-header");
  const copyrightYear = document.getElementById("copyright-year");
  const randomButtons = Array.from(document.querySelectorAll("[data-random]"));

  if (!pickerCard || !pickerImage || !pickerName) {
    return;
  }

  const priceFormatter = new Intl.NumberFormat("th-TH");
  const timeFormatter = new Intl.DateTimeFormat("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  let currentId = menuItems[0].id;
  let isUpdating = false;

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      };
      return entities[character];
    });
  }

  function renderItem(item) {
    const index = menuItems.findIndex(function (entry) {
      return entry.id === item.id;
    });

    pickerImage.dataset.fallbackApplied = "false";
    pickerImage.src = item.image;
    pickerImage.alt = item.alt;
    pickerName.textContent = item.name;
    pickerDescription.textContent = item.description;
    pickerPrice.textContent = priceFormatter.format(item.price);
    pickerCounter.textContent = String(index + 1).padStart(2, "0");

    if (counterTotal) {
      counterTotal.textContent = "/ " + String(menuItems.length).padStart(2, "0");
    }

    pickerTags.innerHTML = [item.categoryLabel]
      .concat(item.tags)
      .map(function (tag, tagIndex) {
        const classes = tagIndex === 0 ? "tag is-category" : "tag";
        return '<span class="' + classes + '">' + escapeHtml(tag) + "</span>";
      })
      .join("");
  }

  function pickNextMenu() {
    const candidates = menuItems.filter(function (item) {
      return item.id !== currentId;
    });

    const pool = candidates.length > 0 ? candidates : menuItems;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function isCardVisible() {
    const cardRect = pickerCard.getBoundingClientRect();
    const headerHeight = siteHeader ? siteHeader.getBoundingClientRect().height : 0;

    return cardRect.top < window.innerHeight - 120 && cardRect.bottom > headerHeight + 50;
  }

  function bringCardIntoView() {
    if (isCardVisible()) {
      return;
    }

    window.setTimeout(function () {
      pickerCard.scrollIntoView({
        behavior: reduceMotion.matches ? "auto" : "smooth",
        block: "center"
      });
    }, 80);
  }

  function randomizeMenu(trigger) {
    if (isUpdating || menuItems.length === 0) {
      return;
    }

    isUpdating = true;

    if (trigger) {
      trigger.classList.add("is-shuffling");
      window.setTimeout(function () {
        trigger.classList.remove("is-shuffling");
      }, 680);
    }

    const nextItem = pickNextMenu();

    pickerCard.classList.add("is-swapping");
    pickerCard.setAttribute("aria-busy", "true");

    window.setTimeout(function () {
      try {
        currentId = nextItem.id;
        renderItem(nextItem);

        if (pickTime) {
          pickTime.textContent = "สุ่มล่าสุด " + timeFormatter.format(new Date());
        }

        if (liveStatus) {
          liveStatus.textContent = "สุ่มได้เมนู " + nextItem.name + " ราคา " + nextItem.price + " บาท";
        }

        bringCardIntoView();
      } finally {
        pickerCard.classList.remove("is-swapping");
        pickerCard.setAttribute("aria-busy", "false");
        isUpdating = false;
      }
    }, reduceMotion.matches ? 0 : 220);
  }

  /* Catches the current food photo, plus any future image in the page. */
  document.addEventListener(
    "error",
    function (event) {
      const image = event.target;

      if (!(image instanceof HTMLImageElement)) {
        return;
      }

      if (image.dataset.fallbackApplied === "true") {
        return;
      }

      image.dataset.fallbackApplied = "true";
      image.src = fallbackImage;
      image.alt = "ภาพสำรอง เนื่องจากไม่สามารถโหลดรูปภาพอาหารได้";
    },
    true
  );

  randomButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      randomizeMenu(button);
    });
  });

  if (copyrightYear) {
    copyrightYear.textContent = String(new Date().getFullYear());
  }

  function updateHeaderState() {
    if (!siteHeader) {
      return;
    }

    siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  window.addEventListener("scroll", updateHeaderState, { passive: true });
  updateHeaderState();

  /* Initial state */
  renderItem(menuItems[0]);

  if (pickTime) {
    pickTime.textContent = "พร้อมเสิร์ฟ";
  }

  function preloadMenuImages() {
    menuItems.forEach(function (item) {
      const preload = new Image();
      preload.src = item.image;
    });
  }

  window.addEventListener(
    "load",
    function () {
      window.setTimeout(preloadMenuImages, 400);
    },
    { once: true }
  );
})();
