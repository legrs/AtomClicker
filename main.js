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
console.log(document.cookie);
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
let apsHtm = document.querySelector('#ApS');
let epsHtm = document.querySelector('#EpS');
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

const AtoArr     =    ['H','He','Li','Be','B','C','N','O','F','Ne']; //元素全部
const AtoNamArr      =    ['水素','ヘリウム','リチウム','ベリリウム',' ホウ素','炭素','窒素','酸素','フッ素','ネオン'];
let AtoQtyArr = [0,0,0,0,0,0,0,0,0,0]; //元素の数

const DevNamArr =    ['質量エネルギー化装置','粒子合成装置','原子加速装置','原子分解装置'];
const DevArr=    ['toEnergy',       'toAtom',   'atomKsk',  'toPNE',];
let DevLevArr = [0,0,0,0,0]; 
const maxDevLevArr=[3,1,2,1,1];
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
const DevUseNeeEneArr= [0.1,1,4,3,1];
const AutAtoArr = ['addH','addH2','adda','addHe','addLi','addBe','addBe2','addC'];
const AutAtoNamArr = ['水素カーソル','水電解装置','水素誘引装置','ヘリウムタービン','リチウム生成装置','ベリリウム複製装置','ベリリウム鉱山','有機発生装置'];
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
let AutAtoUseNeeQty=[
                    [15],
                    [200],
                    [2000],
                    [200,5],
                    [800,5],
                    [2000,5],
                    [3000,100,10],
                    [4000,1000,100,10,5]
                    ];
let AutAtoUseNeeQtyNow =[
                        [15],
                        [100],
                        [2000],
                        [200,5],
                        [800,5],
                        [2000,5],
                        [3000,100,10],
                        [4000,1000,100,10,5]
                        ];
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
let AutEneUseNeeQty =[
                    [3000,10],
                    [5000,1000,10],
                    [4000,100,100],
                    [1000,1000,1000,200]
                    ];
let AutEneUseNeeQtyNow=[
                        [3000,10],
                        [5000,1000,10],
                        [4000,100,100],
                        [1000,1000,1000,100]
                        ];
const PneAtoArr  =[//それぞれの元素の陽子の数
                [1,2,3,4,5,6,7,8,9,10], //p
                [0,2,4,5,5,6,7,8,10,10], //n
                [1,2,3,4,5,6,7,8,9,10] //e
                ];

let foundAto = ['H'];  // 発見済み元素

let delay500ms;

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

console.log(`[==${SystemMessage[Math.floor(Math.random()*3)]}==]`);
function Fchange(element){ //画面切り替え
    if(toridasi=='OFF'){
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
                if(value.id == element.target.id && PneQtyArrHtm[index].innerHTML != 0){
                    console.log(value.id,PneQtyArrHtm[index]);
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
    if(toridasi=='ON'){
        toridasi = 'OFF';
        toridasiHtm.style.backgroundColor = "rgb(134, 134, 134)";
        hoverInfHtm.style.display = 'block';
        InfNamHtm.innerHTML = '取り出し';
        Inf1.innerHTML = 'オンにしている状態で開発装置をクリックすると';
        Inf2.innerHTML = '開発装置の中身を取り出します';
        Inf3.innerHTML = `現在:${toridasi}`;
        Inf4.innerHTML = '';
        Inf5.innerHTML = '';
        Inf6.innerHTML = '';
        Inf7.innerHTML = '';
        Inf8.innerHTML = '';
    }
}
function FSync(){ //実際の数字とhtml表示を同期
    AtoQtyHtm.innerHTML = FtoSI(FsumArr(AtoQtyArr),0);
    AtoQtyArrHtm.forEach((value,index) => {
        value.innerHTML = FtoSI(AtoQtyArr[index],0);
    });
    PneQtyArrHtm.forEach((value,index) => {
        value.innerHTML = FtoSI(PneQtyArr[index],0);
    });
    EneHtm.innerHTML = `${FtoSI(Ene,0)}E`;
    
}
function FBac(){ //製作画面に戻る
    AutAtoHtm.style.display = 'none';
    AutEneHtm.style.display = 'none';
    AutAtoBtnHtm.style.display = 'block';
    AutEneBtnHtm.style.display = 'block';
}
function FAddQtycheck(){ //追加数フォームの数字を正しく治す
    setTimeout(() => {
            AddQtyHtm.value = AddQtyHtm.value.replace(/[\D]/g, '');
            if(AddQtyHtm.value == '0'){
                AddQtyHtm.value = '1';
            }
            AddQty = Number(AddQtyHtm.value);
    },1);
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
function FAutAtoclick(element){
    if(AutAtoArr.includes(element.target.id)){ //アップグレードがクリック 
        let canLevelUp = 0;     //Copy用→AutAtoArr.indexOf(element.target.id)
        AutAtoUseNeeAto[AutAtoArr.indexOf(element.target.id)].forEach((value,index) => {//レベルアップ必要元素の数だけ繰り返す
            AtoArr.forEach((value2,index2) => { //全ての元素で元素が足りているかを確認
                if(value == value2){ //必要元素が水素の時
                    if(AutAtoUseNeeQtyNow[AutAtoArr.indexOf(element.target.id)][index] <= AtoQtyArr[index2]){
                        canLevelUp++;
                    }
                }
            });
        });
        if(canLevelUp == AutAtoUseNeeAto[AutAtoArr.indexOf(element.target.id)].length){ //レベルアップできる
            AutAtoUseNeeAto[AutAtoArr.indexOf(element.target.id)].forEach((value,index) => {
                AtoArr.forEach((value2,index2) => { //index:元素番号-1
                    if(value == value2){ //必要元素がそれぞれの元素
                        AtoQtyArr[index2] -= AutAtoUseNeeQtyNow[AutAtoArr.indexOf(element.target.id)][index];
                        FSync();
                    }
                });
            });
            AutAtoQtyArr[AutAtoArr.indexOf(element.target.id)]++;
            AutAtoUseNeeAto.forEach((value,index) => {
                AutAtoUseNeeQtyNow[AutAtoArr.indexOf(element.target.id)][index] = Math.round(AutAtoUseNeeQty[AutAtoArr.indexOf(element.target.id)][index] * (1.15 ** AutAtoQtyArr[AutAtoArr.indexOf(element.target.id)]))
            });
            AtoArr.forEach((value,index) => {
                if(value == apsAutAto[AutAtoArr.indexOf(element.target.id)]){
                    aps[index] += Number(( apsQtyAutAto[AutAtoArr.indexOf(element.target.id)]).toFixed(1));
                }
            });
            AutAtoQtyArrHtm[AutAtoArr.indexOf(element.target.id)].innerHTML = FtoSI(AutAtoQtyArr[AutAtoArr.indexOf(element.target.id)],0);
            apsHtm.innerHTML = `合計元素毎秒(ApS):${FtoSI(FsumArr(aps),1)}`;
        }
        FshowHoverInf(element);
    }
}
function FAutEneclick(element){
    if(AutEneArr.includes(element.target.id)){ //アップグレードがクリック 
        let canLevelUpEne = 0;     //Copy用→AutEneArr.indexOf(element.target.id)
        AutEneUseNeeAto[AutEneArr.indexOf(element.target.id)].forEach((value,index) => {//レベルアップ必要元素の数だけ繰り返す
            AtoArr.forEach((value2,index2) => { //全ての元素で元素が足りているかを確認
                if(value == value2){ //必要元素が
                    if(AutEneUseNeeQtyNow[AutEneArr.indexOf(element.target.id)][index] <= AtoQtyArr[index2]){
                        canLevelUpEne++;
                    }
                }
            });
        });
        
        if(canLevelUpEne == AutEneUseNeeAto[AutEneArr.indexOf(element.target.id)].length){ //レベルアップできる
            
            AutEneUseNeeAto[AutEneArr.indexOf(element.target.id)].forEach((value,index) => {
                AtoArr.forEach((value2,index2) => { //index:元素番号-1
                    if(value == value2){ //必要元素がそれぞれの元素
                        AtoQtyArr[index2] -= AutEneUseNeeQtyNow[AutEneArr.indexOf(element.target.id)][index];
                        FSync();
                    }
                });
            });
            AutEneQtyArr[AutEneArr.indexOf(element.target.id)]++;
            AutEneUseNeeAto.forEach((value,index) => {
                AutEneUseNeeQtyNow[AutEneArr.indexOf(element.target.id)][index] = Math.round(AutEneUseNeeQty[AutEneArr.indexOf(element.target.id)][index] * (1.15 ** AutEneQtyArr[AutEneArr.indexOf(element.target.id)]))
            });
                eps = Number((AutEneQtyArr[AutEneArr.indexOf(element.target.id)] * epsQtyAutEne[AutEneArr.indexOf(element.target.id)]).toFixed(1));

            AutEneQtyArrHtm[AutEneArr.indexOf(element.target.id)].innerHTML = FtoSI(AutEneQtyArr[AutEneArr.indexOf(element.target.id)],0);
            epsHtm.innerHTML = `エネルギー毎秒(EpS):${FtoSI(eps,1)}`;
        }
        FshowHoverInf(element);
    }
}
function FshowHoverInf(element){
    switch(element.target.id){
        case 'H':
        case 'He':
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
            if(foundAto.includes(element.target.id)){
                InfNamHtm.innerHTML  = AtoNamArr[AtoArr.indexOf(element.target.id)];
                Inf1.innerHTML = `元素記号:${element.target.id}`;
                Inf2.innerHTML = `陽子数:&nbsp;&nbsp;&nbsp;${PneAtoArr[0][AtoArr.indexOf(element.target.id)]}`;
                Inf3.innerHTML = `電子数:&nbsp;&nbsp;&nbsp;${PneAtoArr[2][AtoArr.indexOf(element.target.id)]}`;
                Inf4.innerHTML = `中性子数:${PneAtoArr[1][AtoArr.indexOf(element.target.id)]}`;
                Inf5.innerHTML = '';
                Inf6.innerHTML = '';
                Inf7.innerHTML = '';
                Inf8.innerHTML = '';
            }else{
                InfNamHtm.innerHTML  = '未発見元素';
                Inf1.innerHTML = `元素記号:?`;
                Inf2.innerHTML = `陽子数:&nbsp;&nbsp;&nbsp;${PneAtoArr[0][AtoArr.indexOf(element.target.id)]}`;
                Inf3.innerHTML = `電子数:&nbsp;&nbsp;&nbsp;${PneAtoArr[2][AtoArr.indexOf(element.target.id)]}`;
                Inf4.innerHTML = `中性子数:?`;
                Inf5.innerHTML = '';
                Inf6.innerHTML = '';
                Inf7.innerHTML = '';
                Inf8.innerHTML = '';
            }
            break;
        case 'addNum'://追加数説明
            hoverInfHtm.style.display = 'block';
            InfNamHtm.innerHTML = '一度に投入する数';
            Inf1.innerHTML = '1以上の数を指定';
            Inf2.innerHTML = '';
            Inf3.innerHTML = '';
            Inf4.innerHTML = '';
            Inf5.innerHTML = '';
            Inf6.innerHTML = '';
            Inf7.innerHTML = '';
            Inf8.innerHTML = '';
            break;
        case 'toEnergy':
        case 'toPNE':
        case 'toAtom':
        case 'atomKsk'://開発説明
            hoverInfHtm.style.display = 'block';
            let DevCreNeeAto='';
            let DevInnAto='';
            let DevLev10=1;
            InfNamHtm.innerHTML  = DevNamArr[DevArr.indexOf(element.target.id)];
            Inf1.innerHTML = ``;
            Inf2.innerHTML = ``;
            Inf3.innerHTML = ``;
            Inf4.innerHTML = ``;
            Inf5.innerHTML = `説明:${DevInfArr[DevArr.indexOf(element.target.id)]}`;
            Inf6.innerHTML = '';
            Inf7.innerHTML = '';
            Inf8.innerHTML = '';
            if(DevInnAtoArr[DevArr.indexOf(element.target.id)] == ''){ //中身がない時
                if(DevLevArr[DevArr.indexOf(element.target.id)] == 0){ //未作成
                    Inf1.innerHTML='未作成';
                    Inf2.innerHTML='作成必要元素:'
                    DevLevNeeAtoArr[DevLevArr[DevArr.indexOf(element.target.id)]][DevArr.indexOf(element.target.id)].forEach((value,index) => {
                        DevCreNeeAto = `${DevCreNeeAto} ${value} ${DevLevNeeQtyArr[DevLevArr[DevArr.indexOf(element.target.id)]][DevArr.indexOf(element.target.id)][index]},`;
                    });
                    Inf3.innerHTML=DevCreNeeAto;
                    Inf4.innerHTML='左クリックで作成';
                }else{ //作成済み
                    Inf1.innerHTML=`Lv.${DevLevArr[DevArr.indexOf(element.target.id)]}`;
                    if(DevLevArr[DevArr.indexOf(element.target.id)] != maxDevLevArr[DevArr.indexOf(element.target.id)]){ //レベルが最大でない
                        Inf2.innerHTML='強化必要元素';
                        DevLevNeeAtoArr[DevLevArr[DevArr.indexOf(element.target.id)]][DevArr.indexOf(element.target.id)].forEach((value,index) => {
                            DevCreNeeAto = `${DevCreNeeAto} ${value} ${DevLevNeeQtyArr[DevLevArr[DevArr.indexOf(element.target.id)]][DevArr.indexOf(element.target.id)][index]},`;
                        });
                        Inf3.innerHTML=DevCreNeeAto;
                        Inf4.innerHTML='左クリックで強化';
                    }else{
                        Inf2.innerHTML='';
                        Inf3.innerHTML='';
                    }
                    Inf6.innerHTML='元素を選択して左クリックで投入';
                }
            }else{//中身あり
                DevInnAtoArr[DevArr.indexOf(element.target.id)].forEach((value,index) => {
                    DevInnAto=`${DevInnAto} ${DevInnAtoArr[DevArr.indexOf(element.target.id)][index]} ${DevInnQtyArr[DevArr.indexOf(element.target.id)][index]},`;
                });
                Inf4.innerHTML=`中身:${DevInnAto}`;
                Inf6.innerHTML='右クリックで処理';
                for(let i=0;i<DevLevArr[DevArr.indexOf(element.target.id)]-1;i++){
                    DevLev10=Number(`${DevLev10}${0}`);
                }
                if(element.target.id == 'toEnergy'){
                    console.log(DevLev10);
                    Inf7.innerHTML =`${FtoSI(Math.round(DevUseNeeEneArr[0] * DevLev10 * DevInnQtyArr[0][0]),0)}E 生産`;
                }else{
                    Inf7.innerHTML =`${FtoSI(Math.round(DevUseNeeEneArr[DevArr.indexOf(element.target.id)] * (DevLev10 * FsumArr(DevInnQtyArr[DevArr.indexOf(element.target.id)]))),0)}E 消費`;
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
            let AutAtoCreNeeAto='';
            InfNamHtm.innerHTML=AutAtoNamArr[AutAtoArr.indexOf(element.target.id)];
            AutAtoUseNeeAto[AutAtoArr.indexOf(element.target.id)].forEach((value,index) => {
                AutAtoCreNeeAto=`${AutAtoCreNeeAto} ${value} ${FtoSI(AutAtoUseNeeQtyNow[AutAtoArr.indexOf(element.target.id)][index],0)},`;
            });
            Inf1.innerHTML=`作成必要元素:`;
            Inf2.innerHTML=AutAtoCreNeeAto;
            Inf3.innerHTML=`毎秒生産:`;
            Inf4.innerHTML=`${apsAutAto[AutAtoArr.indexOf(element.target.id)]} ${apsQtyAutAto[AutAtoArr.indexOf(element.target.id)]}`;;
            Inf5.innerHTML=``;
            Inf6.innerHTML=``;
            Inf7.innerHTML=``;
            Inf8.innerHTML=``;
            break;
        case 'addE1':
        case 'addE2':
        case 'addE3':
        case 'addE4': //自動発電説明
            hoverInfHtm.style.display = 'block';
            let AutEneCreNeeAto='';
            InfNamHtm.innerHTML=AutEneNamArr[AutEneArr.indexOf(element.target.id)];
            AutEneUseNeeAto[AutEneArr.indexOf(element.target.id)].forEach((value,index) => {
                AutEneCreNeeAto=`${AutEneCreNeeAto} ${value} ${FtoSI(AutEneUseNeeQtyNow[AutEneArr.indexOf(element.target.id)][index],0)},`;
            });
            Inf1.innerHTML=`作成必要元素:`;
            Inf2.innerHTML=AutEneCreNeeAto;
            Inf3.innerHTML=`毎秒生産:`;
            Inf4.innerHTML=`${epsAutEne[AutEneArr.indexOf(element.target.id)]} ${epsQtyAutEne[AutEneArr.indexOf(element.target.id)]}`;;
            Inf5.innerHTML=``;
            Inf6.innerHTML=``;
            Inf7.innerHTML=``;
            Inf8.innerHTML=``;
            break;
        case 'infomation'://このサイトについて
            hoverInfHtm.style.display = 'block';
            InfNamHtm.innerHTML = 'このサイトについて';
            Inf1.innerHTML = 'クリックで展開';
            Inf2.innerHTML = '';
            Inf3.innerHTML = '';
            Inf4.innerHTML = '';
            Inf5.innerHTML = '';
            Inf6.innerHTML = '';
            Inf7.innerHTML = '';
            Inf8.innerHTML = '';
            break;
        case 'closeInfomation':
            hoverInfHtm.style.display = 'block';
            InfNamHtm.innerHTML = 'このサイトについて';
            Inf1.innerHTML = 'クリックで閉じる';
            Inf2.innerHTML = '';
            Inf3.innerHTML = '';
            Inf4.innerHTML = '';
            Inf5.innerHTML = '';
            Inf6.innerHTML = '';
            Inf7.innerHTML = '';
            Inf8.innerHTML = '';
            break;
        case 'atomQty':
            hoverInfHtm.style.display = 'block';
            InfNamHtm.innerHTML = '合計元素数';
            Inf1.innerHTML = '';
            Inf2.innerHTML = '';
            Inf3.innerHTML = '';
            Inf4.innerHTML = '';
            Inf5.innerHTML = '';
            Inf6.innerHTML = '';
            Inf7.innerHTML = '';
            Inf8.innerHTML = '';
            break;
        case 'toridasi':
            hoverInfHtm.style.display = 'block';
            InfNamHtm.innerHTML = '取り出し';
            Inf1.innerHTML = 'オンにしている状態で開発装置をクリックすると';
            Inf2.innerHTML = '開発装置の中身を取り出します';
            Inf3.innerHTML = `現在:${toridasi}`;
            Inf4.innerHTML = '';
            Inf5.innerHTML = '';
            Inf6.innerHTML = '';
            Inf7.innerHTML = '';
            Inf8.innerHTML = '';
            break;
        case 'disSelect':
            hoverInfHtm.style.display = 'block';
            InfNamHtm.innerHTML = '選択解除';
            Inf1.innerHTML = '元素,粒子の選択を解除します';
            Inf2.innerHTML = '';
            Inf3.innerHTML = ``;
            Inf4.innerHTML = '';
            Inf5.innerHTML = '';
            Inf6.innerHTML = '';
            Inf7.innerHTML = '';
            Inf8.innerHTML = '';
            break;
        case '':
        case '':
        case '':
        default:
            hoverInfHtm.style.display = 'none';
    }
}
function FDevClick(element){
    let canLevelUp=0;
    if(DevArr.includes(element.target.id)){ //開発装置がクリック   DevArr.indexOf(element.target.id)
        console.log('開発装置がクリック');
        if(DevInnAtoArr[DevArr.indexOf(element.target.id)]=='' && SelAtoNow==''){ //中身がない場合
            console.log('中身がない');
            if(DevLevArr[DevArr.indexOf(element.target.id)]!=3){
                DevLevNeeAtoArr[DevLevArr[DevArr.indexOf(element.target.id)]][DevArr.indexOf(element.target.id)].forEach((value,index) => {
                    AtoArr.forEach((value2,index2) => {  //それをれの元素
                        if(value == value2 && DevLevNeeQtyArr[DevLevArr[DevArr.indexOf(element.target.id)]][DevArr.indexOf(element.target.id)][index]<=AtoQtyArr[index2]){
                                canLevelUp++;
                            if(canLevelUp==DevLevNeeAtoArr[DevLevArr[DevArr.indexOf(element.target.id)]][DevArr.indexOf(element.target.id)].length){
                                AtoQtyArr[index2]-=DevLevNeeQtyArr[DevLevArr[DevArr.indexOf(element.target.id)]][DevArr.indexOf(element.target.id)][index];
                                DevLevArr[DevArr.indexOf(element.target.id)]++;
                            }
                        }
                    });
                });
            }
            
        }else{  //中身あり
            if(toridasi=='ON'){
                DevInnAtoArr.forEach((value,index) => {
                    if(element.target.id!='toAtom'){
                        AtoQtyArr[AtoArr.indexOf(DevInnAtoArr[DevArr.indexOf(element.target.id)][index])]+=DevInnQtyArr[DevArr.indexOf(element.target.id)][index];
                    }else{
                        PneQtyArr[PneArr.indexOf(DevInnAtoArr[DevArr.indexOf(element.target.id)][index])]+=DevInnQtyArr[DevArr.indexOf(element.target.id)][index];
                    }
                });
                
                DevInnAtoArr[DevArr.indexOf(element.target.id)].forEach(() => {
                    DevInnAtoArr[DevArr.indexOf(element.target.id)].pop();
                    DevInnQtyArr[DevArr.indexOf(element.target.id)].pop();
                });
                DevInnAtoArr[DevArr.indexOf(element.target.id)].pop();
                DevInnQtyArr[DevArr.indexOf(element.target.id)].pop();
                /* DevInnAtoArr[DevArr.indexOf(element.target.id)].forEach((value,index) => {
                    AtoArr.forEach((value2,index2) => {
                        if(value2==value){
                            AtoQtyArr[index2]+=DevInnQtyArr[DevArr.indexOf(element.target.id)][index];
                            DevInnQtyArr[DevArr.indexOf(element.target.id)].pop();
                        }
                    });
                    PneArr.forEach((value2,index2) => {
                        if(value2==value){
                            PneQtyArr[index2]+=DevInnQtyArr[DevArr.indexOf(element.target.id)][index];
                            DevInnQtyArr[DevArr.indexOf(element.target.id)].pop();
                        }
                    });
                });
                DevInnAtoArr[DevArr.indexOf(element.target.id)].forEach(() => {
                    DevInnAtoArr[DevArr.indexOf(element.target.id)].pop();
                }); */
                
            }
        }
        if(DevLevArr[DevArr.indexOf(element.target.id)]!=0){//さくせいずみ
            if(toridasi=='OFF'){
                let canPutIn=false;
                if(element.target.id == 'toAtom'){
                    PneArr.forEach((value,index) => {
                        if(value == SelAtoNow && PneQtyArr[index]>=AddQty){
                            PneQtyArr[index]-=AddQty;
                            canPutIn=true;
                        }
                    });
                    let sameIndex=-100;
                    
                    if(canPutIn==true){
                        DevInnAtoArr[DevArr.indexOf(element.target.id)].forEach((value,index) => {
                            if(value==SelAtoNow){//投入元素と中身が重複
                                sameIndex=index;
                            } 
                        });
                        if(sameIndex==-100){  //重複がなかった時
                            DevInnAtoArr[DevArr.indexOf(element.target.id)].push(SelAtoNow);
                            DevInnQtyArr[DevArr.indexOf(element.target.id)].push(AddQty);
                        }else{
                            DevInnQtyArr[DevArr.indexOf(element.target.id)][sameIndex]+=AddQty;
                        }
                    }
                }else{//!toAtom
                    if(element.target.id=='toEnergy'){
                        if(SelAtoNow=='H' && AtoQtyArr[0]>=AddQty){
                            AtoQtyArr[0]-=AddQty;
                            canPutIn=true;
                        }
                        console.log(canPutIn);
                        if(canPutIn==true){
                            if(DevInnAtoArr[DevArr.indexOf(element.target.id)]==''){//投入元素と中身が重複していない
                                DevInnAtoArr[DevArr.indexOf(element.target.id)].push(SelAtoNow);
                                DevInnQtyArr[DevArr.indexOf(element.target.id)].push(AddQty);
                            }else{
                                DevInnQtyArr[DevArr.indexOf(element.target.id)][0]+=(AddQty);
                            }
                        }
                    }else{
                        AtoArr.forEach((value,index) => {
                            if(value==SelAtoNow && AtoQtyArr[index]>=AddQty){
                                AtoQtyArr[index]-=AddQty;
                                canPutIn=true;
                            }
                        });
                        let sameIndex=-100;
                        console.log(canPutIn);
                        if(canPutIn==true){
                            DevInnAtoArr[DevArr.indexOf(element.target.id)].forEach((value,index) => {
                                if(value==SelAtoNow){//投入元素と中身が重複
                                    sameIndex=index;
                                } 
                            });
                            if(sameIndex==-100){  //重複がなかった時
                                DevInnAtoArr[DevArr.indexOf(element.target.id)].push(SelAtoNow);
                                DevInnQtyArr[DevArr.indexOf(element.target.id)].push(AddQty);
                            }else{
                                DevInnQtyArr[DevArr.indexOf(element.target.id)][sameIndex]+=AddQty;
                            }
                        }
                    }
                }
            }
        }
        FshowHoverInf(element);
    }
}
function FprocesDev(element){
    if(DevArr.includes(element.target.id)){//開発装置クリック    DevArr.indexOf(element.target.id)
        if(DevLevArr[DevArr.indexOf(element.target.id)]!=0 && DevInnAtoArr[DevArr.indexOf(element.target.id)]!=''){//作成済み&&中身あり
            console.log('a');
            if(Ene>=DevUseNeeEneArr[DevArr.indexOf(element.target.id)]*FsumArr(DevInnQtyArr[DevArr.indexOf(element.target.id)])){
                switch(element.target.id){
                    case 'toEnergy': 
                        let DevLev10=1;
                        for(let i=0;i<DevLevArr[0]-1;i++){
                            DevLev10=Number(`${DevLev10}${0}`);
                        }
                        Ene+=Math.round(DevUseNeeEneArr[0] * DevLev10 * DevInnQtyArr[0][0]);
                        FDevMessage([2,0,'E',Math.round(DevUseNeeEneArr[0] * DevLev10 * DevInnQtyArr[0][0])]);
                        DevInnAtoArr[0].pop();
                        DevInnQtyArr[0].pop();
                        break;
                    case 'toAtom': //
                        if(DevInnAtoArr[DevArr.indexOf(element.target.id)].length==2 && DevInnAtoArr[DevArr.indexOf(element.target.id)].includes('p') && DevInnAtoArr[DevArr.indexOf(element.target.id)].includes('e')){ //pとeだけ(中性子作る)
                            if(DevInnQtyArr[DevArr.indexOf(element.target.id)][DevInnAtoArr[DevArr.indexOf(element.target.id)].indexOf('p')]==DevInnQtyArr[DevArr.indexOf(element.target.id)][DevInnAtoArr[DevArr.indexOf(element.target.id)].indexOf('e')]){
                                PneQtyArr[1]+=DevInnQtyArr[DevArr.indexOf(element.target.id)][0];
                                
                                console.log(DevUseNeeEneArr[1]*FsumArr(DevInnQtyArr[1]));
                                Ene-=DevUseNeeEneArr[1]*FsumArr(DevInnQtyArr[1]);
                                FDevMessage([2,1,'n',DevInnQtyArr[DevArr.indexOf(element.target.id)][0]]);
                                DevInnAtoArr[1].forEach(() => { //中身消す
                                    DevInnAtoArr[1].pop();
                                    DevInnQtyArr[1].pop();
                                });
                                DevInnAtoArr[1].pop();
                                DevInnQtyArr[1].pop();
                            }
                        }else{
                            let CanCre=0;
                            let AddAtoQtyCre=-100;
                            let AddAtoCreNum=0;
                            for(let i=0;i<4;i++){  //i=今参照している元素の番号
                                CanCre=0;
                                for(let ind=0;ind<3;ind++){  //ind=今参照している粒子の番号 3は粒子の数
                                    if(PneAtoArr[ind][i]<=DevInnQtyArr[1][DevInnAtoArr[1].indexOf(PneArr[ind])] && DevInnQtyArr[1][DevInnAtoArr[1].indexOf(PneArr[ind])]%PneAtoArr[ind][i]==0){
                                        CanCre++;
                                        /* if(CanCre==3 && [DevInnQtyArr[1][DevInnAtoArr[1].indexOf(PneArr[0])]/PneAtoArr[0][i],DevInnQtyArr[1][DevInnAtoArr[1].indexOf(PneArr[1])]/PneAtoArr[1][i],DevInnQtyArr[1][DevInnAtoArr[1].indexOf(PneArr[2])]/PneAtoArr[2][i]].every(v => v === DevInnQtyArr[1][DevInnAtoArr[1].indexOf(PneArr[0])]/PneAtoArr[0][i])){
                                            AddAtoQtyCre=DevInnQtyArr[1][DevInnAtoArr[1].indexOf(PneArr[0])]/PneAtoArr[0][i];
                                            AddAtoCreNum=i;
                                            console.log(AddAtoCreNum,AddAtoQtyCre);
                                            break;
                                        } */
                                    }
                                    if(CanCre==3 && [DevInnQtyArr[1][DevInnAtoArr[1].indexOf(PneArr[0])]/PneAtoArr[0][i],DevInnQtyArr[1][DevInnAtoArr[1].indexOf(PneArr[1])]/PneAtoArr[1][i],DevInnQtyArr[1][DevInnAtoArr[1].indexOf(PneArr[2])]/PneAtoArr[2][i]].every(v => v === DevInnQtyArr[1][DevInnAtoArr[1].indexOf(PneArr[0])]/PneAtoArr[0][i])){
                                        
                                        
                                        AddAtoQtyCre=DevInnQtyArr[1][DevInnAtoArr[1].indexOf(PneArr[0])]/PneAtoArr[0][i];
                                        AddAtoCreNum=i;
                                        console.log(AddAtoCreNum,AddAtoQtyCre);
                                        
                                        
                                        
                                        break;
                                    }
                                }
                            }
                            console.log(AddAtoCreNum,AddAtoQtyCre,CanCre);
                            if(AddAtoQtyCre!= -100){
                                Ene-=DevUseNeeEneArr[1]*FsumArr(DevInnQtyArr[1]);
                                AtoQtyArr[AddAtoCreNum]+=AddAtoQtyCre;
                                
                                if(!(foundAto.includes(AtoArr[AddAtoCreNum]))){ //未発見なら
                                    foundAto.push(AtoArr[AddAtoCreNum]);
                                    AtoArrHtm[AddAtoCreNum].innerHTML=AtoArr[AddAtoCreNum];
                                }
                                FDevMessage([2,1,AtoQtyArr[AddAtoCreNum],AddAtoQtyCre]);
                                DevInnAtoArr[1].forEach(() => { //中身消す
                                    DevInnAtoArr[1].pop();
                                    DevInnQtyArr[1].pop();
                                });
                                DevInnAtoArr[1].pop();
                                DevInnQtyArr[1].pop();
                            }
                            }
                        break;
                    case 'atomKsk':
                        let samePneQty=[0,0,0];
                        let CreAtoQty;
                        let CreAtoNum=-100;
                        DevInnAtoArr[2].forEach((value,index) => {
                            for(let i=0;i<3;i++){
                                samePneQty[i]+=PneAtoArr[i][AtoArr.indexOf(value)]*DevInnQtyArr[2][index];
                            }
                        });
                        AtoArr.forEach((value,index) => {
                            if([PneAtoArr[0][index]==samePneQty[0],PneAtoArr[1][index]==samePneQty[1],PneAtoArr[2][index]==samePneQty[2]].every(v => v === true) && samePneQty[0]%PneAtoArr[0][index]==0){
                                CreAtoNum=index;
                                CreAtoQty=samePneQty[0]/PneAtoArr[0][index];
                            }
                        });
                        
                        if(CreAtoNum!=-100 && CreAtoNum>3){
                            AtoQtyArr[CreAtoNum]+=CreAtoQty;
                            Ene-=DevUseNeeEneArr[3]*FsumArr(DevInnQtyArr[2]);
                            if(!(foundAto.includes(AtoArr[CreAtoNum]))){ //未発見なら
                                foundAto.push(AtoArr[CreAtoNum]);
                                AtoArrHtm[CreAtoNum].innerHTML=AtoArr[AddAtoCreNum];
                            }
                            FDevMessage([2,1,AtoQtyArr[CreAtoNum],CreAtoQty]);
                            DevInnAtoArr[2].forEach(() => { //中身消す
                                DevInnAtoArr[2].pop();
                                DevInnQtyArr[2].pop();
                            });
                            DevInnAtoArr[2].pop();
                            DevInnQtyArr[2].pop();
                        }
                        break;
                    case 'toPNE': //
                        DevInnAtoArr[3].forEach((value,index) => {
                            AtoArr.forEach((value2,index2) => {
                                if(value==value2){
                                    PneArr.forEach((value3,index3) => {
                                        PneQtyArr[index3]+=PneAtoArr[index3][index2]*DevInnQtyArr[3][index];
                                    });
                                    Ene-=DevUseNeeEneArr[3]*FsumArr(DevInnQtyArr[3]);
                                    hoverInfHtm.style.display = 'block';
                                    DevInnAtoArr[3].forEach(() => { //中身消す
                                        DevInnAtoArr[3].pop();
                                        DevInnQtyArr[3].pop();
                                    });
                                    DevInnAtoArr[3].pop();
                                    DevInnQtyArr[3].pop();
                                }
                            });
                        });
                        break;
                }
                setTimeout(() => {
                    FshowHoverInf(element);
                }, 2000);
                
            }else{
                if(element.target.id=='toEnergy'){
                    let DevLev10=1;
                    for(let i=0;i<DevLevArr[0]-1;i++){
                        DevLev10=Number(`${DevLev10}${0}`);
                    }
                    Ene+=Math.round(DevUseNeeEneArr[0] * DevLev10 * DevInnQtyArr[0][0]);
                    DevInnAtoArr[0].pop();
                    DevInnQtyArr[0].pop();
                    FshowHoverInf(element);
                }else{
                    hoverInfHtm.style.display = 'block';
                    InfNamHtm.innerHTML = DevNamArr[DevArr.indexOf(element.target.id)];
                    Inf1.innerHTML = 'エネルギーが不足しています';
                    Inf2.innerHTML = '';
                    Inf3.innerHTML = '';
                    Inf4.innerHTML = '';
                    Inf5.innerHTML = '';
                    Inf6.innerHTML = '';
                    Inf7.innerHTML = '';
                    Inf8.innerHTML = '';
                    setTimeout(() => {
                        FshowHoverInf(element);
                    }, 2000);
                }               
            }
            
        }
    }
}

function Fplusminus(element){ //追加数変更
    if(AddQty >= 1){ //1より大きい(まだ減らせる)とき
        minusBtnHtm.style.backgroundColor = "#4d56ff";
    }else{ //もう減らせない
        minusBtnHtm.style.backgroundColor = "#989898";
    }
    switch(element.target.id){
        case 'plus':
            AddQty += AddQtyAddQty;
            AddQtyHtm.value = AddQty;
            break;
        case 'minus':
            if((AddQty - AddQtyAddQty) <=1){
                minusBtnHtm.style.backgroundColor = "#989898";
                AddQty = 1;
                AddQtyHtm.value = AddQty;
            }else{
                AddQty -= AddQtyAddQty;
                AddQtyHtm.value = AddQty;
            }
            break; 
    }
}
function FsumArr(array){ //配列を合計
    if(array.length!=0){
        let result = array.reduce((a, b) => {
            return a + b;
        });
        return result;
    }
    
}
function FtoSI(Num,fd){ //SI接頭辞を付ける
    if(String(Math.round(Num)).length > 24){
        return `${(Num / 1000000000000000000000000).toFixed(3)}Y`;
    }else{
        if(String(Math.round(Num)).length > 21){
            return `${(Num / 1000000000000000000000).toFixed(3)}Z`;
        }else{
            if(String(Math.round(Num)).length > 18){
                return `${(Num / 1000000000000000000).toFixed(3)}E`;
            }else{
                if(String(Math.round(Num)).length > 15){
                    return `${(Num / 1000000000000000).toFixed(3)}P`;
                }else{
                    if(String(Math.round(Num)).length > 12){
                        return `${(Num / 1000000000000).toFixed(3)}T`;
                    }else{
                        if(String(Math.round(Num)).length > 9){
                            return `${(Num / 1000000000).toFixed(3)}G`;
                        }else{
                            if(String(Math.round(Num)).length > 6){
                                return `${(Num / 1000000).toFixed(3)}M`;
                            }else{
                                if(String(Math.round(Num)).length > 3){
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
    }
}
function FDevMessage(Num){//Num配列[メッセージ番号,装置番号,OP1,OP2,OP3,OP4]
                          //      [    0        1     2   3   4   5]
    hoverInfHtm.style.display = 'block';
    InfNamHtm.innerHTML = DevNamArr[Num[1]];
    Inf1.innerHTML = '';
    Inf2.innerHTML = '';
    Inf3.innerHTML = '';
    Inf4.innerHTML = '';
    Inf5.innerHTML = '';
    Inf6.innerHTML = '';
    Inf7.innerHTML = '';
    Inf8.innerHTML = '';
    switch(Num[0]){
        case 0:  //0
            InfNamHtm.innerHTML = '加工に失敗しました';
            Inf1.innerHTML = '粒子は生産されませんでした';
            Inf2.innerHTML = '';
            Inf3.innerHTML = '';
            Inf4.innerHTML = '';
            Inf5.innerHTML = '';
            Inf6.innerHTML = '';
            Inf7.innerHTML = '';
            Inf8.innerHTML = '';
            break;
        case 1:
            InfNamHtm.innerHTML = '加工に失敗しました';
            Inf1.innerHTML = '元素は生産されませんでした';
            Inf2.innerHTML = '';
            Inf3.innerHTML = '';
            Inf4.innerHTML = '';
            Inf5.innerHTML = '';
            Inf6.innerHTML = '';
            Inf7.innerHTML = '';
            Inf8.innerHTML = '';
            break;
        case 2:
            Inf1.innerHTML = `${Num[2]} ${Num[3]}生産`;
            Inf2.innerHTML = ``;
            Inf3.innerHTML = '';
            Inf4.innerHTML = '';
            Inf5.innerHTML = '';
            Inf6.innerHTML = '';
            Inf7.innerHTML = '';
            Inf8.innerHTML = '';
            break;
        case 3:
            Inf1.innerHTML = ``;
            Inf2.innerHTML = `${Num[2]} ${Num[3]}消費`;
            Inf3.innerHTML = '';
            Inf4.innerHTML = '';
            Inf5.innerHTML = '';
            Inf6.innerHTML = '';
            Inf7.innerHTML = '';
            Inf8.innerHTML = '';
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
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
plusBtnHtm.addEventListener('mouseup',()=>{             //プラス マウス押下解除
    click = false;
    delay500ms = false;
    clearTimeout(delay500ms);
    clearInterval(Finterval);
    
    AddQtyAddQty = 1;
    AddQtyAddedQty = 0;
});
minusBtnHtm.addEventListener('mousedown',Fplusminusdown);//マイナス マウス押下
minusBtnHtm.addEventListener('mouseup',()=>{             //マイナス マウス押下解除
    click = false;
    delay500ms = false;
    clearTimeout(delay500ms);
    clearInterval(Finterval);
    AddQtyAddQty = 1;
    AddQtyAddedQty = 0;
});
AddQtyHtm.addEventListener('keydown',()=>{ //追加数フォームの数字を正しく治す
    setTimeout(() => {
            AddQtyHtm.value = AddQtyHtm.value.replace(/[\D]/g, '');
            if(AddQtyHtm.value == '0'){
                AddQtyHtm.value = '1';
            }
            if(document.activeElement.id != 'addNum' || AddQtyHtm.value == ''){
                AddQtyHtm.value = '1';
            }
            AddQty = Number(AddQtyHtm.value);
    },1);
});
disSelectHtm.addEventListener('click',()=>{ //選択解除
    SelAtoNow = '';
    AtoArrHtm.forEach((value) => {
        value.style.backgroundColor = "rgb(125, 190, 225)";
        SelAtoNow = '';
    });
    PneArrHtm.forEach((value) => {
        value.style.backgroundColor = "rgb(125, 190, 225)";
        SelAtoNow = '';
    });
    SelAtoHtm.innerHTML = `選択中:${SelAtoNow}`;
});
toridasiHtm.addEventListener('click',()=>{ //取り出し
    if(toridasi == 'OFF'){
        toridasi = 'ON';
        toridasiHtm.style.backgroundColor = "#0077ff";
    }else{
        toridasi = 'OFF';
        toridasiHtm.style.backgroundColor = "rgb(134, 134, 134)";
    }
    hoverInfHtm.style.display = 'block';
    InfNamHtm.innerHTML = '取り出し';
    Inf1.innerHTML = 'オンにしている状態で開発装置をクリックすると';
    Inf2.innerHTML = '開発装置の中身を取り出します';
    Inf3.innerHTML = `現在:${toridasi}`;
    Inf4.innerHTML = '';
    Inf5.innerHTML = '';
    Inf6.innerHTML = '';
    Inf7.innerHTML = '';
    Inf8.innerHTML = '';
    disSelectHtm.dispatchEvent(new Event('click')); 
});
AutAtoInnHtm.addEventListener('click',FAutAtoclick);
AutEneInnHtm.addEventListener('click',FAutEneclick);
DevHtm.addEventListener('click',FDevClick);

developer.oncontextmenu = function (element) { //開発の右クリックで処理
    FprocesDev(element);
}
document.addEventListener('keydown',() =>{  //フォーカス不正をできないように
    if(document.activeElement.id == 'plusH'){
        plusH.blur();
    }
});
document.oncontextmenu = function () { //右クリックメニューを出さない
	return false;
};
document.addEventListener('mouseover',(element)=>{
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
setInterval(() => {
    AtoQtyArr.forEach((value,index) => {
        AtoQtyArr[index]+=aps[index]/100;
    });
    Ene+=eps/100;
    FSync();
}, 10);


document.addEventListener('keydown', keydownEvent,false);

function Fzenbu(arr){
    let aaa="";
    arr.forEach(e =>{
        aaa += e + ",";
    })
    return aaa.slice(0,-1) ;
}

function Fzenbu2(arr){
    let aaa="";
    arr.forEach(e =>{
        e.forEach(e =>{
            aaa += e + ",";
        })
        aaa = aaa.slice(0,-1) + "/";
    })
    return aaa.slice(0,-1);
}


function Fgyaku2(naka){
    let aaa;
    aaa = naka.split("/");
    aaa.forEach((e,i) => {
        aaa[i] = aaa[i].split(",");
    });
    return aaa;
}

function keydownEvent(event){
    if(event.ctrlKey) {
        if(event.code === "KeyS"){
            let data = "";
            let data1 = "";
            let data2 = "";
            data += Fzenbu(AtoQtyArr) + ":";
            data += Fzenbu(DevLevArr) + ":";
            data += Fzenbu(PneQtyArr) + ":";
            data += Fzenbu(AutAtoQtyArr) + ":";
            data += Fzenbu(AutEneQtyArr) + ":";
            data += Fzenbu(aps) + ":";
            data += Ene + ":";
            data += eps;
            data1 += Fzenbu(foundAto);
            data2  += Fzenbu2(DevInnAtoArr) + ":";
            data2  += Fzenbu2(DevInnQtyArr) + ":";
            data2  += Fzenbu2(AutAtoUseNeeQty) + ":";
            data2  += Fzenbu2(AutAtoUseNeeQtyNow) + ":";
            data2  += Fzenbu2(AutEneUseNeeQty) + ":";
            data2  += Fzenbu2(AutEneUseNeeQtyNow);

        

            document.cookie = `a=${data}=${data1}="${data2}; max-age=31536000`;
            console.log(data,data1,data2);
        }
    }
}
function keydownEvent(event){
    if(event.ctrlKey) {
        if(event.code === "KeyX"){
            if(window.confirm("cookieデータを削除しますか？")==true){
                document.cookie = "a=;  max-age=0";
            }
        }
    }
}

if(document.cookie!=""){
    let data = document.cookie.slice("=")[0];
    let data1 = document.cookie.slice("=")[1];
    let data2 = document.cookie.slice("=")[2];
    data = data.slice(":");

    AtoQtyArr = data[0].slice(",").map(Number);
    DevLevArr = data[1].slice(",").map(Number);
    PneQtyArr = data[2].slice(",").map(Number);
    AutAtoQtyArr = data[3].slice(",").map(Number);
    AutEneQtyArr = data[4].slice(",").map(Number);
    aps = Number(data[5]);
    Ene = Number(data[6]);
    eps = Number(data[7]);

    foundAto = data1.slice(",");

    DevInnAtoArr = Fgyaku(data2[0]);
    DevInnQtyArr = Fgyaku(data2[1]);
    AutAtoUseNeeQty = Fgyaku(data2[2]);
    AutAtoUseNeeQtyNow = Fgyaku(data2[3]);
    AutEneUseNeeQty = Fgyaku(data2[4]);
    AutEneUseNeeQtyNow = Fgyaku(data2[5]);
}
