const tabButtons = document.querySelectorAll("[data-tab-target]");
const navTabs = document.querySelectorAll(".tabbar .tab");
const views = document.querySelectorAll(".view");
const wardrobeGrid = document.querySelector("#wardrobeGrid");
const emptyWardrobe = document.querySelector("#emptyWardrobe");
const emptyWardrobeTitle = document.querySelector("#emptyWardrobeTitle");
const emptyWardrobeCopy = document.querySelector("#emptyWardrobeCopy");
const wardrobeSearch = document.querySelector("#wardrobeSearch");
const clearWardrobeSearch = document.querySelector("#clearWardrobeSearch");
const toggleAdvancedFilters = document.querySelector("#toggleAdvancedFilters");
const toggleBulkMode = document.querySelector("#toggleBulkMode");
const advancedFilterPanel = document.querySelector("#advancedFilterPanel");
const colorFilters = document.querySelector("#colorFilters");
const seasonFilters = document.querySelector("#seasonFilters");
const sceneFilters = document.querySelector("#sceneFilters");
const tagFilters = document.querySelector("#tagFilters");
const clearAdvancedFilters = document.querySelector("#clearAdvancedFilters");
const bulkBar = document.querySelector("#bulkBar");
const bulkCount = document.querySelector("#bulkCount");
const bulkTag = document.querySelector("#bulkTag");
const bulkSeason = document.querySelector("#bulkSeason");
const bulkDelete = document.querySelector("#bulkDelete");
const importSheet = document.querySelector("#importSheet");
const clothingFile = document.querySelector("#clothingFile");
const uploadPreview = document.querySelector("#uploadPreview");
const comparePanel = document.querySelector("#comparePanel");
const beforePreview = document.querySelector("#beforePreview");
const afterPreview = document.querySelector("#afterPreview");
const openCropper = document.querySelector("#openCropper");
const applyWhiteBg = document.querySelector("#applyWhiteBg");
const aiSuggestionCard = document.querySelector("#aiSuggestionCard");
const suggestionConfidence = document.querySelector("#suggestionConfidence");
const suggestionResults = document.querySelector("#suggestionResults");
const refreshSuggestion = document.querySelector("#refreshSuggestion");
const applySuggestion = document.querySelector("#applySuggestion");
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
const itemEditToggle = document.querySelector("#itemEditToggle");
const itemInfoList = document.querySelector("#itemInfoList");
const itemEditor = document.querySelector("#itemEditor");
const editItemName = document.querySelector("#editItemName");
const editItemCategory = document.querySelector("#editItemCategory");
const editItemScene = document.querySelector("#editItemScene");
const editItemSeason = document.querySelector("#editItemSeason");
const editItemColor = document.querySelector("#editItemColor");
const saveItemEdit = document.querySelector("#saveItemEdit");
const detailTags = document.querySelector("#detailTags");
const detailSuggestion = document.querySelector("#detailSuggestion");
const tagEditToggle = document.querySelector("#tagEditToggle");
const tagEditor = document.querySelector("#tagEditor");
const customTagInput = document.querySelector("#customTagInput");
const addCustomTag = document.querySelector("#addCustomTag");
const themeOptions = document.querySelectorAll("[data-theme-option]");
const reduceMotionToggle = document.querySelector("#reduceMotionToggle");

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
let sourceImageUrl = "";
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
let highlightedItemId = "";
let importSuggestion = null;
let isAdvancedFilterOpen = false;
let isBulkMode = false;
let isEditingItemInfo = false;
let activeTheme = localStorage.getItem("clothes-show-theme") || "memphis";
let reduceMotion = localStorage.getItem("clothes-show-reduce-motion") === "true";
const selectedBulkItemIds = new Set();
const activeAdvancedFilters = {
  color: "",
  season: "",
  scene: "",
  tag: "",
};

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

const colorLabelMap = {
  black: "黑",
  white: "白",
  gray: "灰",
  red: "红",
  pink: "粉",
  orange: "橙",
  yellow: "黄",
  green: "绿",
  blue: "蓝",
  purple: "紫",
  brown: "棕",
  denim: "牛仔",
  multi: "多色",
  pattern: "图案",
};

const colorValueMap = {
  黑: "black",
  白: "white",
  灰: "gray",
  红: "red",
  红色: "red",
  粉: "pink",
  粉色: "pink",
  橙: "orange",
  黄色: "yellow",
  黄: "yellow",
  绿: "green",
  绿色: "green",
  蓝: "blue",
  蓝色: "blue",
  紫: "purple",
  棕: "brown",
  牛仔: "denim",
  牛仔蓝: "denim",
  多色: "multi",
  图案: "pattern",
};

const importSuggestionPresets = [
  {
    keywords: ["jacket", "coat", "outer", "外套"],
    name: "短款外套",
    category: "外套",
    scene: "街头",
    season: "春秋",
    color: "red",
    tags: ["外套", "短款", "街头", "复古"],
  },
  {
    keywords: ["pants", "jeans", "denim", "trouser", "裤"],
    name: "牛仔直筒裤",
    category: "下装",
    scene: "日常",
    season: "四季",
    color: "denim",
    tags: ["牛仔", "直筒", "休闲", "百搭"],
  },
  {
    keywords: ["tee", "shirt", "top", "tshirt", "短袖", "上衣"],
    name: "短袖上衣",
    category: "上衣",
    scene: "校园",
    season: "夏季",
    color: "pink",
    tags: ["短袖", "校园", "轻薄", "休闲"],
  },
  {
    keywords: ["skirt", "dress", "裙"],
    name: "半身裙",
    category: "下装",
    scene: "约会",
    season: "春夏",
    color: "blue",
    tags: ["半裙", "甜酷", "拍照好看", "春夏"],
  },
  {
    keywords: ["shoe", "sneaker", "boot", "鞋"],
    name: "运动鞋",
    category: "鞋包",
    scene: "校园",
    season: "四季",
    color: "yellow",
    tags: ["球鞋", "运动", "校园", "舒适"],
  },
  {
    keywords: ["bag", "tote", "purse", "包"],
    name: "手提包",
    category: "鞋包",
    scene: "派对",
    season: "春夏",
    color: "green",
    tags: ["手提包", "复古", "派对", "点睛"],
  },
];

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

function applyThemePreferences() {
  document.body.dataset.theme = activeTheme;
  document.body.classList.toggle("reduce-motion", reduceMotion);

  themeOptions.forEach((button) => {
    const isSelected = button.dataset.themeOption === activeTheme;
    button.classList.toggle("selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  reduceMotionToggle.setAttribute("aria-pressed", String(reduceMotion));
  reduceMotionToggle.querySelector("strong").textContent = reduceMotion ? "开启" : "关闭";
}

function setTheme(theme) {
  activeTheme = theme;
  localStorage.setItem("clothes-show-theme", activeTheme);
  applyThemePreferences();
  showToast(activeTheme === "accessible" ? "已切换高对比主题" : "已切换 Memphis 主题");
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
      if (activeAdvancedFilters.color && item.color !== activeAdvancedFilters.color) {
        return false;
      }

      if (activeAdvancedFilters.season && item.season !== activeAdvancedFilters.season) {
        return false;
      }

      if (activeAdvancedFilters.scene && item.scene !== activeAdvancedFilters.scene) {
        return false;
      }

      if (activeAdvancedFilters.tag && !getItemTags(item).includes(activeAdvancedFilters.tag)) {
        return false;
      }

      return true;
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
      const isSelected = selectedBulkItemIds.has(item.id);
      const image = item.imageUrl
        ? `<div class="cloth-art imported"><img src="${item.imageUrl}" alt="${item.name}" /></div>`
        : `<div class="cloth-art ${item.artClass}"></div>`;

      return `
        <article class="wardrobe-card ${item.id === highlightedItemId ? "new-item" : ""} ${isBulkMode ? "bulk-mode" : ""} ${isSelected ? "selected-item" : ""}" role="button" tabindex="0" data-item-index="${index}" data-item-id="${item.id}">
          <span class="select-badge" aria-hidden="true">${isSelected ? "✓" : ""}</span>
          ${image}
          <h2>${item.name}</h2>
          <p>${item.meta}</p>
        </article>
      `;
    })
    .join("");

  const isEmpty = visibleItems.length === 0;
  emptyWardrobe.classList.toggle("show", isEmpty);

  if (isEmpty && hasAnyWardrobeFilter()) {
    emptyWardrobeTitle.textContent = "没有找到匹配衣物";
    emptyWardrobeCopy.textContent = "试试换个关键词，或清空筛选条件。";
  } else {
    emptyWardrobeTitle.textContent = "这个分类还空着";
    emptyWardrobeCopy.textContent = "先导入一件，给衣橱添点新素材。";
  }

  renderBulkBar();
}

function getUniqueValues(getter) {
  return [...new Set(wardrobeItems.map(getter).filter(Boolean))];
}

function renderAdvancedFilters() {
  renderFilterGroup(colorFilters, "color", getUniqueValues((item) => item.color));
  renderFilterGroup(seasonFilters, "season", getUniqueValues((item) => item.season));
  renderFilterGroup(sceneFilters, "scene", getUniqueValues((item) => item.scene));
  renderFilterGroup(tagFilters, "tag", [...new Set(wardrobeItems.flatMap((item) => getItemTags(item)))].slice(0, 12));
  toggleAdvancedFilters.classList.toggle("selected", isAdvancedFilterOpen || hasActiveAdvancedFilters());
  advancedFilterPanel.classList.toggle("show", isAdvancedFilterOpen);
  advancedFilterPanel.setAttribute("aria-hidden", String(!isAdvancedFilterOpen));
}

function renderFilterGroup(container, filterKey, values) {
  container.innerHTML = values
    .map(
      (value) => `
        <button class="mini-chip ${activeAdvancedFilters[filterKey] === value ? "selected" : ""}" type="button" data-filter-key="${filterKey}" data-filter-value="${value}">
          ${value}
        </button>
      `
    )
    .join("");
}

function hasActiveAdvancedFilters() {
  return Object.values(activeAdvancedFilters).some(Boolean);
}

function clearAllAdvancedFilters() {
  Object.keys(activeAdvancedFilters).forEach((key) => {
    activeAdvancedFilters[key] = "";
  });
  renderAdvancedFilters();
  renderWardrobe();
}

function renderBulkBar() {
  const selectedCount = selectedBulkItemIds.size;
  bulkBar.classList.toggle("show", isBulkMode);
  bulkBar.setAttribute("aria-hidden", String(!isBulkMode));
  bulkCount.textContent = `已选 ${selectedCount} 件`;
  [bulkTag, bulkSeason, bulkDelete].forEach((button) => {
    button.disabled = selectedCount === 0;
  });
  toggleBulkMode.classList.toggle("selected", isBulkMode);
  toggleBulkMode.textContent = isBulkMode ? "完成" : "管理";
}

function setBulkMode(nextState) {
  isBulkMode = nextState;
  if (!isBulkMode) {
    selectedBulkItemIds.clear();
  }
  renderWardrobe();
}

function toggleBulkItem(itemId) {
  if (selectedBulkItemIds.has(itemId)) {
    selectedBulkItemIds.delete(itemId);
  } else {
    selectedBulkItemIds.add(itemId);
  }
  renderWardrobe();
}

function getSelectedBulkItems() {
  return wardrobeItems.filter((item) => selectedBulkItemIds.has(item.id));
}

function bulkAddTag() {
  const tag = window.prompt("给选中的衣服添加标签", "常穿");
  const normalizedTag = tag?.trim();
  if (!normalizedTag) {
    return;
  }

  getSelectedBulkItems().forEach((item) => {
    if (!getItemTags(item).includes(normalizedTag)) {
      item.tags = [...(item.tags || []), normalizedTag];
    }
  });
  renderAdvancedFilters();
  renderWardrobe();
  showToast("已批量加标签");
}

function bulkChangeSeason() {
  const nextSeason = window.prompt("把选中的衣服改为哪个季节？", "四季");
  const normalizedSeason = nextSeason?.trim();
  if (!normalizedSeason) {
    return;
  }

  getSelectedBulkItems().forEach((item) => {
    item.season = normalizedSeason;
    item.meta = `${item.scene} · ${item.season}`;
    item.tags = [...new Set([...(item.tags || []), normalizedSeason])];
  });
  renderAdvancedFilters();
  renderWardrobe();
  showToast("已批量改季节");
}

function bulkDeleteItems() {
  const selectedCount = selectedBulkItemIds.size;
  if (!selectedCount) {
    return;
  }

  if (!window.confirm(`删除选中的 ${selectedCount} 件衣服？`)) {
    return;
  }

  for (let index = wardrobeItems.length - 1; index >= 0; index -= 1) {
    if (selectedBulkItemIds.has(wardrobeItems[index].id)) {
      wardrobeItems.splice(index, 1);
    }
  }
  selectedBulkItemIds.clear();
  renderAdvancedFilters();
  renderWardrobe();
  showToast("已删除");
}

function openItemDetail(index) {
  const item = wardrobeItems[index];
  if (!item) {
    return;
  }

  activeItemIndex = index;
  setTagEditing(false);
  setItemInfoEditing(false);
  detailName.textContent = item.name;
  renderItemInfo(item);
  renderDetailTags(item);
  detailSuggestion.textContent = `${item.name}适合${item.scene || "日常"}场景，可以和高对比色单品一起做一套更有玩乐感的搭配。`;

  detailImage.innerHTML = item.imageUrl
    ? `<img src="${item.imageUrl}" alt="${item.name}" />`
    : `<div class="cloth-art ${item.artClass}"></div>`;

  showView("item-detail");
}

function hasAnyWardrobeFilter() {
  return Boolean(
    wardrobeSearchQuery.trim() ||
      activeWardrobeFilter !== "全部" ||
      activeAdvancedFilters.color ||
      activeAdvancedFilters.season ||
      activeAdvancedFilters.scene ||
      activeAdvancedFilters.tag
  );
}

function renderItemInfo(item) {
  itemInfoList.innerHTML = [
    ["分类", item.subCategory || item.primaryCategory],
    ["颜色", item.color],
    ["季节", item.season],
    ["场景", item.scene],
  ]
    .map(
      ([label, value]) => `
        <div class="item-info-row">
          <span>${label}</span>
          <strong>${value || "-"}</strong>
        </div>
      `
    )
    .join("");
}

function populateItemEditForm(item) {
  editItemName.value = item.name || "";
  editItemCategory.value = item.subCategory || item.primaryCategory || "上衣";
  editItemScene.value = item.scene || "日常";
  editItemSeason.value = item.season || "四季";
  editItemColor.value = colorValueMap[item.color] || "black";
}

function setItemInfoEditing(nextState) {
  isEditingItemInfo = nextState;
  const item = wardrobeItems[activeItemIndex];
  itemEditToggle.textContent = isEditingItemInfo ? "取消" : "编辑";
  itemEditor.classList.toggle("show", isEditingItemInfo);
  itemEditor.setAttribute("aria-hidden", String(!isEditingItemInfo));

  if (isEditingItemInfo && item) {
    populateItemEditForm(item);
  }
}

function saveActiveItemInfo() {
  const item = wardrobeItems[activeItemIndex];
  if (!item) {
    return;
  }

  const { primaryCategory, subCategory } = getCategoryPair(editItemCategory.value);
  const colorLabel = colorLabelMap[editItemColor.value] || "黑";

  item.name = editItemName.value.trim() || item.name;
  item.primaryCategory = primaryCategory;
  item.subCategory = subCategory;
  item.scene = editItemScene.value;
  item.season = editItemSeason.value;
  item.color = colorLabel;
  item.meta = `${item.scene} · ${item.season}`;
  item.artClass = colorArtMap[editItemColor.value] || item.artClass;
  item.tags = [
    ...new Set([
      ...(item.tags || []),
      primaryCategory,
      subCategory,
      colorLabel,
      item.season,
      item.scene,
    ]),
  ];

  detailName.textContent = item.name;
  renderItemInfo(item);
  renderDetailTags(item);
  renderAdvancedFilters();
  renderWardrobe();
  setItemInfoEditing(false);
  showToast("已保存修改");
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

function getSelectedColorLabel() {
  return document.querySelector(`[data-color="${selectedColor}"] span:last-child`)?.textContent || "黑";
}

function setSelectedColor(color) {
  selectedColor = colorArtMap[color] ? color : "black";
  document.querySelectorAll("[data-color]").forEach((colorButton) => {
    colorButton.classList.toggle("selected", colorButton.dataset.color === selectedColor);
  });
}

function getSuggestionFromFileName(fileName) {
  const normalizedName = fileName.toLowerCase();
  const preset =
    importSuggestionPresets.find((candidate) =>
      candidate.keywords.some((keyword) => normalizedName.includes(keyword.toLowerCase()))
    ) || importSuggestionPresets[Math.floor(Math.random() * importSuggestionPresets.length)];

  const confidence = 82 + Math.floor(Math.random() * 12);

  return {
    ...preset,
    confidence,
    tags: [...preset.tags],
  };
}

function renderImportSuggestion() {
  if (!importSuggestion) {
    aiSuggestionCard.classList.remove("show");
    aiSuggestionCard.setAttribute("aria-hidden", "true");
    suggestionResults.innerHTML = "";
    suggestionConfidence.textContent = "--";
    return;
  }

  const colorLabel =
    document.querySelector(`[data-color="${importSuggestion.color}"] span:last-child`)?.textContent || "黑";
  const suggestionRows = [
    ["名称", importSuggestion.name],
    ["分类", importSuggestion.category],
    ["颜色", colorLabel],
    ["场景", importSuggestion.scene],
    ["季节", importSuggestion.season],
    ["标签", importSuggestion.tags.join(" / ")],
  ];

  suggestionConfidence.textContent = `${importSuggestion.confidence}%`;
  suggestionResults.innerHTML = suggestionRows
    .map(
      ([label, value]) => `
        <div class="suggestion-result">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `
    )
    .join("");
  aiSuggestionCard.classList.add("show");
  aiSuggestionCard.setAttribute("aria-hidden", "false");
}

function applyImportSuggestion() {
  if (!importSuggestion) {
    return;
  }

  itemName.value = importSuggestion.name;
  itemCategory.value = importSuggestion.category;
  itemScene.value = importSuggestion.scene;
  itemSeason.value = importSuggestion.season;
  setSelectedColor(importSuggestion.color);
  aiSuggestionCard.classList.add("applied");
  showToast("已套用识别建议");
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
  sourceImageUrl = "";
  cropImageElement = null;
  importSuggestion = null;
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
  updateComparePreview();
  openCropper.disabled = true;
  applyWhiteBg.disabled = true;
  applyWhiteBg.classList.remove("processing");
  applyWhiteBg.textContent = "换白底";
  renderImportSuggestion();
  hideCropPanel();
  setSelectedColor("black");
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
  updateComparePreview();
}

function updateComparePreview() {
  updateCompareSlot(beforePreview, sourceImageUrl, "原图预览", "Before");
  updateCompareSlot(afterPreview, importedImageUrl, "处理后预览", "After");

  const shouldShowCompare = Boolean(sourceImageUrl || importedImageUrl);
  comparePanel.classList.toggle("show", shouldShowCompare);
  comparePanel.setAttribute("aria-hidden", String(!shouldShowCompare));
  comparePanel.classList.toggle(
    "has-processed",
    Boolean(sourceImageUrl && importedImageUrl && sourceImageUrl !== importedImageUrl)
  );
}

function updateCompareSlot(slot, imageUrl, alt, fallbackText) {
  slot.classList.toggle("empty", !imageUrl);
  slot.innerHTML = imageUrl ? `<img src="${imageUrl}" alt="${alt}" />` : fallbackText;
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

themeOptions.forEach((button) => {
  button.addEventListener("click", () => {
    setTheme(button.dataset.themeOption);
  });
});

reduceMotionToggle.addEventListener("click", () => {
  reduceMotion = !reduceMotion;
  localStorage.setItem("clothes-show-reduce-motion", String(reduceMotion));
  applyThemePreferences();
  showToast(reduceMotion ? "已减少动态效果" : "已恢复动态效果");
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

toggleAdvancedFilters.addEventListener("click", () => {
  isAdvancedFilterOpen = !isAdvancedFilterOpen;
  renderAdvancedFilters();
});

advancedFilterPanel.addEventListener("click", (event) => {
  const filterButton = event.target.closest("[data-filter-key]");
  if (!filterButton) {
    return;
  }

  const { filterKey, filterValue } = filterButton.dataset;
  activeAdvancedFilters[filterKey] =
    activeAdvancedFilters[filterKey] === filterValue ? "" : filterValue;
  renderAdvancedFilters();
  renderWardrobe();
});

clearAdvancedFilters.addEventListener("click", clearAllAdvancedFilters);

toggleBulkMode.addEventListener("click", () => {
  setBulkMode(!isBulkMode);
});

bulkTag.addEventListener("click", bulkAddTag);
bulkSeason.addEventListener("click", bulkChangeSeason);
bulkDelete.addEventListener("click", bulkDeleteItems);

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
    setSelectedColor(button.dataset.color);
  });
});

tagEditToggle.addEventListener("click", () => {
  const item = wardrobeItems[activeItemIndex];
  setTagEditing(!isEditingTags);
  if (item) {
    renderDetailTags(item);
  }
});

itemEditToggle.addEventListener("click", () => {
  setItemInfoEditing(!isEditingItemInfo);
});

saveItemEdit.addEventListener("click", saveActiveItemInfo);

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
  sourceImageUrl = originalImageUrl;
  importedImageUrl = originalImageUrl;
  const guessedName = file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();
  itemName.value = guessedName || "新导入单品";
  importSuggestion = getSuggestionFromFileName(file.name);
  aiSuggestionCard.classList.remove("applied");
  renderImportSuggestion();
  openCropper.disabled = false;
  applyWhiteBg.disabled = false;
  showImagePreview(importedImageUrl);
  hideCropPanel();
});

refreshSuggestion.addEventListener("click", () => {
  if (!importedImageUrl) {
    showToast("先选择一张照片");
    return;
  }

  const fileName = clothingFile.files[0]?.name || itemName.value || "new-item";
  importSuggestion = getSuggestionFromFileName(`${fileName}-${Date.now()}`);
  aiSuggestionCard.classList.remove("applied");
  renderImportSuggestion();
  showToast("已重新识别");
});

applySuggestion.addEventListener("click", applyImportSuggestion);

saveImport.addEventListener("click", () => {
  if (!importedImageUrl) {
    showToast("先选择一张照片");
    return;
  }

  const { primaryCategory, subCategory } = getCategoryPair(itemCategory.value);
  const name = itemName.value.trim() || `新${subCategory}`;
  const colorLabel = getSelectedColorLabel();
  const newItemId = `item-${Date.now()}`;
  const suggestionTags = importSuggestion?.tags || [];

  wardrobeItems.unshift({
    id: newItemId,
    name,
    meta: `${itemScene.value} · ${itemSeason.value}`,
    primaryCategory,
    subCategory,
    scene: itemScene.value,
    season: itemSeason.value,
    color: colorLabel,
    tags: [primaryCategory, subCategory, colorLabel, itemSeason.value, itemScene.value, ...suggestionTags],
    artClass: colorArtMap[selectedColor] || "color-black",
    imageUrl: importedImageUrl,
  });

  activeWardrobeFilter = "全部";
  wardrobeSearch.value = "";
  wardrobeSearchQuery = "";
  wardrobeSearch.closest(".search-box").classList.remove("has-query");
  document.querySelectorAll("[data-wardrobe-filter]").forEach((filterButton) => {
    filterButton.classList.toggle("selected", filterButton.dataset.wardrobeFilter === "全部");
  });
  highlightedItemId = newItemId;
  renderAdvancedFilters();
  renderWardrobe();
  closeImportSheet();
  resetImportForm();
  showView("wardrobe");
  window.setTimeout(() => {
    highlightedItemId = "";
    renderWardrobe();
  }, 2200);
  showToast("已加入衣橱");
});

editItemColor.innerHTML = Object.entries(colorLabelMap)
  .map(([value, label]) => `<option value="${value}">${label}</option>`)
  .join("");
applyThemePreferences();
renderAdvancedFilters();
renderWardrobe();

const initialView = new URLSearchParams(window.location.search).get("view");
if (initialView === "wardrobe") {
  showView("wardrobe");
}

if (initialView === "item-detail") {
  openItemDetail(0);
}

wardrobeGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-item-index]");
  if (card) {
    if (isBulkMode) {
      toggleBulkItem(card.dataset.itemId);
      return;
    }
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
    if (isBulkMode) {
      toggleBulkItem(card.dataset.itemId);
      return;
    }
    openItemDetail(Number(card.dataset.itemIndex));
  }
});
