const displayTarget = document.querySelector(".display");

fetch("../js/portfolio.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let output = "";

    data.forEach((project) => {
      output += `
      <div class='w-full relative'>
        <div class='h-[320px] w-full card-container'>
            <img class="rounded-[20px] w-full h-full" alt="'A webpage with one row and three columns " src="${project.img}"/>
        </div> 
        <div class='w-[80%] p-2 rounded-[20px] card-text'>
          <div class='flex justify-between'>
            <div class='mt-2 mb-2 flex gap-1 w-6'>
              <img src=${project.icons[0]} />
              <img src=${project.icons[1]} />
              <img src=${project.icons[2]} />
            </div>
            <div class='eye w-6'>
                <img class='w-full' src=${project.icons[3]} />
            </div>
          </div>
          <div>
            <p class='text-xl'>${project.title}<\p>
            <p class='text-gray-400 card-project-description'>${project.description}</p>
          </div> 
        </div>
      </div>`;

      displayTarget.innerHTML = output;

      goToGithub();
    });
  });

window.addEventListener("scroll", function (e) {
  if (window.scrollY > 40) {
    document.querySelector(".text-center").classList.add("test");
  } else {
    document.querySelector(".text-center").classList.remove("test");
  }
});

const goToGithub = () => {
  let selector = document.querySelectorAll(".eye");

  selector.forEach(function (item) {
    item.addEventListener("click", () => {
      window.location.href = "https://github.com/Andrei-Trifu/Portfolio";
    });
  });
};
