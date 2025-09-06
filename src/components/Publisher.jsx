import React from "react";
import "./Publisher.css";

// danh sách toàn bộ logo (bà bỏ logo vô thư mục public/logos)
const publishers = [
  { id: 1, name: "Evolution", url: "./1.ico" },
  { id: 2, name: "Pragmatic Play", url: "./2.ico" },
  { id: 3, name: "Sexy", url: "./3.ico" },
  { id: 4, name: "Playtech", url: "./4.ico" },
  { id: 5, name: "Ezugi", url: "./5.ico" },
  { id: 6, name: "Microgaming", url: "./6.ico" },
  { id: 7, name: "Gameplay", url: "./logos/gameplay.png" },
  { id: 8, name: "Vivo", url: "./8.ico" },
  { id: 9, name: "SA Gaming", url: "./9.ico" },
  { id: 10, name: "JILI", url: "./10.ico" },
  { id: 11, name: "Pocket Games", url: "./11.ico" },
  { id: 12, name: "JDB", url: "./12.ico" },
  { id: 13, name: "FC", url: "./13.ico" },
  { id: 14, name: "Spribe", url: "./14.ico" },
  { id: 15, name: "BNG", url: "./15.ico" },
  { id: 16, name: "BT Gaming", url: "./16.ico" },
  { id: 17, name: "Spadegaming", url: "./17.ico" },
  { id: 18, name: "Smartsoft", url: "./18.ico" },
  { id: 19, name: "Yellow Bat", url: "./19.ico" },
  { id: 20, name: "Playstar", url: "./20.ico" },
  { id: 21, name: "Amigo", url: "./21.ico" },
  { id: 22, name: "FastSpin", url: "./22.ico" },
  { id: 23, name: "Eazy", url: "./23.ico" },
  { id: 24, name: "Wazdan", url: "./24.ico" },
  { id: 25, name: "5G Games", url: "./25.ico" },
  { id: 26, name: "Booming", url: "./26.ico" },
  { id: 27, name: "KA Gaming", url: "./27.ico" },
  { id: 28, name: "Big Time Gaming", url: "./28.ico" },
  { id: 29, name: "Naga Games", url: "./29.ico" },
  { id: 30, name: "Yggdrasil", url: "./30.ico" },
  { id: 31, name: "Live22", url: "./31.ico" },
  { id: 32, name: "Manna Play", url: "./logos/manna.png" },
  { id: 33, name: "DB Slots", url: "./logos/dbslots.png" },
  { id: 34, name: "First Person", url: "./logos/firstperson.png" },
  { id: 35, name: "BGaming", url: "./logos/bgaming.png" },
  { id: 36, name: "Ameba", url: "./logos/ameba.png" },
  { id: 37, name: "Gaxo", url: "./logos/gaxo.png" },
  { id: 38, name: "NetEnt", url: "./logos/netent.png" },
  { id: 39, name: "Red Tiger", url: "./logos/redtiger.png" },
  { id: 40, name: "Mascot", url: "./logos/mascot.png" },
  { id: 41, name: "Mega", url: "./logos/mega.png" },
  { id: 42, name: "FTG", url: "./logos/ftg.png" },
  { id: 43, name: "Nextspin", url: "./logos/nextspin.png" },
  { id: 44, name: "Nolimit", url: "./logos/nolimit.png" },
  { id: 45, name: "AvatarUX", url: "./logos/avatarux.png" },
  { id: 46, name: "Hacksaw", url: "./logos/hacksaw.png" },
  { id: 47, name: "Vivan", url: "./logos/vivan.png" },
  { id: 48, name: "Rela", url: "./logos/rela.png" },
  { id: 49, name: "Caleta", url: "./logos/caleta.png" },
  { id: 50, name: "Octoplay", url: "./logos/octoplay.png" },
  { id: 51, name: "Askmelog", url: "./logos/askme.png" },
  { id: 52, name: "Joker", url: "./logos/joker.png" },
  { id: 53, name: "Maha", url: "./logos/maha.png" },
  { id: 54, name: "Baison", url: "./logos/baison.png" },
  { id: 55, name: "Top1", url: "./logos/top1.png" },
  { id: 56, name: "Pascal", url: "./logos/pascal.png" },
  { id: 57, name: "Evoplay", url: "./logos/evoplay.png" },
  { id: 58, name: "KingMidas", url: "./logos/kingmidas.png" },
  { id: 59, name: "KingsPoker", url: "./logos/kings.png" },
  { id: 60, name: "WinGates", url: "./logos/wingates.png" },
  { id: 61, name: "Lucky", url: "./logos/lucky.png" },
  { id: 62, name: "BTi", url: "./logos/bti.png" },
  { id: 63, name: "Saba Sports", url: "./logos/saba.png" },
  { id: 64, name: "FB Sports", url: "./logos/fb.png" },
  { id: 65, name: "United Gaming", url: "./logos/united.png" },
  { id: 66, name: "AP Gaming", url: "./logos/ap.png" },
  { id: 67, name: "Poly", url: "./logos/poly.png" },
  { id: 68, name: "SV", url: "./logos/sv.png" },
  { id: 69, name: "Panda", url: "./logos/panda.png" },
  { id: 70, name: "TF Gaming", url: "./logos/tf.png" },
  { id: 71, name: "IA Esports", url: "./logos/ia.png" },
  { id: 72, name: "TC Gaming", url: "./logos/tc.png" },
];

const Publisher = () => {
  return (
    <div className="publisher-container">
      <h2 className="publisher-title">🏆 PUBLISHERS</h2>
      <div className="publisher-grid">
        {publishers.map((item) => (
          <div key={item.id} className="publisher-card">
            <img src={item.url} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publisher;

