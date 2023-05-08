"use strict";
const list = document.querySelector(".movielist");
const renderMovie = function (data) {
  const html = `<div class="h-full w-52 bg-gray-200 rounded-md">
  <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${
    data.poster_path
  }" alt="img" class=" rounded-md" />
  <div class="px-5 py-3 ">
  <h1 class="font-semibold">${data.title}</h1>
  <h2 class="text-gray-700">${data.release_date}</h2>
  <h2 class="text-gray-700">Rating : ${data.vote_average.toFixed(1)}</h2>
  </div>
</div>`;
  list.insertAdjacentHTML("beforeend", html);
};

fetch(
  "https://api.themoviedb.org/3/trending/all/day?api_key=b3f076a22ff5167d5e84259e71e87a95"
).then((response) =>
  response.json().then((data) => {
    const movList = data.results;
    movList.forEach(function (mov, i) {
      renderMovie(mov);
    });
  })
);
