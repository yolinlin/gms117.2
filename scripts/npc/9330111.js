var status = -1;
var jiage = 100;
var exchangeItem = 5220040;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
        cm.sendSimple("����ת�����һ�NPC����Ŀǰӵ�е��: "+ cm.getPlayer().getCSPoints(2) + "#b\r\n#L0#�õ���һ�ת����#l");
    } else if (status == 1) {
	if (cm.getPlayer().getCSPoints(2) < jiage) {
	    cm.sendNext("����һ����������̫���˰�.");
	    cm.dispose();
	} else {
	    cm.sendGetNumber("ÿ�� #i" + exchangeItem + "##t" + exchangeItem + "# ��Ҫ"+ jiage +"���~! \n ��Ŀǰ�ܹ��е��: "+ cm.getPlayer().getCSPoints(2) + ",���Զһ�: " + cm.getPlayer().getCSPoints(2)/jiage +"��.", 1,1,99999);
	}
    } else if (status == 2) { 
	if (selection >= 1 && selection <= cm.getPlayer().getCSPoints(2) / jiage) {
	    if (!cm.canHold(5220040, selection)) {
		cm.sendOk("��ı����Ѿ����ˣ�װ������.");
	    } else {
		cm.gainItem(5220040, selection);
		cm.getPlayer().modifyCSPoints(2, -(selection * jiage));
		cm.sendOk("�һ��ɹ�!");
	    }
	}
        cm.dispose();
    }
}