var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
var chnUnitChar = ["","十","百","千"];

export default function SectionToChinese(section){
    var strIns = '', chnStr = '';
    var unitPos = 0;
    var zero = true;
    while(section > 0){
        var v = section % 10;
        if(v === 0){
            if(!zero){
                zero = true;
                chnStr = chnNumChar[v] + chnStr;
            }
        }else{
            zero = false;
            strIns = chnNumChar[v];
            strIns += chnUnitChar[unitPos];
            chnStr = strIns + chnStr;
        }
        unitPos++;
        section = Math.floor(section / 10);
    }
    if (chnStr.indexOf('一十') > -1) {
      chnStr = chnStr.replace('一十', '十')
    }
    return chnStr;
}