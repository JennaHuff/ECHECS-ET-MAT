import { Empty } from "../models/Empty.js";
import { Rook } from "../models/Rook.js";
import { reRender } from "./displayHtml.js";
import { removeAllTargets } from "./removeAllTargets.js";

let possibleTargets = [];
export function showPossibleMoves(coordinates, board, piece) {
    const x = parseInt(coordinates[0]);
    const y = parseInt(coordinates[1]);
    const tab = [0, 1, 2, 3, 4, 5, 6, 7];

    if (possibleTargets.length === 0) {
        possibleTargets.push(x);
        possibleTargets.push(y);
        if (piece.innerHTML === "B") {
            // haut droite

            for (let i = 0; i < 8; i++) {
                // diago haut gauche

                if (
                    tab.includes(x - i - 1) === false ||
                    tab.includes(y - i - 1) === false
                ) {
                    break;
                } else if (
                    board[x - i - 1][y - i - 1].color === board[x][y].color
                ) {
                    break;
                } else if (
                    board[x - i - 1][y - i - 1].color !== board[x][y].color &&
                    board[x - i - 1][y - i - 1].color !== "void"
                ) {
                    board[x - i - 1][y - i - 1].target = true;
                    break;
                } else {
                    board[x - i - 1][y - i - 1].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // diago haut droit

                if (
                    tab.includes(x - i - 1) === false ||
                    tab.includes(y + i + 1) === false
                ) {
                    break;
                } else if (
                    board[x - i - 1][y + i + 1].color === board[x][y].color
                ) {
                    break;
                } else if (
                    board[x - i - 1][y + i + 1].color !== board[x][y].color &&
                    board[x - i - 1][y + i + 1].color !== "void"
                ) {
                    board[x - i - 1][y + i + 1].target = true;
                    break;
                } else {
                    board[x - i - 1][y + i + 1].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // diago bas droit

                if (
                    tab.includes(x + i + 1) === false ||
                    tab.includes(y + i + 1) === false
                ) {
                    break;
                } else if (
                    board[x + i + 1][y + i + 1].color === board[x][y].color
                ) {
                    break;
                } else if (
                    board[x + i + 1][y + i + 1].color !== board[x][y].color &&
                    board[x + i + 1][y + i + 1].color !== "void"
                ) {
                    board[x + i + 1][y + i + 1].target = true;
                    break;
                } else {
                    board[x + i + 1][y + i + 1].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // diago bas fauche

                if (
                    tab.includes(x + i + 1) === false ||
                    tab.includes(y - i - 1) === false
                ) {
                    break;
                } else if (
                    board[x + i + 1][y - i - 1].color === board[x][y].color
                ) {
                    break;
                } else if (
                    board[x + i + 1][y - i - 1].color !== board[x][y].color &&
                    board[x + i + 1][y - i - 1].color !== "void"
                ) {
                    board[x + i + 1][y - i - 1].target = true;
                    break;
                } else {
                    board[x + i + 1][y - i - 1].target = true;
                }
            }
        } else if (piece.innerHTML === "R") {
            for (let i = 0; i < 8; i++) {
                // ligne haute

                if (
                    tab.includes(x - i - 1) === false ||
                    tab.includes(y) === false
                ) {
                    break;
                } else if (board[x - i - 1][y].color === board[x][y].color) {
                    break;
                } else if (
                    board[x - i - 1][y].color !== board[x][y].color &&
                    board[x - i - 1][y].color !== "void"
                ) {
                    board[x - i - 1][y].target = true;
                    break;
                } else {
                    board[x - i - 1][y].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // ligne gauche

                if (
                    tab.includes(x) === false ||
                    tab.includes(y - i - 1) === false
                ) {
                    break;
                } else if (board[x][y - i - 1].color === board[x][y].color) {
                    break;
                } else if (
                    board[x][y - i - 1].color !== board[x][y].color &&
                    board[x][y - i - 1].color !== "void"
                ) {
                    board[x][y - i - 1].target = true;
                    break;
                } else {
                    board[x][y - i - 1].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // ligne basse

                if (
                    tab.includes(x + i + 1) === false ||
                    tab.includes(y) === false
                ) {
                    break;
                } else if (board[x + i + 1][y].color === board[x][y].color) {
                    break;
                } else if (
                    board[x + i + 1][y].color !== board[x][y].color &&
                    board[x + i + 1][y].color !== "void"
                ) {
                    board[x + i + 1][y].target = true;
                    break;
                } else {
                    board[x + i + 1][y].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // ligne droite

                if (
                    tab.includes(x) === false ||
                    tab.includes(y + i + 1) === false
                ) {
                    break;
                } else if (board[x][y + i + 1].color === board[x][y].color) {
                    break;
                } else if (
                    board[x][y + i + 1].color !== board[x][y].color &&
                    board[x][y + i + 1].color !== "void"
                ) {
                    board[x][y + i + 1].target = true;
                    break;
                } else {
                    board[x][y + i + 1].target = true;
                }
            }
        } else if (piece.innerHTML === "X") {
            // reinitialise si la case selectionnée est empty
            possibleTargets = [];
        } else if (piece.innerHTML === "KI") {
            if (
                tab.includes(x) === true &&
                tab.includes(y + 1) === true &&
                board[x][y + 1].color !== board[x][y].color
            ) {
                board[x][y + 1].target = true;
            }
            // haut/droite
            if (
                tab.includes(x - 1) === true &&
                tab.includes(y + 1) === true &&
                board[x - 1][y + 1].color !== board[x][y].color
            ) {
                board[x - 1][y + 1].target = true;
            }
            // haut
            if (
                tab.includes(x - 1) === true &&
                tab.includes(y) === true &&
                board[x - 1][y].color !== board[x][y].color
            ) {
                board[x - 1][y].target = true;
            }
            // haut/gauche
            if (
                tab.includes(x - 1) === true &&
                tab.includes(y - 1) === true &&
                board[x - 1][y - 1].color !== board[x][y].color
            ) {
                board[x - 1][y - 1].target = true;
            }
            // gauche
            if (
                tab.includes(x) === true &&
                tab.includes(y - 1) === true &&
                board[x][y - 1].color !== board[x][y].color
            ) {
                board[x][y - 1].target = true;
            }
            // bas/gauche
            if (
                tab.includes(x + 1) === true &&
                tab.includes(y - 1) === true &&
                board[x + 1][y - 1].color !== board[x][y].color
            ) {
                board[x + 1][y - 1].target = true;
            }
            // bas
            if (
                tab.includes(x + 1) === true &&
                tab.includes(y) === true &&
                board[x + 1][y].color !== board[x][y].color
            ) {
                board[x + 1][y].target = true;
            }
            // bas/droite
            if (
                tab.includes(x + 1) === true &&
                tab.includes(y + 1) === true &&
                board[x + 1][y + 1].color !== board[x][y].color
            ) {
                board[x + 1][y + 1].target = true;
            }

            //
            if (
                tab.includes(x) === true &&
                tab.includes(y + 1) === true &&
                tab.includes(y + 2) === true &&
                tab.includes(y + 3) === true &&
                board[x][y + 1].color === "void" &&
                board[x][y + 2].color === "void" &&
                board[x][y + 3].symbol === "R"
            ) {
                board[x][y + 2].target = true;
            }
            if (
                tab.includes(x) === true &&
                tab.includes(y - 1) === true &&
                tab.includes(y - 2) === true &&
                tab.includes(y - 3) === true &&
                tab.includes(y - 4) === true &&
                board[x][y - 1].color === "void" &&
                board[x][y - 2].color === "void" &&
                board[x][y - 3].color === "void" &&
                board[x][y - 4].symbol === "R"
            ) {
                board[x][y - 2].target = true;
            }
            // RESTE A FAIRE LE ROCK
            //
        } else if (piece.innerHTML === "Q") {
            for (let i = 0; i < 8; i++) {
                // ligne haute

                if (
                    tab.includes(x - i - 1) === false ||
                    tab.includes(y) === false
                ) {
                    break;
                } else if (board[x - i - 1][y].color === board[x][y].color) {
                    break;
                } else if (
                    board[x - i - 1][y].color !== board[x][y].color &&
                    board[x - i - 1][y].color !== "void"
                ) {
                    board[x - i - 1][y].target = true;
                    break;
                } else {
                    board[x - i - 1][y].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // ligne gauche

                if (
                    tab.includes(x) === false ||
                    tab.includes(y - i - 1) === false
                ) {
                    break;
                } else if (board[x][y - i - 1].color === board[x][y].color) {
                    break;
                } else if (
                    board[x][y - i - 1].color !== board[x][y].color &&
                    board[x][y - i - 1].color !== "void"
                ) {
                    board[x][y - i - 1].target = true;
                    break;
                } else {
                    board[x][y - i - 1].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // ligne basse

                if (
                    tab.includes(x + i + 1) === false ||
                    tab.includes(y) === false
                ) {
                    break;
                } else if (board[x + i + 1][y].color === board[x][y].color) {
                    break;
                } else if (
                    board[x + i + 1][y].color !== board[x][y].color &&
                    board[x + i + 1][y].color !== "void"
                ) {
                    board[x + i + 1][y].target = true;
                    break;
                } else {
                    board[x + i + 1][y].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // ligne droite

                if (
                    tab.includes(x) === false ||
                    tab.includes(y + i + 1) === false
                ) {
                    break;
                } else if (board[x][y + i + 1].color === board[x][y].color) {
                    break;
                } else if (
                    board[x][y + i + 1].color !== board[x][y].color &&
                    board[x][y + i + 1].color !== "void"
                ) {
                    board[x][y + i + 1].target = true;
                    break;
                } else {
                    board[x][y + i + 1].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // diago haut gauche

                if (
                    tab.includes(x - i - 1) === false ||
                    tab.includes(y - i - 1) === false
                ) {
                    break;
                } else if (
                    board[x - i - 1][y - i - 1].color === board[x][y].color
                ) {
                    break;
                } else if (
                    board[x - i - 1][y - i - 1].color !== board[x][y].color &&
                    board[x - i - 1][y - i - 1].color !== "void"
                ) {
                    board[x - i - 1][y - i - 1].target = true;
                    break;
                } else {
                    board[x - i - 1][y - i - 1].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // diago haut droit

                if (
                    tab.includes(x - i - 1) === false ||
                    tab.includes(y + i + 1) === false
                ) {
                    break;
                } else if (
                    board[x - i - 1][y + i + 1].color === board[x][y].color
                ) {
                    break;
                } else if (
                    board[x - i - 1][y + i + 1].color !== board[x][y].color &&
                    board[x - i - 1][y + i + 1].color !== "void"
                ) {
                    board[x - i - 1][y + i + 1].target = true;
                    break;
                } else {
                    board[x - i - 1][y + i + 1].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // diago bas droit

                if (
                    tab.includes(x + i + 1) === false ||
                    tab.includes(y + i + 1) === false
                ) {
                    break;
                } else if (
                    board[x + i + 1][y + i + 1].color === board[x][y].color
                ) {
                    break;
                } else if (
                    board[x + i + 1][y + i + 1].color !== board[x][y].color &&
                    board[x + i + 1][y + i + 1].color !== "void"
                ) {
                    board[x + i + 1][y + i + 1].target = true;
                    break;
                } else {
                    board[x + i + 1][y + i + 1].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // diago bas fauche

                if (
                    tab.includes(x + i + 1) === false ||
                    tab.includes(y - i - 1) === false
                ) {
                    break;
                } else if (
                    board[x + i + 1][y - i - 1].color === board[x][y].color
                ) {
                    break;
                } else if (
                    board[x + i + 1][y - i - 1].color !== board[x][y].color &&
                    board[x + i + 1][y - i - 1].color !== "void"
                ) {
                    board[x + i + 1][y - i - 1].target = true;
                    break;
                } else {
                    board[x + i + 1][y - i - 1].target = true;
                }
            }
        } else if (piece.innerHTML === "KN") {
            for (let i = 0; i < 8; i++) {
                // diago haut gauche

                if (
                    tab.includes(x - 2) === false ||
                    tab.includes(y - 1) === false
                ) {
                    break;
                } else if (board[x - 2][y - 1].color === board[x][y].color) {
                    break;
                } else if (
                    board[x - 2][y - 1].color !== board[x][y].color &&
                    board[x - 2][y - 1].color !== "void"
                ) {
                    board[x - 2][y - 1].target = true;
                    break;
                } else {
                    board[x - 2][y - 1].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // diago haut droit

                if (
                    tab.includes(x - 2) === false ||
                    tab.includes(y + 1) === false
                ) {
                    break;
                } else if (board[x - 2][y + 1].color === board[x][y].color) {
                    break;
                } else if (
                    board[x - 2][y + 1].color !== board[x][y].color &&
                    board[x - 2][y + 1].color !== "void"
                ) {
                    board[x - 2][y + 1].target = true;
                    break;
                } else {
                    board[x - 2][y + 1].target = true;
                }
            }

            for (let i = 0; i < 8; i++) {
                // diago haut droit

                if (
                    tab.includes(x - 1) === false ||
                    tab.includes(y + 2) === false
                ) {
                    break;
                } else if (board[x - 1][y + 2].color === board[x][y].color) {
                    break;
                } else if (
                    board[x - 1][y + 2].color !== board[x][y].color &&
                    board[x - 1][y + 2].color !== "void"
                ) {
                    board[x - 1][y + 2].target = true;
                    break;
                } else {
                    board[x - 1][y + 2].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // diago haut droit

                if (
                    tab.includes(x + 1) === false ||
                    tab.includes(y + 2) === false
                ) {
                    break;
                } else if (board[x + 1][y + 2].color === board[x][y].color) {
                    break;
                } else if (
                    board[x + 1][y + 2].color !== board[x][y].color &&
                    board[x + 1][y + 2].color !== "void"
                ) {
                    board[x + 1][y + 2].target = true;
                    break;
                } else {
                    board[x + 1][y + 2].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // diago haut droit

                if (
                    tab.includes(x + 2) === false ||
                    tab.includes(y + 1) === false
                ) {
                    break;
                } else if (board[x + 2][y + 1].color === board[x][y].color) {
                    break;
                } else if (
                    board[x + 2][y + 1].color !== board[x][y].color &&
                    board[x + 2][y + 1].color !== "void"
                ) {
                    board[x + 2][y + 1].target = true;
                    break;
                } else {
                    board[x + 2][y + 1].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // diago haut droit

                if (
                    tab.includes(x + 2) === false ||
                    tab.includes(y - 1) === false
                ) {
                    break;
                } else if (board[x + 2][y - 1].color === board[x][y].color) {
                    break;
                } else if (
                    board[x + 2][y - 1].color !== board[x][y].color &&
                    board[x + 2][y - 1].color !== "void"
                ) {
                    board[x + 2][y - 1].target = true;
                    break;
                } else {
                    board[x + 2][y - 1].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // diago haut droit

                if (
                    tab.includes(x + 1) === false ||
                    tab.includes(y - 2) === false
                ) {
                    break;
                } else if (board[x + 1][y - 2].color === board[x][y].color) {
                    break;
                } else if (
                    board[x + 1][y - 2].color !== board[x][y].color &&
                    board[x + 1][y - 2].color !== "void"
                ) {
                    board[x + 1][y - 2].target = true;
                    break;
                } else {
                    board[x + 1][y - 2].target = true;
                }
            }
            for (let i = 0; i < 8; i++) {
                // diago haut droit

                if (
                    tab.includes(x - 1) === false ||
                    tab.includes(y - 2) === false
                ) {
                    break;
                } else if (board[x - 1][y - 2].color === board[x][y].color) {
                    break;
                } else if (
                    board[x - 1][y - 2].color !== board[x][y].color &&
                    board[x - 1][y - 2].color !== "void"
                ) {
                    board[x - 1][y - 2].target = true;
                    break;
                } else {
                    board[x - 1][y - 2].target = true;
                }
            }
        }

        reRender(board);
    } else if (
        possibleTargets.length === 2 &&
        possibleTargets[0] === x &&
        possibleTargets[1] === y
    ) {
        possibleTargets = [];
        removeAllTargets(board);
    } else {
        possibleTargets.push(x);
        possibleTargets.push(y);

        let xdepart = possibleTargets[0];
        let ydepart = possibleTargets[1];

        let xcible = possibleTargets[2];
        let ycible = possibleTargets[3];

        // si le 2eme emplcement n'est pas une cible possible
        if (board[xcible][ycible].target === false) {
            possibleTargets.pop();
            possibleTargets.pop();
        }

        //  le cas du petit rock rock
        else if (
            board[xdepart][ydepart].symbol === "KI" &&
            ycible === ydepart + 2
        ) {
            board[xcible][ycible] = board[xdepart][ydepart];
            board[xdepart][ydepart + 1] = new Rook(
                `${board[xdepart][ydepart].color}`
            );
            board[xcible][ycible + 1] = new Empty("void");
            board[xdepart][ydepart] = new Empty("void");
            possibleTargets = [];
            removeAllTargets(board);
            reRender(board);
            //  si tout est ok
        } else if (
            board[xdepart][ydepart].symbol === "KI" &&
            ycible === ydepart - 2
        ) {
            board[xcible][ycible] = board[xdepart][ydepart];
            board[xdepart][ydepart - 1] = new Rook(
                `${board[xdepart][ydepart].color}`
            );
            board[xcible][ycible - 1] = new Empty("void");
            board[xcible][ycible - 2] = new Empty("void");
            board[xdepart][ydepart] = new Empty("void");
            possibleTargets = [];
            removeAllTargets(board);
            reRender(board);
        } else {
            board[xcible][ycible] = board[xdepart][ydepart];
            board[xdepart][ydepart] = new Empty("void");
            possibleTargets = [];

            removeAllTargets(board);
            reRender(board);
        }
    }
}
