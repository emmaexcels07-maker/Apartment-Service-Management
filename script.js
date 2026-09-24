/* ================= DATA ================= */

const defaultData = {
    facilities: [
        {
            id: 1, name: "Eko Heights", address: "Victoria Island, Lagos",
            description: "A premium residential building located in the heart of Victoria Island.",
            totalFloors: 10, status: "Active",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 2, name: "Ocean View Residence", address: "Lekki Phase 1, Lagos",
            description: "Modern apartments with a peaceful environment and premium facilities.",
            totalFloors: 8, status: "Active",
            image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 3, name: "Palm Court Apartments", address: "Ikoyi, Lagos",
            description: "Luxury residential apartments designed for comfortable family living.",
            totalFloors: 12, status: "Active",
            image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 4, name: "Emerald Gardens", address: "Ikeja GRA, Lagos",
            description: "Beautiful serviced apartments in a quiet and secure environment.",
            totalFloors: 6, status: "Active",
            image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 5, name: "City View Towers", address: "Yaba, Lagos",
            description: "Contemporary apartments close to major business and educational areas.",
            totalFloors: 15, status: "Active",
            image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80"
        }
    ],

    apartments: [
        {
            id: 101, facilityId: 1, apartmentNumber: "A101",
            name: "Luxury 2 Bedroom", type: "2 Bedroom",
            bedrooms: 2, bathrooms: 2, price: 180000, status: "Available",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
            description: "Modern two-bedroom apartment with premium furniture.",
            amenities: ["WiFi", "Parking", "Security", "Swimming Pool"]
        },
        {
            id: 102, facilityId: 1, apartmentNumber: "A102",
            name: "Executive 1 Bedroom", type: "1 Bedroom",
            bedrooms: 1, bathrooms: 1, price: 120000, status: "Available",
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
            description: "Stylish one-bedroom apartment for professionals.",
            amenities: ["WiFi", "Parking", "Gym"]
        },
        {
            id: 103, facilityId: 1, apartmentNumber: "A103",
            name: "Premium 3 Bedroom", type: "3 Bedroom",
            bedrooms: 3, bathrooms: 3, price: 250000, status: "Available",
            image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
            description: "Spacious three-bedroom apartment suitable for families.",
            amenities: ["WiFi", "Swimming Pool", "Gym", "Parking"]
        },
        {
            id: 201, facilityId: 2, apartmentNumber: "B201",
            name: "Ocean 2 Bedroom", type: "2 Bedroom",
            bedrooms: 2, bathrooms: 2, price: 190000, status: "Available",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
            description: "Beautiful two-bedroom apartment near the waterfront.",
            amenities: ["WiFi", "Pool", "Parking", "Security"]
        },
        {
            id: 202, facilityId: 2, apartmentNumber: "B202",
            name: "Ocean Executive Suite", type: "1 Bedroom",
            bedrooms: 1, bathrooms: 1, price: 140000, status: "Available",
            image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
            description: "Comfortable executive apartment with modern finishes.",
            amenities: ["WiFi", "Gym", "Parking"]
        },
        {
            id: 301, facilityId: 3, apartmentNumber: "C301",
            name: "Palm 3 Bedroom Deluxe", type: "3 Bedroom",
            bedrooms: 3, bathrooms: 3, price: 280000, status: "Available",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
            description: "Large family apartment with premium interior design.",
            amenities: ["WiFi", "Pool", "Gym", "Security", "Parking"]
        },
        {
            id: 302, facilityId: 3, apartmentNumber: "C302",
            name: "Palm 2 Bedroom", type: "2 Bedroom",
            bedrooms: 2, bathrooms: 2, price: 210000, status: "Available",
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
            description: "Elegant two-bedroom apartment in Ikoyi.",
            amenities: ["WiFi", "Parking", "Security"]
        },
        {
            id: 401, facilityId: 4, apartmentNumber: "D401",
            name: "Emerald Family Apartment", type: "3 Bedroom",
            bedrooms: 3, bathrooms: 3, price: 220000, status: "Available",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
            description: "Comfortable family apartment in Ikeja GRA.",
            amenities: ["WiFi", "Parking", "Security", "Gym"]
        },
        {
            id: 402, facilityId: 4, apartmentNumber: "D402",
            name: "Emerald Studio", type: "Studio",
            bedrooms: 1, bathrooms: 1, price: 95000, status: "Available",
            image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
            description: "Affordable modern studio apartment.",
            amenities: ["WiFi", "Security"]
        },
        {
            id: 501, facilityId: 5, apartmentNumber: "E501",
            name: "City View 2 Bedroom", type: "2 Bedroom",
            bedrooms: 2, bathrooms: 2, price: 150000, status: "Available",
            image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
            description: "Modern two-bedroom apartment with city views.",
            amenities: ["WiFi", "Parking", "Security"]
        },
        {
            id: 502, facilityId: 5, apartmentNumber: "E502",
            name: "City View Studio", type: "Studio",
            bedrooms: 1, bathrooms: 1, price: 80000, status: "Available",
            image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
            description: "Compact studio apartment for short or long stays.",
            amenities: ["WiFi", "Security"]
        }
    ],

    customers: [
        {
            id: 1, name: "John Doe", email: "john@example.com",
            phone: "08012345678", address: "Lagos, Nigeria", status: "Active"
        },
        {
            id: 2, name: "Sarah Williams", email: "sarah@example.com",
            phone: "08098765432", address: "Lekki, Lagos", status: "Active"
        }
    ],

    staff: [
        {
            id: 1, name: "Michael James", email: "michael@apartment.com",
            phone: "08111111111", role: "Manager", status: "Active", username: "staff", password: "staff123"
        },
        {
            id: 2, name: "David Smith", email: "david@apartment.com",
            phone: "08222222222", role: "Maintenance", status: "Active", username: "david", password: "david123"
        }
    ],

    bookings: [
        {
            id: 1001, customerId: 1, customerName: "John Doe",
            facilityId: 1, facilityName: "Eko Heights",
            apartmentId: 101, apartmentNumber: "A101",
            apartmentName: "Luxury 2 Bedroom",
            checkIn: "2026-09-15", checkOut: "2026-09-18",
            guests: 2, total: 540000,
            status: "Confirmed", paymentStatus: "Paid",
            createdAt: "2026-09-01"
        },
        {
            id: 1002, customerId: 2, customerName: "Sarah Williams",
            facilityId: 2, facilityName: "Ocean View Residence",
            apartmentId: 202, apartmentNumber: "B202",
            apartmentName: "Ocean Executive Suite",
            checkIn: "2026-09-20", checkOut: "2026-09-22",
            guests: 1, total: 280000,
            status: "Pending", paymentStatus: "Pending",
            createdAt: "2026-09-05"
        }
    ],

    currentUser: null,
    activeDashboardTab: "overview"
};


/* ================= STORAGE ================= */

const STORAGE_KEY = "apartmentManagementData";

function clone(data) {
    return JSON.parse(JSON.stringify(data));
}

function loadData() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || clone(defaultData);
    } catch {
        return clone(defaultData);
    }
}

let appData = loadData();

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

function resetData() {
    appData = clone(defaultData);
    saveData();
    renderAll();
}


/* ================= HELPERS ================= */

const facilities = () => appData.facilities;
const apartments = () => appData.apartments;
const customers = () => appData.customers;
const staff = () => appData.staff;
const bookings = () => appData.bookings;
const currentUser = () => appData.currentUser;
const facilityById = id => facilities().find(x => x.id === Number(id));
const apartmentById = id => apartments().find(x => x.id === Number(id));
const role = () => String(currentUser()?.role || "").toLowerCase().replace(/\s/g, "");
const money = value =>
    new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    }).format(Number(value || 0));
const dateInput = date => date.toISOString().split("T")[0];

function normalizeStatus(value) {
    return String(value || "").trim();
}

function parseDate(dateValue) {
    if (!dateValue) return null;

    const timestamp = new Date(`${dateValue}T12:00:00`);

    return Number.isNaN(timestamp.getTime()) ? null : timestamp;
}

function dateRangeOverlaps(startA, endA, startB, endB) {
    const firstStart = parseDate(startA);
    const firstEnd = parseDate(endA);
    const secondStart = parseDate(startB);
    const secondEnd = parseDate(endB);

    if (!firstStart || !firstEnd || !secondStart || !secondEnd) {
        return false;
    }

    return firstStart < secondEnd && secondStart < firstEnd;
}

function findConflictingBooking(apartmentId, checkIn, checkOut, ignoreBookingId = null) {
    return bookings().find(booking => {
        if (Number(booking.apartmentId) !== Number(apartmentId)) return false;
        if (ignoreBookingId && Number(booking.id) === Number(ignoreBookingId)) return false;

        const status = normalizeStatus(booking.status);
        if (["Cancelled", "Rejected"].includes(status)) return false;

        return dateRangeOverlaps(booking.checkIn, booking.checkOut, checkIn, checkOut);
    });
}

function syncApartmentAvailability() {
    const today = dateInput(new Date());

    apartments().forEach(apartment => {
        const activeBookings = bookings().filter(booking => {
            if (Number(booking.apartmentId) !== Number(apartment.id)) return false;

            const status = normalizeStatus(booking.status);
            if (["Cancelled", "Rejected"].includes(status)) return false;

            return parseDate(booking.checkOut) >= parseDate(today);
        });

        apartment.status = activeBookings.length ? "Booked" : "Available";
    });
}

function demoUser(type) {
    const users = {
        customer: {
            id: 99, name: "Jane Customer",
            email: "customer@stayease.com",
            phone: "08055550000", role: "Customer"
        },
        staff: {
            id: 100, name: "Michael James",
            email: "michael@apartment.com",
            phone: "08111111111", role: "Staff"
        },
        admin: {
            id: 101, name: "Administrator",
            email: "admin@stayease.com",
            phone: "08000000000", role: "Administrator"
        }
    };

    return { ...users[type] };
}

/* ================= LOGIN ================= */
const loginForm = document.getElementById("loginForm");
loginForm?.addEventListener("submit", e => {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
    const selectedRole = document.getElementById("loginRole").value;
    const error = document.getElementById("loginError");

    let user = null;
    if (selectedRole === "admin" && username === "admin" && password === "admin123") {
        user = demoUser("admin");
    } else if (selectedRole === "staff") {
        const found = staff().find(s => s.username === username && s.password === password && s.status === "Active");
        if (found) user = { id: found.id, name: found.name, email: found.email, phone: found.phone, role: "Staff" };
    }

    if (!user) {
        error.textContent = "Invalid username, role, or password.";
        error.style.display = "block";
        return;
    }

    error.style.display = "none";
    appData.currentUser = user;

    saveData();
    openDashboard();
});


function togglePassword() {
    const input = document.getElementById("loginPassword");
    input.type = input.type === "password" ? "text" : "password";
}

function forgotPassword(e) {
    e.preventDefault();
    alert("Please contact the StayEase administrator to reset your password.");
}

/* ================= PAGE CONTROL ================= */

function openDashboard() {
    document.getElementById("loginPage")?.classList.add("hidden");
    document.getElementById("customerPage")?.classList.add("hidden");
    document.getElementById("dashboardPage")?.classList.remove("hidden");
    renderDashboard();
}

function openLogin() {
    document.getElementById("loginPage")?.classList.remove("hidden");
    document.getElementById("customerPage")?.classList.add("hidden");
    document.getElementById("dashboardPage")?.classList.add("hidden");
}

function closeLogin() {
    document.getElementById("loginPage")?.classList.add("hidden");
    document.getElementById("customerPage")?.classList.remove("hidden");
    document.getElementById("dashboardPage")?.classList.add("hidden");
}

function login(type) {
    appData.currentUser = demoUser(type);
    saveData();
    openDashboard();
}

function logout() {
    appData.currentUser = null;
    appData.activeDashboardTab = "overview";
    saveData();
    document.getElementById("dashboardPage")?.classList.add("hidden");
    document.getElementById("customerPage")?.classList.remove("hidden");
}

function toggleSidebar() {
    document.querySelector(".sidebar")?.classList.toggle("open");
}


/* ================= APARTMENTS ================= */

function renderApartments() {
    const grid = document.getElementById("apartmentGrid");
    if (!grid) return;

    syncApartmentAvailability();

    const location = document.getElementById("locationFilter")?.value || "all";
    const type = document.getElementById("typeFilter")?.value || "all";
    const price = document.getElementById("priceFilter")?.value || "all";

    const list = apartments()
        .filter(a => {
            const facility = facilityById(a.facilityId);

            return (
                (location === "all" || facility?.address.includes(location)) &&
                (type === "all" || a.type === type) &&
                (price === "all" || a.price <= Number(price))
            );
        })
        .sort((a, b) => a.price - b.price);

    grid.innerHTML = list.length
        ? list.map((a, i) => {
            const f = facilityById(a.facilityId);

            return `
                <article class="apartment-card">
                    <div class="apartment-image ${["", "green", "orange", "blue"][i % 4]}"
                        style="background-image:linear-gradient(180deg,rgba(23,21,43,.05),rgba(23,21,43,.55)),url('${a.image}')">
                        <span class="apartment-tag">${a.status}</span>
                        <span class="apartment-tag">${a.type}</span>
                    </div>

                    <div class="apartment-info">
                        <h3>${a.name}</h3>
                        <p>📍 ${f?.address || "Location unavailable"}</p>

                        <div class="apartment-details">
                            <span>🛏 ${a.bedrooms} Beds</span>
                            <span>🛁 ${a.bathrooms} Baths</span>
                            <span>📐 ${a.apartmentNumber}</span>
                        </div>

                        <div class="apartment-bottom">
                            <div class="price">
                                ${money(a.price)} <small>/ month</small>
                            </div>
                            <button class="btn btn-primary"
                                onclick="openBooking(${a.id})">
                                Book Now
                            </button>
                        </div>
                    </div>
                </article>
            `;
        }).join("")
        : `<div class="empty-state">No apartments match your current filter.</div>`;
}

function filterApartments() {
    renderApartments();
}

function resetFilters() {

    ["locationFilter", "typeFilter", "priceFilter"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "all";
    });

    renderApartments();
}

/* ================= APARTMENT MANAGEMENT ================= */

function openApartmentModal() {

    if (role() !== "administrator") {
        alert("Administrator access required.");
        return;
    }

    if (facilities().length === 0) {
        alert(
            "You need to create a facility before adding an apartment."
        );

        return;
    }

    /*
     * Rebuild the facility options
     * so newly-created facilities appear.
     */

    const select =
        document.getElementById("apartmentFacility");

    if (select) {

        select.innerHTML = `
            <option value="">
                Select facility
            </option>

            ${facilities().map(f => `
                <option value="${f.id}">
                    ${f.name} — ${f.address}
                </option>
            `).join("")}
        `;
    }

    document.getElementById("apartmentForm")
        ?.reset();

    document.getElementById("apartmentModal")
        ?.classList.add("active");
}


function closeApartmentModal() {

    document.getElementById("apartmentModal")
        ?.classList.remove("active");

    document.getElementById("apartmentForm")
        ?.reset();
}


function handleApartmentSubmit(e) {

    e.preventDefault();

    if (role() !== "administrator") {
        alert("Administrator access required.");
        return;
    }

    const facilityId =
        Number(
            document.getElementById("apartmentFacility").value
        );

    const facility =
        facilityById(facilityId);

    if (!facility) {
        alert("Please select a valid facility.");
        return;
    }

    const apartmentNumber =
        document.getElementById("apartmentNumber")
            .value
            .trim();

    const name =
        document.getElementById("apartmentName")
            .value
            .trim();

    const type =
        document.getElementById("apartmentType")
            .value;

    const bedrooms =
        Number(
            document.getElementById("apartmentBedrooms")
                .value
        );

    const bathrooms =
        Number(
            document.getElementById("apartmentBathrooms")
                .value
        );

    const price =
        Number(
            document.getElementById("apartmentPrice")
                .value
        );

    const image =
        document.getElementById("apartmentImage")
            .value
            .trim();

    const description =
        document.getElementById("apartmentDescription")
            .value
            .trim();

    const amenities =
        document.getElementById("apartmentAmenities")
            .value
            .split(",")
            .map(item => item.trim())
            .filter(Boolean);

    if (
        !apartmentNumber ||
        !name ||
        !type ||
        bedrooms < 1 ||
        bathrooms < 1 ||
        price < 0 ||
        !description
    ) {
        alert("Please complete all required fields.");
        return;
    }

    /*
     * Prevent duplicate apartment numbers
     * inside the same facility.
     */

    const duplicate =
        apartments().some(
            a =>
                Number(a.facilityId) === facilityId &&
                a.apartmentNumber.toLowerCase() ===
                apartmentNumber.toLowerCase()
        );

    if (duplicate) {

        alert(
            `Apartment ${apartmentNumber} already exists in ${facility.name}.`
        );

        return;
    }

    const apartment = {

        id: Date.now(),

        facilityId,

        apartmentNumber,

        name,

        type,

        bedrooms,

        bathrooms,

        price,

        status: "Available",

        image:
            image ||
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",

        description,

        amenities
    };

    apartments().push(apartment);

    saveData();

    closeApartmentModal();

    renderDashboard();

    /*
     * Refresh customer apartment cards
     */

    renderApartments();

    alert(
        `${name} was added to ${facility.name} successfully.`
    );
}


function deleteApartment(id) {
    if (role() !== "administrator") {
        alert("Administrator access required.");
        return;
    }

    const apartment = apartmentById(id);

    if (!apartment) return;

    const facility = facilityById(apartment.facilityId);

    // Check whether this apartment has bookings
    const linkedBookings = bookings().filter(
        b => Number(b.apartmentId) === Number(id)
    );

    if (linkedBookings.length > 0) {
        alert(
            `You cannot delete "${apartment.name}" yet.\n\n` +
            `${linkedBookings.length} booking(s) are connected to this apartment.\n\n` +
            `Delete or archive those bookings first.`
        );

        return;
    }

    if (
        !confirm(
            `Delete "${apartment.name}" (${apartment.apartmentNumber})?\n\n` +
            `Facility: ${facility?.name || "Unknown"}`
        )
    ) {
        return;
    }

    appData.apartments = apartments().filter(
        a => Number(a.id) !== Number(id)
    );

    saveData();

    renderDashboard();
    renderApartments();

    alert("Apartment deleted successfully.");
}


/* ================= FACILITIES ================= */

function renderFacilities() {
    const grid = document.getElementById("facilityGrid");
    if (!grid) return;

    const icons = ["🏢", "🏖️", "🌿", "🌳", "🌆"];

    grid.innerHTML = facilities().map((f, i) => `
        <article class="facility-card">
            <div class="facility-image"
                style="background-image:linear-gradient(180deg,rgba(23,21,43,.05),rgba(23,21,43,.6)),url('${f.image}')">
                <span class="facility-icon">${icons[i % icons.length]}</span>
            </div>

            <h3>${f.name}</h3>
            <p>${f.address}</p>
            <p>${f.description}</p>
        </article>
    `).join("");
}

/* ================= FACILITY MANAGEMENT ================= */

function openFacilityModal() {
    if (role() !== "administrator") {
        alert("Administrator access required.");
        return;
    }

    editingFacilityId = null;
    document.getElementById("facilityForm")?.reset();
    document.getElementById("facilityModal")?.classList.add("active");
}

function closeFacilityModal() {
    document.getElementById("facilityModal")?.classList.remove("active");
    document.getElementById("facilityForm")?.reset();
    editingFacilityId = null;
}

function handleFacilitySubmit(e) {
    e.preventDefault();

    if (role() !== "administrator") {
        alert("Administrator access required.");
        return;
    }

    const name = document.getElementById("facilityName").value.trim();
    const address = document.getElementById("facilityAddress").value.trim();
    const description = document.getElementById("facilityDescription").value.trim();
    const totalFloors = Number(document.getElementById("facilityFloors").value);
    const image = document.getElementById("facilityImage").value.trim();

    if (!name || !address || !description || totalFloors < 1) {
        alert("Please complete all required facility fields.");
        return;
    }

    if (editingFacilityId) {
        const facility = facilityById(editingFacilityId);
        if (!facility) return;

        facility.name = name;
        facility.address = address;
        facility.description = description;
        facility.totalFloors = totalFloors;

        if (image) facility.image = image;

        bookings().forEach(b => {
            if (Number(b.facilityId) === Number(facility.id)) {
                b.facilityName = name;
            }
        });

        saveData();
        closeFacilityModal();
        renderDashboard();
        renderFacilities();
        alert("Facility updated successfully.");
        return;
    }

    facilities().push({
        id: Date.now(),
        name,
        address,
        description,
        totalFloors,
        status: "Active",
        image: image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    });

    saveData();
    closeFacilityModal();
    renderDashboard();
    renderFacilities();
    alert("Facility added successfully.");
}


function deleteFacility(id) {

    if (role() !== "administrator") {
        alert("Administrator access required.");
        return;
    }

    const facility =
        facilityById(id);

    if (!facility) return;

    const linkedApartments =
        apartments().filter(
            a => Number(a.facilityId) === Number(id)
        );

    if (linkedApartments.length > 0) {

        alert(
            `You cannot delete "${facility.name}" yet.\n\n` +
            `${linkedApartments.length} apartment(s) are still linked to this facility.\n\n` +
            `Delete or move those apartments first.`
        );

        return;
    }

    if (
        !confirm(
            `Delete facility "${facility.name}"?`
        )
    ) {
        return;
    }

    appData.facilities =
        facilities().filter(
            f => Number(f.id) !== Number(id)
        );

    saveData();

    renderDashboard();

    alert("Facility deleted successfully.");
}

/* ================= DASHBOARD ================= */

function renderDashboard() {
    const user = currentUser();

    if (!user) {
        document.getElementById("dashboardPage")?.classList.add("hidden");
        document.getElementById("customerPage")?.classList.remove("hidden");
        return;
    }

    document.getElementById("dashboardPage")?.classList.remove("hidden");
    document.getElementById("customerPage")?.classList.add("hidden");

    document.getElementById("userAvatar").textContent =
        user.name[0].toUpperCase();

    document.getElementById("userName").textContent = user.name;
    document.getElementById("userRole").textContent = user.role;

    const tab = appData.activeDashboardTab || "overview";

    document.getElementById("dashboardLabel").textContent =
        tab === "overview" ? "DASHBOARD" : "";

    const titles = {
        overview: "Overview",
        apartments: "Apartments Management",
        facilities: "Facilities Management",
        customers: "Customers Management",
        staff: "Staff Management",
        bookings: "Bookings Management"
    };

    document.getElementById("dashboardTitle").textContent =
        titles[tab] || "Dashboard";

    renderNavigation();

    // Only show stats on Overview
    const statsGrid = document.getElementById("statsGrid");

    if (statsGrid) {
        if (tab === "overview") {
            statsGrid.style.display = "";
            renderStats();
        } else {
            statsGrid.style.display = "none";
        }
    }

    renderContent();
}


/* ================= NAVIGATION ================= */

function renderNavigation() {
    const nav = document.getElementById("dashboardNav");
    if (!nav) return;

    const items = [
        ["overview", "Overview", ["customer", "staff", "administrator"]],
        ["apartments", "Apartments", ["staff", "administrator"]],
        ["facilities", "Facilities", ["administrator"]],
        ["customers", "Customers", ["administrator"]],
        ["staff", "Staff", ["administrator"]],
        ["bookings", "Bookings", ["customer", "staff", "administrator"]]
    ];

    nav.innerHTML = items
        .filter(x => x[2].includes(role()))
        .map(x => `
            <button class="${appData.activeDashboardTab === x[0] ? "active" : ""}"
                data-nav="${x[0]}">
                ${x[1]}
            </button>
        `).join("");

    nav.querySelectorAll("button").forEach(btn =>
        btn.onclick = () => {
            appData.activeDashboardTab = btn.dataset.nav;
            renderDashboard();
        }
    );
}


/* ================= DASHBOARD STATS ================= */

function renderStats() {
    const grid = document.getElementById("statsGrid");
    if (!grid) return;

    let stats;

    if (role() === "customer") {
        const mine = bookings().filter(
            b =>
                Number(b.customerId) === Number(currentUser().id) ||
                b.customerName === currentUser().name
        );

        stats = [
            ["Bookings", mine.length, "📅"],
            ["Upcoming Stays", mine.filter(b => ["Confirmed", "Pending"].includes(normalizeStatus(b.status))).length, "🏡"],
            ["Spent", money(mine.reduce((s, b) => s + +b.total, 0)), "💰"],
            ["Fav. Property", mine[0]?.facilityName || "N/A", "⭐"]
        ];
    } else {
        stats = [
            ["Apartments", apartments().length, "🏠"],
            ["Active Bookings", bookings().filter(b => ["Confirmed", "Pending"].includes(normalizeStatus(b.status))).length, "📌"],
            ["Customers", customers().length, "👥"],
            ["Revenue", money(bookings().reduce((s, b) => s + +b.total, 0)), "💸"]
        ];
    }

    grid.innerHTML = stats.map(([label, value, icon]) => `
        <div class="stat-card">
            <div class="stat-top">
                <span>${label}</span>
                <div class="stat-icon">${icon}</div>
            </div>
            <strong>${value}</strong>
        </div>
    `).join("");
}


/* ================= DASHBOARD TABLES ================= */

function table(title, headers, rows) {
    return `
        <div class="dashboard-card">
            <div class="dashboard-card-header">
                <h3>${title}</h3>
            </div>

            <table class="data-table">
                <thead>
                    <tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr>
                </thead>
                <tbody>${rows.join("")}</tbody>
            </table>
        </div>
    `;
}

function bookingStatusLabel(booking) {
    const status = normalizeStatus(booking.status);

    if (status === "Pending") return "Awaiting Confirmation";
    if (status === "Paid") return "Confirmed";
    if (status === "Confirmed") return "Confirmed";

    return status || "Pending";
}

function bookingStatusClass(booking) {
    return bookingStatusLabel(booking).toLowerCase().replace(/\s+/g, "-");
}

let selectedFacilityId = null;
let openActionMenuId = null;

function viewFacility(id) {
    selectedFacilityId = Number(id);
    renderDashboard();
}

function backToFacilities() {
    selectedFacilityId = null;
    renderDashboard();
}

function toggleActionMenu(id, event) {
    event?.stopPropagation();

    openActionMenuId =
        openActionMenuId === id ? null : id;

    renderDashboard();
}


function renderContent() {
    const root = document.getElementById("dashboardContent");
    if (!root) return;

    const tab = appData.activeDashboardTab;

    if (tab === "overview") {
        const rows = bookings().slice(0, 5).map(b => `
            <tr>
                <td>${b.id}</td>
                <td>${b.apartmentName}</td>
                <td><button class="customer-name-btn" onclick="openCustomerPanel(${b.customerId}, '${b.customerName.replace(/'/g, "\\'")}')">${b.customerName}</button></td>
                <td>${b.checkIn} - ${b.checkOut}</td>
                <td>${money(b.total)}</td>
                <td><span class="status ${bookingStatusClass(b)}">${bookingStatusLabel(b)}</span></td>
            </tr>
        `);

        root.innerHTML = table(
            role() === "customer" ? "My recent bookings" : "Recent bookings",
            ["ID", "Apartment", "Customer", "Dates", "Total", "Status"],
            rows
        );

        return;
    }


    if (tab === "apartments") {

        root.innerHTML = `
        <div class="dashboard-card">

            <div class="dashboard-card-header">

                <h3>Apartment Inventory</h3>

                ${role() === "administrator"
                ? `
                            <button
                                class="btn btn-primary"
                                onclick="openApartmentModal()"
                            >
                                + Add Apartment
                            </button>
                        `
                : ""
            }

            </div>

            <div class="table-scroll">

                <table class="data-table">

                    <thead>
                        <tr>
                            <th>Unit</th>
                            <th>Apartment</th>
                            <th>Facility</th>
                            <th>Type</th>
                            <th>Bedrooms</th>
                            <th>Price</th>
                            <th>Status</th>

                            ${role() === "administrator"
                ? `<th>Action</th>`
                : ""
            }
                        </tr>
                    </thead>

                    <tbody>

                        ${apartments().map(a => {

                const facility =
                    facilityById(a.facilityId);

                return `
                                <tr>

                                    <td>
                                        ${a.apartmentNumber}
                                    </td>

                                    <td>
                                        ${a.name}
                                    </td>

                                    <td>
                                        <strong>
                                            ${facility?.name || "Unknown"}
                                        </strong>

                                        <small class="table-subtext">
                                            ${facility?.address || ""}
                                        </small>
                                    </td>

                                    <td>
                                        ${a.type}
                                    </td>

                                    <td>
                                        ${a.bedrooms}
                                    </td>

                                    <td>
                                        ${money(a.price)}
                                    </td>

                                    <td>
                                        <span class="status confirmed">
                                            ${a.status}
                                        </span>
                                    </td>

                                    ${role() === "administrator"
                        ? `
                                                <td>
                                                    <button
                                                        class="action-btn delete"
                                                        onclick="deleteApartment(${a.id})"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            `
                        : ""
                    }

                                </tr>
                            `;
            }).join("")}

                    </tbody>

                </table>

            </div>

        </div>
    `;

        return;
    }
    if (tab === "facilities") {

        if (role() !== "administrator") {
            root.innerHTML = `
            <div class="empty-state">
                You do not have permission to manage facilities.
            </div>
        `;
            return;
        }

        // =========================================
        // SHOW ONE FACILITY + ITS APARTMENTS
        // =========================================

        if (selectedFacilityId) {

            const facility = facilityById(selectedFacilityId);

            if (!facility) {
                selectedFacilityId = null;
                renderDashboard();
                return;
            }

            const facilityApartments = apartments().filter(
                a => Number(a.facilityId) === Number(facility.id)
            );

            root.innerHTML = `

            <div class="facility-detail-header">

                <div>
                    <button
                        class="back-btn"
                        onclick="backToFacilities()"
                    >
                        ← Back to Facilities
                    </button>

                    <h2>${facility.name}</h2>

                    <p>
                        📍 ${facility.address}
                    </p>
                </div>

                <div class="facility-detail-actions">

                    <button
                        class="btn btn-primary"
                        onclick="openApartmentModalForFacility(${facility.id})"
                    >
                        + Add Apartment
                    </button>

                    <div class="action-menu-wrapper">

                        <button
                            class="menu-dots"
                            onclick="toggleActionMenu(${facility.id}, event)"
                        >
                            ⋮
                        </button>

                        ${openActionMenuId === facility.id
                    ? `
                                    <div class="action-menu">

                                        <button
                                            onclick="openEditFacilityModal(${facility.id})"
                                        >
                                            ✏️ Edit Facility
                                        </button>

                                        <button
                                            class="danger"
                                            onclick="deleteFacility(${facility.id})"
                                        >
                                            🗑️ Delete Facility
                                        </button>

                                    </div>
                                `
                    : ""
                }

                    </div>

                </div>

            </div>


            <div class="facility-summary">

                <div>
                    <span>Floors</span>
                    <strong>${facility.totalFloors}</strong>
                </div>

                <div>
                    <span>Apartments</span>
                    <strong>${facilityApartments.length}</strong>
                </div>

                <div>
                    <span>Status</span>
                    <strong>${facility.status}</strong>
                </div>

            </div>


            <div class="dashboard-card">

                <div class="dashboard-card-header">

                    <h3>
                        Apartments in ${facility.name}
                    </h3>

                </div>

                <div class="table-scroll">

                    <table class="data-table">

                        <thead>
                            <tr>
                                <th>Unit</th>
                                <th>Apartment</th>
                                <th>Type</th>
                                <th>Bedrooms</th>
                                <th>Bathrooms</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>

                            ${facilityApartments.length

                    ? facilityApartments.map(a => `

                                        <tr>

                                            <td>
                                                ${a.apartmentNumber}
                                            </td>

                                            <td>
                                                <strong>
                                                    ${a.name}
                                                </strong>
                                            </td>

                                            <td>
                                                ${a.type}
                                            </td>

                                            <td>
                                                ${a.bedrooms}
                                            </td>

                                            <td>
                                                ${a.bathrooms}
                                            </td>

                                            <td>
                                                ${money(a.price)}
                                            </td>

                                            <td>
                                                <span class="status confirmed">
                                                    ${a.status}
                                                </span>
                                            </td>

                                            <td>

                                                <div class="action-menu-wrapper">

                                                    <button
                                                        class="menu-dots"
                                                        onclick="toggleActionMenu(${a.id}, event)"
                                                    >
                                                        ⋮
                                                    </button>

                                                    ${openActionMenuId === a.id
                            ? `
                                                                <div class="action-menu">

                                                                    <button
                                                                        onclick="openEditApartmentModal(${a.id})"
                                                                    >
                                                                        ✏️ Edit
                                                                    </button>

                                                                    <button
                                                                        class="danger"
                                                                        onclick="deleteApartment(${a.id})"
                                                                    >
                                                                        🗑️ Delete
                                                                    </button>

                                                                </div>
                                                            `
                            : ""
                        }

                                                </div>

                                            </td>

                                        </tr>

                                    `).join("")

                    : `
                                        <tr>
                                            <td
                                                colspan="8"
                                                class="empty-state"
                                            >
                                                No apartments have been added to this facility yet.
                                            </td>
                                        </tr>
                                    `
                }

                        </tbody>

                    </table>

                </div>

            </div>
        `;

            return;
        }


        // =========================================
        // FACILITY LIST
        // =========================================

        root.innerHTML = `

        <div class="facility-list-section">

            <div class="dashboard-card-header">

                <h3>Facility List</h3>

                <button
                    class="btn btn-primary"
                    onclick="openFacilityModal()"
                >
                    + Add Facility
                </button>

            </div>

            <div class="management-grid">

                ${facilities().map(f => {

            const apartmentCount =
                apartments().filter(
                    a =>
                        Number(a.facilityId) ===
                        Number(f.id)
                ).length;

            return `

                        <div
                            class="management-card facility-clickable"
                            onclick="viewFacility(${f.id})"
                        >

                            <div class="facility-card-menu">

                                <button
                                    class="menu-dots"
                                    onclick="toggleActionMenu(${f.id}, event)"
                                >
                                    ⋮
                                </button>

                                ${openActionMenuId === f.id
                    ? `
                                            <div
                                                class="action-menu"
                                                onclick="event.stopPropagation()"
                                            >

                                                <button
                                                    onclick="openEditFacilityModal(${f.id})"
                                                >
                                                    ✏️ Edit
                                                </button>

                                                <button
                                                    class="danger"
                                                    onclick="deleteFacility(${f.id})"
                                                >
                                                    🗑️ Delete
                                                </button>

                                            </div>
                                        `
                    : ""
                }

                            </div>


                            <img
                                src="${f.image}"
                                alt="${f.name}"
                            >


                            <div class="management-card-body">

                                <h3>
                                    ${f.name}
                                </h3>

                                <p>
                                    📍 ${f.address}
                                </p>

                                <p>
                                    ${f.description}
                                </p>


                                <div class="management-meta">

                                    <span>
                                        ${f.totalFloors} Floors
                                    </span>

                                    <span>
                                        ${apartmentCount} Apartments
                                    </span>

                                    <span>
                                        ${f.status}
                                    </span>

                                </div>


                                <button
                                    class="view-apartments-btn"
                                    onclick="event.stopPropagation(); viewFacility(${f.id})"
                                >
                                    View Apartments →
                                </button>

                            </div>

                        </div>

                    `;
        }).join("")}

            </div>

        </div>
    `;

        return;
    }


    if (tab === "customers") {
        root.innerHTML = table(
            "Customer records",
            ["ID", "Name", "Email", "Phone", "Status"],
            customers().map(c => `
                <tr>
                    <td>${c.id}</td>
                    <td>${c.name}</td>
                    <td>${c.email}</td>
                    <td>${c.phone}</td>
                    <td>${c.status}</td>
                </tr>
            `)
        );

        return;
    }


    if (tab === "staff") {
        root.innerHTML = `
          <div class="dashboard-card">
            <div class="dashboard-card-header">
              <div><h3>Staff Accounts</h3><p class="table-subtext">Create and manage staff login accounts.</p></div>
              <button class="btn btn-primary" onclick="openStaffModal()">+ Add Staff</button>
            </div>
            <div class="staff-card-grid">
              ${staff().map(s => `
                <article class="staff-card">
                  <div class="staff-avatar">${s.name.charAt(0).toUpperCase()}</div>
                  <div class="staff-card-info"><h3>${s.name}</h3><p>${s.role}</p><small>${s.email}</small><small>@${s.username || "no-login"}</small></div>
                  <button class="action-btn delete" onclick="deleteStaff(${s.id})">Delete</button>
                </article>`).join("") || '<div class="empty-state">No staff accounts yet.</div>'}
            </div>
          </div>`;
        return;
    }


    root.innerHTML = `
        <div class="dashboard-card">
            <div class="dashboard-card-header">
                <h3>Booking ledger</h3>
                ${["staff", "administrator"].includes(role())
            ? `<button class="btn btn-primary" onclick="openStaffBooking()">+ Add Booking</button>`
            : ""
        }
            </div>
            <div class="table-scroll">
                <table class="data-table">
                    <thead><tr>${["ID", "Customer", "Apartment", "Check-in", "Total", "Status"].map(h => `<th>${h}</th>`).join("")}</tr></thead>
                    <tbody>
                        ${bookings().map(b => `
                            <tr>
                                <td>${b.id}</td>
                                <td><button class="customer-name-btn" onclick="openCustomerPanel(${b.customerId}, '${b.customerName.replace(/'/g, "\\'")}')">${b.customerName}</button></td>
                                <td>${b.apartmentName}</td>
                                <td>${b.checkIn}</td>
                                <td>${money(b.total)}</td>
                                <td><span class="status ${bookingStatusClass(b)}">${bookingStatusLabel(b)}</span></td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}


/* ================= BOOKINGS ================= */

function openBooking(id) {
    const apartment = apartmentById(id);

    if (!apartment) {
        alert("Apartment not found.");
        return;
    }

    const facility = facilityById(apartment.facilityId);

    const today = new Date();

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    document.getElementById("bookingApartmentId").value = apartment.id;

    document.getElementById("bookingApartmentName").value =
        `${apartment.name} • ${facility?.name || "Unknown Facility"}`;

    document.getElementById("checkIn").value =
        dateInput(today);

    document.getElementById("checkOut").value =
        dateInput(tomorrow);

    document.getElementById("bookingCustomerName").value = "";
    document.getElementById("bookingCustomerEmail").value = "";
    document.getElementById("bookingCustomerPhone").value = "";
    document.getElementById("guestCount").value = 1;
    document.getElementById("specialRequest").value = "";

    updateBookingTotal();

    document.getElementById("bookingModal")?.classList.add("active");
}

function closeBooking() {
    document.getElementById("bookingModal")?.classList.remove("active");
    bookingForm?.reset();
}

function openStaffBooking() {
    if (!["staff", "administrator"].includes(role())) {
        alert("Only staff or administrators can add bookings.");
        return;
    }

    const apartment = apartments().find(a => a.status === "Available") || apartments()[0];

    if (!apartment) {
        alert("Add an apartment before creating a booking.");
        return;
    }

    openBooking(apartment.id);
}

function openCustomerPanel(customerId, customerName) {
    const customer = customers().find(c => Number(c.id) === Number(customerId)) ||
        customers().find(c => c.name === customerName);
    const customerBookings = bookings().filter(b =>
        Number(b.customerId) === Number(customer?.id) || b.customerName === customerName
    );

    document.getElementById("customerPanelName").textContent = customer?.name || customerName;
    document.getElementById("customerPanelContact").textContent = customer?.email || "No email on file";
    document.getElementById("customerPanelDetails").innerHTML = `
        <div><span>Phone</span><strong>${customer?.phone || "Not provided"}</strong></div>
        <div><span>Address</span><strong>${customer?.address || "Not provided"}</strong></div>
        <div><span>Status</span><strong>${customer?.status || "Active"}</strong></div>
    `;
    document.getElementById("customerPanelBookings").innerHTML = customerBookings.length
        ? customerBookings.map(b => `
            <div class="customer-booking-item">
                <strong>${b.apartmentName}</strong>
                <span>${b.checkIn} to ${b.checkOut}</span>
                <small>${money(b.total)} · ${bookingStatusLabel(b)}</small>
                ${["staff", "administrator"].includes(role())
                ? `<div class="customer-booking-actions">
                        ${b.paymentStatus === "Pending"
                    ? `<button class="action-btn confirm-payment" onclick="confirmPayment(${b.id})">Confirm Payment</button>`
                    : ""
                }
                        <button class="action-btn delete" onclick="deleteBooking(${b.id})">Delete</button>
                    </div>`
                : ""
            }
            </div>
        `).join("")
        : `<p class="panel-empty">No bookings found.</p>`;

    document.getElementById("customerPanelBackdrop")?.classList.add("active");
    document.getElementById("customerSidePanel")?.classList.add("active");
    document.getElementById("customerSidePanel")?.setAttribute("aria-hidden", "false");
}

function closeCustomerPanel() {
    document.getElementById("customerPanelBackdrop")?.classList.remove("active");
    document.getElementById("customerSidePanel")?.classList.remove("active");
    document.getElementById("customerSidePanel")?.setAttribute("aria-hidden", "true");
}

function handleBookingSubmit(e) {
    e.preventDefault();

    const apartmentId =
        document.getElementById("bookingApartmentId").value;

    const apartment = apartmentById(apartmentId);

    if (!apartment) {
        alert("Apartment not found.");
        return;
    }

    const customerName =
        document.getElementById("bookingCustomerName").value.trim();

    const customerEmail =
        document.getElementById("bookingCustomerEmail").value.trim();

    const customerPhone =
        document.getElementById("bookingCustomerPhone").value.trim();

    const customerAddress = "Not provided";

    const checkIn =
        document.getElementById("checkIn").value;

    const checkOut =
        document.getElementById("checkOut").value;

    const guests =
        Number(document.getElementById("guestCount").value || 1);

    const specialRequest =
        document.getElementById("specialRequest").value.trim();

    if (
        !customerName ||
        !customerEmail ||
        !customerPhone ||
        !checkIn ||
        !checkOut
    ) {
        alert("Please fill in all required fields.");
        return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
        alert("Check-out date must be later than check-in date.");
        return;
    }

    if (guests < 1 || guests > Math.max(1, apartment.bedrooms + 2)) {
        alert(`Guest count should fit the apartment capacity (${Math.max(1, apartment.bedrooms + 2)} max).`);
        return;
    }

    const conflictingBooking = findConflictingBooking(apartment.id, checkIn, checkOut);
    if (conflictingBooking) {
        alert(
            `Sorry, ${apartment.name} is already reserved for the selected dates.\n\n` +
            `Existing booking: ${conflictingBooking.checkIn} to ${conflictingBooking.checkOut}`
        );
        return;
    }

    const facility = facilityById(apartment.facilityId);

    const nights = Math.ceil(
        (new Date(checkOut) - new Date(checkIn)) / 86400000
    );

    const total = apartment.price * nights;

    /*
     * Automatically create customer record
     * if the customer does not already exist.
     */

    let customer = customers().find(
        c =>
            c.email.toLowerCase() === customerEmail.toLowerCase() ||
            c.phone === customerPhone
    );

    if (!customer) {

        customer = {
            id: Date.now(),

            name: customerName,
            email: customerEmail,
            phone: customerPhone,
            address: customerAddress,

            status: "Active"
        };

        customers().push(customer);
    } else {

        customer.name = customerName;
        customer.email = customerEmail;
        customer.phone = customerPhone;
        customer.address = customerAddress;
    }

    /*
     * Create booking
     */

    const booking = {

        id: Date.now(),

        customerId: customer.id,

        customerName,
        customerEmail,
        customerPhone,
        customerAddress,

        facilityId: apartment.facilityId,
        facilityName: facility?.name || "Unknown Facility",

        apartmentId: apartment.id,
        apartmentNumber: apartment.apartmentNumber,
        apartmentName: apartment.name,

        checkIn,
        checkOut,

        guests,

        specialRequest,

        total,

        status: "Pending",
        paymentStatus: "Pending",

        createdAt: dateInput(new Date())
    };

    bookings().unshift(booking);

    saveData();

    closeBooking();

    alert(
        `Booking request submitted successfully!\n\n` +
        `Apartment: ${apartment.name}\n` +
        `Facility: ${facility?.name || "Unknown"}\n` +
        `Total: ${money(total)}`
    );

    renderAll();
}

function updateBookingTotal() {
    const apartmentId =
        document.getElementById("bookingApartmentId")?.value;

    const apartment = apartmentById(apartmentId);

    if (!apartment) return;

    const checkIn =
        document.getElementById("checkIn")?.value;

    const checkOut =
        document.getElementById("checkOut")?.value;

    const totalElement =
        document.getElementById("bookingTotalPreview");

    if (!totalElement) return;

    if (!checkIn || !checkOut) {
        totalElement.textContent = money(0);
        return;
    }

    const nights = Math.ceil(
        (new Date(checkOut) - new Date(checkIn)) / 86400000
    );

    if (nights <= 0) {
        totalElement.textContent = money(0);
        return;
    }

    totalElement.textContent =
        money(apartment.price * nights);
}

function confirmPayment(id) {
    if (!["staff", "administrator"].includes(role())) {
        alert("Only staff or administrators can confirm payments.");
        return;
    }

    const booking = bookings().find(b => Number(b.id) === Number(id));

    if (!booking || booking.paymentStatus !== "Pending") return;

    booking.paymentStatus = "Paid";
    booking.status = "Confirmed";

    saveData();
    renderDashboard();
    openCustomerPanel(booking.customerId, booking.customerName);
    alert(`Payment confirmed for booking ${booking.id}.`);
}

function deleteBooking(id) {
    if (!["staff", "administrator"].includes(role())) {
        alert("Only staff or administrators can delete bookings.");
        return;
    }

    const booking = bookings().find(
        b => Number(b.id) === Number(id)
    );

    if (!booking) return;

    if (
        !confirm(
            `Delete booking ${booking.id}?\n\n` +
            `Customer: ${booking.customerName}\n` +
            `Apartment: ${booking.apartmentName}`
        )
    ) {
        return;
    }

    appData.bookings = bookings().filter(
        b => Number(b.id) !== Number(id)
    );

    saveData();

    closeCustomerPanel();
    renderDashboard();

    alert("Booking deleted successfully.");
}

document.getElementById("checkIn")?.addEventListener("change", updateBookingTotal);

document.getElementById("checkOut")?.addEventListener("change", updateBookingTotal);


/* ================= START APP ================= */

function renderAll() {
    renderApartments();
    renderFacilities();
    renderDashboard();
}

const bookingForm = document.getElementById("bookingForm");
const apartmentForm = document.getElementById("apartmentForm");
const facilityForm = document.getElementById("facilityForm");

bookingForm?.addEventListener("submit", handleBookingSubmit);
apartmentForm?.addEventListener("submit", handleApartmentSubmit);
facilityForm?.addEventListener("submit", handleFacilitySubmit);

document.getElementById("checkIn")?.addEventListener("change", updateBookingTotal);
document.getElementById("checkOut")?.addEventListener("change", updateBookingTotal);

window.openLogin = openLogin;
window.closeLogin = closeLogin;
window.login = login;
window.logout = logout;
window.filterApartments = filterApartments;
window.resetFilters = resetFilters;
window.openFacilityModal = openFacilityModal;
window.closeFacilityModal = closeFacilityModal;
window.deleteFacility = deleteFacility;
window.openApartmentModal = openApartmentModal;
window.closeApartmentModal = closeApartmentModal;
window.deleteApartment = deleteApartment;
window.toggleSidebar = toggleSidebar;
window.openBooking = openBooking;
window.openStaffBooking = openStaffBooking;
window.closeBooking = closeBooking;
window.openCustomerPanel = openCustomerPanel;
window.closeCustomerPanel = closeCustomerPanel;
window.confirmPayment = confirmPayment;
window.deleteBooking = deleteBooking;
window.togglePassword = togglePassword;
window.forgotPassword = forgotPassword;
window.resetData = resetData;
window.viewFacility = viewFacility;
window.backToFacilities = backToFacilities;
window.toggleActionMenu = toggleActionMenu;
window.openApartmentModalForFacility = openApartmentModalForFacility;
window.openEditFacilityModal = openEditFacilityModal;
window.openEditApartmentModal = openEditApartmentModal;

renderAll();

let editingFacilityId = null;
let editingApartmentId = null;

function openEditFacilityModal(id) {
    const facility = facilityById(id);
    if (!facility) return;

    editingFacilityId = Number(id);
    openActionMenuId = null;

    document.getElementById("facilityName").value = facility.name;
    document.getElementById("facilityAddress").value = facility.address;
    document.getElementById("facilityDescription").value = facility.description;
    document.getElementById("facilityFloors").value = facility.totalFloors;
    document.getElementById("facilityImage").value = facility.image || "";
    document.getElementById("facilityModal")?.classList.add("active");
}

function openApartmentModalForFacility(facilityId) {
    if (role() !== "administrator") {
        alert("Administrator access required.");
        return;
    }

    editingApartmentId = null;
    openApartmentModal();

    const select = document.getElementById("apartmentFacility");
    if (select) {
        select.value = String(facilityId);
    }
}

function openEditApartmentModal(id) {
    const apartment = apartmentById(id);
    if (!apartment) return;

    editingApartmentId = Number(id);
    openActionMenuId = null;

    if (role() !== "administrator") {
        alert("Administrator access required.");
        return;
    }

    openApartmentModal();
    editingApartmentId = Number(id);

    const select = document.getElementById("apartmentFacility");
    if (select) select.value = String(apartment.facilityId);

    document.getElementById("apartmentNumber").value = apartment.apartmentNumber;
    document.getElementById("apartmentName").value = apartment.name;
    document.getElementById("apartmentType").value = apartment.type;
    document.getElementById("apartmentBedrooms").value = apartment.bedrooms;
    document.getElementById("apartmentBathrooms").value = apartment.bathrooms;
    document.getElementById("apartmentPrice").value = apartment.price;
    document.getElementById("apartmentImage").value = apartment.image || "";
    document.getElementById("apartmentDescription").value = apartment.description || "";
    document.getElementById("apartmentAmenities").value = (apartment.amenities || []).join(", ");
}

function handleApartmentSubmit(e) {
    e.preventDefault();

    if (role() !== "administrator") {
        alert("Administrator access required.");
        return;
    }

    const facilityId = Number(document.getElementById("apartmentFacility").value);
    const facility = facilityById(facilityId);
    if (!facility) {
        alert("Please select a valid facility.");
        return;
    }

    const apartmentNumber = document.getElementById("apartmentNumber").value.trim();
    const name = document.getElementById("apartmentName").value.trim();
    const type = document.getElementById("apartmentType").value;
    const bedrooms = Number(document.getElementById("apartmentBedrooms").value);
    const bathrooms = Number(document.getElementById("apartmentBathrooms").value);
    const price = Number(document.getElementById("apartmentPrice").value);
    const image = document.getElementById("apartmentImage").value.trim();
    const description = document.getElementById("apartmentDescription").value.trim();
    const amenities = document.getElementById("apartmentAmenities").value.split(",").map(item => item.trim()).filter(Boolean);

    if (!apartmentNumber || !name || !type || bedrooms < 1 || bathrooms < 1 || price < 0 || !description) {
        alert("Please complete all required fields.");
        return;
    }

    if (editingApartmentId) {
        const apartment = apartmentById(editingApartmentId);
        if (!apartment) return;

        const duplicate = apartments().some(a =>
            Number(a.id) !== Number(editingApartmentId) &&
            Number(a.facilityId) === facilityId &&
            a.apartmentNumber.toLowerCase() === apartmentNumber.toLowerCase()
        );

        if (duplicate) {
            alert(`Apartment ${apartmentNumber} already exists in ${facility.name}.`);
            return;
        }

        apartment.facilityId = facilityId;
        apartment.apartmentNumber = apartmentNumber;
        apartment.name = name;
        apartment.type = type;
        apartment.bedrooms = bedrooms;
        apartment.bathrooms = bathrooms;
        apartment.price = price;
        apartment.description = description;
        apartment.amenities = amenities;

        if (image) apartment.image = image;

        bookings().forEach(b => {
            if (Number(b.apartmentId) === Number(apartment.id)) {
                b.facilityId = facilityId;
                b.facilityName = facility.name;
                b.apartmentNumber = apartmentNumber;
                b.apartmentName = name;
            }
        });

        saveData();
        closeApartmentModal();
        renderDashboard();
        renderApartments();
        alert("Apartment updated successfully.");
        editingApartmentId = null;
        return;
    }

    const duplicate = apartments().some(a =>
        Number(a.facilityId) === facilityId &&
        a.apartmentNumber.toLowerCase() === apartmentNumber.toLowerCase()
    );

    if (duplicate) {
        alert(`Apartment ${apartmentNumber} already exists in ${facility.name}.`);
        return;
    }

    apartments().push({
        id: Date.now(),
        facilityId,
        apartmentNumber,
        name,
        type,
        bedrooms,
        bathrooms,
        price,
        status: "Available",
        image: image || "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
        description,
        amenities
    });

    saveData();
    closeApartmentModal();
    renderDashboard();
    renderApartments();
    alert(`${name} was added to ${facility.name} successfully.`);
}

/* ================= STAFF ACCOUNTS ================= */
function openStaffModal() {
    if (role() !== "administrator") return alert("Administrator access required.");
    document.getElementById("staffForm")?.reset();
    document.getElementById("staffModal")?.classList.add("active");
}
function closeStaffModal() { document.getElementById("staffModal")?.classList.remove("active"); }
document.getElementById("staffForm")?.addEventListener("submit", e => {
    e.preventDefault();
    if (role() !== "administrator") return;
    const username = document.getElementById("staffUsername").value.trim().toLowerCase();
    if (staff().some(s => (s.username || "").toLowerCase() === username)) return alert("That username already exists.");
    staff().push({
        id: Date.now(), name: document.getElementById("staffName").value.trim(), username,
        password: document.getElementById("staffPassword").value, email: document.getElementById("staffEmail").value.trim(),
        phone: document.getElementById("staffPhone").value.trim(), role: document.getElementById("staffJobRole").value.trim(), status: "Active"
    });
    saveData(); closeStaffModal(); renderDashboard(); alert("Staff account created successfully.");
});
function deleteStaff(id) {
    if (role() !== "administrator") return;
    const person = staff().find(s => s.id === id);
    if (person && confirm(`Delete ${person.name}'s staff account?`)) { appData.staff = staff().filter(s => s.id !== id); saveData(); renderDashboard(); }
}
