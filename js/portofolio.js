const displayTarget = document.querySelector(".display");

fetch("./js/portofolio.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let output = "";

    data.forEach((project) => {
      output += `
      <div class="rounded-[12px] bg-orange-300 text-black p-6 border-white border-2 m-10">
        <div class="flex mb-5 text-2xl">
            <h3>${project.title}</h3>
        </div> 
        <div class="flex gap-12">
            <img class="w-[32%] h-56" alt="'A webpage with one row and three columns " src="${project.img}"/>
            <p class="text-2xl">
                ${project.description}
            </p>
        </div> 
      </div>`;

      displayTarget.innerHTML = output;
      console.log(project);
    });
  });
