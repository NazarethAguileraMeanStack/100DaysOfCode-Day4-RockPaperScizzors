const art = {};

art.rock = `
_______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)`;

art.paper = `
_______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
`;

art.scissors = `
_______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)`;

art.render = function(num) {
    if (num === 1) {
        console.log(art.rock);
    } else if (num === 2) {
        console.log(art.paper);
    } else {
        console.log(art.scissors);
    }
};

module.exports = art;