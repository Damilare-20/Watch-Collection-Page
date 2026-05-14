const watchProducts = [
  {
    id: 1,
    name: "Rolex Submariner Date",
    brand: "Rolex",
    price: "$12,500",
    currency: "USD",
    category: "Luxury Dive",
    image:
      "https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 2,
    name: "Omega Seamaster Diver 300M",
    brand: "Omega",
    price: "$5,200",
    currency: "USD",
    category: "Dive",
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 3,
    name: "Cartier Santos de Cartier",
    brand: "Cartier",
    price: "$7,800",
    currency: "USD",
    category: "Dress",
    image: "https://images.pexels.com/photos/3651587/pexels-photo-3651587.jpeg",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 4,
    name: "TAG Heuer Carrera",
    brand: "TAG Heuer",
    price: "$3,200",
    currency: "USD",
    category: "Sports",
    image: "https://images.pexels.com/photos/29298231/pexels-photo-29298231.jpeg",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 5,
    name: "Seiko Prospex Diver",
    brand: "Seiko",
    price: "$280",
    currency: "USD",
    category: "Dive",
    image: "https://images.pexels.com/photos/5827771/pexels-photo-5827771.jpeg",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 6,
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    price: "$799",
    currency: "USD",
    category: "Smartwatch",
    image:
      "https://images.pexels.com/photos/11544157/pexels-photo-11544157.jpeg",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 7,
    name: "Patek Philippe Nautilus",
    brand: "Patek Philippe",
    price: "$85,000",
    currency: "USD",
    category: "Luxury",
    image: "https://images.pexels.com/photos/4600998/pexels-photo-4600998.jpeg",
    rating: 5.0,
    inStock: false,
  },
  {
    id: 8,
    name: "Casio G-Shock GA-2100",
    brand: "Casio",
    price: "$89",
    currency: "USD",
    category: "Digital",
    image: "https://images.pexels.com/photos/3083461/pexels-photo-3083461.jpeg",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 9,
    name: "Audemars Piguet Royal Oak",
    brand: "Audemars Piguet",
    price: "$32,000",
    currency: "USD",
    category: "Luxury",
    image:
      "https://images.pexels.com/photos/13441921/pexels-photo-13441921.jpeg",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 10,
    name: "Tissot PRX Powermatic 80",
    brand: "Tissot",
    price: "$650",
    currency: "USD",
    category: "Sports",
    image:
      "https://images.pexels.com/photos/19480875/pexels-photo-19480875.jpeg",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 11,
    name: "Breitling Navitimer",
    brand: "Breitling",
    price: "$8,900",
    currency: "USD",
    category: "Pilot",
    image:
      "https://images.pexels.com/photos/29298231/pexels-photo-29298231.jpeg",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 12,
    name: "Citizen Eco-Drive",
    brand: "Citizen",
    price: "$295",
    currency: "USD",
    category: "Dive",
    image: "https://images.pexels.com/photos/9423283/pexels-photo-9423283.jpeg",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 13,
    name: "IWC Portugieser",
    brand: "IWC",
    price: "$14,500",
    currency: "USD",
    category: "Dress",
    image:
      "https://images.pexels.com/photos/13013041/pexels-photo-13013041.jpeg",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 14,
    name: "Bulova Lunar Pilot",
    brand: "Bulova",
    price: "$495",
    currency: "USD",
    category: "Chronograph",
    image:
      "https://images.pexels.com/photos/15266871/pexels-photo-15266871.jpeg",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 15,
    name: "Samsung Galaxy Watch",
    brand: "Samsung",
    price: "$299",
    currency: "USD",
    category: "Smartwatch",
    image:
      "https://images.pexels.com/photos/27132434/pexels-photo-27132434.jpeg",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 16,
    name: "Hamilton Khaki Field",
    brand: "Hamilton",
    price: "$595",
    currency: "USD",
    category: "Field",
    image:
      "https://images.pexels.com/photos/34341284/pexels-photo-34341284.jpeg",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 17,
    name: "Rolex Daytona",
    brand: "Rolex",
    price: "$18,500",
    currency: "USD",
    category: "Chronograph",
    image:
      "https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg",
    rating: 5.0,
    inStock: false,
  },
  {
    id: 18,
    name: "Garmin Fenix 8",
    brand: "Garmin",
    price: "$899",
    currency: "USD",
    category: "Smartwatch",
    image:
      "https://images.pexels.com/photos/19810840/pexels-photo-19810840.jpeg",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 19,
    name: "Longines HydroConquest",
    brand: "Longines",
    price: "$1,850",
    currency: "USD",
    category: "Dive",
    image: "https://images.pexels.com/photos/6860977/pexels-photo-6860977.jpeg",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 20,
    name: "Fossil Gen 6",
    brand: "Fossil",
    price: "$199",
    currency: "USD",
    category: "Smartwatch",
    image: "https://images.pexels.com/photos/7120291/pexels-photo-7120291.jpeg",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 21,
    name: "Panerai Luminor Marina",
    brand: "Panerai",
    price: "$7,200",
    currency: "USD",
    category: "Dive",
    image:
      "https://images.pexels.com/photos/34894931/pexels-photo-34894931.jpeg",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 22,
    name: "Swatch Big Bold",
    brand: "Swatch",
    price: "$85",
    currency: "USD",
    category: "Fashion",
    image:
      "https://images.pexels.com/photos/16739804/pexels-photo-16739804.jpeg",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 23,
    name: "Tudor Black Bay",
    brand: "Tudor",
    price: "$3,850",
    currency: "USD",
    category: "Dive",
    image:
      "https://images.pexels.com/photos/31050000/pexels-photo-31050000.jpeg",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 24,
    name: "Bulova Lunar Pilot",
    brand: "Bulova",
    price: "$495",
    currency: "USD",
    category: "Chronograph",
    image:
      "https://images.pexels.com/photos/15266871/pexels-photo-15266871.jpeg",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 25,
    name: "Zenith Defy",
    brand: "Zenith",
    price: "$8,900",
    currency: "USD",
    category: "Sports",
    image:
      "https://images.pexels.com/photos/36450789/pexels-photo-36450789.jpeg",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 26,
    name: "Timex Expedition",
    brand: "Timex",
    price: "$65",
    currency: "USD",
    category: "Field",
    image: "https://images.pexels.com/photos/3083461/pexels-photo-3083461.jpeg",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 27,
    name: "Hublot Big Bang",
    brand: "Hublot",
    price: "$21,500",
    currency: "USD",
    category: "Luxury",
    image: "https://images.pexels.com/photos/4600998/pexels-photo-4600998.jpeg",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 28,
    name: "Nomos Glashütte Tangente",
    brand: "Nomos Glashütte",
    price: "$2,450",
    currency: "USD",
    category: "Dress",
    image:
      "https://images.pexels.com/photos/19480875/pexels-photo-19480875.jpeg",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 29,
    name: "Fitbit Versa 4",
    brand: "Fitbit",
    price: "$179",
    currency: "USD",
    category: "Smartwatch",
    image:
      "https://images.pexels.com/photos/11544157/pexels-photo-11544157.jpeg",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 30,
    name: "Jaeger-LeCoultre Reverso",
    brand: "Jaeger-LeCoultre",
    price: "$12,500",
    currency: "USD",
    category: "Dress",
    image: "https://images.pexels.com/photos/6722096/pexels-photo-6722096.jpeg",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 31,
    name: "Orient Bambino",
    brand: "Orient",
    price: "$185",
    currency: "USD",
    category: "Dress",
    image: "https://images.pexels.com/photos/3651587/pexels-photo-3651587.jpeg",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 32,
    name: "Patek Philippe Nautilus",
    brand: "Patek Philippe",
    price: "$85,000",
    currency: "USD",
    category: "Luxury",
    image: "https://images.pexels.com/photos/4600998/pexels-photo-4600998.jpeg",
    rating: 5.0,
    inStock: false,
  },
];

let myProducts = document.querySelector("#watchproduct");

let productCards = watchProducts.map(function (value) {
  return `
    <div class="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
        <img src="${value.image}" class="w-full h-64 object-cover rounded-lg">
        <p class="text-lg font-bold text-gray-900">${value.name}</p>
        <p class="text-gray-600">Brand: ${value.brand}</p>
        <p class="text-gray-800 font-semibold">Price: ${value.price}</p>
        <p class="text-blue-600 text-sm">Category: ${value.category}</p>
        <p class="text-gray-800 font-semibold">Rating: ${value.rating}</p>
    </div>
  `;
});


myProducts.innerHTML = productCards.join("");

function filterEmployee() {
  let search = document.querySelector("#search").value;

  let peopleFilter = watchProducts.filter(function (value) {
    return value.name.toLowerCase().includes(search.toLowerCase());
  });

  if (peopleFilter.length === 0) {
    document.getElementById("watchproduct").innerHTML = "";
    document.querySelector("#notFound").classList.remove("hidden");
  } else {
    document.querySelector("#notFound").classList.add("hidden");

    let filterMap = peopleFilter.map(function (value) {
      return `
        <div class="shadow p-5 mb-5">
            <img src="${value.image}" class="w-full h-64 object-cover">
            <p>${value.name}</p>
            <p>Brand: ${value.brand}</p>
            <p>Price: ${value.price}</p>
            <p>Category: ${value.category}</p>
            <p>Rating: ${value.rating}</p>
        </div>
      `;
    });

    document.getElementById("watchproduct").innerHTML = filterMap.join("");
  }
}
