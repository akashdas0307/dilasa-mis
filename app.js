// Dilasa PMIS Application - Fixed Implementation
// Enhanced with role-based access, mobile optimization, and extensive sample data

// Enhanced Application Data with comprehensive sample data
let appData = {
  users: [
    {id: 1, name: "Dr. Rajesh Admin", role: "project_administrator", email: "admin@dilasa.org", phone: "+91-9876543210", avatar: "👨‍💼", department: "Administration"},
    {id: 2, name: "Priya Manager", role: "project_manager", email: "manager@dilasa.org", phone: "+91-9876543211", avatar: "👩‍💼", department: "Operations"},
    {id: 3, name: "Amit Finance", role: "financial_team", email: "finance@dilasa.org", phone: "+91-9876543212", avatar: "👨‍💻", department: "Finance"},
    {id: 4, name: "Sunita Field", role: "field_facilitator", email: "field@dilasa.org", phone: "+91-9876543213", avatar: "👩‍🌾", department: "Field Operations"},
    {id: 5, name: "Ravi Field", role: "field_facilitator", email: "ravi@dilasa.org", phone: "+91-9876543214", avatar: "👨‍🌾", department: "Field Operations"},
    {id: 6, name: "Meera Finance", role: "financial_team", email: "meera@dilasa.org", phone: "+91-9876543215", avatar: "👩‍💻", department: "Finance"}
  ],
  
  projects: [
    {
      id: 1, name: "Test Project 1: Rural Water Initiative", description: "Comprehensive water security program for rural communities in Maharashtra", 
      status: "In Progress", startDate: "2024-01-15", endDate: "2024-12-31", budget: 2500000, spent: 1625000,
      location: "Aurangabad District, Maharashtra", funder: "Mahindra Foundation", manager: "Priya Manager",
      beneficiaries: 1200, activities: 4, completedActivities: 2, progress: 65, lat: 19.8762, lng: 75.3433
    },
    {
      id: 2, name: "Test Project 2: Agricultural Enhancement Program", description: "Farmer field school and sustainable agriculture promotion", 
      status: "In Progress", startDate: "2024-03-01", endDate: "2025-02-28", budget: 1800000, spent: 810000,
      location: "Marathwada Region, Maharashtra", funder: "RBL Bank Foundation", manager: "Priya Manager",
      beneficiaries: 950, activities: 4, completedActivities: 1, progress: 45, lat: 18.8197, lng: 76.1089
    },
    {
      id: 3, name: "Test Project 3: Women Empowerment Initiative", description: "SHG formation and livelihood training for rural women", 
      status: "Planning", startDate: "2024-06-01", endDate: "2025-05-31", budget: 1200000, spent: 180000,
      location: "Vidarbha Region, Maharashtra", funder: "Reliance Foundation", manager: "Priya Manager",
      beneficiaries: 600, activities: 3, completedActivities: 0, progress: 15, lat: 20.9320, lng: 77.7523
    },
    {
      id: 4, name: "Test Project 4: Healthcare Access Program", description: "Mobile health camps and medical facility establishment", 
      status: "In Progress", startDate: "2024-02-01", endDate: "2024-11-30", budget: 900000, spent: 675000,
      location: "Western Maharashtra", funder: "United Breweries Foundation", manager: "Priya Manager",
      beneficiaries: 800, activities: 3, completedActivities: 2, progress: 75, lat: 18.5204, lng: 73.8567
    },
    {
      id: 5, name: "Test Project 5: Drought Resilience Program", description: "Water conservation and drought-proofing villages", 
      status: "Completed", startDate: "2023-10-01", endDate: "2024-09-30", budget: 3200000, spent: 3150000,
      location: "Marathwada Region", funder: "Government of Maharashtra", manager: "Priya Manager",
      beneficiaries: 1500, activities: 6, completedActivities: 6, progress: 100, lat: 18.7320, lng: 76.2144
    },
    {
      id: 6, name: "Test Project 6: Climate Resilient Agriculture", description: "Promoting climate-smart farming practices", 
      status: "In Progress", startDate: "2024-04-01", endDate: "2025-03-31", budget: 2100000, spent: 840000,
      location: "Aurangabad & Jalna Districts", funder: "Asia Initiatives", manager: "Priya Manager",
      beneficiaries: 1100, activities: 5, completedActivities: 2, progress: 40, lat: 19.8762, lng: 75.3433
    }
  ],
  
  activities: [
    // Project 1 Activities
    {id: 1, projectId: 1, name: "CNB Construction at Khed Village", type: "CNB Construction", status: "Completed", progress: 100, assignedTo: "Ravi Field", location: "Khed Village", lat: 19.8762, lng: 75.3433, beneficiaries: 45, targetDate: "2024-06-30", completedDate: "2024-06-28", currentStep: 8, totalSteps: 8},
    {id: 2, projectId: 1, name: "ENB Construction at Paithan", type: "ENB Construction", status: "In Progress", progress: 75, assignedTo: "Sunita Field", location: "Paithan", lat: 19.4833, lng: 75.3833, beneficiaries: 32, targetDate: "2024-08-15", currentStep: 5, totalSteps: 6},
    {id: 3, projectId: 1, name: "Community Health Camp", type: "Health Camp", status: "Completed", progress: 100, assignedTo: "Sunita Field", location: "Khed Village", lat: 19.8762, lng: 75.3433, beneficiaries: 120, completedDate: "2024-05-20", currentStep: 5, totalSteps: 5},
    {id: 4, projectId: 1, name: "Water User Committee Training", type: "Livelihood Training", status: "In Progress", progress: 40, assignedTo: "Ravi Field", location: "Aurangabad", lat: 19.8762, lng: 75.3433, beneficiaries: 25, targetDate: "2024-09-30", currentStep: 2, totalSteps: 5},
    
    // Project 2 Activities
    {id: 5, projectId: 2, name: "FFS Demo Plot Setup", type: "Farmer Field School", status: "Completed", progress: 100, assignedTo: "Sunita Field", location: "Dharur", lat: 18.8197, lng: 76.1089, beneficiaries: 85, completedDate: "2024-07-10", currentStep: 7, totalSteps: 7},
    {id: 6, projectId: 2, name: "Organic Farming Training", type: "Farmer Field School", status: "In Progress", progress: 60, assignedTo: "Ravi Field", location: "Latur", lat: 18.4088, lng: 76.5604, beneficiaries: 65, targetDate: "2024-10-15", currentStep: 4, totalSteps: 7},
    {id: 7, projectId: 2, name: "SHG Formation Program", type: "SHG Formation", status: "In Progress", progress: 30, assignedTo: "Sunita Field", location: "Beed", lat: 18.9886, lng: 75.7570, beneficiaries: 40, targetDate: "2024-11-30", currentStep: 2, totalSteps: 6},
    {id: 8, projectId: 2, name: "Market Linkage Training", type: "Livelihood Training", status: "Planning", progress: 0, assignedTo: "Ravi Field", location: "Osmanabad", lat: 18.1921, lng: 76.0421, beneficiaries: 30, targetDate: "2024-12-31", currentStep: 0, totalSteps: 5},
    
    // Project 3 Activities  
    {id: 9, projectId: 3, name: "Women's SHG Formation - Nagpur", type: "SHG Formation", status: "Planning", progress: 10, assignedTo: "Sunita Field", location: "Nagpur", lat: 21.1458, lng: 79.0882, beneficiaries: 50, targetDate: "2024-08-30", currentStep: 1, totalSteps: 6},
    {id: 10, projectId: 3, name: "Livelihood Skills Training", type: "Livelihood Training", status: "Planning", progress: 5, assignedTo: "Ravi Field", location: "Akola", lat: 20.7333, lng: 77.0167, beneficiaries: 35, targetDate: "2024-09-15", currentStep: 0, totalSteps: 5},
    
    // Project 4 Activities
    {id: 11, projectId: 4, name: "Mobile Health Camp - Phase 1", type: "Health Camp", status: "Completed", progress: 100, assignedTo: "Sunita Field", location: "Pune Rural", lat: 18.5204, lng: 73.8567, beneficiaries: 200, completedDate: "2024-04-20", currentStep: 5, totalSteps: 5},
    {id: 12, projectId: 4, name: "Mobile Health Camp - Phase 2", type: "Health Camp", status: "In Progress", progress: 80, assignedTo: "Ravi Field", location: "Satara", lat: 17.6868, lng: 74.0240, beneficiaries: 180, targetDate: "2024-08-30", currentStep: 4, totalSteps: 5},
    {id: 13, projectId: 4, name: "Community Health Training", type: "Livelihood Training", status: "In Progress", progress: 45, assignedTo: "Sunita Field", location: "Kolhapur", lat: 16.7050, lng: 74.2433, beneficiaries: 60, targetDate: "2024-10-15", currentStep: 2, totalSteps: 5},
    
    // Project 5 Activities (Completed)
    {id: 14, projectId: 5, name: "Watershed Development - Phase 1", type: "CNB Construction", status: "Completed", progress: 100, assignedTo: "Ravi Field", location: "Osmanabad", lat: 18.1921, lng: 76.0421, beneficiaries: 250, completedDate: "2024-03-30", currentStep: 8, totalSteps: 8},
    {id: 15, projectId: 5, name: "Watershed Development - Phase 2", type: "ENB Construction", status: "Completed", progress: 100, assignedTo: "Sunita Field", location: "Latur", lat: 18.4088, lng: 76.5604, beneficiaries: 220, completedDate: "2024-06-30", currentStep: 6, totalSteps: 6},
    
    // Project 6 Activities
    {id: 16, projectId: 6, name: "Climate Smart Agriculture Demo", type: "Farmer Field School", status: "In Progress", progress: 70, assignedTo: "Ravi Field", location: "Jalna", lat: 19.8346, lng: 75.8750, beneficiaries: 90, targetDate: "2024-09-30", currentStep: 5, totalSteps: 7},
    {id: 17, projectId: 6, name: "Drip Irrigation Training", type: "Livelihood Training", status: "In Progress", progress: 35, assignedTo: "Sunita Field", location: "Aurangabad", lat: 19.8762, lng: 75.3433, beneficiaries: 75, targetDate: "2024-11-15", currentStep: 2, totalSteps: 5},
    
    // Additional Activities for more comprehensive data
    {id: 18, projectId: 1, name: "Rainwater Harvesting Setup", type: "CNB Construction", status: "Planning", progress: 5, assignedTo: "Ravi Field", location: "Ahmednagar", lat: 19.0948, lng: 74.7480, beneficiaries: 80, targetDate: "2024-12-15", currentStep: 0, totalSteps: 8},
    {id: 19, projectId: 2, name: "Seed Distribution Program", type: "Livelihood Training", status: "In Progress", progress: 25, assignedTo: "Sunita Field", location: "Nanded", lat: 19.1383, lng: 77.3210, beneficiaries: 55, targetDate: "2024-10-30", currentStep: 1, totalSteps: 5},
    {id: 20, projectId: 6, name: "Solar Pump Installation", type: "CNB Construction", status: "Planning", progress: 0, assignedTo: "Ravi Field", location: "Jalna", lat: 19.8346, lng: 75.8750, beneficiaries: 40, targetDate: "2025-01-30", currentStep: 0, totalSteps: 8},
  ],
  
  beneficiaries: [
    {id: 1, name: "Ramesh Patil", village: "Khed", gender: "Male", age: 45, category: "Farmer", phone: "+91-9876001001", activities: [1, 3], projectId: 1, landSize: "3.2 acres", familySize: 5, income: 85000, caste: "OBC"},
    {id: 2, name: "Sita Devi", village: "Khed", gender: "Female", age: 38, category: "SHG Member", phone: "+91-9876001002", activities: [1, 3], projectId: 1, landSize: "1.8 acres", familySize: 4, income: 62000, caste: "SC"},
    {id: 3, name: "Ganesh Jadhav", village: "Paithan", gender: "Male", age: 52, category: "Farmer", phone: "+91-9876001003", activities: [2], projectId: 1, landSize: "4.5 acres", familySize: 6, income: 120000, caste: "OBC"},
    {id: 4, name: "Lata Kulkarni", village: "Dharur", gender: "Female", age: 42, category: "Women Farmer", phone: "+91-9876001004", activities: [5], projectId: 2, landSize: "2.1 acres", familySize: 3, income: 75000, caste: "General"},
    {id: 5, name: "Suresh Gawande", village: "Latur", gender: "Male", age: 48, category: "Progressive Farmer", phone: "+91-9876001005", activities: [6], projectId: 2, landSize: "5.2 acres", familySize: 7, income: 150000, caste: "Maratha"},
    {id: 6, name: "Anita Shinde", village: "Beed", gender: "Female", age: 35, category: "SHG Leader", phone: "+91-9876001006", activities: [7], projectId: 2, landSize: "1.5 acres", familySize: 4, income: 45000, caste: "OBC"},
    {id: 7, name: "Prakash More", village: "Nagpur", gender: "Male", age: 39, category: "Landless", phone: "+91-9876001007", activities: [9], projectId: 3, landSize: "0 acres", familySize: 5, income: 35000, caste: "SC"},
    {id: 8, name: "Savita Bhosale", village: "Akola", gender: "Female", age: 44, category: "Women Entrepreneur", phone: "+91-9876001008", activities: [10], projectId: 3, landSize: "0.8 acres", familySize: 3, income: 55000, caste: "OBC"},
    {id: 9, name: "Rajesh Kamble", village: "Pune Rural", gender: "Male", age: 50, category: "Agricultural Laborer", phone: "+91-9876001009", activities: [11], projectId: 4, landSize: "0 acres", familySize: 4, income: 42000, caste: "SC"},
    {id: 10, name: "Mangala Pawar", village: "Satara", gender: "Female", age: 33, category: "Health Worker", phone: "+91-9876001010", activities: [12], projectId: 4, landSize: "1.2 acres", familySize: 3, income: 65000, caste: "General"},
    // Additional beneficiaries
    {id: 11, name: "Vishnu Desai", village: "Kolhapur", gender: "Male", age: 41, category: "Farmer", phone: "+91-9876001011", activities: [13], projectId: 4, landSize: "2.8 acres", familySize: 6, income: 95000, caste: "Maratha"},
    {id: 12, name: "Rukhmani Jadhav", village: "Osmanabad", gender: "Female", age: 46, category: "SHG Member", phone: "+91-9876001012", activities: [14], projectId: 5, landSize: "1.9 acres", familySize: 5, income: 68000, caste: "OBC"},
    {id: 13, name: "Balasaheb Patil", village: "Latur", gender: "Male", age: 55, category: "Progressive Farmer", phone: "+91-9876001013", activities: [15], projectId: 5, landSize: "6.1 acres", familySize: 8, income: 180000, caste: "Maratha"},
    {id: 14, name: "Sunita Rathod", village: "Jalna", gender: "Female", age: 37, category: "Women Farmer", phone: "+91-9876001014", activities: [16], projectId: 6, landSize: "2.3 acres", familySize: 4, income: 82000, caste: "OBC"},
    {id: 15, name: "Dnyaneshwar Shinde", village: "Aurangabad", gender: "Male", age: 43, category: "Farmer", phone: "+91-9876001015", activities: [17], projectId: 6, landSize: "3.7 acres", familySize: 5, income: 105000, caste: "Maratha"}
  ],
  
  expenses: [
    {id: 1, projectId: 1, activityId: 1, amount: 15000, description: "Construction materials for CNB", status: "Approved", requestedBy: "Ravi Field", approvedBy: "Amit Finance", category: "Materials", date: "2024-06-15", receiptNo: "RCP001"},
    {id: 2, projectId: 1, activityId: 2, amount: 8500, description: "Transportation costs for ENB construction", status: "Pending", requestedBy: "Sunita Field", category: "Transportation", date: "2024-07-20"},
    {id: 3, projectId: 2, activityId: 5, amount: 12000, description: "Seeds and fertilizers for demo plot", status: "Approved", requestedBy: "Sunita Field", approvedBy: "Meera Finance", category: "Agricultural Inputs", date: "2024-06-30", receiptNo: "RCP002"},
    {id: 4, projectId: 4, amount: 25000, description: "Medical supplies for health camp", status: "Pending", requestedBy: "Field Team", category: "Medical Supplies", date: "2024-08-01"},
    {id: 5, projectId: 2, activityId: 6, amount: 18500, description: "Training materials and equipment", status: "Approved", requestedBy: "Ravi Field", approvedBy: "Amit Finance", category: "Training", date: "2024-07-10", receiptNo: "RCP003"},
    {id: 6, projectId: 3, activityId: 9, amount: 9200, description: "SHG formation meeting expenses", status: "Pending", requestedBy: "Sunita Field", category: "Events", date: "2024-07-25"},
    {id: 7, projectId: 1, activityId: 4, amount: 14700, description: "Committee training venue and refreshments", status: "Pending", requestedBy: "Ravi Field", category: "Training", date: "2024-07-28"},
    {id: 8, projectId: 6, activityId: 16, amount: 22000, description: "Climate smart agriculture equipment", status: "Approved", requestedBy: "Ravi Field", approvedBy: "Meera Finance", category: "Equipment", date: "2024-07-05", receiptNo: "RCP004"},
    {id: 9, projectId: 4, activityId: 12, amount: 16800, description: "Mobile health camp setup costs", status: "Approved", requestedBy: "Ravi Field", approvedBy: "Amit Finance", category: "Medical Supplies", date: "2024-06-28", receiptNo: "RCP005"},
    {id: 10, projectId: 6, activityId: 17, amount: 11300, description: "Drip irrigation demonstration materials", status: "Pending", requestedBy: "Sunita Field", category: "Agricultural Inputs", date: "2024-07-30"}
  ],
  
  notifications: [
    {id: 1, title: "Expense Request Pending", message: "Transportation costs for ENB construction awaiting approval", type: "approval", date: "2024-07-20", read: false, userId: 3, priority: "high"},
    {id: 2, title: "Activity Progress Update", message: "CNB Construction at Khed Village completed successfully", type: "success", date: "2024-06-28", read: false, userId: 2, priority: "medium"},
    {id: 3, title: "New Beneficiary Registration", message: "5 new beneficiaries added to Agricultural Enhancement Program", type: "info", date: "2024-07-18", read: true, userId: 2, priority: "low"},
    {id: 4, title: "Budget Alert", message: "Test Project 1 has utilized 65% of allocated budget", type: "warning", date: "2024-07-15", read: false, userId: 3, priority: "high"},
    {id: 5, title: "Document Upload", message: "New technical drawing uploaded for CNB construction", type: "info", date: "2024-06-01", read: true, userId: 4, priority: "low"},
    {id: 6, title: "Training Schedule", message: "Water User Committee Training scheduled for next week", type: "info", date: "2024-07-22", read: false, userId: 5, priority: "medium"}
  ]
};

// Session management
let session = {
  user: null,
  role: null,
  selectedRole: null,
  currentRoute: '/login',
  permissions: [],
  preferences: {
    language: 'en',
    notifications: true,
    theme: 'system'
  }
};

// DOM elements and state
let elements = {};
let appState = {
  isOnline: navigator.onLine,
  searchQuery: '',
  activeFilters: {},
  selectedItems: [],
  currentView: 'desktop'
};

// Offline storage for field data
let offlineData = {
  activityUpdates: JSON.parse(localStorage.getItem('offlineActivityUpdates') || '[]'),
  beneficiaries: JSON.parse(localStorage.getItem('offlineBeneficiaries') || '[]')
};

// Role-based permissions
const rolePermissions = {
  project_administrator: ['all'],
  project_manager: ['projects.view', 'projects.edit', 'activities.view', 'activities.edit', 'expenses.approve', 'reports.view', 'users.view'],
  financial_team: ['projects.view', 'activities.view', 'expenses.view', 'expenses.approve', 'reports.financial'],
  field_facilitator: ['activities.view', 'activities.edit', 'beneficiaries.view', 'beneficiaries.edit', 'expenses.create', 'data.collect']
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Dilasa PMIS initializing...');
  initializeElements();
  initializeEventListeners();
  initializeRouter();
  
  // Start with login screen
  navigateTo('/login');
});

// Initialize DOM elements
function initializeElements() {
  elements = {
    app: document.getElementById('app'),
    header: document.getElementById('header'),
    sidebar: document.getElementById('sidebar'),
    bottomNav: document.getElementById('bottomNav'),
    navMenu: document.getElementById('navMenu'),
    breadcrumb: document.getElementById('breadcrumb'),
    userMenu: document.getElementById('userMenu'),
    userName: document.getElementById('userName'),
    userRole: document.getElementById('userRole'),
    userAvatar: document.getElementById('userAvatar'),
    logoutBtn: document.getElementById('logoutBtn'),
    modal: document.getElementById('modal'),
    modalTitle: document.getElementById('modalTitle'),
    modalBody: document.getElementById('modalBody'),
    modalFooter: document.getElementById('modalFooter'),
    modalClose: document.getElementById('modalClose'),
    desktopToggle: document.getElementById('desktopToggle'),
    mobileToggle: document.getElementById('mobileToggle'),
    searchToggle: document.getElementById('searchToggle'),
    searchBar: document.getElementById('searchBar'),
    searchInput: document.getElementById('searchInput'),
    searchFilter: document.getElementById('searchFilter'),
    searchBtn: document.getElementById('searchBtn'),
    clearSearch: document.getElementById('clearSearch'),
    notificationToggle: document.getElementById('notificationToggle'),
    notificationPanel: document.getElementById('notificationPanel'),
    notificationList: document.getElementById('notificationList'),
    loadingIndicator: document.getElementById('loadingIndicator'),
    offlineIndicator: document.getElementById('offlineIndicator'),
    fab: document.getElementById('fab'),
    quickActions: document.getElementById('quickActions')
  };
  console.log('Elements initialized');
}

// Initialize event listeners
function initializeEventListeners() {
  // Viewport toggle - Fixed implementation
  if (elements.desktopToggle) {
    elements.desktopToggle.addEventListener('click', () => setViewport('desktop'));
  }
  if (elements.mobileToggle) {
    elements.mobileToggle.addEventListener('click', () => setViewport('mobile'));
  }
  
  // Search functionality
  if (elements.searchToggle) {
    elements.searchToggle.addEventListener('click', toggleSearch);
  }
  if (elements.searchBtn) {
    elements.searchBtn.addEventListener('click', performSearch);
  }
  if (elements.clearSearch) {
    elements.clearSearch.addEventListener('click', clearSearch);
  }
  if (elements.searchInput) {
    elements.searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') performSearch();
    });
  }
  
  // Notifications
  if (elements.notificationToggle) {
    elements.notificationToggle.addEventListener('click', toggleNotifications);
  }
  
  // Modal
  if (elements.modalClose) {
    elements.modalClose.addEventListener('click', closeModal);
  }
  if (elements.modal) {
    elements.modal.addEventListener('click', (e) => {
      if (e.target === elements.modal) closeModal();
    });
  }
  
  // Route handling
  window.addEventListener('hashchange', handleRouteChange);
  
  // FAB (mobile)
  if (elements.fab) {
    elements.fab.addEventListener('click', showQuickActions);
  }

  // Online/offline handlers
  window.addEventListener('online', handleOnlineStatus);
  window.addEventListener('offline', handleOfflineStatus);

  // Set initial offline indicator state
  if (!navigator.onLine) handleOfflineStatus();

  console.log('Event listeners initialized');
}

// Viewport management - Fixed implementation
function setViewport(viewport) {
  console.log('Setting viewport to:', viewport);
  appState.currentView = viewport;
  
  // Update body class
  document.body.className = viewport;
  
  // Update toggle buttons
  if (elements.desktopToggle) {
    elements.desktopToggle.classList.toggle('active', viewport === 'desktop');
  }
  if (elements.mobileToggle) {
    elements.mobileToggle.classList.toggle('active', viewport === 'mobile');
  }
  
  // Show/hide navigation based on viewport
  if (viewport === 'mobile') {
    if (elements.sidebar) elements.sidebar.style.display = 'none';
    if (elements.bottomNav) elements.bottomNav.style.display = 'flex';
    if (elements.fab) elements.fab.classList.remove('hidden');
  } else {
    if (elements.sidebar) elements.sidebar.style.display = 'block';
    if (elements.bottomNav) elements.bottomNav.style.display = 'none';
    if (elements.fab) elements.fab.classList.add('hidden');
  }
  
  // Update navigation after viewport change
  setTimeout(() => {
    updateNavigation();
  }, 100);
}

// Search functionality
function toggleSearch() {
  if (elements.searchBar) {
    elements.searchBar.classList.toggle('hidden');
    if (!elements.searchBar.classList.contains('hidden')) {
      elements.searchInput?.focus();
    }
  }
}

function performSearch() {
  const query = elements.searchInput?.value.toLowerCase().trim();
  if (!query) return;
  
  console.log('Searching for:', query);
  showModal('Search Results', `Searching for "${query}"... (Search functionality would be implemented here)`, [
    {text: 'OK', action: closeModal}
  ]);
}

function clearSearch() {
  if (elements.searchInput) elements.searchInput.value = '';
  toggleSearch();
}

// Handle offline/online state
function handleOfflineStatus() {
  appState.isOnline = false;
  if (elements.offlineIndicator) elements.offlineIndicator.classList.remove('hidden');
}

function handleOnlineStatus() {
  appState.isOnline = true;
  if (elements.offlineIndicator) elements.offlineIndicator.classList.add('hidden');
  syncOfflineData();
}

function syncOfflineData() {
  if (!appState.isOnline) return;

  offlineData.activityUpdates.forEach(data => {
    console.log('Syncing activity update', data);
    // Placeholder for real API call
  });
  offlineData.activityUpdates = [];
  localStorage.removeItem('offlineActivityUpdates');

  offlineData.beneficiaries.forEach(data => {
    console.log('Syncing beneficiary', data);
    // Placeholder for real API call
  });
  offlineData.beneficiaries = [];
  localStorage.removeItem('offlineBeneficiaries');
}

// Notification management
function toggleNotifications() {
  if (elements.notificationPanel) {
    elements.notificationPanel.classList.toggle('hidden');
    if (!elements.notificationPanel.classList.contains('hidden')) {
      renderNotifications();
    }
  }
}

function renderNotifications() {
  if (!elements.notificationList) return;
  
  const userNotifications = appData.notifications.slice(0, 5); // Show first 5 notifications
  
  elements.notificationList.innerHTML = userNotifications.map(notification => `
    <div class="notification-item ${notification.read ? '' : 'unread'}">
      <div class="notification-content">
        <div class="notification-icon">
          ${notification.type === 'success' ? '✅' : notification.type === 'warning' ? '⚠️' : notification.type === 'approval' ? '👋' : 'ℹ️'}
        </div>
        <div class="notification-text">
          <div class="notification-title">${notification.title}</div>
          <div class="notification-message">${notification.message}</div>
          <div class="notification-time">${notification.date}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// Router implementation
function initializeRouter() {
  const hash = window.location.hash.slice(1) || '/login';
  handleRoute(hash);
}

function navigateTo(route) {
  console.log('Navigating to:', route);
  window.location.hash = route;
}

function handleRouteChange() {
  const route = window.location.hash.slice(1);
  handleRoute(route);
}

function handleRoute(route) {
  console.log('Handling route:', route);
  session.currentRoute = route;
  updateBreadcrumb(route);
  
  const routeSegments = route.split('/').filter(Boolean);
  const routePath = routeSegments[0] || 'login';
  
  switch (routePath) {
    case 'login':
      renderLogin();
      break;
    case 'dashboard':
      if (session.user) {
        renderDashboard();
      } else {
        navigateTo('/login');
      }
      break;
    case 'projects':
      if (session.user) {
        if (routeSegments[1]) {
          renderProjectDetail(routeSegments[1]);
        } else {
          renderProjects();
        }
      } else {
        navigateTo('/login');
      }
      break;
    case 'activities':
      if (session.user) {
        renderActivities();
      } else {
        navigateTo('/login');
      }
      break;
    case 'beneficiaries':
      if (session.user) {
        renderBeneficiaries();
      } else {
        navigateTo('/login');
      }
      break;
    case 'expenses':
      if (session.user) {
        renderExpenses();
      } else {
        navigateTo('/login');
      }
      break;
    case 'approvals':
      if (session.user) {
        renderApprovals();
      } else {
        navigateTo('/login');
      }
      break;
    case 'reports':
      if (session.user) {
        renderReports();
      } else {
        navigateTo('/login');
      }
      break;
    case 'profile':
      if (session.user) {
        renderProfile();
      } else {
        navigateTo('/login');
      }
      break;
    case 'settings':
      if (session.user) {
        renderSettings();
      } else {
        navigateTo('/login');
      }
      break;
    default:
      render404();
  }
  
  updateNavigation();
}

// Render functions
function renderLogin() {
  if (!elements.app) return;
  
  elements.app.innerHTML = `
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <div class="login-logo">🏗️</div>
          <h2 class="login-title">Dilasa PMIS</h2>
          <p class="text-secondary">Project Management Information System</p>
          <p class="text-sm text-secondary">Community Development Through Technology</p>
        </div>
        
        <div class="form-group">
          <label class="form-label">Select Your Role</label>
          <div class="role-selector" id="roleSelector">
            <div class="role-option" data-role="project_administrator">
              <div class="role-icon">👨‍💼</div>
              <div class="role-name">Project Administrator</div>
              <div class="role-desc text-xs text-secondary mt-4">Full system access</div>
            </div>
            <div class="role-option" data-role="project_manager">
              <div class="role-icon">👩‍💼</div>
              <div class="role-name">Project Manager</div>
              <div class="role-desc text-xs text-secondary mt-4">Project oversight</div>
            </div>
            <div class="role-option" data-role="financial_team">
              <div class="role-icon">👨‍💻</div>
              <div class="role-name">Financial Team</div>
              <div class="role-desc text-xs text-secondary mt-4">Budget management</div>
            </div>
            <div class="role-option" data-role="field_facilitator">
              <div class="role-icon">👩‍🌾</div>
              <div class="role-name">Field Facilitator</div>
              <div class="role-desc text-xs text-secondary mt-4">Field operations</div>
            </div>
          </div>
        </div>
        
        <button class="btn btn--primary btn--full-width mobile-btn" id="loginButton">
          Login to System
        </button>
        
        <div class="text-center text-xs text-secondary mt-24">
          <p>For demo purposes, select any role to continue</p>
          <p>© 2024 Dilasa NGO. All rights reserved.</p>
        </div>
      </div>
    </div>
  `;
  
  // Add event listeners immediately after rendering - Fixed implementation
  setTimeout(() => {
    const roleSelector = document.getElementById('roleSelector');
    const loginButton = document.getElementById('loginButton');
    
    if (roleSelector) {
      roleSelector.addEventListener('click', function(e) {
        const roleOption = e.target.closest('.role-option');
        if (roleOption) {
          console.log('Role selected:', roleOption.dataset.role);
          document.querySelectorAll('.role-option').forEach(opt => opt.classList.remove('selected'));
          roleOption.classList.add('selected');
          session.selectedRole = roleOption.dataset.role;
        }
      });
    }
    
    if (loginButton) {
      loginButton.addEventListener('click', handleLogin);
    }
  }, 100);
}

function handleLogin() {
  console.log('Login attempted, selected role:', session.selectedRole);
  
  if (!session.selectedRole) {
    showModal('Select Role', 'Please select a role to continue', [
      {text: 'OK', action: closeModal}
    ]);
    return;
  }
  
  // Find user based on role
  const user = appData.users.find(u => u.role === session.selectedRole);
  if (user) {
    session.user = user;
    session.role = user.role;
    session.permissions = rolePermissions[user.role] || [];
    
    console.log('Login successful for user:', user.name, 'Role:', user.role);
    
    navigateTo('/dashboard');
  } else {
    console.error('User not found for role:', session.selectedRole);
  }
}

function renderDashboard() {
  if (!elements.app || !session.user) return;
  
  const roleData = getRoleSpecificDashboardData();
  
  elements.app.innerHTML = `
    <div class="dashboard-container">
      <div class="role-dashboard">
        <div class="role-header">
          <div class="role-avatar">${session.user.avatar}</div>
          <h2 class="role-title">Welcome, ${session.user.name}</h2>
          <p class="role-description">${getRoleDescription(session.user.role)}</p>
        </div>
        
        <div class="card-grid">
          ${roleData.cards.map(card => `
            <div class="dashboard-card ${card.clickable ? 'cursor-pointer' : ''}" ${card.action ? `onclick="${card.action}"` : ''}>
              <div class="card-header">
                <h3 class="card-title">${card.title}</h3>
                <span class="nav-icon">${card.icon}</span>
              </div>
              <div class="card-content">
                <div class="metric-value ${card.valueClass || ''}">${card.value}</div>
                <div class="metric-label">${card.label}</div>
                ${card.progress ? `
                  <div class="progress-bar mt-12">
                    <div class="progress-fill" style="width: ${card.progress}%"></div>
                  </div>
                  <div class="text-sm text-secondary mt-4">${card.progress}% ${card.progressLabel || 'Complete'}</div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
        
        ${roleData.sections ? roleData.sections.map(section => `
          <div class="card mt-24">
            <div class="card__body">
              <h4>${section.title}</h4>
              <div class="mt-16">
                ${section.content}
              </div>
            </div>
          </div>
        `).join('') : ''}
      </div>
    </div>
  `;
}

function getRoleSpecificDashboardData() {
  const role = session.user.role;
  
  switch (role) {
    case 'project_administrator':
      return {
        cards: [
          {title: 'Total Projects', value: appData.projects.length, label: 'Active projects', icon: '🏗️', clickable: true, action: "navigateTo('/projects')"},
          {title: 'Total Users', value: appData.users.length, label: 'System users', icon: '👥', clickable: true},
          {title: 'Total Budget', value: `₹${(appData.projects.reduce((sum, p) => sum + p.budget, 0) / 10000000).toFixed(1)}Cr`, label: 'Allocated funds', icon: '💰'},
          {title: 'Beneficiaries', value: appData.projects.reduce((sum, p) => sum + p.beneficiaries, 0), label: 'Lives impacted', icon: '🤝'},
          {title: 'Pending Approvals', value: appData.expenses.filter(e => e.status === 'Pending').length, label: 'Awaiting review', icon: '⏳', clickable: true, action: "navigateTo('/approvals')"},
          {title: 'System Health', value: '99.8%', label: 'Uptime this month', icon: '💚', valueClass: 'text-success'}
        ]
      };
      
    case 'project_manager':
      const activeProjects = appData.projects.filter(p => p.status === 'In Progress').length;
      const avgProgress = Math.round(appData.projects.reduce((sum, p) => sum + p.progress, 0) / appData.projects.length);
      return {
        cards: [
          {title: 'Active Projects', value: activeProjects, label: 'Projects in progress', icon: '🏗️', clickable: true, action: "navigateTo('/projects')"},
          {title: 'Activities Due', value: appData.activities.filter(a => a.status === 'In Progress').length, label: 'Requiring attention', icon: '📋', clickable: true, action: "navigateTo('/activities')"},
          {title: 'Avg Progress', value: `${avgProgress}%`, label: 'Across all projects', icon: '📊', progress: avgProgress, progressLabel: 'Overall'},
          {title: 'Team Members', value: appData.users.filter(u => u.role === 'field_facilitator').length, label: 'Field facilitators', icon: '👥'},
          {title: 'Budget Utilization', value: '68%', label: 'Of allocated funds', icon: '💰', progress: 68, progressLabel: 'Utilized'},
          {title: 'New Beneficiaries', value: '47', label: 'This month', icon: '🤝', valueClass: 'text-success'}
        ]
      };
      
    case 'financial_team':
      const pendingExpenses = appData.expenses.filter(e => e.status === 'Pending').length;
      const totalBudget = appData.projects.reduce((sum, p) => sum + p.budget, 0);
      const totalSpent = appData.projects.reduce((sum, p) => sum + p.spent, 0);
      const utilizationPercent = Math.round((totalSpent / totalBudget) * 100);
      return {
        cards: [
          {title: 'Pending Approvals', value: pendingExpenses, label: 'Expense requests', icon: '⏳', clickable: true, action: "navigateTo('/approvals')", valueClass: pendingExpenses > 0 ? 'text-warning' : ''},
          {title: 'Budget Utilization', value: `${utilizationPercent}%`, label: 'Of total allocation', icon: '💰', progress: utilizationPercent, progressLabel: 'Utilized'},
          {title: 'Total Budget', value: `₹${(totalBudget / 10000000).toFixed(1)}Cr`, label: 'Across all projects', icon: '🏦'},
          {title: 'Amount Spent', value: `₹${(totalSpent / 10000000).toFixed(1)}Cr`, label: 'To date', icon: '💸'},
          {title: 'This Month', value: `₹${(appData.expenses.filter(e => e.date.includes('2024-07')).reduce((sum, e) => sum + e.amount, 0) / 100000).toFixed(1)}L`, label: 'Expenses approved', icon: '📊'},
          {title: 'Avg Processing', value: '2.3 days', label: 'Approval time', icon: '⚡', valueClass: 'text-success'}
        ]
      };
      
    case 'field_facilitator':
      const myActivities = appData.activities.filter(a => a.assignedTo === session.user.name);
      const myPendingActivities = myActivities.filter(a => a.status === 'In Progress').length;
      return {
        cards: [
          {title: 'My Activities', value: myActivities.length, label: 'Total assigned', icon: '📋', clickable: true, action: "navigateTo('/activities')"},
          {title: 'In Progress', value: myPendingActivities, label: 'Activities pending', icon: '🔄', clickable: true, valueClass: myPendingActivities > 0 ? 'text-warning' : 'text-success'},
          {title: 'Data Collection', value: '23', label: 'Forms completed', icon: '📱', valueClass: 'text-success'},
          {title: 'Beneficiaries', value: myActivities.reduce((sum, a) => sum + (a.beneficiaries || 0), 0), label: 'Under my activities', icon: '🤝'},
          {title: 'GPS Locations', value: myActivities.filter(a => a.lat && a.lng).length, label: 'Coordinates captured', icon: '📍'},
          {title: 'Photos Uploaded', value: '156', label: 'This month', icon: '📸', valueClass: 'text-primary'}
        ],
        sections: [
          {
            title: 'Quick Data Collection',
            content: `
              <div class="mobile-btn-group">
                <button class="btn btn--primary mobile-btn" onclick="showDataCollectionForm()">
                  📱 New Activity Update
                </button>
                <button class="btn btn--secondary mobile-btn" onclick="showBeneficiaryForm()">
                  🤝 Register Beneficiary
                </button>
                <button class="btn btn--outline mobile-btn" onclick="navigateTo('/expenses')">
                  💰 Submit Expense
                </button>
              </div>
            `
          }
        ]
      };
      
    default:
      return {
        cards: [
          {title: 'Welcome', value: 'Hello!', label: 'Getting started', icon: '👋'}
        ]
      };
  }
}

function getRoleDescription(role) {
  const descriptions = {
    project_administrator: 'Complete system oversight and management capabilities',
    project_manager: 'Project coordination and team management dashboard',
    financial_team: 'Budget tracking and expense approval center',
    field_facilitator: 'Mobile-optimized field operations and data collection'
  };
  return descriptions[role] || 'User dashboard';
}

function renderProjects() {
  if (!elements.app) return;
  
  elements.app.innerHTML = `
    <div class="projects-container">
      <div class="flex justify-between items-center mb-24">
        <h2>Projects Overview</h2>
        <button class="btn btn--primary" onclick="showNewProjectForm()">➕ New Project</button>
      </div>
      
      <div class="project-grid">
        ${appData.projects.map(project => `
          <div class="project-card" onclick="navigateTo('/projects/${project.id}')">
            <div class="project-header">
              <div>
                <h3 class="project-title">${project.name}</h3>
                <p class="project-subtitle">${project.location}</p>
                <p class="text-sm text-secondary">${project.startDate} - ${project.endDate}</p>
              </div>
              <span class="status-badge status-badge--${project.status.toLowerCase().replace(' ', '-')}">${project.status}</span>
            </div>
            <div class="card-content">
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${project.progress}%"></div>
              </div>
              <div class="flex justify-between items-center mb-12">
                <span class="text-secondary">${project.progress}% Complete</span>
                <span class="font-semibold">₹${(project.budget / 100000).toFixed(1)}L</span>
              </div>
              <div class="project-meta">
                <div class="project-stat">
                  <div class="project-stat-value">${project.activities}</div>
                  <div class="project-stat-label">Activities</div>
                </div>
                <div class="project-stat">
                  <div class="project-stat-value">${project.beneficiaries}</div>
                  <div class="project-stat-label">Beneficiaries</div>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderProjectDetail(projectId) {
  const project = appData.projects.find(p => p.id == projectId);
  if (!project) {
    render404();
    return;
  }
  
  const projectActivities = appData.activities.filter(a => a.projectId == projectId);
  
  elements.app.innerHTML = `
    <div class="project-detail-container">
      <div class="flex justify-between items-center mb-24">
        <div>
          <h2>${project.name}</h2>
          <p class="text-secondary">${project.location} | ${project.startDate} - ${project.endDate}</p>
        </div>
        <span class="status-badge status-badge--${project.status.toLowerCase().replace(' ', '-')}">${project.status}</span>
      </div>
      
      <div class="card-grid mb-24">
        <div class="card">
          <div class="card__body">
            <h4>Project Progress</h4>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${project.progress}%"></div>
            </div>
            <p class="text-secondary">${project.progress}% Complete</p>
          </div>
        </div>
        <div class="card">
          <div class="card__body">
            <h4>Budget Information</h4>
            <div class="metric-value">₹${(project.budget / 100000).toFixed(1)}L</div>
            <p class="text-secondary">Total budget</p>
            <p class="text-sm">Spent: ₹${(project.spent / 100000).toFixed(1)}L</p>
          </div>
        </div>
        <div class="card">
          <div class="card__body">
            <h4>Beneficiaries</h4>
            <div class="metric-value">${project.beneficiaries}</div>
            <p class="text-secondary">People impacted</p>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card__body">
          <h4>Project Activities</h4>
          <div class="activity-list mt-16">
            ${projectActivities.map(activity => `
              <div class="activity-card">
                <div class="activity-header">
                  <div>
                    <h5>${activity.name}</h5>
                    <p class="text-secondary text-sm">${activity.type} • ${activity.location}</p>
                  </div>
                  <span class="status-badge status-badge--${activity.status.toLowerCase().replace(' ', '-')}">${activity.status}</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: ${activity.progress}%"></div>
                </div>
                <div class="activity-details">
                  <div class="activity-detail">
                    <span class="activity-detail-label">Assigned To</span>
                    <span class="activity-detail-value">${activity.assignedTo}</span>
                  </div>
                  <div class="activity-detail">
                    <span class="activity-detail-label">Beneficiaries</span>
                    <span class="activity-detail-value">${activity.beneficiaries}</span>
                  </div>
                  <div class="activity-detail">
                    <span class="activity-detail-label">Progress</span>
                    <span class="activity-detail-value">${activity.progress}%</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderActivities() {
  if (!elements.app) return;
  
  // Filter activities based on user role
  let activities = appData.activities;
  if (session.user.role === 'field_facilitator') {
    activities = appData.activities.filter(a => a.assignedTo === session.user.name);
  }
  
  elements.app.innerHTML = `
    <div class="activities-container">
      <div class="flex justify-between items-center mb-24">
        <h2>${session.user.role === 'field_facilitator' ? 'My Activities' : 'All Activities'}</h2>
      </div>
      
      <div class="activity-list">
        ${activities.map(activity => {
          const project = appData.projects.find(p => p.id === activity.projectId);
          return `
            <div class="activity-card">
              <div class="activity-header">
                <div>
                  <h5>${activity.name}</h5>
                  <p class="text-secondary text-sm">${activity.type} • ${project ? project.name : 'Unknown Project'}</p>
                  <p class="text-sm">${activity.location}</p>
                </div>
                <span class="status-badge status-badge--${activity.status.toLowerCase().replace(' ', '-')}">${activity.status}</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${activity.progress}%"></div>
              </div>
              <div class="activity-details">
                <div class="activity-detail">
                  <span class="activity-detail-label">Assigned To</span>
                  <span class="activity-detail-value">${activity.assignedTo}</span>
                </div>
                <div class="activity-detail">
                  <span class="activity-detail-label">Beneficiaries</span>
                  <span class="activity-detail-value">${activity.beneficiaries}</span>
                </div>
                <div class="activity-detail">
                  <span class="activity-detail-label">Progress</span>
                  <span class="activity-detail-value">${activity.progress}%</span>
                </div>
              </div>
              ${activity.targetDate ? `
                <div class="mt-12">
                  <span class="text-sm text-secondary">Target: ${activity.targetDate}</span>
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderBeneficiaries() {
  elements.app.innerHTML = `
    <div class="beneficiaries-container">
      <h2>Beneficiaries</h2>
      <p class="text-secondary mb-24">People impacted by our programs</p>
      
      <div class="card-grid">
        ${appData.beneficiaries.map(beneficiary => `
          <div class="beneficiary-card">
            <div class="beneficiary-header">
              <div>
                <h5 class="beneficiary-name">${beneficiary.name}</h5>
                <span class="text-sm text-secondary">${beneficiary.village}</span>
              </div>
              <span class="beneficiary-id">ID: ${beneficiary.id}</span>
            </div>
            <div class="beneficiary-details">
              <div class="activity-detail">
                <span class="activity-detail-label">Age</span>
                <span class="activity-detail-value">${beneficiary.age}</span>
              </div>
              <div class="activity-detail">
                <span class="activity-detail-label">Category</span>
                <span class="activity-detail-value">${beneficiary.category}</span>
              </div>
              <div class="activity-detail">
                <span class="activity-detail-label">Family Size</span>
                <span class="activity-detail-value">${beneficiary.familySize}</span>
              </div>
              <div class="activity-detail">
                <span class="activity-detail-label">Land Size</span>
                <span class="activity-detail-value">${beneficiary.landSize}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderExpenses() {
  elements.app.innerHTML = `
    <div class="expenses-container">
      <h2>Expense Management</h2>
      <p class="text-secondary mb-24">Track and manage project expenses</p>
      
      <div class="card">
        <div class="card__body">
          <h4>Recent Expenses</h4>
          <div class="mt-16">
            ${appData.expenses.map(expense => `
              <div class="flex justify-between items-center p-16 border-b">
                <div>
                  <h5>${expense.description}</h5>
                  <p class="text-secondary text-sm">Requested by: ${expense.requestedBy}</p>
                  <p class="text-sm">Date: ${expense.date}</p>
                </div>
                <div class="text-right">
                  <div class="font-semibold">₹${expense.amount.toLocaleString()}</div>
                  <span class="status-badge status-badge--${expense.status.toLowerCase().replace(' ', '-')}">${expense.status}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderApprovals() {
  const pendingExpenses = appData.expenses.filter(e => e.status === 'Pending');
  
  elements.app.innerHTML = `
    <div class="approvals-container">
      <h2>Pending Approvals</h2>
      <p class="text-secondary mb-24">Review and approve expense requests</p>
      
      <div class="card">
        <div class="card__body">
          ${pendingExpenses.length === 0 ? '<p class="text-center text-secondary p-32">No pending approvals</p>' : `
            ${pendingExpenses.map(expense => `
              <div class="flex justify-between items-center p-16 border-b">
                <div>
                  <h5>${expense.description}</h5>
                  <p class="text-secondary text-sm">Requested by: ${expense.requestedBy}</p>
                  <p class="text-sm">Amount: ₹${expense.amount.toLocaleString()}</p>
                </div>
                <div class="flex gap-8">
                  <button class="btn btn--primary btn--sm" onclick="approveExpense('${expense.id}')">Approve</button>
                  <button class="btn btn--secondary btn--sm">Reject</button>
                </div>
              </div>
            `).join('')}
          `}
        </div>
      </div>
    </div>
  `;
}

function approveExpense(expenseId) {
  const expense = appData.expenses.find(e => e.id == expenseId);
  if (expense) {
    expense.status = 'Approved';
    expense.approvedBy = session.user.name;
    showModal('Success', 'Expense approved successfully!', [
      {text: 'OK', action: () => { closeModal(); renderApprovals(); }}
    ]);
  }
}

function renderReports() {
  elements.app.innerHTML = `
    <div class="reports-container">
      <h2>Reports & Analytics</h2>
      <div class="card-grid">
        <div class="card">
          <div class="card__body">
            <h4>Project Status Summary</h4>
            <div class="chart-bars" style="height: 150px; display: flex; align-items: end; gap: 12px;">
              <div style="flex: 1; background: linear-gradient(to top, var(--color-primary), var(--color-primary-hover)); height: 30%; border-radius: 4px;"></div>
              <div style="flex: 1; background: linear-gradient(to top, var(--color-primary), var(--color-primary-hover)); height: 60%; border-radius: 4px;"></div>
              <div style="flex: 1; background: linear-gradient(to top, var(--color-primary), var(--color-primary-hover)); height: 10%; border-radius: 4px;"></div>
              <div style="flex: 1; background: linear-gradient(to top, var(--color-primary), var(--color-primary-hover)); height: 100%; border-radius: 4px;"></div>
            </div>
            <div class="flex justify-between mt-12 text-xs text-secondary">
              <span>Planning</span><span>Progress</span><span>Hold</span><span>Complete</span>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card__body">
            <h4>Key Metrics</h4>
            <div class="metric-value">₹${(appData.projects.reduce((sum, p) => sum + p.budget, 0) / 10000000).toFixed(1)}Cr</div>
            <div class="metric-label">Total Project Value</div>
            <div class="mt-16">
              <div class="flex justify-between mb-8">
                <span class="text-secondary">Beneficiaries:</span>
                <span>${appData.projects.reduce((sum, p) => sum + p.beneficiaries, 0)}</span>
              </div>
              <div class="flex justify-between mb-8">
                <span class="text-secondary">Activities:</span>
                <span>${appData.activities.length}</span>
              </div>
              <div class="flex justify-between mb-8">
                <span class="text-secondary">Completion Rate:</span>
                <span>${Math.round(appData.projects.reduce((sum, p) => sum + p.progress, 0) / appData.projects.length)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderProfile() {
  elements.app.innerHTML = `
    <div class="profile-container">
      <h2>User Profile</h2>
      <div class="card">
        <div class="card__body">
          <div class="flex items-center gap-20 mb-24">
            <div class="user-avatar" style="font-size: 48px;">${session.user.avatar}</div>
            <div>
              <h3>${session.user.name}</h3>
              <p class="text-secondary">${session.user.role.replace('_', ' ')}</p>
            </div>
          </div>
          <p><strong>Email:</strong> ${session.user.email}</p>
          <p><strong>Phone:</strong> ${session.user.phone}</p>
          <p><strong>Department:</strong> ${session.user.department}</p>
        </div>
      </div>
    </div>
  `;
}

function renderSettings() {
  elements.app.innerHTML = `
    <div class="settings-container">
      <h2>Settings</h2>
      <div class="card">
        <div class="card__body">
          <h4>Application Preferences</h4>
          <p>Settings panel for user preferences</p>
        </div>
      </div>
    </div>
  `;
}

function render404() {
  elements.app.innerHTML = `
    <div class="text-center py-64">
      <div class="text-4xl mb-16">🚧</div>
      <h2>Page Not Found</h2>
      <p class="text-secondary mb-24">The page you're looking for doesn't exist</p>
      <button class="btn btn--primary" onclick="navigateTo('/dashboard')">Go to Dashboard</button>
    </div>
  `;
}

// Navigation and breadcrumb management
function updateBreadcrumb(route) {
  const breadcrumbMap = {
    '/login': 'Login',
    '/dashboard': 'Dashboard',
    '/projects': 'Projects',
    '/activities': 'Activities',
    '/beneficiaries': 'Beneficiaries',
    '/expenses': 'Expenses',
    '/approvals': 'Pending Approvals',
    '/reports': 'Reports & Analytics',
    '/profile': 'User Profile',
    '/settings': 'Settings'
  };
  
  let breadcrumbText = breadcrumbMap[route] || 'Page';
  
  if (route.startsWith('/projects/') && route !== '/projects') {
    const projectId = route.split('/')[2];
    const project = appData.projects.find(p => p.id == projectId);
    breadcrumbText = `Projects > ${project ? project.name : 'Project Detail'}`;
  }
  
  if (elements.breadcrumb) {
    elements.breadcrumb.innerHTML = `<span>${breadcrumbText}</span>`;
  }
}

function updateNavigation() {
  if (!session.user) {
    if (elements.sidebar) elements.sidebar.style.display = 'none';
    if (elements.bottomNav) elements.bottomNav.style.display = 'none';
    if (elements.logoutBtn) elements.logoutBtn.style.display = 'none';
    return;
  }
  
  // Update user info
  if (elements.userName) elements.userName.textContent = session.user.name;
  if (elements.userRole) elements.userRole.textContent = session.user.role.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  if (elements.userAvatar) elements.userAvatar.textContent = session.user.avatar;
  if (elements.logoutBtn) elements.logoutBtn.style.display = 'inline-block';
  
  // Show navigation based on viewport
  if (appState.currentView === 'mobile') {
    if (elements.sidebar) elements.sidebar.style.display = 'none';
    if (elements.bottomNav) elements.bottomNav.style.display = 'flex';
    updateMobileNavigation();
  } else {
    if (elements.sidebar) elements.sidebar.style.display = 'block';
    if (elements.bottomNav) elements.bottomNav.style.display = 'none';
    updateDesktopNavigation();
  }
}

function updateDesktopNavigation() {
  const navigation = getNavigationForRole(session.user.role);
  
  if (elements.navMenu) {
    elements.navMenu.innerHTML = navigation.map(item => 
      `<a href="#${item.route}" class="nav-item ${session.currentRoute.startsWith(item.route) ? 'active' : ''}">
        <span class="nav-icon">${item.icon}</span>
        <span>${item.label}</span>
      </a>`
    ).join('');
  }
}

function updateMobileNavigation() {
  const navigation = getMobileNavigationForRole(session.user.role);
  
  if (elements.bottomNav) {
    elements.bottomNav.innerHTML = navigation.map(item => 
      `<a href="#${item.route}" class="bottom-nav-item ${session.currentRoute.startsWith(item.route) ? 'active' : ''}">
        <span class="bottom-nav-icon">${item.icon}</span>
        <span>${item.label}</span>
      </a>`
    ).join('');
  }
}

function getNavigationForRole(role) {
  const baseNavigation = [
    {route: '/dashboard', icon: '📊', label: 'Dashboard'},
    {route: '/projects', icon: '🏗️', label: 'Projects'},
    {route: '/activities', icon: '📋', label: 'Activities'},
    {route: '/beneficiaries', icon: '🤝', label: 'Beneficiaries'}
  ];
  
  switch (role) {
    case 'project_administrator':
      return [
        ...baseNavigation,
        {route: '/expenses', icon: '💰', label: 'Expenses'},
        {route: '/approvals', icon: '✅', label: 'Approvals'},
        {route: '/reports', icon: '📈', label: 'Reports'},
        {route: '/settings', icon: '⚙️', label: 'Settings'}
      ];
      
    case 'project_manager':
      return [
        ...baseNavigation,
        {route: '/expenses', icon: '💰', label: 'Expenses'},
        {route: '/approvals', icon: '✅', label: 'Approvals'},
        {route: '/reports', icon: '📈', label: 'Reports'}
      ];
      
    case 'financial_team':
      return [
        {route: '/dashboard', icon: '📊', label: 'Dashboard'},
        {route: '/projects', icon: '🏗️', label: 'Projects'},
        {route: '/expenses', icon: '💰', label: 'Expenses'},
        {route: '/approvals', icon: '✅', label: 'Approvals'},
        {route: '/reports', icon: '📈', label: 'Reports'}
      ];
      
    case 'field_facilitator':
      return [
        {route: '/dashboard', icon: '📊', label: 'Dashboard'},
        {route: '/activities', icon: '📋', label: 'My Activities'},
        {route: '/beneficiaries', icon: '🤝', label: 'Beneficiaries'},
        {route: '/expenses', icon: '💰', label: 'Expenses'}
      ];
      
    default:
      return baseNavigation;
  }
}

function getMobileNavigationForRole(role) {
  switch (role) {
    case 'field_facilitator':
      return [
        {route: '/dashboard', icon: '🏠', label: 'Home'},
        {route: '/activities', icon: '📋', label: 'Tasks'},
        {route: '/beneficiaries', icon: '🤝', label: 'People'},
        {route: '/profile', icon: '👤', label: 'Profile'}
      ];
      
    default:
      return [
        {route: '/dashboard', icon: '🏠', label: 'Home'},
        {route: '/projects', icon: '🏗️', label: 'Projects'},
        {route: '/activities', icon: '📋', label: 'Activities'},
        {route: '/profile', icon: '👤', label: 'Profile'}
      ];
  }
}

// Modal management
function showModal(title, body, actions = [{text: 'OK', action: closeModal}]) {
  if (elements.modalTitle) elements.modalTitle.textContent = title;
  if (elements.modalBody) elements.modalBody.innerHTML = body;
  if (elements.modalFooter) {
    elements.modalFooter.innerHTML = actions.map(action => 
      `<button class="btn ${action.primary ? 'btn--primary' : 'btn--secondary'}" onclick="(${action.action})()">${action.text}</button>`
    ).join('');
  }
  if (elements.modal) elements.modal.classList.remove('hidden');
}

function closeModal() {
  if (elements.modal) elements.modal.classList.add('hidden');
}

// Utility functions for demo
function showDataCollectionForm() {
  const myActivities = appData.activities.filter(a => a.assignedTo === session.user.name);
  const options = myActivities.map(a => `<option value="${a.id}">${a.name}</option>`).join('');
  const formHtml = `
    <form id="dataCollectionForm">
      <label>Activity</label>
      <select name="activityId">${options}</select>
      <label>Progress (%)</label>
      <input type="number" name="progress" min="0" max="100" required>
      <label>Notes</label>
      <textarea name="notes"></textarea>
      <label>Photo</label>
      <input type="file" accept="image/*" capture="environment" name="photo">
      <input type="hidden" name="lat">
      <input type="hidden" name="lng">
    </form>
  `;
  showModal('Data Collection', formHtml, [
    {text: 'Save', action: submitDataCollectionForm, primary: true},
    {text: 'Cancel', action: closeModal}
  ]);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const form = document.getElementById('dataCollectionForm');
      form.lat.value = pos.coords.latitude;
      form.lng.value = pos.coords.longitude;
    });
  }
}

function showBeneficiaryForm() {
  const formHtml = `
    <form id="beneficiaryForm">
      <label>Name</label>
      <input name="name" required>
      <label>Village</label>
      <input name="village" required>
      <label>Age</label>
      <input type="number" name="age" required>
      <label>Category</label>
      <input name="category">
      <label>Photo</label>
      <input type="file" accept="image/*" capture="environment" name="photo">
      <input type="hidden" name="lat">
      <input type="hidden" name="lng">
    </form>
  `;
  showModal('Beneficiary Registration', formHtml, [
    {text: 'Save', action: submitBeneficiaryForm, primary: true},
    {text: 'Cancel', action: closeModal}
  ]);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const form = document.getElementById('beneficiaryForm');
      form.lat.value = pos.coords.latitude;
      form.lng.value = pos.coords.longitude;
    });
  }
}

function submitDataCollectionForm() {
  const form = document.getElementById('dataCollectionForm');
  const data = {
    activityId: parseInt(form.activityId.value, 10),
    progress: parseInt(form.progress.value, 10),
    notes: form.notes.value,
    photo: form.photo.files[0] ? form.photo.files[0].name : null,
    lat: form.lat.value,
    lng: form.lng.value,
    timestamp: new Date().toISOString(),
    user: session.user ? session.user.name : ''
  };

  if (appState.isOnline) {
    console.log('Submitting activity update', data);
  } else {
    offlineData.activityUpdates.push(data);
    localStorage.setItem('offlineActivityUpdates', JSON.stringify(offlineData.activityUpdates));
    alert('Saved offline. Will sync when online.');
  }
  closeModal();
}

function submitBeneficiaryForm() {
  const form = document.getElementById('beneficiaryForm');
  const data = {
    name: form.name.value,
    village: form.village.value,
    age: parseInt(form.age.value, 10),
    category: form.category.value,
    photo: form.photo.files[0] ? form.photo.files[0].name : null,
    lat: form.lat.value,
    lng: form.lng.value,
    timestamp: new Date().toISOString(),
    user: session.user ? session.user.name : ''
  };

  if (appState.isOnline) {
    console.log('Submitting beneficiary', data);
  } else {
    offlineData.beneficiaries.push(data);
    localStorage.setItem('offlineBeneficiaries', JSON.stringify(offlineData.beneficiaries));
    alert('Saved offline. Will sync when online.');
  }
  closeModal();
}

function showNewProjectForm() {
  showModal('New Project', 'Project creation form would open here', [
    {text: 'Close', action: closeModal}
  ]);
}

function showQuickActions() {
  const actionButtons = `
    <div class="mobile-btn-group">
      <button class="btn btn--primary btn--full-width mb-12" onclick="showDataCollectionForm()">
        📱 Data Collection
      </button>
      <button class="btn btn--secondary btn--full-width mb-12" onclick="navigateTo('/expenses')">
        💰 New Expense
      </button>
      <button class="btn btn--outline btn--full-width mb-12" onclick="navigateTo('/beneficiaries')">
        🤝 View Beneficiaries
      </button>
    </div>
  `;
  
  showModal('Quick Actions', actionButtons, [
    {text: 'Close', action: closeModal}
  ]);
}

function logout() {
  session = { user: null, role: null, selectedRole: null, currentRoute: '/login', permissions: [], preferences: session.preferences };
  navigateTo('/login');
}

// Expose necessary functions to global scope
window.navigateTo = navigateTo;
window.showModal = showModal;
window.closeModal = closeModal;
window.logout = logout;
window.approveExpense = approveExpense;
window.showDataCollectionForm = showDataCollectionForm;
window.showBeneficiaryForm = showBeneficiaryForm;
window.showNewProjectForm = showNewProjectForm;
window.showQuickActions = showQuickActions;
window.submitDataCollectionForm = submitDataCollectionForm;
window.submitBeneficiaryForm = submitBeneficiaryForm;
