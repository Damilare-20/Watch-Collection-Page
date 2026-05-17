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
  },
  {
    id: 3,
    name: "Cartier Santos de Cartier",
    brand: "Cartier",
    price: "$7,800",
    currency: "USD",
    category: "Dress",
    image: "https://images.pexels.com/photos/9978712/pexels-photo-9978712.jpeg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "TAG Heuer Carrera",
    brand: "TAG Heuer",
    price: "$3,200",
    currency: "USD",
    category: "Sports",
    image: "https://images.pexels.com/photos/9978713/pexels-photo-9978713.jpeg",
    rating: 4.6,
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
  },
  {
    id: 6,
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    price: "$799",
    currency: "USD",
    category: "Smartwatch",
    image: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Patek Philippe Nautilus",
    brand: "Patek Philippe",
    price: "$85,000",
    currency: "USD",
    category: "Luxury",
    image: "https://images.pexels.com/photos/9898200/pexels-photo-9898200.jpeg",
    rating: 5.0,
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
  },
  {
    id: 30,
    name: "Jaeger-LeCoultre Reverso",
    brand: "Jaeger-LeCoultre",
    price: "$12,500",
    currency: "USD",
    category: "Dress",
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    rating: 4.9,
  },
  {
    id: 31,
    name: "Orient Bambino",
    brand: "Orient",
    price: "$185",
    currency: "USD",
    category: "Dress",
    image: "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg",
    rating: 4.6,
  },
  {
    id: 32,
    name: "Patek Philippe Nautilus",
    brand: "Patek Philippe",
    price: "$85,000",
    currency: "USD",
    category: "Luxury",
    image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg",
    rating: 5.0,
  },
];

let myProducts = document.querySelector("#watchproduct");

let productCards = watchProducts.map(function (value) {
  return `
    <div class="bg-[#efefef] shadow-md rounded-xl p-5 hover:shadow-lg flex flex-col">
    <img src="${value.image}" class="w-full h-48 sm:h-64 object-cover rounded-lg">
    <p class="text-lg font-bold text-gray-900 mt-3">${value.name}</p>
    <p class="text-gray-600">Brand: ${value.brand}</p>
    <p class="text-gray-600 text-sm">Category: ${value.category}</p>
    <p class="text-gray-600">Rating: ${value.rating}</p>
    <p class="font-bold">Price: ${value.price}</p>
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
     <div class="bg-[#efefef] shadow-md rounded-xl p-5 hover:shadow-lg flex flex-col">
    <img src="${value.image}" class="w-full h-48 sm:h-64 object-cover rounded-lg">
    <p class="text-lg font-bold text-gray-900 mt-3">${value.name}</p>
    <p class="text-gray-600">Brand: ${value.brand}</p>
    <p class="text-blue-600 text-sm">Category: ${value.category}</p>
    <p class="text-gray-800 font-semibold">Rating: ${value.rating}</p>
    <p class="text-gray-600 font-semibold">Price: ${value.price}</p>
</div>
  `;
    });

    document.getElementById("watchproduct").innerHTML = filterMap.join("");
  }
}
