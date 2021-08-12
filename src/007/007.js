
const verifyMonth = (month) => {
    if(month === "july") return "Is the same month";
    else throw new Error("Error, el mes es incorrecto");
};

module.exports = {
    verifyMonth
};