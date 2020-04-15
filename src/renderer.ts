// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import {readdir} from "fs";
import { DirentWrapper } from "./DirentWrapper";

readdir(".", {withFileTypes: true}, (err, items) => {

    const table = document.getElementById("directory-table") as HTMLTableElement;
    DirentWrapper.appendHeader(table);

    items.forEach((item) => {
        new DirentWrapper(item).appendToTable(table);
    });
});
