const convert = (input) => {

    let str = input.replace(/\[.*\]/, "");      //remove "[num]"
    str = str.replace(/\n/g, "");                //remove "\n"
    var splitData = str.split(/“|”/);            //split “~”
    for (key in splitData) {
        if (splitData[key][0] === ",") {
            splitData[key] = splitData[key].slice(1);
        }
        if (splitData[key].endsWith(",")) {
            splitData[key] = splitData[key].slice(0, -1);
        }
        splitData[key] = splitData[key].trimLeft();
        splitData[key] = splitData[key].trimRight();
    }

    result =
        `[${splitData[1]}]\n ${splitData[0]}\n ${splitData[2]}`

    console.log("converted!");
    return result;
}

const main = () => {
    const input = document.getElementById("rawtext");
    const references = input.value.split(".\n");
    console.log(references)
    let result = "";
    for (index in references) {
        const conv = convert(references[index]);
        result = result + conv + "\n\n"
    }
    input.value = result;
}