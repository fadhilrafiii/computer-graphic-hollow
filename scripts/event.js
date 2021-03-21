const menu = document.getElementById("navMenu");

function showMenu() {
    menu.classList.toggle("none");
}

function getStarted() {
    window.location.href = "#help";
}

const listOfSliderLabel = [
    "x-rotate-label",
    "y-rotate-label",
    "z-rotate-label",
    "scale-label",
];

// First -Third El for rotation, Fourth for scaling, Fifth-Sevent for translation 
let transformArray = [0,0,0,0,0,0,0];

// For slider (rotation and scaling) input
document.querySelectorAll(".slider").forEach(function (el, index) {
    el.oninput = function () {
        var valPercent =
            (el.valueAsNumber - parseInt(el.min)) /
            (parseInt(el.max) - parseInt(el.min));
        var style =
            "background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(" +
            valPercent +
            ", #ffa500), color-stop(" +
            valPercent +
            ", #f5f6f8));";
        el.style = style;
        transformArray[index] = parseInt(el.value);
        // document.getElementById(listOfSliderLabel[index]).textContent =
        //     el.value;
    };
    el.oninput();
});



// For translation input
document.querySelectorAll(".translate").forEach(function (el, index) {
    el.oninput = function () {
        let length = el.value.length;
        if (parseInt(el.value)) {
            console.log(parseInt(el.value))
            transformArray[4+index] = parseInt(el.value);
        }

        if (!parseInt(el.value[length-1])) {
            transformArray[4+index] = 0;
        }
        
        console.log(transformArray);
    };
    el.oninput();
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-64px";
        menu.classList.add("none");
    }
    prevScrollpos = currentScrollPos;
};

const promptToSave = async () => {
    let fileName = prompt(
        "Do you want to save the data? \n\n If yes give your filename then press 'OK', otherwise press 'Cancel'"
    );

    if (fileName) {
        let file = `${fileName}.json`;
        await saveData(inputData, file);
    }
};

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16) / 255,
              g: parseInt(result[2], 16) / 255,
              b: parseInt(result[3], 16) / 255,
          }
        : null;
}

const importFile = () => {
    let file = document.getElementById("file");

    let { files } = file;
    let [uploaded] = files;

    console.log(files, uploaded);

    if (files) {
        let fileNameEl = document.getElementById("fileName");
        fileNameEl.textContent = `${uploaded.name} is uploaded!`;

        var reader = new FileReader();
        reader.readAsText(uploaded, "UTF-8");

        reader.onload = function (e) {
            let uploadedObj = JSON.parse(e.target.result);
            console.log(uploadedObj);

            uploadedObj.forEach((item) => inputData.push(item));
            main(inputData);
        };

        reader.onerror = function (e) {
            alert("Error importing file!");
        };
    }
};

let obliqueInput = document.getElementById("oblique");
let perspectiveInput = document.getElementById("perspective");
let orthoInput = document.getElementById("orthographic")

const openSlider = e => {

    if (e === "perspective") {
        perspectiveInput.style.display = "block";
        obliqueInput.style.display = "none";
        orthoInput.style.display = "none";
    } else if (e === "orthogonal") {
        perspectiveInput.style.display = "none";
        obliqueInput.style.display = "none";
        orthoInput.style.display = "block";
    } else if (e === "oblique") {
        perspectiveInput.style.display = "none";
        obliqueInput.style.display = "block";
        orthoInput.style.display = "block";
    } else {
        perspectiveInput.style.display = "none";
        obliqueInput.style.display = "none";
        orthoInput.style.display = "none";
    }
}