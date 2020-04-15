import { Dirent } from "fs";

export class DirentWrapper {
    public static appendHeader(table: HTMLTableElement): void {
        const row = table.tHead.insertRow();

        const createCell = (text: string) => {
            const th = document.createElement("th");
            th.innerText = text;
            row.appendChild(th);
        };

        createCell("Name");
        createCell("Directory?");
    }

    constructor(private dirent: Dirent) {
    }


    public appendToTable(table: HTMLTableElement): void {
        const row = table.tBodies[0].insertRow();

        row.insertCell().innerText = this.dirent.name;
        row.insertCell().innerText = this.dirent.isDirectory() ? "/" : "";
    }

}
