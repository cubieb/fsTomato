//Basic Setup
var hsetup = new Object();
hsetup.phase1="<i>����</i>\
		��Ļ�Ƿ���·����ʱ�����ĵ�һ����Ļ��������û�\
		�����ڴ�����·��������ʹ�ø���Ļ�ϵ�����\
		��ȷ���С�һЩ Internet �����ṩ�� (ISP) ��Ҫ��\
		������ָ����Ϣ�����û��������IP ��ַ��\
		Ĭ�����ص�ַ�� DNS IP ��ַ�������Ҫ�����Դ� ISP ���\
		����Ϣ��";
hsetup.phase2="ע�⣺������Щ����֮��\
		Ӧ��ʹ��<i>��ȫ��</i>��Ļ\
		Ϊ��·���������¿���Ӷ��������Ӱ�ȫ�ԣ���\
		��ֹ·��������δ��Ȩ�ĸ��ġ����ڳ��Է��ʸ�·�������� web ��ʵ�ó����װ�򵼵������û���\
		����ʾ��������·�����Ŀ��";
hsetup.phase3="ѡ��\
		������λ�õ�ʱ������������ڵ�λ��ʹ������ʱ��\
		��ѡ��<i>�Զ�����\
		����ʱ����ʱ��</i>�Ա߿��еĸ�ѡ��ǡ�";
hsetup.phase4="MTU Ϊ\
		����䵥Ԫ��������ָ�� Internet ����������\
		������С������Ĭ�����á��Զ�����\
		��ʹ·����Ϊ Internet ����ѡ����� MTU��Ҫָ��\
		MTU ��С����ѡ���ֶ�����Ȼ�����������ֵ��Ĭ������Ϊ\
		��1400������&nbsp;Ӧ��ʹ��ֵ�� 1200 �� 1500 ��Χ֮�䡣";
hsetup.phase5="����Ŀ����ĳЩ ISP �Ǳ�Ҫ�ģ����ҿ����������ṩ��";
hsetup.phase6="·����֧�������������ͣ�";
hsetup.phase7="�Զ����� DHCP";
hsetup.phase8="����̫���ϵĵ㵽��Э�飩";
hsetup.phase9="���㵽������Э�飩";
hsetup.phase10="���Դӡ�Internet ���ӡ��Աߵ������˵���ѡ����Щ���͡� \
		�������Ϣ�Ϳ��ù���ȡ����\
		��ѡ����������͡��˴���������Ϣ��\
		һЩ˵����";		
hsetup.phase11="Internet IP ��ַ����������";
hsetup.phase12="����·������ IP ��ַ\
		���������룬Internet �ϵ��ⲿ�û�\
		������ ISP�����Կ�����Щ��Ϣ����� Internet ������Ҫ��̬ IP ��ַ����\
		ISP ��Ϊ���ṩ��̬ IP ��ַ���������롣";
hsetup.phase13="ISP ��Ϊ���ṩ���� IP ��ַ��"
hsetup.phase14="��������������";
hsetup.phase15="ISP ������Ϊ���ṩһ�� DNS IP ��ַ��";
hsetup.phase16="�û����Ϳ���";
hsetup.phase17="ͨ�� PPPoE �� PPTP ���ӵ�¼�� ISPʱ��\
		������ʹ�õġ��û�������\
		�������";
hsetup.phase18="��������";
hsetup.phase19="���Խ�·��������Ϊ\
		��ָ���Ĳ��ʱ�Σ�������ʱ�䣩֮�󣬶Ͽ� Internet\
		���ӡ���� Internet ��������\
		�������ֹ����ֻҪ�ٴη��� Internet�����������ӡ���ʹ·�����Զ�����\
		���½���\
		���ӡ����Ҫ����������ӡ����뵥����ѡ��ť�����\
		Ҫʹ Internet ����һֱ���ֻ״̬����\
		��<i>������ʱ��</i>�ֶ������롰0������������\
		�� Internet ������ֹ֮ǰ������ʱ�䣨����������";
hsetup.phase20="���ֻ�Ծѡ�� ";
hsetup.phase21="��ѡ�����ȷ��������\
		���ӵ� Internet����ʹ����վ�㴦�ڿ���״̬Ҳ��������״̬��Ҫʹ��\
		��ѡ��뵥��<i>���ֻ�Ծ</i>�Աߵĵ�ѡ��ť��Ĭ��\
		���²�������Ϊ 30 �루���仰˵��·������ÿ 30 ����һ��\
		Internet ���ӣ���";
hsetup.phase22="ע�⣺һЩ\
		�����ṩ����Ҫ�ض��� MAC ��ַ�������ӵ�\
		Internet �ϡ�Ҫ�˽������������ϸ��Ϣ���뵥����ϵͳ��ѡ���Ȼ�󵥻�\
		����������ť������ȡ���� MAC ��¡���ܵ���Ϣ��";
hsetup.phase23="LAN";
hsetup.phase24="IP ��ַ����������";
hsetup.phase25="����\
		���ڲ� LAN �Ͽ�����·���� IP ��ַ���������롣IP ��ַ��Ĭ��ֵ\
		Ϊ 192.168.1.1�����������Ĭ��ֵΪ \
		255.255.255.0��";
hsetup.phase26="DHCP";
hsetup.phase27="����\
		Ĭ�����á����á�������·������ DHCP ������ѡ����\
		�������Ѿ�����һ�� DHCP ����������������ʹ�� DHCP ��������\
		��ѡ�񡰽��á���";
hsetup.phase28="���� IP ��ַʱ��\
		Ӧ���� DHCP ��������ͷ����ֵ�� \
		��Ҫ�� 192.168.1.1��·������ IP ��ַ����ͷ��";
hsetup.phase29="��� DHCP �û���";
hsetup.phase30="����\
		Ҫʹ DHCP ������ָ�� IP ��ַ��\
		��� PC �����������ֵΪ 253 -- �����ʼ IP ��ַΪ 192.168.1.2��\
		���ֵ����Ϊ�������ֵ��";
hsetup.phase31="�ͻ���\
		����ʱ�������������û�ʹ���䵱ǰ��̬ IP ��ַ\
		���ӵ�·������ʱ�䡣����\
		�û���ʹ�øö�̬ IP ��ַ\"leased\" ��ʱ�䣨�Է���Ϊ��λ����";
hsetup.phase32="��̬ DNS 1-3 ";
hsetup.phase33="����\
		ϵͳ (DNS) �� Internet ����������վ����\
		ת��Ϊ Internet ��ַ�� URL �ķ�ʽ��ISP ��Ϊ�������ṩһ�� \
		DNS ������ IP ��ַ�����Ҫ������һ����ַ��������Щ�ֶ�֮һ���� IP \
		��ַ���˴��������������� DNS ������ IP \
		��ַ��·������������Щ��ַ�������ٵط����������е� DNS \
		��������";
hsetup.phase34="Windows Internet �������� (WINS) ����ÿ�� PC ��\
		Internet �Ľ��������ʹ�� WINS �����������ڴ˴������������ IP ��ַ�� \
		���򣬱������ֶ�Ϊ�հס�";
hsetup.phase35="�������\
		ֵ���������������á��������������á�����\
		��ȡ�����ġ�\
		��ȡ��δ����ĸ��ġ�ͨ�����ӵ� Internet ����\
		������Щ���á� ";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="·�����ṩ��̬����ϵͳ (DDNS) ���ܡ�DDNS ������̬ Internet IP ��ַ\
		ָ��һ���̶���������������������·���������й����Լ���\
		��վ��FTP ������������������ʱ���ù��ܷǳ����á�ʹ�øù���֮ǰ��\
		��Ҫ�� <i>www.dyndns.org</i>��һ�� DDNS �����ṩ�̣���\
		���� DDNS ����";
helpddns.phase2="DDNS ����";
helpddns.phase3="Ҫ���� DDNS �����뱣��Ĭ�����á����á���Ҫ���� DDNS \
		��������ѭ����ָ����";
helpddns.phase4="�� <i>www.dyndns.org</i> ������ DDNS ���񣬲�д��\
		�����û�����<i></i>�����<i></i>��������Ϣ��";
helpddns.phase5="�� <i>DDNS</i> ��Ļ�ϣ���ѡ�����á���";
helpddns.phase6="��д<i>�û���</i>��<i>����</i>��<i>������</i>�ֶΡ�";
helpddns.phase7="�������������á���ť�����������ĸ��ġ�������ȡ�����ġ���ť��\
		ȡ��δ����ĸ��ġ�";
helpddns.phase8="�˴���ʾ·������ǰ�� Internet IP ��ַ��";
helpddns.phase9="�˴���ʾ DDNS �������ӵ�״̬��";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="MAC ��¡";
helpmac.phase2="·������ MAC ��ַ�� 12 �����ֵĴ��룬�ô���ָ����Ӳ����ΨһƬ�Σ�\
		�Ա���б�ʶ��һЩ ISP Ҫ��ע������/�������� MAC \
		��ַ��������/�������ڰ�װ�ڼ����ӵ����»�\
		DSL ���ƽ������������� ISP Ҫ����� MAC ��ַ\
		ע�ᣬ���� PC ����ϵͳ��ָ��������������\
		�� MAC ��ַ��";
helpmac.phase3="���� Windows 98 �� Millennium��";
helpmac.phase4="1.  ��������ʼ����ť����ѡ�����С���";
helpmac.phase5="2.  ���ṩ���ֶ������롰winipcfg����Ȼ�󰴡�ȷ��������";
helpmac.phase6="3.  ѡ����ʹ�õ���̫����������";
helpmac.phase7="4.  ������������Ϣ����";
helpmac.phase8="5.  д���������� MAC ��ַ��";
helpmac.phase9="1.  ��������ʼ����ť����ѡ�����С���";
helpmac.phase10="2.  ���ṩ���ֶ������롰cmd����Ȼ�󰴡�ȷ��������";
helpmac.phase11="3.  ��������ʾ���ϣ����С�ipconfig/all�������鿴��������������ַ��";
helpmac.phase12="4.  д���������� MAC ��ַ��";
helpmac.phase13="Ҫ�������������� MAC ��ַ��¡��·�����ϣ����Ҳ�������\
		ISP ������ע��� MAC ��ַ������ѭ����ָ����";
helpmac.phase14="���� Windows 2000 �� XP��";
helpmac.phase15="1.  ѡ�����á���";
helpmac.phase16="2.  �� <i>MAC ��ַ</i>�ֶ��������������� MAC ��ַ��";
helpmac.phase17="3.  �������������á���ť��";
helpmac.phase18="Ҫ���� MAC ��ַ��¡���뱣��Ĭ�����á����á���";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="·��";
hrouting.phase2="��<i>·��</i>��Ļ�ϣ���������·��ģʽ��·���������á� \
		 ���ڴ�����û�������ʹ������ģʽ��";
hrouting.phase3="ѡ����ȷ�Ĺ���ģʽ�����·�����й������� Internet �����ӣ��򱣳�Ĭ������\
		 �����ء������ڴ�����û�������ʹ������ģʽ�������\
		 �����ϴ��ڸ�·����������·��������ѡ��·��������";
hrouting.phase4="��̬·�� (RIP)";
hrouting.phase5="ע�⣺�ù���������ģʽ�²����á�";
hrouting.phase6="��̬·��ʹ·�����ܹ�������粼���е��������Ľ����Զ�������\
		 ����������·��������·�ɱ���·����\
		 ����Դ��Ŀ��֮�����С����ȷ��\
		 �����·�ɡ� ";
hrouting.phase7="Ҫ�� WAN �����ö�̬·�ɹ��ܣ���ѡ��WAN���� \
		 Ҫ�� LAN �����߶����øù��ܣ���ѡ��LAN �����ߡ��� \
		 Ҫ�� WAN �� LAN ͬʱ���øù��ܣ���ѡ��\
		 �����ߡ���Ҫ���������ݴ������ö�̬·�ɹ��ܣ��뱣��\
		 Ĭ�����á����á��� ";
hrouting.phase8="��̬·�ɡ�Ŀ�� IP ��ַ���������롢���غͽӿ�";
hrouting.phase9="Ҫ��·��������һ������֮�����þ�̬·�ɣ�\
		 ���<i>��̬·��</i>�����б���ѡ��һ����š�����̬·��\
		 ��������Ϣ���봫�䵽�ض������������\
		 Ԥ��ȷ����·������";
hrouting.phase10="�����������ݣ�";
hrouting.phase11="Ŀ�� IP ��ַ- \
		  Ŀ�� IP ��ַ��Ҫָ����̬·�ɵ�����������ĵ�ַ��";
hrouting.phase12="�������� - \
		  ��������ȷ�� IP ��ַ���ĸ����������粿�֣�\
		  �ĸ��������������֡� ";
hrouting.phase13="���� - \
		  ��������·���������������֮�������ϵ�������豸�� IP ��ַ��";
hrouting.phase14="����Ŀ�� IP ��ַ���ڵ�λ�ã�\
		  ��<i>�ӿ�</i>�����˵��У�ѡ��LAN �����ߡ���WAN����";
hrouting.phase15="Ҫ���������ĸ��ģ��뵥����Ӧ�á���ť��Ҫȡ��δ����ĸ��ģ��뵥��\
		  ��ȡ������ť��";
hrouting.phase16="����������̬·�ɣ����ظ����� 1 �� 4��";
hrouting.phase17="ɾ������Ŀ";
hrouting.phase18="Ҫɾ����̬·����Ŀ����ִ�����²�����";
hrouting.phase19="��<i>��̬·��</i>�����б��У�ѡ��̬·�ɵ���Ŀ��š�";
hrouting.phase20="������ɾ������Ŀ����ť��";
hrouting.phase21="Ҫ����ɾ��������뵥����Ӧ�á���ť��Ҫȡ��ɾ�����뵥��\
		  ��ȡ������ť�� ";
hrouting.phase22="��ʾ·�ɱ�";
hrouting.phase23="����\
		  ����ʾ·�ɱ�����ť�ɲ鿴����ʹ�õ�������Ч·����Ŀ������ʾÿ����Ŀ��Ŀ�� IP ��ַ���������롢\
		  ���غͽӿڡ�������ˢ�¡���ť��ˢ����ʾ�����ݡ�����\
		  ���رա���ť�ɷ��ص�<i>·��</i>��Ļ��";
hrouting.phase24="Ŀ�� IP ��ַ - \
		  Ŀ�� IP ��ַ��ָ����̬·�ɵ�����������ĵ�ַ�� ";
hrouting.phase25="�������� - \
		  ��������ȷ�� IP ��ַ���ĸ����������粿�֣��ĸ��������������֡�";
hrouting.phase26="���� - ��������·���������������֮�������ϵ�������豸�� IP ��ַ��";
hrouting.phase27="�ӿ� - �ýӿڽ�������Ŀ�� IP ��ַ��\
		  ��LAN �����ߡ����ڲ�����������������磩�ĵ�ַ����WAN����Internet���ĵ�ַ������\
		  �����͡��ĵ�ַ��һ���������磬���� PC ����Ϊ������ĳЩ����������������磩�� ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="��ֹ WAN ����";
hfirewall.phase2="ͨ��������ֹ WAN �����ܣ����Է�ֹ����\
		 ������ Internet �û�ִ�� \"ping\" �������⡣��ֹ WAN ����\
		 ����ͨ����������˿�Ҳ���Լ�ǿ����İ�ȫ�ԡ� \
		 ʹ����������ֹ WAN ����Ĺ��ܿ���ʹ\
		 �ⲿ�û����Լ��ķ�ʽ���������������ϼ��ѡ�Ĭ������£�\
		 �ù��ܴ�������״̬��ѡ�񡰽��á��ɽ��øù��ܡ�";
hfirewall.right="���û���� SPI ����ǽ��";

//VPN
var helpvpn = new Object();
helpvpn.phase1="VPN ͨ��";
helpvpn.phase2="����ר���� (VPN) ͨ�������빤����ص����硣����\
		VPN ������·����֧�� IPSec ͨ���� PPTP ͨ����";
helpvpn.phase3="<b>IPSec</b> - Internet Э�鰲ȫ (IPSec) ��һ<b></b>������\
		�� IP ����ִ�а�ȫ���ݰ�������Э�顣Ҫ���� IPSec ����\
		ͨ��·������Ĭ�������Ӧ���� IPSec ͨ����Ҫ����\
		IPSec ͨ������ȡ��ѡ�� <i>IPSec</i> �ԱߵĿ�";
helpvpn.phase4="<b>PPTP </b>- �㵽������Э��������ʹ VPN \
		�� Windows NT 4.0 �� 2000 Server ���лỰ�ķ�����Ҫ���� PPTP ����\
		ͨ��·������Ĭ�������Ӧ���� PPTP ͨ����Ҫ����\
		PPTP ͨ������ȡ��ѡ�� <i>PPTP</i> �ԱߵĿ�";

helpvpn.right="����ѡ������ PPTP��IPSec ͨ���� L2TP������������\
		�豸ͨ�� VPN ����ͨ�š�";
//Internet Access
var hfilter = new Object();
hfilter.phase1="ɸѡ��";
hfilter.phase2="ͨ��<i>ɸѡ��</i>��Ļ������ֹ������ָ�����͵� Internet \
		�÷���ͨ��ʹ������˿ںţ����������ض� PC �� Internet ���ʲ��Ժ�\
		ɸѡ����";
hfilter.phase3="�ù������������ض� PC ��ඨ��ʮ����ͬ�� Internet ���ʲ��ԣ�\
		ʹ���� IP ��ַ�� MAC ��ַ���б�ʶ������\
		ÿ������ָ���� PC����ָ�����ں�ʱ�Ρ�";
hfilter.phase4="Ҫ������༭���ԣ�����ѭ����ָ����";
hfilter.phase5="�������˵���ѡ����Ա�� \(1-10\)��";
hfilter.phase6="��<i>���������ļ�����</i>�ֶ����������ơ�";
hfilter.phase7="�������༭ PC �б�����ť��";
hfilter.phase8="������Ӧ�á���ť�ɱ��������ĸ��ġ�������ȡ������ť\
		��ȡ��δ����ĸ��ġ��������رա���ť�ɷ��ص�\
		<i>ɸѡ��</i>��Ļ��";
hfilter.phase9="���Ҫ��ָ�����ں�ʱ��������ֹ�г��� PC ���� Internet ���ʣ�\
		�򱣳�Ĭ�����á���ֹ�г��� PC ���� Internet \
		���ʡ������Ҫ��ָ�����ں�ʱ����ʹ�г��� PC ���Է��� Internet��\
		�򵥻�<i>ʹ�г��� PC ���Խ���\
		Internet ����</i>�Աߵĵ�ѡ��ť��";
hfilter.phase10="�� <i>PC �б�</i>��Ļ�ϣ�ͨ�� IP ��ַ�� MAC ��ַָ�� PC���� <i>IP</i> �ֶ�������\
		��Ӧ�� IP ��ַ�����Ҫɸѡ\
		IP ��ַ�ķ�Χ���������Ӧ�� <i>IP ��Χ</i>�ֶΡ� \
		�� <i>MAC</i> �ֶ���������Ӧ�� MAC ��ַ��";
hfilter.phase11="���ý�ɸѡ���ʵ�ʱ�䡣ѡ��24 Сʱ����<b></b>��ѡ��<i>��</i>�ԱߵĿ�\
		����ʹ����������ָ���ض�ʱ�Ρ� ";
hfilter.phase12="���ý�ɸѡ���ʵ����ڡ�ѡ��ÿ�족��һ�����ʵ��ļ��졣 ";
hfilter.phase13="���������ӵ����ԡ���ť�ɱ��������ĸ��Ĳ����伤�";
hfilter.phase14="Ҫ������༭�������ԣ����ظ����� 1 �� 9��";
hfilter.phase15="Ҫɾ�� Internet ���ʲ��ԣ���ѡ����Ա�ţ�Ȼ�󵥻���ɾ������ť��";
hfilter.phase16="Ҫ�鿴���в��Ե�ժҪ��Ϣ���뵥����ժҪ����ť��</i>\
		Internet ����ժҪ</i>��Ļ����ʾÿ�����Ա�š��������ơ�\
		���ں�ÿ���ʱ�䡣Ҫɾ�����ԣ��뵥�����Ȼ��\
		������ɾ������ť���������رա���ť�ɷ��ص�\
		<i>ɸѡ��</i>��Ļ��";
hfilter.phase17="ɸѡ Internet �˿ڷ�Χ";
hfilter.phase18="Ҫͨ������˿ں�ɸѡ PC����ѡ�����ߡ�����TCP����UDP����\
		�������ȡ����Ҫɸѡ��Э�顣Ȼ���ڶ˿ں��ֶ���<b></b>����Ҫ\
		ɸѡ�Ķ˿ںš����ӵ�·������ PC \
		�޷��ٷ��ʴ˴��г����κζ˿ںš�Ҫ\
		����ɸѡ������ѡ�񡰽��á���";

//share of help string
var hshare = new Object();
hshare.phase1="ѡ������ֵ���������������á��ɱ����������á�������ȡ�����ġ�\
		��ť��ȡ��δ����ĸ��ġ�";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="DMZ �йܹ��ܿ������������;�ķ����� Internet ��Ϸ����Ƶ���飩\
		��һ�������û��� Internet �Ϲ����� \
		DMZ �й�ͬʱ��һ�� PC ת�����ж˿ڡ��˿�ת������\
		��Ϊ��ȫ����Ϊ�ù���ֻ����Ҫ�򿪵Ķ˿ڣ�\
		�� DMZ �йܽ���һ������������ж˿ڣ�\
		�Ӷ����ü������ Internet �Ϲ����� ";    		
helpdmz.phase2="����ת����˿ڵ��κ� PC ��������� DHCP �ͻ��˹��ܣ�\
		����Ӧ��ָ��һ���µľ�̬ IP ��ַ����Ϊ�� IP ��ַ\
		��ʹ�� DHCP ����ʱ���ܷ������ġ�";
/***To expose one PC, select enable.***/
helpdmz.phase3="Ҫ����һ�� PC����ѡ�� ";
helpdmz.phase4="�� <i>DMZ ���� IP ��ַ</i>�ֶ������������� IP ��ַ��";



//help number string
var hnum = new Object();
hnum.one="1."
hnum.two="2."
hnum.three="3."
hnum.four="4."
hnum.five="5."
hnum.six="5."
hnum.seven="6."
hnum.eight="7."
hnum.night="8."
 