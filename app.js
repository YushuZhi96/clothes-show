const tabButtons = document.querySelectorAll("[data-tab-target]");
const navTabs = document.querySelectorAll(".tabbar .tab");
const views = document.querySelectorAll(".view");
const wardrobeGrid = document.querySelector("#wardrobeGrid");
const emptyWardrobe = document.querySelector("#emptyWardrobe");
const emptyWardrobeTitle = document.querySelector("#emptyWardrobeTitle");
const emptyWardrobeCopy = document.querySelector("#emptyWardrobeCopy");
const wardrobeSearch = document.querySelector("#wardrobeSearch");
const clearWardrobeSearch = document.querySelector("#clearWardrobeSearch");
const importSheet = document.querySelector("#importSheet");
const clothingFile = document.querySelector("#clothingFile");
const uploadPreview = document.querySelector("#uploadPreview");
const openCropper = document.querySelector("#openCropper");
const applyWhiteBg = document.querySelector("#applyWhiteBg");
const cropPanel = document.querySelector("#cropPanel");
const cropStage = document.querySelector("#cropStage");
const cropImage = document.querySelector("#cropImage");
const cropScale = document.querySelector("#cropScale");
const resetCrop = document.querySelector("#resetCrop");
const applyCrop = document.querySelector("#applyCrop");
const itemName = document.querySelector("#itemName");
const itemCategory = document.querySelector("#itemCategory");
const itemScene = document.querySelector("#itemScene");
const itemSeason = document.querySelector("#itemSeason");
const saveImport = document.querySelector("#saveImport");
const toast = document.querySelector("#toast");
const detailName = document.querySelector("#detailName");
const detailImage = document.querySelector("#detailImage");
const detailTags = document.querySelector("#detailTags");
const detailSuggestion = document.querySelector("#detailSuggestion");
const tagEditToggle = document.querySelector("#tagEditToggle");
const tagEditor = document.querySelector("#tagEditor");
const customTagInput = document.querySelector("#customTagInput");
const addCustomTag = document.querySelector("#addCustomTag");

const wardrobeItems = [
  {
    id: "red-jacket",
    name: "红色短外套",
    meta: "街头 · 春秋",
    primaryCategory: "上衣",
    subCategory: "外套",
    scene: "街头",
    season: "春秋",
    color: "红色",
    tags: ["上衣", "外套", "红色", "春秋", "街头", "复古", "运动"],
    imageUrl: "assets/clothes/realistic/red-jacket.png",
  },
  {
    id: "denim-pants",
    name: "牛仔直筒裤",
    meta: "日常 · 四季",
    primaryCategory: "下装",
    subCategory: "牛仔裤",
    scene: "日常",
    season: "四季",
    color: "牛仔蓝",
    tags: ["下装", "牛仔裤", "牛仔蓝", "四季", "日常", "休闲"],
    imageUrl: "assets/clothes/realistic/denim-pants.png",
  },
  {
    id: "pink-tee",
    name: "粉色短袖",
    meta: "校园 · 夏季",
    primaryCategory: "上衣",
    subCategory: "T恤",
    scene: "校园",
    season: "夏季",
    color: "粉色",
    tags: ["上衣", "T恤", "粉色", "夏季", "校园", "休闲"],
    imageUrl: "assets/clothes/realistic/pink-tee.png",
  },
  {
    id: "blue-skirt",
    name: "蓝色半裙",
    meta: "约会 · 春夏",
    primaryCategory: "下装",
    subCategory: "半裙",
    scene: "约会",
    season: "春夏",
    color: "蓝色",
    tags: ["下装", "半裙", "蓝色", "春夏", "约会", "甜酷"],
    imageUrl: "assets/clothes/realistic/blue-skirt.png",
  },
  {
    id: "yellow-sneakers",
    name: "黄色球鞋",
    meta: "校园 · 四季",
    primaryCategory: "鞋包",
    subCategory: "球鞋",
    scene: "校园",
    season: "四季",
    color: "黄色",
    tags: ["鞋包", "球鞋", "黄色", "四季", "校园", "运动"],
    imageUrl: "assets/clothes/realistic/yellow-sneakers.png",
  },
  {
    id: "green-bag",
    name: "绿色手提包",
    meta: "派对 · 春夏",
    primaryCategory: "鞋包",
    subCategory: "手提包",
    scene: "派对",
    season: "春夏",
    color: "绿色",
    tags: ["鞋包", "手提包", "绿色", "春夏", "派对", "复古"],
    imageUrl: "assets/clothes/realistic/green-bag.png",
  },
];

let importedImageUrl = "";
let originalImageUrl = "";
let cropImageElement = null;
let cropState = {
  x: 0,
  y: 0,
  scale: 1,
  baseScale: 1,
  isDragging: false,
  startX: 0,
  startY: 0,
  startCropX: 0,
  startCropY: 0,
};
let selectedColor = "black";
let activeWardrobeFilter = "全部";
let wardrobeSearchQuery = "";
let activeItemIndex = null;
let isEditingTags = false;

const colorArtMap = {
  black: "color-black",
  white: "color-white",
  gray: "color-gray",
  red: "color-red",
  pink: "color-pink",
  orange: "color-orange",
  yellow: "color-yellow",
  green: "color-green",
  blue: "color-blue",
  purple: "color-purple",
  brown: "color-brown",
  denim: "color-denim",
  multi: "color-multi",
  pattern: "color-pattern",
};

function showView(target) {
  views.forEach((view) => {
    view.classList.toggle("active", view.dataset.view === target);
    if (view.dataset.view === target) {
      view.scrollTop = 0;
    }
  });

  navTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tabTarget === target);
  });
}

function getVisibleWardrobeItems() {
  const normalizedQuery = wardrobeSearchQuery.trim().toLowerCase();

  return wardrobeItems
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => {
      if (activeWardrobeFilter === "全部") {
        return true;
      }

      return item.primaryCategory === activeWardrobeFilter;
    })
    .filter(({ item }) => {
      if (!normalizedQuery) {
        return true;
      }

      return getSearchText(item).includes(normalizedQuery);
    });
}

function getSearchText(item) {
  return [
    item.name,
    item.meta,
    item.primaryCategory,
    item.subCategory,
    item.scene,
    item.season,
    item.color,
    ...(item.tags || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function renderWardrobe() {
  const visibleItems = getVisibleWardrobeItems();

  wardrobeGrid.innerHTML = visibleItems
    .map(({ item, index }) => {
      const image = item.imageUrl
        ? `<div class="cloth-art imported"><img src="${item.imageUrl}" alt="${item.name}" /></div>`
        : `<div class="cloth-art ${item.artClass}"></div>`;

      return `
        <article class="wardrobe-card" role="button" tabindex="0" data-item-index="${index}">
          ${image}
          <h2>${item.name}</h2>
          <p>${item.meta}</p>
        </article>
      `;
    })
    .join("");

  const isEmpty = visibleItems.length === 0;
  emptyWardrobe.classList.toggle("show", isEmpty);

  if (isEmpty && wardrobeSearchQuery.trim()) {
    emptyWardrobeTitle.textContent = "没有找到匹配衣物";
    emptyWardrobeCopy.textContent = `试试换个关键词，或清空“${wardrobeSearchQuery.trim()}”。`;
  } else {
    emptyWardrobeTitle.textContent = "这个分类还空着";
    emptyWardrobeCopy.textContent = "先导入一件，给衣橱添点新素材。";
  }
}

function openItemDetail(index) {
  const item = wardrobeItems[index];
  if (!item) {
    return;
  }

  activeItemIndex = index;
  setTagEditing(false);
  detailName.textContent = item.name;
  renderDetailTags(item);
  detailSuggestion.textContent = `${item.name}适合${item.scene || "日常"}场景，可以和高对比色单品一起做一套更有玩乐感的搭配。`;

  detailImage.innerHTML = item.imageUrl
    ? `<img src="${item.imageUrl}" alt="${item.name}" />`
    : `<div class="cloth-art ${item.artClass}"></div>`;

  showView("item-detail");
}

function getItemTags(item) {
  return [...new Set([item.primaryCategory, item.subCategory, ...(item.tags || [])].filter(Boolean))];
}

function renderDetailTags(item) {
  detailTags.classList.toggle("tag-editing", isEditingTags);
  detailTags.innerHTML = getItemTags(item)
    .map(
      (tag) => `
        <button class="detail-tag" type="button" data-detail-tag="${tag}">
          <span>${tag}</span>
          <span class="remove-tag" aria-hidden="true">×</span>
        </button>
      `
    )
    .join("");
}

function setTagEditing(nextState) {
  isEditingTags = nextState;
  tagEditToggle.textContent = isEditingTags ? "完成" : "编辑";
  tagEditor.classList.toggle("show", isEditingTags);
  tagEditor.setAttribute("aria-hidden", String(!isEditingTags));
  detailTags.classList.toggle("tag-editing", isEditingTags);

  if (!isEditingTags) {
    customTagInput.value = "";
  }
}

function addTagToActiveItem(tag) {
  const item = wardrobeItems[activeItemIndex];
  const normalizedTag = tag.trim();

  if (!item || !normalizedTag) {
    return;
  }

  item.tags = getItemTags(item).includes(normalizedTag)
    ? item.tags || []
    : [...(item.tags || []), normalizedTag];

  renderDetailTags(item);
  renderWardrobe();
  customTagInput.value = "";
}

function removeTagFromActiveItem(tag) {
  const item = wardrobeItems[activeItemIndex];
  if (!item) {
    return;
  }

  const protectedTags = [item.primaryCategory, item.subCategory].filter(Boolean);
  if (protectedTags.includes(tag)) {
    showToast("主分类不能删除");
    return;
  }

  item.tags = (item.tags || []).filter((itemTag) => itemTag !== tag);
  renderDetailTags(item);
}

function getCategoryPair(selectedCategory) {
  if (selectedCategory === "外套") {
    return {
      primaryCategory: "上衣",
      subCategory: "外套",
    };
  }

  return {
    primaryCategory: selectedCategory,
    subCategory: selectedCategory,
  };
}

function openImportSheet() {
  showView("wardrobe");
  importSheet.classList.add("open");
  importSheet.setAttribute("aria-hidden", "false");
}

function closeImportSheet() {
  importSheet.classList.remove("open");
  importSheet.setAttribute("aria-hidden", "true");
  hideCropPanel();
}

function resetImportForm() {
  importedImageUrl = "";
  originalImageUrl = "";
  cropImageElement = null;
  selectedColor = "black";
  clothingFile.value = "";
  itemName.value = "新导入单品";
  itemCategory.value = "上衣";
  itemScene.value = "校园";
  itemSeason.value = "春夏";
  uploadPreview.classList.remove("has-image");
  uploadPreview.innerHTML = `
    <span class="upload-plus">+</span>
    <span>选择照片</span>
  `;
  openCropper.disabled = true;
  applyWhiteBg.disabled = true;
  applyWhiteBg.classList.remove("processing");
  applyWhiteBg.textContent = "换白底";
  hideCropPanel();
  document.querySelectorAll("[data-color]").forEach((colorButton) => {
    colorButton.classList.toggle("selected", colorButton.dataset.color === selectedColor);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1600);
}

function showImagePreview(imageUrl) {
  uploadPreview.classList.add("has-image");
  uploadPreview.innerHTML = `<img src="${imageUrl}" alt="导入衣服预览" />`;
}

function hideCropPanel() {
  cropPanel.classList.remove("show");
  cropPanel.setAttribute("aria-hidden", "true");
}

function openCropPanel() {
  if (!originalImageUrl) {
    return;
  }

  cropPanel.classList.add("show");
  cropPanel.setAttribute("aria-hidden", "false");
  cropImage.src = originalImageUrl;
  loadCropImage(originalImageUrl);
}

function loadCropImage(imageUrl) {
  const image = new Image();
  image.onload = () => {
    cropImageElement = image;
    resetCropState();
    updateCropImageTransform();
  };
  image.src = imageUrl;
}

function resetCropState() {
  const stageRect = cropStage.getBoundingClientRect();
  const cropSize = stageRect.width - 48;
  const baseScale = Math.max(cropSize / cropImageElement.width, cropSize / cropImageElement.height);

  cropState.x = 0;
  cropState.y = 0;
  cropState.baseScale = baseScale;
  cropState.scale = 1;
  cropScale.value = "1";
}

function updateCropImageTransform() {
  if (!cropImageElement) {
    return;
  }

  const displayWidth = cropImageElement.width * cropState.baseScale * cropState.scale;
  const displayHeight = cropImageElement.height * cropState.baseScale * cropState.scale;

  cropImage.style.width = `${displayWidth}px`;
  cropImage.style.height = `${displayHeight}px`;
  cropImage.style.transform = `translate(calc(-50% + ${cropState.x}px), calc(-50% + ${cropState.y}px))`;
}

function getPointFromEvent(event) {
  const pointer = event.touches ? event.touches[0] : event;
  return {
    x: pointer.clientX,
    y: pointer.clientY,
  };
}

function startCropDrag(event) {
  if (!cropImageElement) {
    return;
  }

  const point = getPointFromEvent(event);
  cropState.isDragging = true;
  cropState.startX = point.x;
  cropState.startY = point.y;
  cropState.startCropX = cropState.x;
  cropState.startCropY = cropState.y;
}

function moveCropDrag(event) {
  if (!cropState.isDragging) {
    return;
  }

  event.preventDefault();
  const point = getPointFromEvent(event);
  cropState.x = cropState.startCropX + point.x - cropState.startX;
  cropState.y = cropState.startCropY + point.y - cropState.startY;
  updateCropImageTransform();
}

function endCropDrag() {
  cropState.isDragging = false;
}

function applyCropToPreview() {
  if (!cropImageElement) {
    return;
  }

  const stageRect = cropStage.getBoundingClientRect();
  const cropInset = 24;
  const cropSize = stageRect.width - cropInset * 2;
  const outputSize = 900;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const renderScale = cropState.baseScale * cropState.scale;
  const imageDisplayWidth = cropImageElement.width * renderScale;
  const imageDisplayHeight = cropImageElement.height * renderScale;
  const imageLeft = stageRect.width / 2 + cropState.x - imageDisplayWidth / 2;
  const imageTop = stageRect.height / 2 + cropState.y - imageDisplayHeight / 2;
  const sourceX = (cropInset - imageLeft) / renderScale;
  const sourceY = (cropInset - imageTop) / renderScale;
  const sourceSize = cropSize / renderScale;

  canvas.width = outputSize;
  canvas.height = outputSize;
  context.fillStyle = "#fff8e8";
  context.fillRect(0, 0, outputSize, outputSize);
  context.drawImage(
    cropImageElement,
    sourceX,
    sourceY,
    sourceSize,
    sourceSize,
    0,
    0,
    outputSize,
    outputSize
  );

  importedImageUrl = canvas.toDataURL("image/jpeg", 0.9);
  showImagePreview(importedImageUrl);
  originalImageUrl = importedImageUrl;
  hideCropPanel();
  showToast("已应用裁剪");
}

function applyWhiteBackground() {
  if (!importedImageUrl) {
    return;
  }

  applyWhiteBg.disabled = true;
  applyWhiteBg.classList.add("processing");
  applyWhiteBg.textContent = "处理中";

  window.setTimeout(() => {
    const image = new Image();
    image.onload = () => {
      const outputSize = 900;
      const padding = 72;
      const drawableSize = outputSize - padding * 2;
      const scale = Math.min(drawableSize / image.width, drawableSize / image.height);
      const width = image.width * scale;
      const height = image.height * scale;
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = outputSize;
      canvas.height = outputSize;
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, outputSize, outputSize);
      context.drawImage(image, (outputSize - width) / 2, (outputSize - height) / 2, width, height);

      importedImageUrl = canvas.toDataURL("image/jpeg", 0.92);
      originalImageUrl = importedImageUrl;
      showImagePreview(importedImageUrl);
      hideCropPanel();
      applyWhiteBg.disabled = false;
      applyWhiteBg.classList.remove("processing");
      applyWhiteBg.textContent = "换白底";
      showToast("已换白底");
    };

    image.src = importedImageUrl;
  }, 650);
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tabTarget;
    if (target) {
      showView(target);
    }
  });
});

document.querySelectorAll("[data-import-open]").forEach((button) => {
  button.addEventListener("click", openImportSheet);
});

document.querySelectorAll("[data-wardrobe-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    activeWardrobeFilter = button.dataset.wardrobeFilter;
    document.querySelectorAll("[data-wardrobe-filter]").forEach((filterButton) => {
      filterButton.classList.toggle("selected", filterButton === button);
    });
    renderWardrobe();
  });
});

wardrobeSearch.addEventListener("input", () => {
  wardrobeSearchQuery = wardrobeSearch.value;
  wardrobeSearch.closest(".search-box").classList.toggle("has-query", Boolean(wardrobeSearchQuery.trim()));
  renderWardrobe();
});

clearWardrobeSearch.addEventListener("click", () => {
  wardrobeSearch.value = "";
  wardrobeSearchQuery = "";
  wardrobeSearch.closest(".search-box").classList.remove("has-query");
  renderWardrobe();
});

document.querySelectorAll("[data-import-close]").forEach((button) => {
  button.addEventListener("click", closeImportSheet);
});

importSheet.addEventListener("click", (event) => {
  if (event.target === importSheet) {
    closeImportSheet();
  }
});

document.querySelectorAll("[data-color]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedColor = button.dataset.color;
    document.querySelectorAll("[data-color]").forEach((colorButton) => {
      colorButton.classList.toggle("selected", colorButton === button);
    });
  });
});

tagEditToggle.addEventListener("click", () => {
  const item = wardrobeItems[activeItemIndex];
  setTagEditing(!isEditingTags);
  if (item) {
    renderDetailTags(item);
  }
});

detailTags.addEventListener("click", (event) => {
  if (!isEditingTags) {
    return;
  }

  const tagButton = event.target.closest("[data-detail-tag]");
  if (tagButton) {
    removeTagFromActiveItem(tagButton.dataset.detailTag);
  }
});

addCustomTag.addEventListener("click", () => {
  addTagToActiveItem(customTagInput.value);
});

customTagInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTagToActiveItem(customTagInput.value);
  }
});

document.querySelectorAll("[data-suggest-tag]").forEach((button) => {
  button.addEventListener("click", () => {
    addTagToActiveItem(button.dataset.suggestTag);
  });
});

openCropper.addEventListener("click", openCropPanel);
applyWhiteBg.addEventListener("click", applyWhiteBackground);

cropScale.addEventListener("input", () => {
  cropState.scale = Number(cropScale.value);
  updateCropImageTransform();
});

resetCrop.addEventListener("click", () => {
  if (cropImageElement) {
    resetCropState();
    updateCropImageTransform();
  }
});

applyCrop.addEventListener("click", applyCropToPreview);
cropStage.addEventListener("mousedown", startCropDrag);
cropStage.addEventListener("mousemove", moveCropDrag);
cropStage.addEventListener("mouseup", endCropDrag);
cropStage.addEventListener("mouseleave", endCropDrag);
cropStage.addEventListener("touchstart", startCropDrag, { passive: true });
cropStage.addEventListener("touchmove", moveCropDrag, { passive: false });
cropStage.addEventListener("touchend", endCropDrag);

clothingFile.addEventListener("change", () => {
  const file = clothingFile.files[0];
  if (!file) {
    return;
  }

  originalImageUrl = URL.createObjectURL(file);
  importedImageUrl = originalImageUrl;
  const guessedName = file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();
  itemName.value = guessedName || "新导入单品";
  openCropper.disabled = false;
  applyWhiteBg.disabled = false;
  showImagePreview(importedImageUrl);
  hideCropPanel();
});

saveImport.addEventListener("click", () => {
  const { primaryCategory, subCategory } = getCategoryPair(itemCategory.value);
  const name = itemName.value.trim() || `新${subCategory}`;
  const colorLabel = document.querySelector(`[data-color="${selectedColor}"] span:last-child`).textContent;

  wardrobeItems.unshift({
    id: `item-${Date.now()}`,
    name,
    meta: `${itemScene.value} · ${itemSeason.value}`,
    primaryCategory,
    subCategory,
    scene: itemScene.value,
    season: itemSeason.value,
    color: colorLabel,
    tags: [primaryCategory, subCategory, colorLabel, itemSeason.value, itemScene.value],
    artClass: colorArtMap[selectedColor] || "color-black",
    imageUrl: importedImageUrl,
  });

  renderWardrobe();
  closeImportSheet();
  resetImportForm();
  showToast("已加入衣橱");
});

renderWardrobe();

wardrobeGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-item-index]");
  if (card) {
    openItemDetail(Number(card.dataset.itemIndex));
  }
});

wardrobeGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const card = event.target.closest("[data-item-index]");
  if (card) {
    event.preventDefault();
    openItemDetail(Number(card.dataset.itemIndex));
  }
});
