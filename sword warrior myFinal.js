const set1Reel1 = [
  "H5",
  "L5",
  "L4",
  "H2",
  "L5",
  "H4",
  "H1",
  "L2",
  "L1",
  "L3",
  "L5",
  "L4",
  "L2",
  "H3",
  "L5",
  "L3",
  "L4",
  "L2",
  "L3",
  "H5",
  "L5",
  "L2",
  "L3",
  "L2",
  "H5",
  "H3",
  "L1",
  "L3",
  "H5",
  "L4",
  "L5",
  "L3",
  "L4",
  "L4",
  "L5",
  "L1",
  "L4",
  "H2",
  "L2",
  "L1",
  "L3",
  "L4",
  "L2",
  "H4",
  "L1",
  "H1",
  "H5",
  "L5",
  "L4",
  "L5",
  "L1",
  "L2",
  "L3",
  "L4",
  "L5",
];
const set1Reel2 = [
  "H1",
  "H2",
  "L2",
  "L3",
  "L5",
  "H4",
  "L2",
  "H3",
  "L5",
  "H5",
  "L2",
  "L1",
  "H5",
  "L4",
  "H1",
  "L3",
  "H4",
  "H2",
  "L4",
  "L1",
  "H3",
  "H4",
  "H5",
  "L4",
  "L3",
  "H1",
  "H2",
  "H4",
  "Wild",
  "H3",
  "L1",
  "H5",
  "L2",
  "H4",
  "L4",
  "H3",
  "L1",
  "L5",
  "L3",
  "L5",
  "L4",
  "L2",
  "L5",
  "H3",
  "H2",
  "L3",
  "L5",
  "H5",
  "L1",
  "H4",
  "L5",
  "L3",
  "L4",
  "H3",
  "H5",
];

const set1Reel3 = [
  "L2",
  "H5",
  "L5",
  "L1",
  "L3",
  "L2",
  "L5",
  "H5",
  "L5",
  "H4",
  "H2",
  "L4",
  "L3",
  "L5",
  "L2",
  "L1",
  "L4",
  "L3",
  "L5",
  "L1",
  "H2",
  "H1",
  "L5",
  "L4",
  "H1",
  "L4",
  "H3",
  "L1",
  "L2",
  "H3",
  "H4",
  "L3",
  "Wild",
  "L4",
  "H2",
  "L3",
  "L2",
  "H1",
  "L4",
  "H4",
  "H5",
  "L2",
  "L1",
  "H5",
  "L5",
  "H4",
  "L3",
  "H5",
  "H1",
  "H4",
  "L3",
  "L4",
  "L5",
  "L2",
  "H3",
];
const set1Reel4 = [
  "H2",
  "L5",
  "L4",
  "L2",
  "H5",
  "L4",
  "L1",
  "H2",
  "L3",
  "H3",
  "L4",
  "L5",
  "L4",
  "H3",
  "L3",
  "H5",
  "H1",
  "L4",
  "H4",
  "H5",
  "H3",
  "L5",
  "L1",
  "L2",
  "L3",
  "Wild",
  "H1",
  "H2",
  "L5",
  "H4",
  "L4",
  "L5",
  "H5",
  "H2",
  "H3",
  "H4",
  "L1",
  "H4",
  "L2",
  "L4",
  "L5",
  "L1",
  "H3",
  "H4",
  "L5",
  "H1",
  "L3",
  "L5",
  "L2",
  "H1",
  "H5",
  "L1",
  "L4",
  "L2",
  "L3",
];
const set1Reel5 = [
  "H4",
  "H1",
  "L2",
  "L4",
  "H5",
  "L2",
  "L3",
  "L1",
  "H2",
  "H4",
  "L4",
  "H5",
  "Wild",
  "H3",
  "L2",
  "L4",
  "H1",
  "H5",
  "H4",
  "L1",
  "L3",
  "H3",
  "L2",
  "H2",
  "L4",
  "L2",
  "H1",
  "L1",
  "H2",
  "L3",
  "L2",
  "H3",
  "L1",
  "L5",
  "H2",
  "H3",
  "L5",
  "H5",
  "L3",
  "H2",
  "L1",
  "H1",
  "L5",
  "L4",
  "L3",
  "L5",
  "H5",
  "H4",
  "L5",
  "H3",
  "H1",
  "L5",
  "H4",
  "L4",
  "L3",
];

const baseGameReels = [set1Reel1, set1Reel2, set1Reel3, set1Reel4, set1Reel5];

const paylines = [
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [2, 2, 2, 2, 2],
  [0, 1, 2, 1, 0],
  [2, 1, 0, 1, 2],
  [1, 2, 2, 2, 1],
  [1, 0, 0, 0, 1],
  [2, 1, 1, 1, 2],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1],
  [1, 2, 1, 2, 1],
  [0, 2, 0, 2, 0],
  [2, 0, 2, 0, 2],
  [1, 1, 0, 1, 1],
  [1, 1, 2, 1, 1],
  [2, 0, 0, 0, 2],
  [0, 2, 2, 2, 0],
  [2, 1, 2, 1, 2],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 0, 2, 0, 1],
  [1, 2, 0, 2, 1],
  [1, 0, 1, 2, 1],
  [1, 2, 1, 0, 1],
  [0, 1, 2, 2, 2],
  [2, 1, 0, 0, 0],
  [0, 0, 1, 2, 2],
  [2, 2, 1, 0, 0],
  [2, 2, 0, 2, 2],
  [0, 0, 2, 0, 0],
];

const hotspotReels1 = [
  "H5",
  "Bonus",
  "H5",
  "H2",
  "SC",
  "H4",
  "Bonus",
  "H2",
  "SC",
  "H5",
  "Bonus",
  "H4",
  "H5",
  "H3",
  "H5",
  "SC",
  "H2",
  "Bonus",
  "SC",
  "H5",
  "SC",
  "H1",
  "SC",
  "Bonus",
  "H5",
  "H3",
  "Bonus",
  "H3",
  "H5",
  "SC",
  "H3",
  "H4",
  "H4",
  "H3",
  "H1",
  "Bonus",
  "Sp_Wild",
  "H2",
  "SC",
  "Bonus",
  "H4",
  "H5",
  "H5",
  "Bonus",
  "H4",
  "H3",
  "SC",
  "Bonus",
  "H4",
  "H1",
  "H2",
  "SC",
  "H3",
  "H4",
  "H3",
  "H1",
  "H2",
  "H3",
  "H4",
  "Bonus",
  "SC",
  "H1",
  "H2",
  "H3",
  "H4",
  "Bonus",
  "H1",
  "SC",
  "H1",
  "H2",
  "Bonus",
  "H1",
  "Bonus",
  "H2",
  "H5",
  "H2",
  "H5",
];

const hotspotReels2 = [
  "SC",
  "H2",
  "H4",
  "Bonus",
  "H5",
  "H4",
  "SC",
  "H3",
  "Bonus",
  "H5",
  "H3",
  "H4",
  "H5",
  "Bonus",
  "H5",
  "Bonus",
  "H4",
  "H2",
  "H5",
  "SC",
  "H3",
  "H4",
  "H5",
  "H3",
  "Bonus",
  "H1",
  "H2",
  "H4",
  "H5",
  "H3",
  "Bonus",
  "H5",
  "SC",
  "H4",
  "H5",
  "H3",
  "Bonus",
  "Sp_Wild",
  "H2",
  "H1",
  "SC",
  "H3",
  "Bonus",
  "Bonus",
  "H2",
  "SC",
  "H4",
  "H5",
  "H1",
  "SC",
  "H1",
  "Bonus",
  "H2",
  "H3",
  "H1",
  "H1",
  "H2",
  "H3",
  "H4",
  "Bonus",
  "Bonus",
  "H1",
  "H2",
  "H3",
  "H4",
  "Bonus",
  "H1",
  "SC",
  "SC",
  "SC",
  "SC",
  "SC",
  "SC",
  "H1",
  "H5",
  "H1",
  "H5",
];

const hotspotReels3 = [
  "SC",
  "H2",
  "Sp_Wild",
  "Bonus",
  "H5",
  "H4",
  "SC",
  "H3",
  "Bonus",
  "H5",
  "H1",
  "SC",
  "H5",
  "Bonus",
  "H5",
  "Bonus",
  "H4",
  "H2",
  "H5",
  "SC",
  "H3",
  "H4",
  "Bonus",
  "H3",
  "Bonus",
  "H5",
  "H5",
  "H4",
  "Bonus",
  "H3",
  "Bonus",
  "H5",
  "SC",
  "H4",
  "H5",
  "H3",
  "Bonus",
  "Bonus",
  "H5",
  "H1",
  "SC",
  "H3",
  "H4",
  "H1",
  "H2",
  "SC",
  "H1",
  "H4",
  "H3",
  "H2",
  "H4",
  "SC",
  "H1",
  "H2",
  "H3",
  "H1",
  "SC",
  "H3",
  "H4",
  "Bonus",
  "SC",
  "SC",
  "Bonus",
  "H3",
  "H4",
  "Bonus",
  "H1",
  "SC",
  "SC",
  "SC",
  "Bonus",
  "H1",
  "Bonus",
  "H1",
  "H5",
  "H1",
  "H5",
];

const paytable = {
  Wild: { 5: 500, 4: 150, 3: 40 },
  Sp_Wild: { 5: 500, 4: 150, 3: 40 },
  H1: { 5: 300, 4: 125, 3: 25 },
  H2: { 5: 300, 4: 125, 3: 25 },
  H3: { 5: 150, 4: 60, 3: 18 },
  H4: { 5: 125, 4: 50, 3: 15 },
  H5: { 5: 100, 4: 40, 3: 12 },
  L1: { 5: 75, 4: 30, 3: 10 },
  L2: { 5: 75, 4: 30, 3: 10 },
  L3: { 5: 50, 4: 25, 3: 8 },
  L4: { 5: 25, 4: 20, 3: 6 },
  L5: { 5: 25, 4: 20, 3: 6 },
  Bonus: { 5: 0, 4: 0, 3: 0 },
  SC: { 5: 0, 4: 0, 3: 0 },
};

const hotSpotRandomReel1 = () => {
  let randomIndex = Math.floor(Math.random() * hotspotReels1.length);
  return hotspotReels1[randomIndex];
};

const hotSpotRandomReel2 = () => {
  let randomIndex = Math.floor(Math.random() * hotspotReels2.length);
  return hotspotReels2[randomIndex];
};

const hotSpotRandomReel3 = () => {
  let randomIndex = Math.floor(Math.random() * hotspotReels3.length);
  return hotspotReels3[randomIndex];
};

function getRandomMatrix(reels) {
  const matrix = [];
  const indexes = [];

  for (let j = 0; j < 5; j++) {
    const reelLength = reels[j].length;
    let randomIndex = Math.floor(Math.random() * reelLength);

    for (let i = 0; i < 3; i++) {
      let reelIndex = randomIndex % reelLength;
      const symbol = reels[j][reelIndex];
      matrix[i] = matrix[i] || [];
      matrix[i][j] = symbol;
      indexes[i] = indexes[i] || [];
      indexes[i][j] = reelIndex;
      randomIndex++;
    }
  }

  let reel1Data = hotSpotRandomReel1();
  let reel2Data = hotSpotRandomReel2();
  let reel3Data = hotSpotRandomReel3();
  //console.log("purani matrix",matrix)
  matrix[2][1] = matrix[1][1];
  matrix[2][2] = matrix[1][2];
  matrix[2][3] = matrix[1][3];

  matrix[1][1] = reel1Data;
  matrix[1][2] = reel2Data;
  matrix[1][3] = reel3Data;

  // matrix[1][1] = "Sp_Wild";
  //   matrix[1][2] = "Sp_Wild";
  //    matrix[1][3] = "Sp_Wild"

  // console.log("nayi",matrix)
  return matrix;
}

//console.log("nayi matrix", getRandomMatrix(baseGameReels));

function checkWinning(matrix) {
  let totalpayout = 0;
  for (let j = 0; j < 30; j++) {
    let element = matrix[paylines[j][0]][0];
    let counter = 0;
    let wildCounter = 0;
    for (let i = 0; i < 5; i++) {
      if (
        (element === "Wild" || element === "Sp_Wild") &&
        ("Wild" === matrix[paylines[j][i]][i] ||
          "Sp_Wild" === matrix[paylines[j][i]][i])
      ) {
        wildCounter++;
      }

      if (
        element === matrix[paylines[j][i]][i] ||
        "Wild" === matrix[paylines[j][i]][i] ||
        "Sp_Wild" === matrix[paylines[j][i]][i]
      ) {
        counter++;
      } else if (
        (element === "Wild" || element === "Sp_Wild") &&
        (matrix[paylines[j][i]][i] !== "Wild" ||
          matrix[paylines[j][i]][i] !== "Sp_Wild")
      ) {
        counter++;
        element = matrix[paylines[j][i]][i];
      } else {
        break;
      }
    }
    if (counter > 2) {
      let payout = 0;
      if (wildCounter >= 3) {
        if (paytable["Wild"][wildCounter] > paytable[element][counter]) {
          payout = paytable["Wild"][wildCounter];
        } else {
          payout = paytable[element][counter];
        }
      } else {
        payout = paytable[element][counter];
      }
      totalpayout += payout;
    }
  }

  return totalpayout;
}

// base game feature

function ApplyFeature(matrix) {
  let storeHotspotIndex = [];

  for (let j = 1; j <= 3; j++) {
    if (matrix[1][j] === "Sp_Wild") {
      storeHotspotIndex.push(j);
    }
  }
  for (let k = 0; k < storeHotspotIndex.length; k++) {
    let data = storeHotspotIndex[k];

    matrix[0][data] =
      matrix[2][data] =
      matrix[1][data - 1] =
      matrix[1][data + 1] =
        "Sp_Wild";
  }

  //console.log("nayi matrix feature lagake", matrix);
  return matrix;
}

//console.log("purani",matrix)
//console.log(ApplyFeature());

// ..........................bonus game.................................................

function countBonus(matrix) {
  if (!matrix || !Array.isArray(matrix) || matrix.length < 2) {
    // Check if the matrix is not defined, not an array, or doesn't have enough rows.
    return 0; // Return 0 if the matrix is invalid.
  }

  let countBonus = 0;

  if (Array.isArray(matrix[1]) && matrix[1].length >= 4) {
    for (let i = 1; i < 4; i++) {
      if (matrix[1][i] === "Bonus") countBonus++;
    }
  }

  let bonus = 0;
  let Bonsarray = [1, 1, 1, 1, 1, 1, 1];
  if (countBonus === 3) {
    while (true) {
      let random = Math.floor(Math.random() * Bonsarray.length);
      if (Bonsarray[random] === 1) {
        bonus++;
        Bonsarray.splice(random, 1);
        if (bonus === 1) Bonsarray.push(0);
      } else {
        break;
      }
    }
  }
  return bonus * 30;
}

//free game.........
const freeGameReel1 = [
  "H5",
  "L5",
  "L4",
  "H2",
  "L5",
  "H4",
  "H1",
  "L2",
  "L1",
  "H1",
  "L5",
  "H4",
  "L4",
  "H3",
  "L5",
  "L3",
  "H2",
  "L2",
  "L3",
  "H5",
  "L5",
  "H1",
  "L3",
  "L2",
  "H5",
  "H3",
  "L1",
  "L3",
  "H5",
  "L4",
  "H3",
  "L3",
  "H4",
  "H3",
  "H1",
  "L1",
  "L4",
  "H2",
  "L2",
  "L1",
  "H4",
  "H2",
  "L2",
  "H4",
  "L1",
  "H1",
  "H5",
  "L5",
  "L4",
  "H3",
  "L1",
  "L2",
  "L3",
  "L4",
  "L5",
];

const freeGameReel2 = [
  "H1",
  "H2",
  "L2",
  "L3",
  "H1",
  "H4",
  "L2",
  "H3",
  "L5",
  "H5",
  "L2",
  "L1",
  "H5",
  "Wild",
  "H1",
  "L3",
  "H4",
  "H2",
  "L4",
  "L1",
  "H3",
  "H4",
  "H5",
  "L4",
  "L3",
  "H1",
  "H2",
  "H4",
  "Wild",
  "H3",
  "L1",
  "H5",
  "L2",
  "H4",
  "L4",
  "H3",
  "L1",
  "L5",
  "H2",
  "H1",
  "L4",
  "L2",
  "L5",
  "H3",
  "H2",
  "L3",
  "L5",
  "H5",
  "L1",
  "H4",
  "L5",
  "H1",
  "H2",
  "H3",
  "H5",
];

const freeGameReel3 = [
  "L2",
  "H5",
  "L5",
  "L1",
  "L3",
  "L2",
  "L5",
  "H5",
  "L5",
  "H4",
  "H2",
  "L4",
  "L3",
  "H3",
  "L2",
  "L1",
  "L4",
  "L3",
  "L5",
  "L1",
  "H2",
  "H1",
  "L5",
  "L4",
  "H1",
  "L4",
  "H3",
  "L1",
  "L2",
  "H3",
  "H4",
  "L3",
  "Wild",
  "L4",
  "H2",
  "L3",
  "L2",
  "H1",
  "L4",
  "H4",
  "H5",
  "L2",
  "L1",
  "H5",
  "L5",
  "H4",
  "L3",
  "H5",
  "H1",
  "H4",
  "L3",
  "L4",
  "L5",
  "L2",
  "H3",
];

const freeGameReel4 = [
  "H2",
  "H1",
  "L4",
  "L2",
  "H5",
  "L4",
  "L1",
  "H2",
  "L3",
  "H3",
  "L4",
  "L5",
  "H1",
  "H3",
  "L3",
  "H5",
  "H1",
  "H2",
  "H4",
  "H5",
  "H3",
  "L5",
  "L1",
  "L2",
  "L3",
  "Wild",
  "H1",
  "H2",
  "L5",
  "H4",
  "L4",
  "L5",
  "H5",
  "H2",
  "H3",
  "H4",
  "L1",
  "H4",
  "L2",
  "Wild",
  "L5",
  "L1",
  "H3",
  "H4",
  "H2",
  "H1",
  "L3",
  "L5",
  "L2",
  "H1",
  "H5",
  "L1",
  "L4",
  "L2",
  "L3",
];

const freeGameReel5 = [
  "H4",
  "H1",
  "L2",
  "L4",
  "H5",
  "L2",
  "L3",
  "L1",
  "H2",
  "H4",
  "L4",
  "H5",
  "Wild",
  "H3",
  "L2",
  "L4",
  "H1",
  "H5",
  "H4",
  "L1",
  "L3",
  "H3",
  "Wild",
  "H2",
  "L4",
  "L2",
  "H1",
  "L1",
  "H2",
  "L3",
  "L2",
  "H3",
  "L1",
  "L5",
  "H2",
  "H3",
  "L5",
  "H5",
  "L3",
  "H2",
  "L1",
  "H1",
  "L5",
  "L4",
  "L3",
  "L5",
  "H5",
  "H4",
  "L5",
  "H3",
  "H1",
  "L5",
  "H4",
  "L4",
  "L3",
];

const freeGameReels = [
  freeGameReel1,
  freeGameReel2,
  freeGameReel3,
  freeGameReel4,
  freeGameReel5,
];

const hotSpotFreeReels1 = [
  "H5",
  "H4",
  "H1",
  "H2",
  "H5",
  "H4",
  "H3",
  "H2",
  "H1",
  "H1",
  "H2",
  "H4",
  "H5",
  "H3",
  "H5",
  "H4",
  "H2",
  "H1",
  "H5",
  "H5",
  "H4",
  "H1",
  "Sp_Wild",
  "H4",
  "H5",
  "H3",
  "H4",
  "H3",
  "H5",
  "H4",
  "H3",
  "H5",
  "H4",
  "H3",
  "H5",
  "H4",
  "H3",
  "H4",
  "H5",
  "H5",
  "H2",
  "H4",
  "H5",
  "H2",
  "H4",
  "H5",
  "H5",
  "H5",
  "H4",
  "H5",
  "H5",
  "H5",
  "H4",
  "H4",
  "H5",
];
const hotSpotFreeReels2 = [
  "H1",
  "H2",
  "H4",
  "H3",
  "H1",
  "H4",
  "H5",
  "H3",
  "H2",
  "H5",
  "H3",
  "H4",
  "H5",
  "H5",
  "H1",
  "H4",
  "H4",
  "H2",
  "H5",
  "Sp_Wild",
  "H3",
  "H4",
  "H5",
  "H3",
  "H5",
  "H1",
  "H2",
  "H4",
  "H5",
  "H3",
  "H5",
  "H4",
  "H2",
  "H3",
  "H5",
  "H4",
  "H5",
  "H4",
  "H5",
  "H4",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H1",
  "H2",
  "H3",
  "H4",
  "H4",
  "H1",
  "H2",
  "H3",
  "H1",
  "H4",
];
const hotSpotFreeReels3 = [
  "H3",
  "H1",
  "H4",
  "H3",
  "H5",
  "H4",
  "H1",
  "H3",
  "H4",
  "H5",
  "H2",
  "H4",
  "H5",
  "H1",
  "H1",
  "H5",
  "H4",
  "H2",
  "H5",
  "H5",
  "H3",
  "H4",
  "H5",
  "H3",
  "H5",
  "H1",
  "H5",
  "H4",
  "Sp_Wild",
  "H3",
  "H2",
  "H4",
  "H5",
  "H2",
  "H4",
  "H5",
  "H4",
  "H2",
  "H5",
  "H4",
  "H1",
  "H2",
  "H3",
  "H4",
  "H1",
  "H2",
  "H1",
  "H2",
  "H1",
  "H2",
  "H1",
  "H2",
  "H3",
  "H1",
  "H2",
];

const hotspotFreeReels = [
  hotSpotFreeReels1,
  hotSpotFreeReels2,
  hotSpotFreeReels3,
];

const freehotSpotRandomReel1 = () => {
  let randomIndex = Math.floor(Math.random() * hotSpotFreeReels1.length);
  return hotSpotFreeReels1[randomIndex];
};

const freehotSpotRandomReel2 = () => {
  let randomIndex = Math.floor(Math.random() * hotSpotFreeReels2.length);
  return hotSpotFreeReels2[randomIndex];
};

const freehotSpotRandomReel3 = () => {
  let randomIndex = Math.floor(Math.random() * hotSpotFreeReels3.length);
  return hotSpotFreeReels3[randomIndex];
};

function getFreeRandomMatrix(reels) {
  const matrix = [];
  const indexes = [];

  for (let j = 0; j < 5; j++) {
    const reelLength = reels[j].length;
    let randomIndex = Math.floor(Math.random() * reelLength);

    for (let i = 0; i < 3; i++) {
      let reelIndex = randomIndex % reelLength;
      const symbol = reels[j][reelIndex];
      matrix[i] = matrix[i] || [];
      matrix[i][j] = symbol;
      indexes[i] = indexes[i] || [];
      indexes[i][j] = reelIndex;
      randomIndex++;
    }
  }

  let reel1Data = freehotSpotRandomReel1();
  let reel2Data = freehotSpotRandomReel2();
  let reel3Data = freehotSpotRandomReel3();
  //console.log("purani matrix",matrix)
  matrix[2][1] = matrix[1][1];
  matrix[2][2] = matrix[1][2];
  matrix[2][3] = matrix[1][3];

  matrix[1][1] = reel1Data;
  matrix[1][2] = reel2Data;
  matrix[1][3] = reel3Data;

  // matrix[1][1] = "Sp_Wild";
  //   matrix[1][2] = "Sp_Wild";
  //    matrix[1][3] = "Sp_Wild"

  // console.log("nayi",matrix)
  return matrix;
}

//wheel
function wheelForFreeSpins() {
  let freeSpinPossiblities = [10, 15, 20, 25, 10, 15, 20, 25];
  let randomSpinInWheel = Math.floor(
    Math.random() * freeSpinPossiblities.length
  );
  return freeSpinPossiblities[randomSpinInWheel];
}

// free spin matrix
function freeSpinWithFeatureMatrix(matrix, freeArray) {
  for (let i = 0; i < freeArray.length; i++) {
    let index = freeArray[i];
    matrix[1][index - 1] = "Sp_Wild";
    matrix[1][index + 1] = "Sp_Wild";
    matrix[0][index] = "Sp_Wild";
    matrix[2][index] = "Sp_Wild";
    matrix[0][index - 1] = "Sp_Wild";
    matrix[0][index + 1] = "Sp_Wild";
    matrix[2][index - 1] = "Sp_Wild";
    matrix[2][index + 1] = "Sp_Wild";
  }
  return matrix;
}

//scater count
function ScatterCount(matrix) {
  let scatterCount = 0;
  for (let i = 1; i < 4; i++) {
    if (matrix[1][i] === "SC") scatterCount++;
  }
  return scatterCount;
}

//spwild count
function SpWildCount(matrix) {
  let arr = [];
  for (let i = 1; i < 4; i++) {
    if (matrix[1][i] === "Sp_Wild") arr.push(i);
  }
  return arr;
}

function finalRtp() {
  let totalWinWithoutFeature = 0;
  let totalWinWithFeature = 0;
  let initialBet = 30;
  let totalBetForSpins = 0;
  let bonusWinning = 0;
  let freeGameWin = 0;

  for (let noOfSpins = 0; noOfSpins <= 10000000; noOfSpins++) {
    totalBetForSpins += initialBet;
    let matrix = getRandomMatrix(baseGameReels);
    totalWinWithoutFeature += checkWinning(matrix);

    if (
      matrix[1][1] === "Sp_Wild" ||
      matrix[1][2] === "Sp_Wild" ||
      matrix[1][3] === "Sp_Wild"
    ) {
      let finalMatrix = ApplyFeature(matrix);
      totalWinWithFeature += checkWinning(finalMatrix);
    }
    let finalMatrix = ApplyFeature(matrix);
    bonusWinning += countBonus(finalMatrix);

    //free game calculation

    let scatterCount = ScatterCount(finalMatrix);
    if (scatterCount === 3) {
      let freeSpinValue = wheelForFreeSpins();
      for (let i = 0; i < freeSpinValue; i++) {
        let freeGameMatrix = getFreeRandomMatrix(freeGameReels);
        // console.log("after",freeGameMatrix)
        freeGameWin += checkWinning(freeGameMatrix);
        let freeArray = SpWildCount(freeGameMatrix);
        if (freeArray.length > 0) {
          //console.log("before",finalMatrix)
          //console.log("after",freeGameMatrix)
          let freeGameFeatures = freeSpinWithFeatureMatrix(
            freeGameMatrix,
            freeArray
          );

          // console.log("after sp wild",freeGameFeatures)
          freeGameWin += checkWinning(freeGameFeatures);
        }
      }
    }

    if (noOfSpins % 1000000 == 0) {
      let baseGameWithOutFeatureRtp =
        (totalWinWithoutFeature / totalBetForSpins) * 100;
      let baseGameWithFeatureRtp =
        (totalWinWithFeature / totalBetForSpins) * 100;
      let bonusGameRtp = (bonusWinning / totalBetForSpins) * 100;
      let freeGameRtp = (freeGameWin / totalBetForSpins) * 100;
      let totalRtp =
        baseGameWithOutFeatureRtp +
        baseGameWithFeatureRtp +
        bonusGameRtp +
        freeGameRtp;

      console.log(
        "............................................................"
      );
      console.log("Base Game Without Feature Rtp: ", baseGameWithOutFeatureRtp);
      console.log("Base Game With Feature Rtp: ", baseGameWithFeatureRtp);
      console.log("Bonus Game ", bonusGameRtp);
      console.log("Free Game Rtp", freeGameRtp);
      console.log(`Total Rtp: ${totalRtp}`);
    }
  }
}

finalRtp();
