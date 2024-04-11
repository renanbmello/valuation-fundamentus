import React from "react";
import WAAC from "./WAAC";

const finalWaac = WAAC()

function Gordon({dividensPerStock, dividendsGrowth, finalWaac}) {

    const calculateValuationGordon = (dividensPerStock * (1+dividendsGrowth)) / (finalWaac - dividendsGrowth)
}

export default Gordon