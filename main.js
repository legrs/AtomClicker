/*
変数名:
    自動        Aut
    開発        Dev
    製作        Cre
    元素        Ato
    粒子        Pne
    名前        Nam
    配列        Arr
    HTML       Htm
    ラジオボタン  Rad
    戻る        Bac
    ボタン       Btn
    追加        Add
    数          Qty
    自動        aut
    エネルギー    Ene
    ボタン       Btn
    選択        Sel
    中身        Inn
    必要        Nee
    あげる      Up
    使う        Use
    現在        Now
    秒         Sec
    infomation Inf
    level      Lev
関数名:
    名前:変数と同じかつ最初にFを付ける
*/
const SystemMessage =['バグの確認だよね？不正をして元素を増やすなんてことはしないよね？','こんにちは！ゲームでズルをするのって良くないよね？','最近AtomClickerで不正をする人がいるんだよ'];
let Rad1Htm = document.querySelector('#develop');      // 切り
let Rad2Htm = document.querySelector('#create');       //   替え
let DevHtm = document.querySelector('#developer'); //       専
let CreHtm = document.querySelector('#creator');     //         用
const isAllSync = array => array.every(value => value === array[0]);

let AddHBtnHtm = document.querySelector('#plusH');      //水素追加ボタン
let AtoQtyHtm = document.querySelector('#atomQty'); //合計元素数

let AutAtoBtnHtm = document.querySelector('#autoAtom');    //製造画面の
let AutEneBtnHtm = document.querySelector('#autoEnergy');//    選択ボタン

let AutAtoHtm = document.querySelector('#autoAtoms');      //自動生成の表示部分
let AutEneHtm = document.querySelector('#autoEnergys');  //自動発電の表示部分

let Bac1BtnHtm = document.querySelector('#back1'); //自動生成から戻るボタン
let Bac2BtnHtm = document.querySelector('#back2'); //自動発電から戻るボタン

let AddQtyHtm = document.querySelector('#addNum'); //何個追加するか
let plusBtnHtm = document.querySelector('#plus');  //プラスボタン
let minusBtnHtm = document.querySelector('#minus');//マイナスボタン

let SelAtoHtm = document.querySelector('#selectAtomHTML'); //html表示側の選択中:
let InfHtm = document.querySelector('#infomationDiv');    //このサイトについて

let BacInfBtnHtm = document.querySelector('#closeInfomation');  //このサイトについて戻るボタン
let InfBtnHtm = document.querySelector('#infomation'); //このサイトについてを表示するボタン

let AutAtoInnHtm = document.querySelector('#autoAtomScr');  //自動生産の本体
let AutEneInnHtm = document.querySelector('#autoEnergyScr');
let apsHtm = document.querySelector('#ApSNum');
let epsHtm = document.querySelector('#EpSNum');
let toridasiHtm = document.querySelector('#toridasi');
let disSelectHtm = document.querySelector('#disSelect');

let hoverInfHtm = document.querySelector('#hoverInfo'); //カーソルを合わせて出てくる説明
let InfNamHtm = document.querySelector('#Name'); //説明の名前

let Inf1 = document.querySelector('#info1'); //説明の名前
let Inf2 = document.querySelector('#info2');
let Inf3 = document.querySelector('#info3');
let Inf4 = document.querySelector('#info4');
let Inf5 = document.querySelector('#info5');
let Inf6 = document.querySelector('#info6');
let Inf7 = document.querySelector('#info7');
let Inf8 = document.querySelector('#info8');

let AutAtoQtyArrHtm=[
document.querySelector('#addHQty'),
document.querySelector('#addH2Qty'),
document.querySelector('#addaQty'),
document.querySelector('#addHeQty'),
document.querySelector('#addLiQty'),
document.querySelector('#addBeQty'),
document.querySelector('#addBe2Qty'),
document.querySelector('#addCQty')];

let AutEneQtyArrHtm=[
document.querySelector('#addE1Qty'),
document.querySelector('#addE2Qty'),
document.querySelector('#addE3Qty'),
document.querySelector('#addE4Qty')];

let PneQtyArrHtm=[
document.querySelector('#pNum'),  //粒子の数(html)
document.querySelector('#nNum'),
document.querySelector('#eNum')];

let EneHtm = document.querySelector('#ENum');

let PneArrHtm=[   //粒子(html)
document.querySelector('#p'),
document.querySelector('#n'),
document.querySelector('#e')];

let AtoQtyArrHtm=[
document.querySelector('#HNum'),  //元素数(html)
document.querySelector('#HeNum'),
document.querySelector('#LiNum'),
document.querySelector('#BeNum'),
document.querySelector('#BNum'),
document.querySelector('#CNum'),
document.querySelector('#NNum'),
document.querySelector('#ONum'),
document.querySelector('#FNum'),
document.querySelector('#NeNum')];

let AtoArrHtm=[
document.querySelector('#H'),    //元素(html)
document.querySelector('#He'),
document.querySelector('#Li'),
document.querySelector('#Be'),
document.querySelector('#B'),
document.querySelector('#C'),
document.querySelector('#N'),
document.querySelector('#O'),
document.querySelector('#F'),
document.querySelector('#Ne')];

if(typeof NumericText != 'function'){ //CDNに繋がらなかった時用。アニメーションはしないけど数字はちゃんと出る
    window.NumericText = class{
        constructor(element,option = {}){
            this.element = element;
            this.suf = option.suf || '';
            this.value = element.textContent;
        }
        set(value){
            this.value = value;
            this.element.textContent = `${value}${this.suf}`;
        }
    };
}

let AtoQtyNt = new NumericText(AtoQtyHtm,{type:'string'});         //合計元素数(数字アニメーション)
let ApSNt = new NumericText(apsHtm,{type:'string'});
let EpSNt = new NumericText(epsHtm,{type:'string'});
let EneNt = new NumericText(EneHtm,{type:'string',suf:'E'});
let PneQtyNtArr = PneQtyArrHtm.map((value) => new NumericText(value,{type:'string'}));
let AtoQtyNtArr = AtoQtyArrHtm.map((value) => new NumericText(value,{type:'string'}));
let AutAtoQtyNtArr = AutAtoQtyArrHtm.map((value) => new NumericText(value,{type:'string'}));
let AutEneQtyNtArr = AutEneQtyArrHtm.map((value) => new NumericText(value,{type:'string'}));

const AtoArr     =    ['H','He','Li','Be','B','C','N','O','F','Ne']; //元素全部
const AtoNamArr      =    ['水素','ヘリウム','リチウム','ベリリウム',' ホウ素','炭素','窒素','酸素','フッ素','ネオン'];
let AtoQtyArr = [0,0,0,0,0,0,0,0,0,0]; //元素の数

const DevNamArr =    ['質量エネルギー化装置','粒子合成装置','原子加速装置','原子分解装置'];
const DevArr=    ['toEnergy',       'toAtom',   'atomKsk',  'toPNE',];
let DevLevArr = [0,0,0,0];
const maxDevLevArr=[3,1,2,1];
const DevLevNeeAtoArr =[[
                        ['H'],
                        ['H'],
                        ['Li','Be'],
                        ['H']
                        ],
                        [
                        ['H','He'],
                        [],
                        ['Li','Be','B'],
                        []
                        ],
                        [
                        ['H','He','Li','Be'],
                        [],
                        [],
                        []
                        ]];
const DevLevNeeQtyArr =[[
                        [60],
                        [100],
                        [200,20],
                        [80]
                        ],
                        [
                        [200,50],
                        [],
                        [1000,500,50],
                        []
                        ],
                        [
                        [5000,1000,500,100],
                        [],
                        [],
                        []
                        ]];
const DevInfArr = [
                        '水素の質量をエネルギーに変換します',
                        '粒子を合成し原子にします',
                        '原子を衝突させ元素を作り出します',
                        '原子を粒子に分解します'];
let DevInnAtoArr = [
                        [],
                        [],
                        [],
                        []
                        ];
let DevInnQtyArr = [
                            [],
                            [],
                            [],
                            []
                            ];
const DevUseNeeEneArr= [0.1,1,4,3];
const AutAtoArr = ['addH','addH2','adda','addHe','addLi','addBe','addBe2','addC'];
const AutAtoNamArr = ['水素カーソル','水電解装置','原子誘引装置','ヘリウムタービン','リチウム生成装置','ベリリウム複製装置','ベリリウム鉱山','有機発生装置'];
let AutAtoQtyArr = [0,0,0,0,0,0,0,0];
const apsAutAto = ['H','H','H','He','Li','Be','Be','C'];
const apsQtyAutAto = [0.1,1,10,0.1,0.1,0.1,1,1];
const AutAtoUseNeeAto = [
                    ['H'],
                    ['H'],
                    ['H'],
                    ['H','He'],
                    ['H','Li'],
                    ['H','Be'],
                    ['H','Li','Be',],
                    ['H','He','Li','B','C']
                    ];
const AutAtoUseNeeQty=[
                    [15],
                    [200],
                    [2000],
                    [200,5],
                    [800,5],
                    [2000,5],
                    [3000,100,10],
                    [4000,1000,100,10,5]
                    ];
let AutAtoUseNeeQtyNow = []; //今の値段。FnowNeeで作る
const AutEneArr = ['addE1','addE2','addE3','addE4'];
const AutEneNamArr = ['炭素太陽光発電装置','結合エネルギー発電装置','炭素燃焼発電装置','常温核融合発電装置'];
let AutEneQtyArr = [0,0,0,0];
const epsAutEne = ['E','E','E','E'];
const epsQtyAutEne= [1,5,8,20];
const AutEneUseNeeAto = [
                    ['Li','C'],
                    ['H','Li','O'],
                    ['H','C','O'],
                    ['H','Li','Be','O']
                    ];
const AutEneUseNeeQty =[
                    [3000,10],
                    [5000,1000,10],
                    [4000,100,100],
                    [1000,1000,1000,200]
                    ];
let AutEneUseNeeQtyNow = []; //今の値段。FnowNeeで作る
const PneAtoArr  =[//それぞれの元素の陽子の数
                [1,2,3,4,5,6,7,8,9,10], //p
                [0,2,4,5,5,6,7,8,10,10], //n
                [1,2,3,4,5,6,7,8,9,10] //e
                ];

let foundAto = ['H'];  // 発見済み元素

let delay500ms;
let hoverInfBack; //説明を元に戻すタイマー

let SelAtoNow = ''; //選択している元素
let Ene = 0;  //エネルギー
const PneArr=['p','n','e'];
let PneQtyArr = [
0,  //陽子の数
0, //中性子の数
0];//電子の数

let BacInfBtnHtmnone ;

let AddQty = 1; //1度に追加する数
let click = false; //plus minusをクリックしているか
let AddQtyAddQty = 1;//一度に追加する数を追加する数
let Finterval;
let AddQtyAddedQty = 0;
let aps = [0,0,0,0,0,0,0,0,0,0] //元素毎秒
let eps = 0;

let toridasi = 'OFF';

console.log(`[==${SystemMessage[Math.floor(Math.random()*SystemMessage.length)]}==]`);
function Fid(target){ //NumericTextがidなしのspanに置き換えるので、元のidまで遡る。個数のセルは本体のidとして扱う
    let element = (target && target.closest) ? target.closest('[id]') : null;
    if(element == null){
        return '';
    }
    let base = element.id.replace(/Qty$/,'');
    if(AutAtoArr.includes(base) || AutEneArr.includes(base)){
        return base;
    }
    return element.id;
}
function Ftoridasi(value){ //取り出しモードの切り替え
    toridasi = value;
    toridasiHtm.style.backgroundColor = toridasi == 'ON' ? "#0077ff" : "rgb(134, 134, 134)";
}
function Fchange(element){ //画面切り替え
    if(toridasi == 'ON'){ //取り出しっぱなしで別画面に行くと戻ってきた時に事故るのでここで解除
        Ftoridasi('OFF');
    }
    if(element.target.id != 'develop' && element.target.id != 'create'){
        AutAtoBtnHtm.style.display = 'none';
        AutEneBtnHtm.style.display = 'none';
        switch(element.target.id){
            case 'autoAtom':
                AutAtoHtm.style.display = 'block';
                break;
            case 'autoEnergy':
                AutEneHtm.style.display = 'block';
                break;
        }
    }else{
        switch(Rad1Htm.checked){
            case true:
                DevHtm.style.display = "block";
                CreHtm.style.display = "none";
                AutAtoHtm.style.display = "none";
                AutEneHtm.style.display = "none";
                AutAtoBtnHtm.style.display = "none";
                AutEneBtnHtm.style.display = "none";
                break;
            case false:
                DevHtm.style.display = "none";
                CreHtm.style.display = "block";
                AutAtoHtm.style.display = "none";
                AutEneHtm.style.display = "none";
                AutAtoBtnHtm.style.display = "block";
                AutEneBtnHtm.style.display = "block";
                break;
        }
    }
}
function FSel(element){ //選択
    if(element.target.id!=SelAtoNow){
            AtoArrHtm.forEach((value) => {
                value.style.backgroundColor = "rgb(125, 190, 225)";
            });
            PneArrHtm.forEach((value) => {
                value.style.backgroundColor = "rgb(125, 190, 225)";
            });
            SelAtoNow = '';
            AtoArrHtm.forEach((value) => {
                if(value.id == element.target.id && foundAto.includes(element.target.id)){
                    value.style.backgroundColor = "rgb(125, 225, 155)";
                    SelAtoNow = element.target.id;
                }
            });

            PneArrHtm.forEach((value,index) => {
                if(value.id == element.target.id && PneQtyArr[index] != 0){
                    value.style.backgroundColor = "rgb(125, 225, 155)";
                    SelAtoNow = element.target.id;
                }
            });
        }else{
            AtoArrHtm.forEach((value) => {
                value.style.backgroundColor = "rgb(125, 190, 225)";
            });
            PneArrHtm.forEach((value) => {
                value.style.backgroundColor = "rgb(125, 190, 225)";
            });
            SelAtoNow = '';
        }

        if(AtoArr.includes(SelAtoNow) && !(AtoArr.includes(element.target.id))){

            AtoArrHtm.forEach((value) => {
                value.style.backgroundColor = "rgb(125, 190, 225)";
            });
        }
        if(PneArr.includes(SelAtoNow) && !(PneArr.includes(element.target.id))){

            PneArrHtm.forEach((value) => {
                value.style.backgroundColor = "rgb(125, 190, 225)";
            });
        }
        SelAtoHtm.innerHTML = `選択中:${SelAtoNow}`;
    if(toridasi=='ON'){ //何か選んだら投入モードに戻す(選択はそのまま残す)
        Ftoridasi('OFF');
        hoverInfHtm.style.display = 'block';
        FInfClear();
        InfNamHtm.innerHTML = '取り出し';
        Inf1.innerHTML = 'オンにしている状態で開発装置をクリックすると';
        Inf2.innerHTML = '開発装置の中身を取り出します';
        Inf3.innerHTML = `現在:${toridasi}`;
    }
}
function Ffound(index){ //新しい元素を見つけた時
    if(!foundAto.includes(AtoArr[index])){
        foundAto.push(AtoArr[index]);
    }
    AtoArrHtm[index].innerHTML = AtoArr[index];
}
function FnowNee(){ //自動生産/自動発電の今の値段を作り直す(買った数だけ1.15倍)
    AutAtoUseNeeQtyNow = AutAtoUseNeeQty.map((value,index) => value.map((qty) => Math.round(qty * (1.15 ** AutAtoQtyArr[index]))));
    AutEneUseNeeQtyNow = AutEneUseNeeQty.map((value,index) => value.map((qty) => Math.round(qty * (1.15 ** AutEneQtyArr[index]))));
}
function FapsEps(){ //ApSとEpSを持ってる装置から数え直す
    aps = aps.map(() => 0);
    AutAtoQtyArr.forEach((qty,index) => {
        aps[AtoArr.indexOf(apsAutAto[index])] += qty * apsQtyAutAto[index];
    });
    aps = aps.map((value) => Number(value.toFixed(1)));
    eps = Number(AutEneQtyArr.reduce((a,qty,index) => a + qty * epsQtyAutEne[index],0).toFixed(1));
}
function FSync(){ //実際の数字とhtml表示を同期(値が実際に変わった時だけ.setを呼ぶ。無駄なsetがNumericTextのアニメーションを毎回中断してしまうため)
    let newAtoQty = FtoSI(Math.floor(FsumArr(AtoQtyArr)),0);
    if(newAtoQty != AtoQtyNt.value) AtoQtyNt.set(newAtoQty);
    AtoQtyNtArr.forEach((value,index) => {
        let newValue = FtoSI(Math.floor(AtoQtyArr[index]),0);
        if(newValue != value.value) value.set(newValue);
    });
    PneQtyNtArr.forEach((value,index) => {
        let newValue = FtoSI(Math.floor(PneQtyArr[index]),0);
        if(newValue != value.value) value.set(newValue);
    });
    let newEne = FtoSI(Math.floor(Ene),0);
    if(newEne != EneNt.value) EneNt.set(newEne);
}
function FSyncAll(){ //ロードした後などに表示を全部作り直す
    FSync();
    AutAtoQtyNtArr.forEach((value,index) => value.set(FtoSI(AutAtoQtyArr[index],0)));
    AutEneQtyNtArr.forEach((value,index) => value.set(FtoSI(AutEneQtyArr[index],0)));
    ApSNt.set(FtoSI(FsumArr(aps),1));
    EpSNt.set(FtoSI(eps,1));
    AtoArr.forEach((value,index) => {
        if(foundAto.includes(value)) AtoArrHtm[index].innerHTML = value;
    });
}
function FBac(){ //製作画面に戻る
    AutAtoHtm.style.display = 'none';
    AutEneHtm.style.display = 'none';
    AutAtoBtnHtm.style.display = 'block';
    AutEneBtnHtm.style.display = 'block';
}
function Fplusminusdown(element){ //追加数のプラスマイナスボタンが押されたとき
    click = true;
    clearTimeout(delay500ms);
    Fplusminus(element);
    delay500ms = setTimeout(() => {
        if(click == true){
            clearInterval(Finterval);
            Finterval = setInterval(() => {
                            if(AddQtyAddedQty % 15 == 0){
                                AddQtyAddQty *= 2;
                            }
                            Fplusminus(element);
                            AddQtyAddedQty++;
                        },50);
        }
    }, 500);
}
function Fplusminusup(){ //押すのをやめたとき。ボタンの外で離しても止まるようにdocumentで拾う
    click = false;
    clearTimeout(delay500ms);
    clearInterval(Finterval);
    AddQtyAddQty = 1;
    AddQtyAddedQty = 0;
}
function FAutAtoclick(element){
    let index = AutAtoArr.indexOf(Fid(element.target));
    if(index == -1) return;
    let canLevelUp = AutAtoUseNeeAto[index].every((value,i) => AtoQtyArr[AtoArr.indexOf(value)] >= AutAtoUseNeeQtyNow[index][i]);
    if(canLevelUp){ //レベルアップできる
        AutAtoUseNeeAto[index].forEach((value,i) => {
            AtoQtyArr[AtoArr.indexOf(value)] -= AutAtoUseNeeQtyNow[index][i];
        });
        AutAtoQtyArr[index]++;
        FnowNee();
        FapsEps();
        AutAtoQtyNtArr[index].set(FtoSI(AutAtoQtyArr[index],0));
        ApSNt.set(FtoSI(FsumArr(aps),1));
        FSync();
    }
    FshowHoverInf(element);
}
function FAutEneclick(element){
    let index = AutEneArr.indexOf(Fid(element.target));
    if(index == -1) return;
    let canLevelUpEne = AutEneUseNeeAto[index].every((value,i) => AtoQtyArr[AtoArr.indexOf(value)] >= AutEneUseNeeQtyNow[index][i]);
    if(canLevelUpEne){ //レベルアップできる
        AutEneUseNeeAto[index].forEach((value,i) => {
            AtoQtyArr[AtoArr.indexOf(value)] -= AutEneUseNeeQtyNow[index][i];
        });
        AutEneQtyArr[index]++;
        FnowNee();
        FapsEps();
        AutEneQtyNtArr[index].set(FtoSI(AutEneQtyArr[index],0));
        EpSNt.set(FtoSI(eps,1));
        FSync();
    }
    FshowHoverInf(element);
}
function FInfClear(){ //説明欄を一旦空にする
    Inf1.innerHTML = '';
    Inf2.innerHTML = '';
    Inf3.innerHTML = '';
    Inf4.innerHTML = '';
    Inf5.innerHTML = '';
    Inf6.innerHTML = '';
    Inf7.innerHTML = '';
    Inf8.innerHTML = '';
}
function FneeList(atoArr,qtyArr){ //「 H 60, He 50」みたいな文字列を作る
    return atoArr.map((value,index) => `${value} ${FtoSI(qtyArr[index],0)}`).join(', ');
}
function FshowHoverInf(element){
    let id = Fid(element.target);
    switch(id){
        case 'H':
        case 'He':
        case 'Li':
        case 'Be':
        case 'B':
        case 'C':
        case 'N':
        case 'O':
        case 'F':
        case 'Ne': //元素説明
            hoverInfHtm.style.display = 'block';
            FInfClear();
            if(foundAto.includes(id)){
                InfNamHtm.innerHTML  = AtoNamArr[AtoArr.indexOf(id)];
                Inf1.innerHTML = `元素記号:${id}`;
                Inf2.innerHTML = `陽子数:&nbsp;&nbsp;&nbsp;${PneAtoArr[0][AtoArr.indexOf(id)]}`;
                Inf3.innerHTML = `電子数:&nbsp;&nbsp;&nbsp;${PneAtoArr[2][AtoArr.indexOf(id)]}`;
                Inf4.innerHTML = `中性子数:${PneAtoArr[1][AtoArr.indexOf(id)]}`;
            }else{
                InfNamHtm.innerHTML  = '未発見元素';
                Inf1.innerHTML = `元素記号:?`;
                Inf2.innerHTML = `陽子数:&nbsp;&nbsp;&nbsp;${PneAtoArr[0][AtoArr.indexOf(id)]}`;
                Inf3.innerHTML = `電子数:&nbsp;&nbsp;&nbsp;${PneAtoArr[2][AtoArr.indexOf(id)]}`;
                Inf4.innerHTML = `中性子数:?`;
            }
            break;
        case 'addNum'://追加数説明
            hoverInfHtm.style.display = 'block';
            FInfClear();
            InfNamHtm.innerHTML = '一度に投入する数';
            Inf1.innerHTML = '1以上の数を指定';
            break;
        case 'toEnergy':
        case 'toPNE':
        case 'toAtom':
        case 'atomKsk'://開発説明
            hoverInfHtm.style.display = 'block';
            FInfClear();
            let dev = DevArr.indexOf(id);
            let lev = DevLevArr[dev];
            InfNamHtm.innerHTML  = DevNamArr[dev];
            Inf5.innerHTML = `説明:${DevInfArr[dev]}`;
            Inf1.innerHTML = lev == 0 ? '未作成' : `Lv.${lev}`;
            if(lev != maxDevLevArr[dev]){ //レベルが最大でない
                Inf2.innerHTML = lev == 0 ? '作成必要元素:' : '強化必要元素:';
                Inf3.innerHTML = FneeList(DevLevNeeAtoArr[lev][dev],DevLevNeeQtyArr[lev][dev]);
                Inf4.innerHTML = lev == 0 ? '左クリックで作成' : '左クリックで強化';
            }
            if(lev != 0){
                if(DevInnAtoArr[dev].length == 0){ //中身がない
                    Inf6.innerHTML = '元素を選択して左クリックで投入';
                }else{ //中身あり
                    Inf4.innerHTML = `中身:${FneeList(DevInnAtoArr[dev],DevInnQtyArr[dev])}`;
                    Inf6.innerHTML = '右クリックで処理';
                    if(id == 'toEnergy'){
                        Inf7.innerHTML = `${FtoSI(FEneCre(),0)}E 生産`;
                    }else{
                        Inf7.innerHTML = `${FtoSI(FEneUse(dev),0)}E 消費`;
                    }
                }
            }
            break;
        case 'addH':
        case 'addH2':
        case 'adda':
        case 'addHe':
        case 'addLi':
        case 'addBe':
        case 'addBe2':
        case 'addC': //自動生産説明
            hoverInfHtm.style.display = 'block';
            FInfClear();
            InfNamHtm.innerHTML=AutAtoNamArr[AutAtoArr.indexOf(id)];
            Inf1.innerHTML=`作成必要元素:`;
            Inf2.innerHTML=FneeList(AutAtoUseNeeAto[AutAtoArr.indexOf(id)],AutAtoUseNeeQtyNow[AutAtoArr.indexOf(id)]);
            Inf3.innerHTML=`毎秒生産:`;
            Inf4.innerHTML=`${apsAutAto[AutAtoArr.indexOf(id)]} ${apsQtyAutAto[AutAtoArr.indexOf(id)]}`;
            break;
        case 'addE1':
        case 'addE2':
        case 'addE3':
        case 'addE4': //自動発電説明
            hoverInfHtm.style.display = 'block';
            FInfClear();
            InfNamHtm.innerHTML=AutEneNamArr[AutEneArr.indexOf(id)];
            Inf1.innerHTML=`作成必要元素:`;
            Inf2.innerHTML=FneeList(AutEneUseNeeAto[AutEneArr.indexOf(id)],AutEneUseNeeQtyNow[AutEneArr.indexOf(id)]);
            Inf3.innerHTML=`毎秒生産:`;
            Inf4.innerHTML=`${epsAutEne[AutEneArr.indexOf(id)]} ${epsQtyAutEne[AutEneArr.indexOf(id)]}`;
            break;
        case 'infomation'://このサイトについて
            hoverInfHtm.style.display = 'block';
            FInfClear();
            InfNamHtm.innerHTML = 'このサイトについて';
            Inf1.innerHTML = 'クリックで展開';
            break;
        case 'closeInfomation':
            hoverInfHtm.style.display = 'block';
            FInfClear();
            InfNamHtm.innerHTML = 'このサイトについて';
            Inf1.innerHTML = 'クリックで閉じる';
            break;
        case 'atomQty':
            hoverInfHtm.style.display = 'block';
            FInfClear();
            InfNamHtm.innerHTML = '合計元素数';
            break;
        case 'toridasi':
            hoverInfHtm.style.display = 'block';
            FInfClear();
            InfNamHtm.innerHTML = '取り出し';
            Inf1.innerHTML = 'オンにしている状態で開発装置をクリックすると';
            Inf2.innerHTML = '開発装置の中身を取り出します';
            Inf3.innerHTML = `現在:${toridasi}`;
            break;
        case 'disSelect':
            hoverInfHtm.style.display = 'block';
            FInfClear();
            InfNamHtm.innerHTML = '選択解除';
            Inf1.innerHTML = '元素,粒子の選択を解除します';
            break;
        default:
            hoverInfHtm.style.display = 'none';
    }
}
function FhoverInfBack(element){ //2秒経ったらいつもの説明に戻す
    clearTimeout(hoverInfBack);
    hoverInfBack = setTimeout(() => {
        FshowHoverInf(element);
    }, 2000);
}
function FEneCre(){ //質量エネルギー化装置が作るエネルギー(Lvが1上がるごとに10倍)
    return Math.round(DevUseNeeEneArr[0] * (10 ** (DevLevArr[0] - 1)) * FsumArr(DevInnQtyArr[0]));
}
function FEneUse(dev){ //装置が処理に使うエネルギー
    return DevUseNeeEneArr[dev] * FsumArr(DevInnQtyArr[dev]);
}
function FDevLevUp(dev){ //装置の作成/強化
    let lev = DevLevArr[dev];
    if(lev >= maxDevLevArr[dev]) return;
    let neeAto = DevLevNeeAtoArr[lev][dev];
    let neeQty = DevLevNeeQtyArr[lev][dev];
    if(neeAto.length == 0) return;
    if(!neeAto.every((value,index) => AtoQtyArr[AtoArr.indexOf(value)] >= neeQty[index])) return; //全部揃ってから引く
    neeAto.forEach((value,index) => {
        AtoQtyArr[AtoArr.indexOf(value)] -= neeQty[index];
    });
    DevLevArr[dev]++;
}
function FDevPutIn(dev){ //選択中の元素/粒子を投入
    let canPutIn = false;
    if(DevArr[dev] == 'toAtom'){ //粒子合成装置は粒子だけ
        let index = PneArr.indexOf(SelAtoNow);
        if(index != -1 && PneQtyArr[index] >= AddQty){
            PneQtyArr[index] -= AddQty;
            canPutIn = true;
        }
    }else if(DevArr[dev] == 'toEnergy'){ //質量エネルギー化装置は水素だけ
        if(SelAtoNow == 'H' && AtoQtyArr[0] >= AddQty){
            AtoQtyArr[0] -= AddQty;
            canPutIn = true;
        }
    }else{ //残りは元素
        let index = AtoArr.indexOf(SelAtoNow);
        if(index != -1 && AtoQtyArr[index] >= AddQty){
            AtoQtyArr[index] -= AddQty;
            canPutIn = true;
        }
    }
    if(!canPutIn) return;
    let sameIndex = DevInnAtoArr[dev].indexOf(SelAtoNow);
    if(sameIndex == -1){ //重複がなかった時
        DevInnAtoArr[dev].push(SelAtoNow);
        DevInnQtyArr[dev].push(AddQty);
    }else{
        DevInnQtyArr[dev][sameIndex] += AddQty;
    }
}
function FDevToridasi(dev){ //中身を全部返す
    DevInnAtoArr[dev].forEach((value,index) => {
        if(PneArr.includes(value)){
            PneQtyArr[PneArr.indexOf(value)] += DevInnQtyArr[dev][index];
        }else if(AtoArr.includes(value)){
            AtoQtyArr[AtoArr.indexOf(value)] += DevInnQtyArr[dev][index];
        }
    });
    FDevInnClear(dev);
}
function FDevInnClear(dev){ //中身を空にする
    DevInnAtoArr[dev].length = 0;
    DevInnQtyArr[dev].length = 0;
}
function FDevClick(element){
    let dev = DevArr.indexOf(Fid(element.target));
    if(dev == -1) return;
    if(toridasi == 'ON'){                       //取り出しモードなら中身を返すだけ
        FDevToridasi(dev);
    }else if(DevLevArr[dev] == 0){              //まだ作ってないなら作成
        FDevLevUp(dev);
    }else if(SelAtoNow != ''){                  //選択中のものを投入
        FDevPutIn(dev);
    }else if(DevInnAtoArr[dev].length == 0){    //空っぽで何も選んでないなら強化
        FDevLevUp(dev);
    }
    FSync();
    FshowHoverInf(element);
}
function FprocesDev(element){
    let dev = DevArr.indexOf(Fid(element.target));
    if(dev == -1) return;
    if(DevLevArr[dev] == 0 || DevInnAtoArr[dev].length == 0) return; //作成済み&&中身あり
    if(dev != 0 && Ene < FEneUse(dev)){ //質量エネルギー化装置はエネルギーを使わないので素通り
        hoverInfHtm.style.display = 'block';
        FInfClear();
        InfNamHtm.innerHTML = DevNamArr[dev];
        Inf1.innerHTML = 'エネルギーが不足しています';
        FhoverInfBack(element);
        return;
    }
    switch(DevArr[dev]){
        case 'toEnergy':{
            let cre = FEneCre();
            Ene += cre;
            FDevMessage([2,0,'E',FtoSI(cre,0)]);
            FDevInnClear(0);
            break;
        }
        case 'toAtom':{
            let inn = DevInnAtoArr[1];
            let qty = DevInnQtyArr[1];
            if(inn.length==2 && inn.includes('p') && inn.includes('e')){ //pとeだけ(中性子作る)
                if(qty[inn.indexOf('p')] == qty[inn.indexOf('e')]){
                    let cre = qty[inn.indexOf('p')];
                    Ene -= FEneUse(1);
                    PneQtyArr[1] += cre;
                    FDevMessage([2,1,'n',FtoSI(cre,0)]);
                    FDevInnClear(1);
                }else{
                    FDevMessage([0,1]);
                }
            }else{
                let creNum = -1;
                let creQty = 0;
                for(let i=0;i<4;i++){  //粒子合成装置で作れるのはベリリウムまで
                    let wari = PneArr.map((value,ind) => { //粒子ごとに何個分になるか
                        let at = inn.indexOf(value);
                        if(at == -1 || PneAtoArr[ind][i] <= 0) return NaN;
                        return qty[at] / PneAtoArr[ind][i];
                    });
                    if(wari.every((value) => Number.isInteger(value) && value >= 1) && isAllSync(wari)){
                        creNum = i;
                        creQty = wari[0];
                    }
                }
                if(creNum != -1){
                    Ene -= FEneUse(1);
                    AtoQtyArr[creNum] += creQty;
                    Ffound(creNum);
                    FDevMessage([2,1,AtoArr[creNum],FtoSI(creQty,0)]);
                    FDevInnClear(1);
                }else{
                    FDevMessage([1,1]);
                }
            }
            break;
        }
        case 'atomKsk':{
            let samePneQty=[0,0,0];
            DevInnAtoArr[2].forEach((value,index) => {
                for(let i=0;i<3;i++){
                    samePneQty[i] += PneAtoArr[i][AtoArr.indexOf(value)] * DevInnQtyArr[2][index];
                }
            });
            let creNum = -1;
            let creQty = 0;
            AtoArr.forEach((value,index) => {
                if(index < 4) return; //原子加速装置で作れるのはホウ素から
                let wari = samePneQty.map((qty,ind) => qty / PneAtoArr[ind][index]);
                if(wari.every((v) => Number.isInteger(v) && v >= 1) && isAllSync(wari)){
                    creNum = index;
                    creQty = wari[0];
                }
            });
            if(creNum != -1){
                Ene -= FEneUse(2);
                AtoQtyArr[creNum] += creQty;
                Ffound(creNum);
                FDevMessage([2,2,AtoArr[creNum],FtoSI(creQty,0)]);
                FDevInnClear(2);
            }else{
                FDevMessage([1,2]);
            }
            break;
        }
        case 'toPNE':{
            let cre = [0,0,0];
            DevInnAtoArr[3].forEach((value,index) => {
                let at = AtoArr.indexOf(value);
                if(at == -1) return;
                for(let i=0;i<3;i++){
                    cre[i] += PneAtoArr[i][at] * DevInnQtyArr[3][index];
                }
            });
            Ene -= FEneUse(3);
            PneQtyArr.forEach((value,index) => {
                PneQtyArr[index] += cre[index];
            });
            FDevMessage([2,3,`p ${FtoSI(cre[0],0)} n ${FtoSI(cre[1],0)} e ${FtoSI(cre[2],0)}`,'']);
            FDevInnClear(3);
            break;
        }
    }
    FSync();
    FhoverInfBack(element);
}

function Fplusminus(element){ //追加数変更
    switch(element.target.id){
        case 'plus':
            AddQty += AddQtyAddQty;
            break;
        case 'minus':
            AddQty = Math.max(1,AddQty - AddQtyAddQty);
            break;
    }
    AddQtyHtm.value = AddQty;
    FminusColor();
}
function FminusColor(){ //まだ減らせるなら青、1まで減ってたら灰色
    minusBtnHtm.style.backgroundColor = AddQty > 1 ? "#4d56ff" : "#989898";
}
function FsumArr(array){ //配列を合計
    return array.reduce((a, b) => a + b, 0);
}
function FtoSI(Num,fd){ //SI接頭辞を付ける
    if(!isFinite(Num)) Num = 0;
    let keta = String(Math.abs(Math.round(Num))).length; //マイナスの時に符号を数えないように
    if(keta > 24){
        return `${(Num / 1000000000000000000000000).toFixed(3)}Y`;
    }else{
        if(keta > 21){
            return `${(Num / 1000000000000000000000).toFixed(3)}Z`;
        }else{
            if(keta > 18){
                return `${(Num / 1000000000000000000).toFixed(3)}E`;
            }else{
                if(keta > 15){
                    return `${(Num / 1000000000000000).toFixed(3)}P`;
                }else{
                    if(keta > 12){
                        return `${(Num / 1000000000000).toFixed(3)}T`;
                    }else{
                        if(keta > 9){
                            return `${(Num / 1000000000).toFixed(3)}G`;
                        }else{
                            if(keta > 6){
                                return `${(Num / 1000000).toFixed(3)}M`;
                            }else{
                                if(keta > 3){
                                    return `${(Num / 1000).toFixed(3)}k`;
                                }else{
                                    return `${(Num).toFixed(fd)}`;
                                }
                            }
                        }
                    }
                }
            }
        }

    }
}
function Fsuper(Num){ //試験用
    if(Num!=''){
        AtoQtyArr.forEach((value,index) => {
            AtoQtyArr[index]+=Num;
        });
        foundAto=['H','He','Li','Be','B','C','N','O','F','Ne'];
        PneQtyArr.forEach((value,index) => {
            PneQtyArr[index]+=Num;
        });
        Ene+=Num;
        FSyncAll();
    }
}
function FDevMessage(Num){//Num配列[メッセージ番号,装置番号,OP1,OP2,OP3,OP4]
                          //      [    0        1     2   3   4   5]
    hoverInfHtm.style.display = 'block';
    InfNamHtm.innerHTML = DevNamArr[Num[1]];
    FInfClear();
    switch(Num[0]){
        case 0:  //0
            Inf1.innerHTML = '加工に失敗しました';
            Inf2.innerHTML = '粒子は生産されませんでした';
            break;
        case 1:
            Inf1.innerHTML = '加工に失敗しました';
            Inf2.innerHTML = '元素は生産されませんでした';
            break;
        case 2:
            Inf1.innerHTML = `${Num[2]} ${Num[3]}生産`;
            break;
        case 3:
            Inf2.innerHTML = `${Num[2]} ${Num[3]}消費`;
            break;
    }
}
function Fsave(){ //セーブ(cookieに1年)
    let data = {
        AtoQtyArr:AtoQtyArr,
        PneQtyArr:PneQtyArr,
        Ene:Ene,
        DevLevArr:DevLevArr,
        DevInnAtoArr:DevInnAtoArr,
        DevInnQtyArr:DevInnQtyArr,
        AutAtoQtyArr:AutAtoQtyArr,
        AutEneQtyArr:AutEneQtyArr,
        foundAto:foundAto
    };
    document.cookie = `a=${encodeURIComponent(JSON.stringify(data))}; max-age=31536000; path=/`;
    console.log('保存');
}
function FloadArr(value,len){ //セーブデータが壊れてても落ちないように数字の配列かどうか見る
    if(!Array.isArray(value) || value.length != len) return null;
    let result = value.map(Number);
    return result.every((v) => isFinite(v)) ? result : null;
}
function Fload(){ //ロード
    let cookie = document.cookie.split('; ').find((value) => value.startsWith('a='));
    if(cookie == undefined) return;
    let data;
    try{
        data = JSON.parse(decodeURIComponent(cookie.slice(2)));
    }catch(e){
        console.log('セーブデータが読めなかったので最初から');
        return;
    }
    if(data == null || typeof data != 'object') return;

    AtoQtyArr = FloadArr(data.AtoQtyArr,AtoArr.length) || AtoQtyArr;
    PneQtyArr = FloadArr(data.PneQtyArr,PneArr.length) || PneQtyArr;
    AutAtoQtyArr = FloadArr(data.AutAtoQtyArr,AutAtoArr.length) || AutAtoQtyArr;
    AutEneQtyArr = FloadArr(data.AutEneQtyArr,AutEneArr.length) || AutEneQtyArr;
    AtoQtyArr = AtoQtyArr.map((value) => Math.max(value,0));
    PneQtyArr = PneQtyArr.map((value) => Math.max(Math.floor(value),0));
    AutAtoQtyArr = AutAtoQtyArr.map((value) => Math.max(Math.floor(value),0));
    AutEneQtyArr = AutEneQtyArr.map((value) => Math.max(Math.floor(value),0));
    let lev = FloadArr(data.DevLevArr,DevArr.length);
    if(lev != null) DevLevArr = lev.map((value,index) => Math.min(Math.max(Math.floor(value),0),maxDevLevArr[index])); //変な値でもレベルの範囲に収める
    if(isFinite(data.Ene)) Ene = Math.max(Number(data.Ene),0);
    if(Array.isArray(data.foundAto)){
        foundAto = data.foundAto.filter((value) => AtoArr.includes(value));
        if(!foundAto.includes('H')) foundAto.push('H');
    }
    if(Array.isArray(data.DevInnAtoArr) && Array.isArray(data.DevInnQtyArr)){
        DevArr.forEach((value,dev) => {
            let inn = data.DevInnAtoArr[dev];
            let qty = data.DevInnQtyArr[dev];
            if(!Array.isArray(inn) || !Array.isArray(qty) || inn.length != qty.length) return;
            inn.forEach((ato,index) => {
                if((AtoArr.includes(ato) || PneArr.includes(ato)) && isFinite(qty[index]) && Number(qty[index]) > 0 && !DevInnAtoArr[dev].includes(ato)){
                    DevInnAtoArr[dev].push(ato);
                    DevInnQtyArr[dev].push(Math.floor(Number(qty[index])));
                }
            });
        });
    }
}

Rad1Htm.addEventListener('click',Fchange);     //画面切り替え
Rad2Htm.addEventListener('click',Fchange);     //画面切り替え
Rad1Htm.checked = true;
Rad1Htm.dispatchEvent(new Event('click'));     //読み込み時に1度だけ呼びだす

AutAtoBtnHtm.addEventListener('click',Fchange);//画面切り替え
AutEneBtnHtm.addEventListener('click',Fchange);//画面切り替え

InfBtnHtm.addEventListener('click',()=>{   //infomationを開く
    InfHtm.style.display = "block";
    InfHtm.style.width = "97vw";
    InfHtm.style.height = "97vh";
    BacInfBtnHtm.style.display = "block";
});
BacInfBtnHtm.addEventListener('click',()=>{ //infomationを閉じる
    InfHtm.style.width = "0vw";
    InfHtm.style.height = "0vh";
    clearTimeout(BacInfBtnHtmnone);
    BacInfBtnHtmnone = setTimeout(() => {
        BacInfBtnHtm.style.display = "none";
    }, 200);
});
AtoArrHtm.forEach((value) => {//選択
    value.addEventListener('click',FSel);
});
PneArrHtm.forEach((value) => {//選択
    value.addEventListener('click',FSel);
});
AddHBtnHtm.addEventListener('click',()=>{//水素追加;
    AtoQtyArr[0]++;
    FSync();
});
Bac1BtnHtm.addEventListener('click',FBac);//製作画面に戻る
Bac2BtnHtm.addEventListener('click',FBac);//製作画面に戻る
plusBtnHtm.addEventListener('mousedown',Fplusminusdown);//プラス マウス押下
minusBtnHtm.addEventListener('mousedown',Fplusminusdown);//マイナス マウス押下
document.addEventListener('mouseup',Fplusminusup);      //マウス押下解除
window.addEventListener('blur',Fplusminusup);           //押しっぱなしで画面から出た時用
AddQtyHtm.addEventListener('input',()=>{ //追加数フォームの数字を正しく治す
    let value = AddQtyHtm.value.replace(/\D/g, '').replace(/^0+/, '');
    if(AddQtyHtm.value != value){
        AddQtyHtm.value = value; //変わった時だけ書き戻す(毎回入れるとカーソルが最後に飛ぶので)
    }
    AddQty = value == '' ? 1 : Number(value); //全部消して打ち直せるように、空の間は1扱いにしておく
    FminusColor();
});
AddQtyHtm.addEventListener('blur',()=>{ //空のままフォーカスを外したら1に戻す
    if(AddQtyHtm.value == ''){
        AddQtyHtm.value = '1';
        AddQty = 1;
        FminusColor();
    }
});
disSelectHtm.addEventListener('click',()=>{ //選択解除
    SelAtoNow = '';
    AtoArrHtm.forEach((value) => {
        value.style.backgroundColor = "rgb(125, 190, 225)";
    });
    PneArrHtm.forEach((value) => {
        value.style.backgroundColor = "rgb(125, 190, 225)";
    });
    SelAtoHtm.innerHTML = `選択中:${SelAtoNow}`;
});
toridasiHtm.addEventListener('click',()=>{ //取り出し
    Ftoridasi(toridasi == 'OFF' ? 'ON' : 'OFF');
    hoverInfHtm.style.display = 'block';
    FInfClear();
    InfNamHtm.innerHTML = '取り出し';
    Inf1.innerHTML = 'オンにしている状態で開発装置をクリックすると';
    Inf2.innerHTML = '開発装置の中身を取り出します';
    Inf3.innerHTML = `現在:${toridasi}`;
    disSelectHtm.dispatchEvent(new Event('click'));
});
AutAtoInnHtm.addEventListener('click',FAutAtoclick);
AutEneInnHtm.addEventListener('click',FAutEneclick);
DevHtm.addEventListener('click',FDevClick);

DevHtm.addEventListener('contextmenu',FprocesDev); //開発の右クリックで処理
document.addEventListener('keydown',() =>{  //フォーカス不正をできないように
    if(document.activeElement.id == 'plusH'){
        AddHBtnHtm.blur();
    }
});
document.oncontextmenu = function () { //右クリックメニューを出さない
	return false;
};
document.addEventListener('mouseover',(element)=>{
    clearTimeout(hoverInfBack); //カーソルを動かしたら「◯◯生産」を戻すタイマーは用済み
    FshowHoverInf(element);
});
document.addEventListener('mousemove',(event) => { //説明が画面の外に出ないようにする
    if(event.pageY > window.innerHeight * (3 / 4)){
        hoverInfHtm.style.top = `${event.pageY - (hoverInfHtm.offsetHeight + 10)}px`; //マウスのうえ
    }else{
        if(event.pageY > window.innerHeight / 4){
            hoverInfHtm.style.top = `${event.pageY - hoverInfHtm.offsetHeight / 2}px`;    //マウスとおなじ
        }else{
            hoverInfHtm.style.top = `${event.pageY + 10}px`;                        //マウスの下

        }
    }
    if(event.pageX > window.innerWidth / 2){
        hoverInfHtm.style.left = `${event.pageX - (window.innerWidth * (15 / 100) + 30)}px`; //マウスのひだり
    }else{
        hoverInfHtm.style.left = `${event.pageX + 30}px`;   //マウスのみぎ
    }
})
document.addEventListener('keydown', keydownEvent);

let lastTick = performance.now();
setInterval(() => {
    let now = performance.now();
    let sec = Math.min((now - lastTick) / 1000, 60); //setIntervalは裏タブだとサボるので経った時間で数える(離席しすぎた分は60秒までに)
    lastTick = now;
    aps.forEach((value,index) => {
        AtoQtyArr[index] += value * sec;
    });
    Ene += eps * sec;
    FSync();
}, 10);

function keydownEvent(event){
    if(!event.ctrlKey) return;
    if(event.code === "KeyS"){
        event.preventDefault(); //ブラウザの「ページを保存」を止めてゲームのセーブにする
        Fsave();
    }
    if(event.code === "KeyX"){
        if(window.confirm("cookieデータを削除しますか？")==true){
            document.cookie = "a=; max-age=0; path=/";
        }
    }
}

Fload();
FnowNee();
FapsEps();
FSyncAll();
FminusColor();
