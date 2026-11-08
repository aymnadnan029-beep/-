const openButton = document.getElementById("openButton");
const intro = document.getElementById("intro");
const story = document.getElementById("story");
const letter = document.getElementById("letter");
const caption = document.getElementById("caption");
const voice = document.getElementById("voice");

const words = [
  "رويدا", "حبيبتي", "بعرف", "انك", "زعلانه", "مني", "وانا",
  "مو", "زي", "كل", "مره", "جاي", "بررلك", "بس", "يقلبي",
  "اكتشفت", "اني", "ما", "بقدر", "اقعد", "لحظة", "بدونك",
  "والحياة", "بعيدة", "عنك", "صعبة", "كتير", "تعالي",
  "جنبي", "حبيبتي", "ما", "الي", "غيرك"
];

// توقيتات أولية للكلمات، ونعدلوها حسب التسجيل لاحقاً
const duration = 30.95;
const interval = duration / words.length;

let captionTimer;

openButton.addEventListener("click", async () => {
  intro.classList.add("hidden");
  story.classList.remove("hidden");

  voice.currentTime = 0;

  try {
    await voice.play();
  } catch (error) {
    caption.textContent = "اضغطي تشغيل الصوت من المتصفح ❤️";
    return;
  }

  let index = 0;

  function showWord() {
    if (index < words.length) {
      caption.style.opacity = "0";

      setTimeout(() => {
        caption.textContent = words[index];
        caption.style.opacity = "1";
      }, 200);

      index++;
    }
  }

  showWord();
  captionTimer = setInterval(showWord, interval * 1000);
});

voice.addEventListener("ended", () => {
  clearInterval(captionTimer);
  story.classList.add("hidden");
  letter.classList.remove("hidden");
});
