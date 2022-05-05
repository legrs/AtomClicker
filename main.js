let radio1 = document.querySelector('#develop');      // 切り
let radio2 = document.querySelector('#create');       //   替え
let developer = document.querySelector('#developer'); //       専
let creator = document.querySelector('#creator');     //         用
let plusH = document.querySelector('#plusH');      //水素追加ボタン
let atomQty = document.querySelector('#atomQty'); //合計元素数______
let autoAtom = document.querySelector('#autoAtom');    //     製造画面の
let autoEnergy = document.querySelector('#autoEnergy');//         選択ボタン
let autoAtoms = document.querySelector('#autoAtoms');      //自動生成
let autoEnergys = document.querySelector('#autoEnergys');  //自動発電
let back1 = document.querySelector('#back1'); //自動生成から戻るボタン
let back2 = document.querySelector('#back2'); //自動発電から戻るボタン
let addNum = document.querySelector('#addNum'); //何個追加するか
let plus = document.querySelector('#plus');  //プラスボタン
let minus = document.querySelector('#minus');//マイナスボタン
let atomSelectHTML = document.querySelector('#selectAtomHTML'); //html表示側の選択中:
let infomationBtn = document.querySelector('#infomation'); //このサイトについてを表示するボタン
let infomation = document.querySelector('#infomationDiv');
let closeInfo = document.querySelector('#closeInfomation');
let autoAtomInner = document.querySelector('#autoAtomScr');
let autoEnergyInner = document.querySelector('#autoEnergyScr');
let ApSHTML = document.querySelector('#ApS');
let EpSHTML = document.querySelector('#EpS');
let toridasiHTML = document.querySelector('#toridasi');

let hoverInfo = document.querySelector('#hoverInfo'); //カーソルを合わせて出てくる説明
let name = document.querySelector('#Name'); //説明の名前
let info1 = document.querySelector('#info1'); //説明の名前
let info2 = document.querySelector('#info2'); //説明
let info3 = document.querySelector('#info3'); //説明
let info4 = document.querySelector('#info4'); //説明
let info5 = document.querySelector('#info5'); //説明
let info6 = document.querySelector('#info6'); //説明
let info7 = document.querySelector('#info7'); //説明
let info8 = document.querySelector('#info8'); //説明

let autoAtomQtyHTMLArray=[
document.querySelector('#addHQty'),
document.querySelector('#addH2Qty'),
document.querySelector('#addaQty'),
document.querySelector('#addHeQty'),
document.querySelector('#addLiQty'),
document.querySelector('#addBeQty'),
document.querySelector('#addBe2Qty'),
document.querySelector('#addCQty')
];
let autoEnergyQtyHTMLArray=[
document.querySelector('#addE1Qty'),
document.querySelector('#addE2Qty'),
document.querySelector('#addE3Qty'),
document.querySelector('#addE4Qty')
];

let pNum = document.querySelector('#pNum');  //粒子の数(html表示用)
let nNum= document.querySelector('#nNum'); //｜
let eNum= document.querySelector('#eNum'); //｜
let ENum= document.querySelector('#ENum'); //↓
let p = document.querySelector('#p');   
let n= document.querySelector('#n');  
let e= document.querySelector('#e');  

let HNum = document.querySelector('#HNum');  //元素の数(html表示用)
let HeNum= document.querySelector('#HeNum'); //｜
let LiNum= document.querySelector('#LiNum'); //｜
let BeNum= document.querySelector('#BeNum'); //｜
let BNum = document.querySelector('#BNum');  //｜
let CNum = document.querySelector('#CNum');  //｜
let NNum = document.querySelector('#NNum');  //｜
let ONum = document.querySelector('#ONum');  //｜
let FNum = document.querySelector('#FNum');  //｜
let NeNum= document.querySelector('#NeNum'); //↓
let H = document.querySelector('#H');   
let He= document.querySelector('#He');  
let Li= document.querySelector('#Li');  
let Be= document.querySelector('#Be');  
let B = document.querySelector('#B');   
let C = document.querySelector('#C');   
let N = document.querySelector('#N');   
let O = document.querySelector('#O');   
let F = document.querySelector('#F');   
let Ne= document.querySelector('#Ne');  

let atomArray     =    ['H','He','Li','Be','B','C','N','O','F','Ne']; //元素全部
let atomName      =    ['水素','ヘリウム','リチウム','ベリリウム',' ホウ素','炭素','窒素','酸素','フッ素','ネオン'];

let developerName =    ['質量エネルギー化装置','粒子合成装置','原子加速装置','原子分解装置','粒子中性子化装置'];
let developerArray=    ['toEnergy',       'toAtom',   'atomKsk',  'toPNE',    'toNeutron'];
let upgradedDeveloper = [0,0,0,0,0]; 
let maxUpgradeDeveloper=[3,2,2,1,1];
let developerNeedAtom =[
                        ['H'],
                        ['H'],
                        ['Li','Be'],
                        ['H'],
                        ['H','Li']
                        ];
let developerNeedAtomQty=[
                        [60],
                        [100],
                        [200,20],
                        [80],
                        [2000,1000]
                        ];
let developerExplain = [
                        '水素の質量をエネルギーに変換します',
                        '粒子を合成し原子にします',
                        '原子を衝突させ元素を作り出します',
                        '原子を粒子に分解します',
                        '原子の中の粒子を全て中性子にします'
                        ];
let developerInnerAtom = [
                        [''],
                        [''],
                        [''],
                        [''],
                        ['']
                        ];
let developerInnerAtomQty = [
                            [0],
                            [0],
                            [0],
                            [0],
                            [0]
                            ];
let autoAtomArray = ['addH','addH2','adda','addHe','addLi','addBe','addBe2','addC'];
let autoAtomName = ['水素カーソル','水電解装置','水素誘引装置','ヘリウムタービン','リチウム生成装置','ベリリウム複製装置','ベリリウム鉱山','有機発生装置'];
let autoAtomQtyArray = [0,0,0,0,0,0,0,0];
let autoAtomPerSecond = ['H','H','H','He','Li','Be','Be','C'];
let autoAtomPerSecondQty = [0.1,1,10,0.1,0.1,0.1,1,1];
let autoAtomcost = [
                    ['H'],
                    ['H'],
                    ['H'],
                    ['H','He'],
                    ['H','Li'],
                    ['H','Be'],
                    ['H','Li','Be',],
                    ['H','He','Li','B','C']
                    ];
let autoAtomcostQty=[
                    [15],
                    [200],
                    [2000],
                    [200,5],
                    [800,5],
                    [2000,5],
                    [3000,100,10],
                    [4000,1000,100,10,5]
                    ];
let autoAtomcostQtyNow =[
                        [15],
                        [100],
                        [2000],
                        [200,5],
                        [800,5],
                        [2000,5],
                        [3000,100,10],
                        [4000,1000,100,10,5]
                        ];
let autoEnergyArray = ['addE1','addE2','addE3','addE4'];
let autoEnergyName = ['炭素太陽光発電装置','結合エネルギー発電装置','炭素燃焼発電装置','常温核融合発電装置'];
let autoEnergyQtyArray = [0,0,0,0];
let autoEnergyPerSecond = ['E','E','E','E'];
let autoEnergyPerSecondQty= [1,5,8,20];
let autoEnergycost = [
                    ['Li','C'],
                    ['H','Li','O'],
                    ['H','C','O'],
                    ['H','Li','Be','O']
                    ];
let autoEnergycostQty=[
                    [3000,10],
                    [5000,1000,10],
                    [4000,100,100],
                    [1000,1000,1000,200]
                    ];
let autoEnergycostQtyNow=[
                        [3000,10],
                        [5000,1000,10],
                        [4000,100,100],
                        [1000,1000,1000,100]
                        ];
let electronArray  = [1,2,3,4,5,6,7,8,9,10];
let protonArray   =  [1,2,3,4,5,6,7,8,9,10];
let neutronArray =   [0,2,4,5,5,6,7,8,10,10];

let foundAtom = ['H'];  // 発見済み元素
let HQty = 0;  //元素の数
let HeQty = 0; //｜
let LiQty = 0; //｜
let BeQty = 0; //｜
let BQty = 0;  //｜
let CQty = 0;  //｜
let NQty = 0;  //｜
let OQty = 0;  //｜
let FQty = 0;  //｜
let NeQty = 0; //↓

let selectAtom = ''; //選択している元素
let energy = 0;  //エネルギー
let proton = 0;  //陽子の数
let neutron = 0; //中性子の数
let electron = 0;//電子の数
let addQty = 1; //１度に追加する数
let click = false; //plus minusをクリックしているか
let plusQtyplusQty = 1;//一度に追加する数を追加する数
let intervalFunction;
let fiveSecond = false; //plus minusをクリックしてから5秒立ったか
let plusMinusElement; 
let plusQtyplusedQty = 0;
let ApS = [0,0,0,0,0,0,0,0,0,0] //元素毎秒
let EpS = 0;
let addHOK = false;
let addHeOK = false;
let addLiOK = false;
let addBeOK = false;
let addBOK = false;
let addCOK = false;
let addNOK = false;
let addOOK = false;
let addFOK = false;
let addNeOK = false;
let toridasi = 'OFF';



function ischeck(){  //切り替え用
    if(radio1.checked == true){
        developer.style.display = "block";
        creator.style.display = "none";
        autoAtoms.style.display = "none";
        autoEnergys.style.display = "none";
        autoAtom.style.display = "none";
        autoEnergy.style.display = "none";
    }else{
        developer.style.display ="none";
    }
    if(radio2.checked == true){
        creator.style.display = "block";
        developer.style.display = "none";
        autoAtoms.style.display = "none";
        autoEnergys.style.display = "none";
        autoAtom.style.display = "block";
        autoEnergy.style.display = "block";
    }else{
        creator.style.display = "none";
    }
}
function atomselect(atomNum){ //元素選択
    H.style.backgroundColor = "rgb(125, 190, 225)";
    He.style.backgroundColor = "rgb(125, 190, 225)";
    Li.style.backgroundColor = "rgb(125, 190, 225)";
    Be.style.backgroundColor = "rgb(125, 190, 225)";
    B.style.backgroundColor = "rgb(125, 190, 225)";
    C.style.backgroundColor = "rgb(125, 190, 225)";
    N.style.backgroundColor = "rgb(125, 190, 225)";
    O.style.backgroundColor = "rgb(125, 190, 225)";
    F.style.backgroundColor = "rgb(125, 190, 225)";
    Ne.style.backgroundColor = "rgb(125, 190, 225)";
    if(atomNum == -100){
        
    }else{     //クリックだった時」
        
        if(foundAtom.includes(atomNum.target.id)){
            if(selectAtom == 'p' || selectAtom == 'n' || selectAtom == 'e'){
            pneselect(-100);
            }
            selectAtom = atomNum.target.id;
            
        }
        switch(selectAtom){
            case 'H':
                H.style.backgroundColor = "rgb(125, 225, 155)";
                break;
            case 'He':
                He.style.backgroundColor = "rgb(125, 225, 155)";
                break;
            case 'Li':
                Li.style.backgroundColor = "rgb(125, 225, 155)";
                break;
            case 'Be':
                Be.style.backgroundColor = "rgb(125, 225, 155)";
                break;
            case 'B' :
                B.style.backgroundColor = "rgb(125, 225, 155)";
                break;
            case 'C' :
                C.style.backgroundColor = "rgb(125, 225, 155)";
                break;
            case 'N' :
                N.style.backgroundColor = "rgb(125, 225, 155)";
                break;
            case 'O' :
                O.style.backgroundColor = "rgb(125, 225, 155)";
                break;
            case 'F' :
                F.style.backgroundColor = "rgb(125, 225, 155)";
                break;
            case 'Ne':
                Ne.style.backgroundColor = "rgb(125, 225, 155)";
                break;
        }
    }
    
    atomSelectHTML.innerHTML = `選択中:${selectAtom}`;
}
function pneselect(pneNum){ //粒子選択
    p.style.backgroundColor = "rgb(125, 190, 225)";
    n.style.backgroundColor = "rgb(125, 190, 225)";
    e.style.backgroundColor = "rgb(125, 190, 225)";
    if(pneNum == -100){
        
    }else{ //クリックだった時
        if(pneNum.target.id == 'p'){
            if(pNum.innerHTML != '0'){
                if(selectAtom == 'p' || selectAtom == 'n' || selectAtom == 'e'){
                }else{
                    atomselect(-100);
                }
                selectAtom = 'p';
            }
        }
        if(pneNum.target.id == 'n'){
            if(nNum.innerHTML != '0'){
                if(selectAtom == 'p' || selectAtom == 'n' || selectAtom == 'e'){
                }else{
                    atomselect(-100);
                }
                selectAtom = 'n';
            }
        }
        if(pneNum.target.id == 'e'){
            if(eNum.innerHTML != '0'){
                if(selectAtom == 'p' || selectAtom == 'n' || selectAtom == 'e'){
                }else{
                    atomselect(-100);
                }
                selectAtom = 'e';
            }
        }
        switch(selectAtom){
            case 'p':
                p.style.backgroundColor = "rgb(125, 225, 155)";
                break;
            case 'n':
                n.style.backgroundColor = "rgb(125, 225, 155)";
                break;
            case 'e':
                e.style.backgroundColor = "rgb(125, 225, 155)";
                break;
        }
    }
    
    atomSelectHTML.innerHTML = `選択中:${selectAtom}`;
}
function addAtom(){ //合計元素数を合わせる
    atomQty.innerHTML = toSI(Math.round(HQty) + Math.round(HeQty) + Math.round(LiQty) + Math.round(BeQty) + Math.round(BQty) + Math.round(CQty) + Math.round(NQty) + Math.round(OQty) + Math.round(FQty) + Math.round(NeQty));
    HNum.innerHTML  = toSI(Math.round(HQty));
    HeNum.innerHTML = toSI(Math.round(HeQty));
    LiNum.innerHTML = toSI(Math.round(LiQty));
    BeNum.innerHTML = toSI(Math.round(BeQty));
    BNum.innerHTML  = toSI(Math.round(BQty));
    CNum.innerHTML  = toSI(Math.round(CQty));
    NNum.innerHTML  = toSI(Math.round(NQty));
    ONum.innerHTML  = toSI(Math.round(OQty));
    FNum.innerHTML  = toSI(Math.round(FQty));
    NeNum.innerHTML = toSI(Math.round(NeQty));
    pNum.innerHTML  = toSI(Math.round(proton));
    nNum.innerHTML  = toSI(Math.round(neutron));
    eNum.innerHTML  = toSI(Math.round(electron));
    ENum.innerHTML  = `${toSI(Math.round(energy))}E`;
}
function addh(){ //水素追加
    HQty++;
    addAtom('H');
}
function selectAuto(select){   //製造画面の切り替え
    if(select.target.id == 'autoAtom'){
        autoAtom.style.display = 'none';
        autoEnergy.style.display = 'none';
        autoAtoms.style.display = 'block';
    }
    if(select.target.id == 'autoEnergy'){
        autoAtom.style.display = 'none';
        autoEnergy.style.display = 'none';
        autoEnergys.style.display = 'block';
    }
}
function back(){ //戻るボタン
        autoAtoms.style.display = 'none';
        autoEnergys.style.display = 'none';
        autoAtom.style.display = 'block';
        autoEnergy.style.display = 'block';
}
function numcheck(){ //追加数フォームの数字を正しく治す
    setTimeout(() => {
            addNum.value = addNum.value.replace(/[\D]/g, '');
            addQty = Number(addNum.value);
            if(addNum.value == '0'){
                addNum.value = '1';
                addQty = Number(addNum.value);
            }
    },1);
    
}
function plusminusdown(element){ //一度に追加する数の変更する数の変更関数(?)
    plusMinusElement = element;
    fiveSecond = false;
    console.log('plusminusdown',element.target.id);    ////
    plusminus(element); //////
    click = true;
    
    setTimeout(() => {
        if(click === true){
            fiveSecond = true;
            startInterval();
        }
        
    }, 500);
}
function startInterval(){ //繰り返しスタート関数
    console.log('startInterval');
    clearInterval(intervalFunction);
    intervalFunction =  setInterval(() => {
                            if(fiveSecond === true){
                                if(click === true){
                                    if(plusQtyplusedQty % 10 == 0){
                                        plusQtyplusQty = plusQtyplusQty * 2;
                                    }
                                    plusminus(plusMinusElement);//////
                                    plusQtyplusedQty++;
                                    console.log(plusQtyplusQty,addQty,plusMinusElement.target.id);
                                }else{
                                    plusQtyplusQty = 1;
                                }
                            }
                            
                        }, 50);
}
function stopInterval(){  //繰り返しストップ関数
    console.log('stopInterval');
    clearInterval(intervalFunction);
}
function plusminus(element){
    if(addQty >= 1){
        if(addQty - plusQtyplusQty <= 1){
            
        }else{
            minus.style.backgroundColor = "#4d56ff"
        }
        
    }else{
        minus.style.backgroundColor = "#989898"
    }
    console.log('plusminus',element.target.id);     //////
    switch(element.target.id){
        case 'plus':
            console.log(element.target.id);         //////
            addQty = addQty + plusQtyplusQty;
            addNum.value = String(addQty);
            break;
        case 'minus':
            console.log('mi');
            if(addQty >= 1){
                if(addQty - plusQtyplusQty <= 1){
                    minus.style.backgroundColor = "#989898"
                    addQty = 1;
                    addNum.value = String(addQty);
                    console.log('1111111111111111');
                }else{
                    console.log('minusssssssssssssssss');
                    minus.style.backgroundColor = "#4d56ff"
                    addQty = addQty - plusQtyplusQty;
                    addNum.value = String(addQty);
                }
                
            }else{
                minus.style.backgroundColor = "#989898"
                addQty = 1;
                addNum.value = String(addQty);
            }
            break;
    } 
}
function processingDeveloper(element){ //開発の処理
    console.log('processing');
}
function showInfomation(){
    infomation.style.display = "block";
    infomation.style.width = "97vw";
    infomation.style.height = "97vh";
    closeInfo.style.display = "block";
}
function closeInfomation(){
    infomation.style.width = "0vw";
    infomation.style.height = "0vh";
    setTimeout(() => {
        closeInfo.style.display = "none";
    }, 200);
    
}
function autoAtomClick(element){
    if(autoAtomArray.includes(element.target.id)){ //アップグレードがクリックされていた時   番号→autoAtomArray.indexOf(element.target.id)
        let canLevelUp = 0;
        for(let i=0;i<autoAtomcost[autoAtomArray.indexOf(element.target.id)].length;i++){ //コストの元素の数の長さだけ繰り返す
            switch(autoAtomcost[autoAtomArray.indexOf(element.target.id)][i]){  //それぞれの元素で対応
                case 'H':
                    if(autoAtomcostQtyNow[autoAtomArray.indexOf(element.target.id)][i] <= HQty){   //水素の数が足りていた時
                        canLevelUp++;
                    }
                    break;
                case 'He':
                    if(autoAtomcostQtyNow[autoAtomArray.indexOf(element.target.id)][i] <= HeQty){   
                        canLevelUp++;
                    }
                    break;
                case 'Li':
                    if(autoAtomcostQtyNow[autoAtomArray.indexOf(element.target.id)][i] <= LiQty){   
                        canLevelUp++;
                    }
                    break;
                case 'Be':
                    if(autoAtomcostQtyNow[autoAtomArray.indexOf(element.target.id)][i] <= BeQty){   
                        canLevelUp++;
                    }
                    break;
                case 'B':
                    if(autoAtomcostQtyNow[autoAtomArray.indexOf(element.target.id)][i] <= BQty){   
                        canLevelUp++;
                    }
                    break;
                case 'C':
                    if(autoAtomcostQtyNow[autoAtomArray.indexOf(element.target.id)][i] <= CQty){   
                        canLevelUp++;
                    }
                    break;
            }
        }
        if(canLevelUp == autoAtomcost[autoAtomArray.indexOf(element.target.id)].length){ //LevelUp可能だった時
            for(let i=0;i<autoAtomcost[autoAtomArray.indexOf(element.target.id)].length;i++){
                switch(autoAtomcost[autoAtomArray.indexOf(element.target.id)][i]){
                    case 'H':  //必要元素が水素だった時
                        HQty = HQty - autoAtomcostQtyNow[autoAtomArray.indexOf(element.target.id)][i];
                        addAtom();
                        break;
                    case 'He':
                        HeQty = HeQty - autoAtomcostQtyNow[autoAtomArray.indexOf(element.target.id)][i];
                        addAtom();
                        break;
                    case 'Li':
                        LiQty = LiQty - autoAtomcostQtyNow[autoAtomArray.indexOf(element.target.id)][i];
                        addAtom();
                        break;
                    case 'Be':
                        BeQty = BeQty - autoAtomcostQtyNow[autoAtomArray.indexOf(element.target.id)][i];
                        addAtom();
                        break;
                    case 'B':
                        BQty = BQty - autoAtomcostQtyNow[autoAtomArray.indexOf(element.target.id)][i];
                        addAtom();
                        break;
                    case 'C':
                        CQty = CQty - autoAtomcostQtyNow[autoAtomArray.indexOf(element.target.id)][i];
                        addAtom();
                        break;
                }
            }
            autoAtomQtyArray[autoAtomArray.indexOf(element.target.id)]++;

            for(let i=0;i<autoAtomcost[autoAtomArray.indexOf(element.target.id)].length;i++){
                autoAtomcostQtyNow[autoAtomArray.indexOf(element.target.id)][i] = Math.round(autoAtomcostQty[autoAtomArray.indexOf(element.target.id)][i] * (1.15 ** autoAtomQtyArray[autoAtomArray.indexOf(element.target.id)]));
            }
            autoAtomInfo(element.target.id);
            
            switch(autoAtomPerSecond[autoAtomArray.indexOf(element.target.id)]){
                case 'H':
                    ApS[0] = Number((autoAtomQtyArray[autoAtomArray.indexOf(element.target.id)] * autoAtomPerSecondQty[autoAtomArray.indexOf(element.target.id)]).toFixed(1));
                    break;
                case 'He':
                    ApS[1] = Number((autoAtomQtyArray[autoAtomArray.indexOf(element.target.id)] * autoAtomPerSecondQty[autoAtomArray.indexOf(element.target.id)]).toFixed(1));
                    break;
                case 'Li':
                    ApS[2] = Number((autoAtomQtyArray[autoAtomArray.indexOf(element.target.id)] * autoAtomPerSecondQty[autoAtomArray.indexOf(element.target.id)]).toFixed(1));
                    break;
                case 'Be':
                    ApS[3] = Number((autoAtomQtyArray[autoAtomArray.indexOf(element.target.id)] * autoAtomPerSecondQty[autoAtomArray.indexOf(element.target.id)]).toFixed(1));
                    break;
                case 'C':
                    ApS[5] = Number((autoAtomQtyArray[autoAtomArray.indexOf(element.target.id)] * autoAtomPerSecondQty[autoAtomArray.indexOf(element.target.id)]).toFixed(1));
                    break;
            }
            autoAtomQtyHTMLAarray[autoAtomArray.indexOf(element.target.id)].innerHTML = toSI(autoAtomQtyArray[autoAtomArray.indexOf(element.target.id)]);
            ApSHTML.innerHTML = `元素毎秒(ApS):${toSI(ApS[0]+ApS[1]+ApS[2]+ApS[3]+ApS[4]+ApS[5]+ApS[6]+ApS[7]+ApS[8]+ApS[9])}`;
        }
        
    }
}
function autoEnergyClick(element){
    if(autoEnergyArray.includes(element.target.id)){ //アップグレードがクリックされていた時   番号→autoAtomArray.indexOf(element.target.id)
        console.log('a');
        let canLevelUp = 0;
        for(let i=0;i<autoEnergycost[autoEnergyArray.indexOf(element.target.id)].length;i++){ //コストの元素の数の長さだけ繰り返す
            switch(autoEnergycost[autoEnergyArray.indexOf(element.target.id)][i]){  //それぞれの元素で対応
                case 'H':
                    if(autoEnergycostQtyNow[autoEnergyArray.indexOf(element.target.id)][i] <= HQty){   //水素の数が足りていた時
                        canLevelUp++;
                    }
                    break;
                case 'He':
                    if(autoEnergycostQtyNow[autoEnergyArray.indexOf(element.target.id)][i] <= HeQty){   
                        canLevelUp++;
                    }
                    break;
                case 'Li':
                    if(autoEnergycostQtyNow[autoEnergyArray.indexOf(element.target.id)][i] <= LiQty){   
                        canLevelUp++;
                    }
                    break;
                case 'Be':
                    if(autoEnergycostQtyNow[autoEnergyArray.indexOf(element.target.id)][i] <= BeQty){   
                        canLevelUp++;
                    }
                    break;
                case 'B':
                    if(autoEnergycostQtyNow[autoEnergyArray.indexOf(element.target.id)][i] <= BQty){   
                        canLevelUp++;
                    }
                    break;
                case 'C':
                    if(autoEnergycostQtyNow[autoEnergyArray.indexOf(element.target.id)][i] <= CQty){   
                        canLevelUp++;
                    }
                    break;
                case 'O':
                    if(autoEnergycostQtyNow[autoEnergyArray.indexOf(element.target.id)][i] <= OQty){   
                        canLevelUp++;
                    }
                    break;
            }
        }
        if(canLevelUp == autoEnergycost[autoEnergyArray.indexOf(element.target.id)].length){ //LevelUp可能だった時
            for(let i=0;i<autoEnergycost[autoEnergyArray.indexOf(element.target.id)].length;i++){
                switch(autoEnergycost[autoEnergyArray.indexOf(element.target.id)][i]){
                    case 'H':
                        HQty = HQty - autoEnergycostQtyNow[autoEnergyArray.indexOf(element.target.id)][i];
                        ENum.innerHTML
                        break;
                    case 'He':
                        HeQty = HeQty - autoEnergycostQtyNow[autoEnergyArray.indexOf(element.target.id)][i];
                        addAtom();
                        break;
                    case 'Li':
                        LiQty = LiQty - autoEnergycostQtyNow[autoEnergyArray.indexOf(element.target.id)][i];
                        addAtom();
                        break;
                    case 'Be':
                        BeQty = BeQty - autoEnergycostQtyNow[autoEnergyArray.indexOf(element.target.id)][i];
                        addAtom();
                        break;
                    case 'B':
                        BQty = BQty - autoEnergycostQtyNow[autoEnergyArray.indexOf(element.target.id)][i];
                        addAtom();
                        break;
                    case 'C':
                        CQty = CQty - autoEnergycostQtyNow[autoEnergyArray.indexOf(element.target.id)][i];
                        addAtom();
                        break;
                    case 'O':
                        OQty = OQty - autoEnergycostQtyNow[autoEnergyArray.indexOf(element.target.id)][i];
                        addAtom();
                        break;
                }
            }
            autoEnergyQtyArray[autoEnergyArray.indexOf(element.target.id)]++;

            for(let i=0;i<autoEnergycost[autoEnergyArray.indexOf(element.target.id)].length;i++){
                autoEnergycostQtyNow[autoEnergyArray.indexOf(element.target.id)][i] = Math.round(autoEnergycostQty[autoEnergyArray.indexOf(element.target.id)][i] * (1.15 ** autoEnergyQtyArray[autoEnergyArray.indexOf(element.target.id)]));
            }
            autoEnergyInfo(element.target.id);
            EpS = Number((autoEnergyQtyArray[autoEnergyArray.indexOf(element.target.id)] * autoEnergyPerSecondQty[autoEnergyArray.indexOf(element.target.id)]).toFixed(1));
            autoEnergyQtyHTMLArray[autoEnergyArray.indexOf(element.target.id)].innerHTML = toSI(autoEnergyQtyArray[autoEnergyArray.indexOf(element.target.id)]);
            EpSHTML.innerHTML = `エネルギー毎秒(EpS):${toSI(EpS)}`;
        }
        
    }
}
function selectDev(element){
    if(developerArray.includes(element.target.id)){
        if( developerInnerAtom[developerArray.indexOf(element)] == ''){ //中身がない時
            if(upgradedDeveloper[developerArray.indexOf(element)] == 0){ //作成済みでないとき
                info1.innerHTML = '未作成';
                info2.innerHTML = `作成必要元素:`;
                for(let i = 0;i<developerNeedAtom[developerArray.indexOf(element)].length;i++){
                    createNeedAtom = `${createNeedAtom} ${developerNeedAtom[developerArray.indexOf(element)][i]} ${developerNeedAtomQty[developerArray.indexOf(element)][i]}個`;
                }
                info3.innerHTML = createNeedAtom;
            }else{                                //作成済みな時
                info1.innerHTML = `Lv.${upgradedDeveloper[developerArray.indexOf(element)]}`;
                if(upgradedDeveloper[developerArray.indexOf(element)] != maxUpgradeDeveloper[developerArray.indexOf(element)]){ 
                    info2.innerHTML = `アップグレード必要元素:`;
                    for(let i = 0;i<developerNeedAtom[developerArray.indexOf(element)].length;i++){
                        createNeedAtom = `${createNeedAtom} ${developerNeedAtom[developerArray.indexOf(element)][i]} ${developerNeedAtomQty[developerArray.indexOf(element)][i]}個`;
                    }
                    info3.innerHTML = createNeedAtom;
                }else{   //最大なとき
                    info2.innerHTML = ``;
                    
                }
                info6.innerHTML = `元素を選択して左クリックで投入`
            }
            
            
        }else{  // 中身があるとき
            info6.innerHTML = '右クリックで処理'
            for(let i = 0;i<developerInnerAtom[developerArray.indexOf(element)].length;i++){
                innerAtom = `${innerAtom} ${developerInnerAtom[developerArray.indexOf(element)][i]} ${developerInnerAtomQty[developerArray.indexOf(element)][i]}個`;
            }
            info4.innerHTML = `中身:${innerAtom}`;
            switch(element){
                case 'toEnergy':
                    switch(upgradedDeveloper[developerArray.indexOf(element)]){
                        case 1:
                            info7.innerHTML = `${developerInnerAtomQty[developerArray.indexOf(element)][0] / 10} E 生産`;
                            break;
                        case 2:
                            info7.innerHTML = `${developerInnerAtomQty[developerArray.indexOf(element)][0]} E 生産`;
                            break;
                        case 3:
                            info7.innerHTML = `${developerInnerAtomQty[developerArray.indexOf(element)][0] * 10} E 生産`;
                            break;
                    }
                    break;
                case 'toAtom':
                    switch(upgradedDeveloper[developerArray.indexOf(element)]){
                        case 1:
                            info7.innerHTML = `${developerInnerAtomQty[developerArray.indexOf(element)][0] * 10} E 消費`;
                            break;
                        case 2:
                            info7.innerHTML = `${developerInnerAtomQty[developerArray.indexOf(element)][0]} E 消費`;
                            break;
                    }
                    break;
            }
        }
    }
}


function foundAtomInfo(element){ //発見済み元素の説明出す
    name.innerHTML  = atomName[atomArray.indexOf(element)];
    info1.innerHTML = `元素記号:${element}`;
    info2.innerHTML = `陽子数:&nbsp;&nbsp;&nbsp;${protonArray[atomArray.indexOf(element)]}`;
    info3.innerHTML = `電子数:&nbsp;&nbsp;&nbsp;${electronArray[atomArray.indexOf(element)]}`;
    info4.innerHTML = `中性子数:${neutronArray[atomArray.indexOf(element)]}`;
    info5.innerHTML = '';
    info6.innerHTML = '';
    info7.innerHTML = '';
    info8.innerHTML = '';
}
function nofoundAtomInfo(element){//未発見元素の説明出す
    name.innerHTML  = '未発見元素';
    info1.innerHTML = `元素記号:?`;
    info2.innerHTML = `陽子数:&nbsp;&nbsp;&nbsp;${protonArray[atomArray.indexOf(element)]}`;
    info3.innerHTML = `電子数:&nbsp;&nbsp;&nbsp;${electronArray[atomArray.indexOf(element)]}`;
    info4.innerHTML = `中性子数:?`;
    info5.innerHTML = '';
    info6.innerHTML = '';
    info7.innerHTML = '';
    info8.innerHTML = '';
}
function developerInfo(element){ //開発の説明出す
    let createNeedAtom = '';
    let innerAtom = '';
    info1.innerHTML = '';
    info2.innerHTML = '';
    info3.innerHTML = '';
    info4.innerHTML = '';
    info5.innerHTML = '';
    info6.innerHTML = '';
    info7.innerHTML = '';
    info8.innerHTML = '';
    name.innerHTML  = developerName[developerArray.indexOf(element)];
    
    
    
    info5.innerHTML = `説明:${developerExplain[developerArray.indexOf(element)]}`;
    
    if( developerInnerAtom[developerArray.indexOf(element)] == ''){ //中身がない時
        if(upgradedDeveloper[developerArray.indexOf(element)] == 0){ //作成済みでないとき
            info1.innerHTML = '未作成';
            info2.innerHTML = `作成必要元素:`;
            for(let i = 0;i<developerNeedAtom[developerArray.indexOf(element)].length;i++){
                createNeedAtom = `${createNeedAtom} ${developerNeedAtom[developerArray.indexOf(element)][i]} ${developerNeedAtomQty[developerArray.indexOf(element)][i]}個`;
            }
            info3.innerHTML = createNeedAtom;
        }else{                                //作成済みな時
            info1.innerHTML = `Lv.${upgradedDeveloper[developerArray.indexOf(element)]}`;
            if(upgradedDeveloper[developerArray.indexOf(element)] != maxUpgradeDeveloper[developerArray.indexOf(element)]){ 
                info2.innerHTML = `アップグレード必要元素:`;
                for(let i = 0;i<developerNeedAtom[developerArray.indexOf(element)].length;i++){
                    createNeedAtom = `${createNeedAtom} ${developerNeedAtom[developerArray.indexOf(element)][i]} ${developerNeedAtomQty[developerArray.indexOf(element)][i]}個`;
                }
                info3.innerHTML = createNeedAtom;
            }else{   //最大なとき
                info2.innerHTML = ``;
                
            }
            info6.innerHTML = `元素を選択して左クリックで投入`
        }
        
        
    }else{  // 中身があるとき
        info6.innerHTML = '右クリックで処理'
        for(let i = 0;i<developerInnerAtom[developerArray.indexOf(element)].length;i++){
            innerAtom = `${innerAtom} ${developerInnerAtom[developerArray.indexOf(element)][i]} ${developerInnerAtomQty[developerArray.indexOf(element)][i]}個`;
        }
        info4.innerHTML = `中身:${innerAtom}`;
        switch(element){
            case 'toEnergy':
                switch(upgradedDeveloper[developerArray.indexOf(element)]){
                    case 1:
                        info7.innerHTML = `${developerInnerAtomQty[developerArray.indexOf(element)][0] / 10} E 生産`;
                        break;
                    case 2:
                        info7.innerHTML = `${developerInnerAtomQty[developerArray.indexOf(element)][0]} E 生産`;
                        break;
                    case 3:
                        info7.innerHTML = `${developerInnerAtomQty[developerArray.indexOf(element)][0] * 10} E 生産`;
                        break;
                }
                break;
            case 'toAtom':
                switch(upgradedDeveloper[developerArray.indexOf(element)]){
                    case 1:
                        info7.innerHTML = `${developerInnerAtomQty[developerArray.indexOf(element)][0] * 10} E 消費`;
                        break;
                    case 2:
                        info7.innerHTML = `${developerInnerAtomQty[developerArray.indexOf(element)][0]} E 消費`;
                        break;
                }
                break;
        }
    }
    
}
function autoAtomInfo(element){ //自動生産の説明出す
    let createNeedAtom = '';
    name.innerHTML  = autoAtomName[autoAtomArray.indexOf(element)];
    for(let i = 0;i<autoAtomcost[autoAtomArray.indexOf(element)].length;i++){
        createNeedAtom = `${createNeedAtom} ${autoAtomcost[autoAtomArray.indexOf(element)][i]} ${toSI(autoAtomcostQtyNow[autoAtomArray.indexOf(element)][i])},`;
    }
    info1.innerHTML = `作成必要元素:`;
    info2.innerHTML = createNeedAtom;
    info3.innerHTML = '毎秒生産:';
    info4.innerHTML = `${autoAtomPerSecond[autoAtomArray.indexOf(element)]} ${autoAtomPerSecondQty[autoAtomArray.indexOf(element)]}`;
    info5.innerHTML = '';
    info6.innerHTML = '';
    info7.innerHTML = '';
    info8.innerHTML = '';
}
function autoEnergyInfo(element){ //自動生産の説明出す
    let createNeedAtom = '';
    name.innerHTML  = autoEnergyName[autoEnergyArray.indexOf(element)];
    for(let i = 0;i<autoEnergycost[autoEnergyArray.indexOf(element)].length;i++){
        createNeedAtom = `${createNeedAtom} ${autoEnergycost[autoEnergyArray.indexOf(element)][i]} ${toSI(autoEnergycostQtyNow[autoEnergyArray.indexOf(element)][i])},`;
    }
    info1.innerHTML = `作成必要元素:`;
    info2.innerHTML = createNeedAtom;
    info3.innerHTML = '毎秒生産:';
    info4.innerHTML = `${autoEnergyPerSecond[autoEnergyArray.indexOf(element)]} ${autoEnergyPerSecondQty[autoEnergyArray.indexOf(element)]}`;
    info5.innerHTML = '';
    info6.innerHTML = '';
    info7.innerHTML = '';
    info8.innerHTML = '';
}
function hoverInfoON(element){
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
            hoverInfo.style.display = 'block';
            if(foundAtom.includes(element.target.id)){
                foundAtomInfo(element.target.id);
            }else{
                nofoundAtomInfo(element.target.id);
            }
            break;
        case 'addNum'://追加数説明
            hoverInfo.style.display = 'block';
            name.innerHTML = '一度に投入する数';
            info1.innerHTML = '1以上の数を指定';
            info2.innerHTML = '';
            info3.innerHTML = '';
            info4.innerHTML = '';
            info5.innerHTML = '';
            info6.innerHTML = '';
            info7.innerHTML = '';
            info8.innerHTML = '';
            break;
        case 'toEnergy':
        case 'toPNE':
        case 'toAtom':
        case 'toNeutron':
        case 'atomKsk'://開発説明
            hoverInfo.style.display = 'block';
            developerInfo(element.target.id);
            break;
        case 'addH':
        case 'addH2':
        case 'adda':
        case 'addHe':
        case 'addLi':
        case 'addBe':
        case 'addBe2':
        case 'addC': //自動生産説明
            hoverInfo.style.display = 'block';
            autoAtomInfo(element.target.id);
            break;
        case 'addE1':
        case 'addE2':
        case 'addE3':
        case 'addE4': //自動発電説明
            hoverInfo.style.display = 'block';
            autoEnergyInfo(element.target.id);
            break;
        case 'infomation'://このサイトについて
            hoverInfo.style.display = 'block';
            name.innerHTML = 'このサイトについて';
            info1.innerHTML = 'クリックで展開';
            info2.innerHTML = '';
            info3.innerHTML = '';
            info4.innerHTML = '';
            info5.innerHTML = '';
            info6.innerHTML = '';
            info7.innerHTML = '';
            info8.innerHTML = '';
            break;
        case 'closeInfomation':
            hoverInfo.style.display = 'block';
            name.innerHTML = 'このサイトについて';
            info1.innerHTML = 'クリックで閉じる';
            info2.innerHTML = '';
            info3.innerHTML = '';
            info4.innerHTML = '';
            info5.innerHTML = '';
            info6.innerHTML = '';
            info7.innerHTML = '';
            info8.innerHTML = '';
            break;
        case 'atomQty':
            hoverInfo.style.display = 'block';
            name.innerHTML = '合計元素数';
            info1.innerHTML = '';
            info2.innerHTML = '';
            info3.innerHTML = '';
            info4.innerHTML = '';
            info5.innerHTML = '';
            info6.innerHTML = '';
            info7.innerHTML = '';
            info8.innerHTML = '';
            break;
        case 'toridasi':
            hoverInfo.style.display = 'block';
            name.innerHTML = '取り出し';
            info1.innerHTML = 'オンにしている状態で開発装置をクリックすると';
            info2.innerHTML = '開発装置の中身を取り出します';
            info3.innerHTML = `現在:${toridasi}`;
            info4.innerHTML = '';
            info5.innerHTML = '';
            info6.innerHTML = '';
            info7.innerHTML = '';
            info8.innerHTML = '';
            break;
        case '':
        case '':
        case '':
        case '':
        default:
            hoverInfo.style.display = 'none';
    }
}

function toSI(Num){
    if(String(Num).length > 24){
        return `${(Num / 1000000000000000000000000).toFixed(3)}Y`;
    }else{
        if(String(Num).length > 21){
            return `${(Num / 1000000000000000000000).toFixed(3)}Z`;
        }else{
            if(String(Num).length > 18){
                return `${(Num / 1000000000000000000).toFixed(3)}E`;
            }else{
                if(String(Num).length > 15){
                    return `${(Num / 1000000000000000).toFixed(3)}P`;
                }else{
                    if(String(Num).length > 12){
                        return `${(Num / 1000000000000).toFixed(3)}T`;
                    }else{
                        if(String(Num).length > 9){
                            return `${(Num / 1000000000).toFixed(3)}G`;
                        }else{
                            if(String(Num).length > 6){
                                return `${(Num / 1000000).toFixed(3)}M`;
                            }else{
                                if(String(Num).length > 3){
                                    return `${(Num / 1000).toFixed(3)}k`;
                                }else{
                                    return `${Num}`;
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }
}
plusH.addEventListener('click',addh);

autoAtom.addEventListener('click',selectAuto);
autoEnergy.addEventListener('click',selectAuto);


back1.addEventListener('click',back);
back2.addEventListener('click',back);

radio1.addEventListener('click',ischeck); //切り
radio2.addEventListener('click',ischeck); //   替え用
radio1.dispatchEvent(new Event('click'));

H.addEventListener('click',atomselect); //元素選択
He.addEventListener('click',atomselect); //元素選択
Li.addEventListener('click',atomselect); //元素選択
Be.addEventListener('click',atomselect); //元素選択
B.addEventListener('click',atomselect); //元素選択
C.addEventListener('click',atomselect); //元素選択
N.addEventListener('click',atomselect); //元素選択
O.addEventListener('click',atomselect); //元素選択
F.addEventListener('click',atomselect); //元素選択
Ne.addEventListener('click',atomselect); //元素選択

p.addEventListener('click',pneselect);  //粒子選択
n.addEventListener('click',pneselect); //粒子選択
e.addEventListener('click',pneselect); //粒子選択

document.addEventListener('keydown',numcheck); //数字が不正でないか

plus.addEventListener('mousedown',plusminusdown);  //一度に追加する数の変更ボタンがクリック開始
plus.addEventListener('mouseup',() => {   //一度に追加する数の変更ボタンがクリック終了
    click = false;
    stopInterval();
    plusQtyplusQty = 1;
    plusQtyplusedQty = 0;
});  
minus.addEventListener('mousedown',plusminusdown);  //一度に追加する数の変更ボタンがクリック開始
minus.addEventListener('mouseup',() => {  //一度に追加する数の変更ボタンがクリック終了
    click = false; 
    stopInterval();
    plusQtyplusQty = 1;
    plusQtyplusedQty = 0;
}); 

document.addEventListener('mouseover',hoverInfoON);
document.addEventListener('mousemove',(event) => { //説明が画面の外に出ないようにする
    if(event.pageY > window.innerHeight * (3 / 4)){
        hoverInfo.style.top = `${event.pageY - (hoverInfo.offsetHeight + 10)}px`; //マウスのうえ
    }else{
        if(event.pageY > window.innerHeight / 4){
            hoverInfo.style.top = `${event.pageY - hoverInfo.offsetHeight / 2}px`;    //マウスとおなじ
        }else{
            hoverInfo.style.top = `${event.pageY + 10}px`;                        //マウスの下
            
        }
    }
    if(event.pageX > window.innerWidth / 2){
        hoverInfo.style.left = `${event.pageX - (window.innerWidth * (15 / 100) + 30)}px`; //マウスのひだり
    }else{
        hoverInfo.style.left = `${event.pageX + 30}px`;   //マウスのみぎ
    }
})
developer.oncontextmenu = function (element) { //開発の右クリックで処理
    processingDeveloper(element.target.id);
}
document.oncontextmenu = function () { //右クリックメニューを出さない
	return false;
};
document.getElementsByTagName('html')[0].oncontextmenu = function () {
    return false;
}
infomationBtn.addEventListener('click',showInfomation);
closeInfo.addEventListener('click',closeInfomation);
autoAtomInner.addEventListener('click',autoAtomClick);
autoEnergyInner.addEventListener('click',autoEnergyClick);
developer.addEventListener('click',selectDev);
toridasiHTML.addEventListener('click',()=>{
    if(toridasi == 'OFF'){
        toridasi = 'ON';
        toridasiHTML.style.backgroundColor = "#0077ff";
    }else{
        toridasi = 'OFF';
        toridasiHTML.style.backgroundColor = "rgb(134, 134, 134)";
    }
    hoverInfo.style.display = 'block';
        name.innerHTML = '取り出し';
        info1.innerHTML = 'オンにしている状態で開発装置をクリックすると';
        info2.innerHTML = '開発装置の中身を取り出します';
        info3.innerHTML = `現在:${toridasi}`;
        info4.innerHTML = '';
        info5.innerHTML = '';
        info6.innerHTML = '';
        info7.innerHTML = '';
        info8.innerHTML = '';
});

document.addEventListener('keydown',() =>{
    console.log(document.activeElement);
    if(document.activeElement.id == 'plusH'){
        plusH.blur();
    }
});
setInterval(()=>{
    HQty = HQty + ApS[0] / 100;
    HeQty = HeQty + ApS[1] / 100;
    LiQty = LiQty + ApS[2] / 100;
    BeQty = BeQty + ApS[3] / 100;
    BQty = BQty + ApS[4] / 100;
    CQty = CQty + ApS[5] / 100;
    NQty = NQty + ApS[6] / 100;
    OQty = OQty + ApS[7] / 100;
    FQty = FQty + ApS[8] / 100;
    NeQty = NeQty + ApS[9] / 100;
    energy = energy + EpS / 100;
    addAtom();
},10);