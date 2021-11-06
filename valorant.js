let a = "";
let visited = [];
function play(item) {
  const a = document.getElementById(`${item.id}`);
  console.log(item.src);
  a.play();
}
async function apicall() {
  await fetch("https://valorant-api.com/v1/agents/")
    .then((res) => res.json())
    .then((all) => (a = all));

  a.data.forEach((element) => {
    if (
      !visited.includes(element.displayName) &&
      element.bustPortrait != null
    ) {
      visited.push(element.displayName);
      document.getElementById(
        "cont"
      ).innerHTML += `<div onclick="play(${element.displayName.replace(
        "/",
        ""
      )})" class="innerdiv" style="background-image: url(${
        element.bustPortrait
      });" ><p>${
        element.displayName
      }</p><audio id="${element.displayName.replace("/", "")}" src="${
        element.voiceLine.mediaList[0].wave
      }"></audio></div>`;
    }
  });
}
