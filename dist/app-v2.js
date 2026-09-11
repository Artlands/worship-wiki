const starterSongs = [
  {
    id: "heavens-praise",
    title: "诸天颂赞",
    author: "示例诗歌",
    tags: "赞美 · 创造",
    updatedAt: 5,
    lyrics: "诸天述说祢手中的荣美\n晨光宣告祢信实不改变\n万有同声，颂赞祢的圣名\n我的心也要永远歌唱\n\n荣耀归祢，慈爱的君王\n盼望归祢，黑夜的真光\n一生一世，我要寻求祢\n从今直到永远"
  },
  {
    id: "grace-like-river",
    title: "恩典如河",
    author: "示例诗歌",
    tags: "恩典 · 救赎",
    updatedAt: 4,
    lyrics: "恩典如河流进干渴心田\n祢的怜悯每天都是新鲜\n软弱时候，祢扶持我向前\n在祢怀中我得平安\n\n我要记念祢奇妙作为\n一生传扬祢信实恩惠\n无论高山，无论幽谷\n祢的慈爱永不止息"
  },
  {
    id: "morning-psalm",
    title: "清晨的诗篇",
    author: "示例诗歌",
    tags: "赞美 · 感恩",
    updatedAt: 3,
    lyrics: "清晨我要仰望祢\n等候祢温柔声音\n愿祢话语照亮今天\n领我走生命道路"
  },
  {
    id: "eternal-rock",
    title: "永恒磐石",
    author: "示例诗歌",
    tags: "信仰 · 基督",
    updatedAt: 2,
    lyrics: "祢是我永恒磐石\n风浪中坚固保障\n我的盼望安放于祢\n祢的应许永不动摇"
  },
  {
    id: "quiet-heart",
    title: "我心安静",
    author: "示例诗歌",
    tags: "敬拜 · 奉献",
    updatedAt: 1,
    lyrics: "我心安静在祢面前\n放下忧虑单单仰望\n愿祢旨意成就在我\n愿我一生为祢发光"
  }
];

// Simplified/Traditional character table, generated from the OS ICU
// transliteration data (Hans-Hant / Hant-Hans). Character-level only: a few
// simplified forms map to several traditional ones, and the devotional variant
// is chosen for those (赞 to 讚, 里 to 裡). The sacred pronouns 祢 祂 衪 are
// never converted, along with 沉, which ICU sends to the surname 沈: all of
// these are written the same way in both scripts.
const HANZI = {
  s2t: ["万与丑专业丛东丝丢两严丧个丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅仆从仑仓仪们价众优会伛伞伟传伣伤伥伦伧伪伫体佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俫俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冯冲决况冻净凄凉减凑凛几凤凫凭凯击凿刍刘则刚创删别刬刭刹刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勚匀匦匮区医华协单卖占卢卤卧卫却厂厅历厉压厌厍厐厕厘厢厣厦厨厩厮县叁参叆叇双发变叙叠叶号叹叽后吓吕吗吣吨听启吴呐呒呓呕呖呗员呙呛呜咏咙咛咝咤响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唤啧啬啭啮啰啴啸喂喷喽喾嗫嗳嘘嘤嘱噜嚣团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垩垫垭垯垱垲垴埘埙埚埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姹娄娅娆娇娈娱娲娴婳婴婵婶媪媭嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尝尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵝巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂干并广庄庆庐庑库应庙庞废庼廪开异弃弑张弥弪弯弹强归当录彟彦彷彻征径徕忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恒恳恶恸恹恺恻恼恽悦悫悬悭悮悯惊惧惨惩惫惬惭惮惯愠愤愦愿慑慭懑懒懔戆戋戏戗战戬戯户扑执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦挽捝捞损捡换捣据掳掴掷掸掺掼揽揾揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛敩数斋斓斗斩断无旧时旷旸昙昵昼昽显晋晒晓晔晕晖暂暧术朴机杀杂权杆杠条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桠桡桢档桤桥桦桧桨桩梦梼梾梿检棁棂棱椁椟椠椤椭楼榄榅榇榈榉槚槛槟槠横樯樱橥橱橹橼檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉汤汹沟没沣沤沥沦沧沨沩沪泄泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温湾湿溁溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漓漤潆潇潋潍潜潴澛澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煴爱爷牍牦牵牺犊状犷犸犹狈狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珐珑珰珲琎琏琐琼瑶瑷璎瓒瓮瓯电画畅畴疖疗疟疠疡疬疭疮疯疱疴痈痉痒痖痨痪痫瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑睾瞆瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硕硖硗硙硚确硷碍碛碜碱礴礼祃祎祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窎窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹筼签简箓箦箧箨箩箪箫篑篓篮篯篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肮肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腽腾膑膻臜舆舍舣舰舱舻艰艳艺节芈芗芜芦苁苇苈苋苌苍苎苏苧苹范茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔂蔷蔹蔺蔼蕰蕲蕴薮藓蘖虏虑虚虫虬虮虱虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯訚詟誉誊讠计订讣认讥讦讧讨让讪讫讬训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郏郐郑郓郦郧郸酂酝酦酱酽酾酿采释里鉴銮錾钅钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钜钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铇铈铉铊铋铌铍铎铏铐铑铒铓铔铕铖铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铩铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗锘错锚锛锜锝锞锟锠锡锢锣锤锥锦锧锨锩锪锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镄镅镆镇镈镉镊镋镌镍镎镏镐镑镒镓镔镕镖镗镘镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镵镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霡霭靓静靥鞑鞒鞯韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饣饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓鬶魇魉鱼鱽鱾鱿鲀鲁鲂鲃鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳚鳛鳜鳝鳞鳟鳠鳡鳢鳣鳤鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹙鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹮鹯鹰鹱鹲鹳鹴鹾麦麸麹黄黉黡黩黪黾鼋鼍鼗鼹齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟鿎鿏鿔鿭",
    "萬與醜專業叢東絲丟兩嚴喪個豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅僕從侖倉儀們價眾優會傴傘偉傳俔傷倀倫傖偽佇體傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷倈儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農馮衝決況凍淨淒涼減湊凜幾鳳鳧憑凱擊鑿芻劉則剛創刪別剗剄剎劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勩勻匭匱區醫華協單賣佔盧鹵臥衛卻廠廳歷厲壓厭厙龎廁釐廂厴廈廚廄廝縣叄參靉靆雙發變敘疊葉號嘆嘰後嚇呂嗎唚噸聽啓吳吶嘸囈嘔嚦唄員咼嗆嗚詠嚨嚀噝吒響啞噠嘵嗶噦嘩噲嚌噥喲嘜嗊嘮啢嗩喚嘖嗇囀嚙囉嘽嘯餵噴嘍嚳囁噯噓嚶囑嚕囂團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壠壚壘墾堊墊埡墶壋塏堖塒塤堝垵塹墮壪牆壯聲殼壺壼處備復夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗媯姍奼婁婭嬈嬌孌娛媧嫻嫿嬰嬋嬸媼嬃嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵嘗堯尷屍盡層屓屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺崬巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔嶁巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪乾並廣莊慶廬廡庫應廟龐廢廎廩開異棄弒張彌弳彎彈強歸當錄彠彥徬徹徵徑徠憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀恆懇惡慟懨愷惻惱惲悅愨懸慳悞憫驚懼慘懲憊愜慚憚慣慍憤憒願懾憖懣懶懍戇戔戲戧戰戩戱戶撲執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏輓挩撈損撿換搗據擄摑擲撣摻摜攬搵撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂斆數齋斕鬥斬斷無舊時曠暘曇暱晝曨顯晉曬曉曄暈暉暫曖術樸機殺雜權桿槓條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒椏橈楨檔榿橋樺檜槳樁夢檮棶槤檢梲櫺稜槨櫝槧欏橢樓欖榲櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳匯漢湯洶溝沒灃漚瀝淪滄渢溈滬洩濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗湧濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫灣濕濚潰濺漵漊潷滾滯灧灄滿瀅濾濫灤濱灘澦灕灠瀠瀟瀲濰潛瀦瀂瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾熅愛爺牘氂牽犧犢狀獷獁猶狽獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽琺瓏璫琿璡璉瑣瓊瑤璦瓔瓚甕甌電畫暢疇癤療瘧癘瘍癧瘲瘡瘋皰痾癰痙癢瘂癆瘓癇癉瘮瘞瘻癟癱癮癭癩癬癲皚皺皸盞鹽監蓋盜盤瞘眥矓著睜睞瞼睪瞶瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜碩硤磽磑礄確礆礙磧磣鹼礡禮禡禕禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窵窯竄窩窺竇窶竪競篤筍筆筧箋籠籩築篳篩簹箏籌篔簽簡籙簀篋籜籮簞簫簣簍籃籛籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糹糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺紲紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏縧繼綈績緒綾緓續綺緋綽緔緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒繮繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚骯腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩膃騰臏羶臢輿捨艤艦艙艫艱艷藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇薴蘋範莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞萊蓮蒔萵薟獲蕕瑩鶯蒓蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀虆薔蘞藺藹薀蘄蘊藪蘚櫱虜慮虛蟲虯蟣蝨雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖裊褘襪襲襏裝襠褌褳襝褲襇褸襤襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶誾讋譽謄訁計訂訃認譏訐訌討讓訕訖託訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗謚謙謐謹謾謫謭謬譚譖譙讕譜譎讞譴譫讖豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭賫贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贋讚贇贈贍贏贛赬趙趕趨趲躉躍蹌躒踐躂蹺蹕躚躋踴躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰郟鄶鄭鄆酈鄖鄲酇醖醱醬釅釃釀採釋裡鑒鑾鏨釒釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鉅鈍鈔鐘鈉鋇鋼鈑鈐鑰欽鈞鎢鈎鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷鉢鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鉋鈰鉉鉈鉍鈮鈹鐸鉶銬銠鉺鋩錏銪鋮鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鎩鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐧銳銻鋃鋟鋦錒錆鍺鍩錯錨錛錡鍀錁錕錩錫錮鑼錘錐錦鑕鍁錈鍃錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鐨鎇鏌鎮鎛鎘鑷鎲鐫鎳鎿鎦鎬鎊鎰鎵鑌鎔鏢鏜鏝鏍鏰鏞鏡鏑鏃鏇鏐鐔鐝鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑱鑲長門閂閃閆閈閉問闖閏闈閒閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽霢靄靚靜靨韃鞽韉韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飈飛饗饜飠飣飢飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢鬹魘魎魚魛魢魷魨魯魴䰾魺鮁鮃鮎鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鮝鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鯰鯛鯨鰺鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鰐鰍鰒鰉鰁鱂鯿鰠鰲鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅䲁鰼鱖鱔鱗鱒鱯鱤鱧鱣䲘鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鷽鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鵾鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶖鷀鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺䴉鸇鷹鸌鸏鸛鸘鹺麥麩麴黃黌黶黷黲黽黿鼉鞀鼴齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜䃮䥑鎶鉨"],
  t2s: ["丟並乾亂亙亞佇佈佔併來侖侶侷俁係俔俠俬俱倀倆倈倉個們倖倣倫偉側偵偽傑傖傘備傢傭傯傳傴債傷傾僂僅僇僉僑僕僞僥僨僱價儀儂億儈儉儐儔儕儘償優儲儷儸儺儻儼兇兌兒兗內兩冊冪凈凍凜凱別刪剄則剋剎剗剛剝剮剴創剷劃劇劉劊劌劍劏劑劚勁動勗務勛勝勞勢勩勱勳勵勸勻匭匯匱區協卹卻厙厠厭厲厴參叄叢吒吢吳吶呂咷咼員唄唚唸問啓啞啟啢喎喚喨喪喫喬單喲嗆嗇嗊嗎嗚嗩嗶嘆嘍嘔嘖嘗嘜嘩嘮嘯嘰嘵嘸嘽噓噚噝噠噥噦噯噲噴噸噹嚀嚇嚌嚐嚕嚙嚥嚦嚨嚮嚲嚳嚴嚶囀囁囂囅囈囉囍囑囓囪圇國圍園圓圖團垵埡埰執堅堊堖堝堯報場塊塋塏塒塗塚塢塤塵塹墊墜墮墳墶墻墾壇壋壎壓壘壙壚壜壞壟壠壢壩壪壯壺壼壽夠夢夥夾奐奧奩奪奬奮奼妝姊姍姦姪娛婁婦婭媧媯媼媽嫋嫗嫵嫻嫿嬀嬃嬈嬋嬌嬙嬝嬡嬤嬪嬰嬸孃孌孫學孿宮寢實寧審寫寬寵寶尅將專尋對導尷屆屍屓屜屢層屨屬岡峴島峽崍崑崗崙崢崬嵐嶁嶄嶇嶔嶗嶠嶢嶧嶨嶮嶴嶸嶺嶼巋巒巔巖巰帥師帳帶幀幃幗幘幟幣幫幬幹幾庫廁廂廄廈廎廚廝廟廠廡廢廣廩廬廳廻弒弔弳張強彆彈彌彎彙彞彠彥彿後徑從徠復徬徵徹恆恥悅悞悳悵悶悽惡惱惲惻愛愜愨愴愷愾慄慇態慍慘慚慟慣慤慪慫慮慳慶慼慾憂憊憐憑憒憖憚憤憫憮憲憶懃懇應懌懍懞懟懣懨懮懲懶懷懸懺懼懾戀戇戔戧戩戰戱戲戶拋挩挾捨捫捲掃掄掗掙掛採揀揚換揮搆損搖搗搥搧搨搵搶搾摀摑摜摟摯摳摶摺摻撈撏撐撓撚撝撟撢撣撥撫撲撳撻撾撿擁擄擇擊擋擓擔據擠擣擬擯擰擱擲擴擷擺擻擼擾攄攆攏攔攖攙攛攜攝攢攣攤攪攬敗敘敵數斂斃斆斕斬斷於昇時晉晝暈暉暘暢暫暱曄曆曇曉曏曖曠曨曬書會朧東枒柵桿梔梘條梟梲棄棖棗棟棡棧棲棶椏楊楓楨業極榖榪榮榲榿構槍槓槖槤槧槨槳樁樂樅樑樓標樞樣樸樹樺橈橋機橢橫檁檉檔檜檝檟檢檣檮檯檳檸檻櫃櫓櫚櫛櫝櫞櫟櫥櫧櫨櫪櫫櫬櫱櫳櫸櫺櫻欄權欏欒欖欞欵欽歎歐歛歟歡歲歷歸歿殘殞殤殨殫殮殯殰殲殺殼毀毆毬毿氂氈氌氣氫氬氳氹氾汎汙決沍沒沖況洩洶浹涇涼淒淚淥淨淪淵淶淺渙減渢渦測渾湊湞湧湯溈準溝溫溮溳溼滄滅滌滎滬滯滲滷滸滻滾滿漁漊漚漢漣漬漲漵漸漿潁潑潔潙潛潤潯潰潷潿澀澆澇澐澗澠澤澦澩澮澱濁濃濕濘濚濜濟濤濫濬濰濱濺濼濾瀂瀅瀆瀇瀉瀋瀏瀕瀘瀝瀟瀠瀦瀧瀨瀰瀲瀾灃灄灑灕灘灝灠灣灤灧災為烏烴無煉煒煙煢煥煩煬煱熅熒熗熱熲熾燁燄燈燉燐燒燙燜營燦燬燭燴燶燻燼燾燿爍爐爛爭爲爺爾牀牆牋牘牽犖犢犧狀狹狽猙猶猻獁獃獄獅獎獨獪獫獮獰獱獲獵獷獸獺獻獼玀現琺琿瑋瑒瑣瑤瑩瑪瑯瑲璉璡璣璦璫環璵璽瓊瓏瓔瓚甌甕產産畝畢畫異當疇疊痀痙痠痾瘂瘋瘍瘓瘞瘡瘧瘮瘲瘺瘻療癆癇癉癒癘癟癡癢癤癥癧癩癬癭癮癰癱癲發皁皚皰皸皺盃盜盞盡監盤盧盪眞眥眾睏睜睞睪瞇瞘瞜瞞瞭瞶瞼矓矚矯砲硏硜硤硨硯碩碭碸確碼磑磚磣磧磯磽磾礄礆礎礙礡礦礪礫礬礮礱祕祿禍禎禕禡禦禪禮禰禱禿秈稅稈稏稜稟種稱穀穇穌積穎穠穡穢穩穫穭窩窪窮窯窵窶窺竄竅竇竈竊竪競筆筍筧筴箇箋箎箏箝節範築篋篔篤篩篳簀簆簍簞簡簣簫簷簹簽簾籃籌籐籙籛籜籟籠籤籩籪籬籮籲粧粵糝糞糧糰糲糴糶糹糾紀紂約紅紆紇紈紉紋納紐紓純紕紖紗紘紙級紛紜紝紡紬紮細紱紲紳紵紹紺紼紿絀終絃組絅絆絎結絕絛絝絞絡絢給絨絰統絲絳絶絹綁綃綆綈綉綌綏綐綑經綜綞綠綢綣綫綬維綯綰綱網綳綴綵綸綹綺綻綽綾綿緄緇緊緋緑緒緓緔緗緘緙線緝緞締緡緣緦編緩緬緯緱緲練緶緹緻縈縉縊縋縐縑縕縗縛縝縞縟縣縧縫縭縮縱縲縳縴縵縶縷縹總績繃繅繆繒織繕繚繞繡繢繩繪繫繭繮繯繰繳繸繹繼繽繾繿纈纊續纍纏纓纔纖纘纜缽罃罈罌罎罣罰罵罷羅羆羈羋羣羥羨義羶習翫翬翹翺翽耬耮聖聞聯聰聲聳聵聶職聹聽聾肅脅脈脛脣脫脹腎腖腡腦腫腳腸膃膕膚膞膠膩膽膾膿臉臍臏臘臚臟臠臢臥臨臺與興舉舊舖艙艤艦艫艱艷芻苎苧茲荊荳莊莖莢莧菓華菸萇萊萬萵葉葒著葤葦葯葷蒐蒓蒔蒞蒼蓀蓆蓋蓮蓯蓽蔔蔞蔣蔥蔦蔭蔴蕁蕆蕎蕒蕓蕕蕘蕢蕩蕪蕭蕷薀薈薊薌薑薔薘薟薦薩薳薴薺藉藍藎藝藥藪藭藴藶藷藹藺蘀蘄蘆蘇蘊蘋蘚蘞蘢蘭蘺蘿虆處虛虜號虧虯蛺蛻蜆蝕蝟蝦蝨蝸螄螞螢螮螻螿蟄蟈蟎蟣蟬蟯蟲蟶蟻蠅蠆蠍蠐蠑蠔蠟蠣蠧蠨蠱蠶蠻衆衊術衚衛衝袞袴裊裏補裝裡製複褌褘褲褳褸褻襇襏襖襝襠襤襪襬襯襲襴覈見覎規覓視覘覡覥覦親覬覯覲覷覺覽覿觀觴觶觸訁訂訃計訊訌討訐訒訓訕訖託記訛訝訟訢訣訥訩訪設許訴訶診註証詁詆詎詐詒詔評詖詗詘詛詞詠詡詢詣試詩詫詬詭詮詰話該詳詵詼詿誄誅誆誇誌認誑誒誕誘誚語誠誡誣誤誥誦誨說説誰課誶誹誼誾調諂諄談諉請諍諏諑諒論諗諛諜諝諞諡諢諤諦諧諫諭諮諱諳諶諷諸諺諼諾謀謁謂謄謅謊謎謐謔謖謗謙謚講謝謠謡謨謫謬謭謳謹謾譁譅證譎譏譖識譙譚譜譟譫譯議譴護譸譽譾讀變讋讌讎讒讓讕讖讚讜讞豈豎豐豔豬豶貍貓貙貝貞貟負財貢貧貨販貪貫責貯貰貲貳貴貶買貸貺費貼貽貿賀賁賂賃賄賅資賈賊賑賒賓賕賙賚賜賞賠賡賢賣賤賦賧質賫賬賭賰賴賵賸賺賻購賽賾贄贅贇贈贊贋贍贏贐贓贔贖贗贛贜赬趕趙趨趲跡跤跼踐踡踰踴蹌蹕蹟蹣蹤蹧蹺躂躉躊躋躍躑躒躓躕躚躡躥躦躪軀車軋軌軍軑軒軔軛軟軤軫軲軸軹軺軻軼軾較輅輇輈載輊輒輓輔輕輛輜輝輞輟輥輦輩輪輬輯輳輸輻輾輿轀轂轄轅轆轉轍轎轔轝轟轡轢轤辦辭辮辯農迴逕這連週進遊運過達違遙遜遞遠適遯遲遷選遺遼邁還邇邊邏邐郟郵鄆鄉鄒鄔鄖鄧鄭鄰鄲鄴鄶鄺酇酈醃醖醜醞醫醬醱醼釀釁釃釅釋釐釒釓釔釕釗釘釙針釣釤釦釧釩釵釷釹釺鈀鈁鈃鈄鈈鈉鈍鈎鈐鈑鈒鈔鈕鈞鈣鈥鈦鈧鈮鈰鈳鈴鈷鈸鈹鈺鈽鈾鈿鉀鉅鉈鉉鉋鉍鉑鉕鉗鉚鉛鉞鉢鉤鉦鉨鉬鉭鉶鉸鉺鉻鉿銀銃銅銍銑銓銖銘銚銛銜銠銣銥銦銨銩銪銫銬銱銲銳銷銹銻銼鋁鋃鋅鋇鋌鋏鋒鋙鋝鋟鋣鋤鋥鋦鋨鋩鋪鋭鋮鋯鋰鋱鋶鋸鋼錁錄錆錇錈錏錐錒錕錘錙錚錛錟錠錡錢錦錨錩錫錮錯録錳錶錸鍀鍁鍃鍆鍇鍈鍊鍋鍍鍔鍘鍚鍛鍠鍤鍥鍩鍬鍰鍵鍶鍺鍾鎂鎄鎇鎊鎔鎖鎗鎘鎚鎛鎡鎢鎣鎦鎧鎩鎪鎬鎮鎰鎲鎳鎵鎶鎸鎿鏃鏇鏈鏌鏍鏐鏑鏗鏘鏜鏝鏞鏟鏡鏢鏤鏨鏰鏵鏷鏹鏺鏽鐃鐋鐐鐒鐓鐔鐘鐙鐝鐠鐦鐧鐨鐫鐮鐯鐲鐳鐵鐶鐸鐺鐿鑄鑈鑊鑌鑑鑒鑔鑕鑞鑠鑣鑥鑭鑰鑱鑲鑷鑹鑼鑽鑾鑿钁長門閂閃閆閈閉開閌閎閏閑閒間閔閘閡関閣閥閧閨閩閫閬閭閱閲閶閹閻閼閽閾閿闃闆闇闈闊闋闌闍闐闒闓闔闕闖闘關闞闠闡闢闤闥阨阪陘陝陞陣陰陳陸陽隄隉隊階隕際隨險隱隴隸隻雋雖雙雛雜雞離難雲電霑霢霧霽靂靄靆靈靉靚靜靦靨靷鞀鞏鞝鞽韁韃韉韋韌韍韓韙韜韞韮韻響頁頂頃項順頇須頊頌頎頏預頑頒頓頗領頜頡頤頦頭頮頰頲頴頷頸頹頻頽顆題額顎顏顒顓顔願顙顛類顢顥顧顫顬顯顰顱顳顴風颭颮颯颱颳颶颸颺颻颼飀飄飆飈飛飠飢飣飥飩飪飫飭飯飲飴飼飽飾飿餃餄餅餉養餌餎餏餑餒餓餕餖餘餚餛餜餞餡館餬餱餳餵餶餷餺餼餽餾餿饁饃饅饈饉饊饋饌饑饒饗饜饞饢馬馭馮馱馳馴馹駁駐駑駒駔駕駘駙駛駝駟駡駢駭駰駱駸駿騁騂騅騌騍騎騏騖騙騤騧騫騭騮騰騶騷騸騾驀驁驂驃驄驅驊驌驍驏驕驗驚驛驟驢驤驥驦驪驫骯髏髒體髕髖髮鬀鬆鬍鬚鬢鬥鬧鬨鬩鬭鬮鬱鬹魎魘魚魛魢魨魯魴魷魺鮁鮃鮊鮋鮍鮎鮐鮑鮒鮓鮚鮜鮝鮞鮣鮦鮪鮫鮭鮮鮳鮶鮺鯀鯁鯇鯉鯊鯒鯔鯕鯖鯛鯝鯡鯢鯤鯧鯨鯪鯫鯰鯴鯷鯽鯿鰁鰂鰃鰆鰈鰉鰍鰏鰐鰒鰓鰜鰟鰠鰣鰥鰧鰨鰩鰭鰮鰱鰲鰳鰵鰷鰹鰺鰻鰼鰾鱂鱅鱈鱉鱒鱔鱖鱗鱘鱝鱟鱠鱣鱤鱧鱨鱭鱯鱷鱸鱺鳥鳧鳩鳬鳲鳳鳴鳶鳾鴆鴇鴉鴒鴕鴛鴝鴞鴟鴣鴦鴨鴯鴰鴴鴷鴻鴿鵁鵂鵃鵐鵑鵒鵓鵜鵝鵠鵡鵪鵬鵮鵯鵲鵷鵾鶄鶇鶉鶊鶓鶖鶘鶚鶡鶥鶩鶪鶬鶯鶲鶴鶹鶺鶻鶼鷀鷁鷂鷄鷈鷊鷓鷖鷗鷙鷚鷥鷦鷫鷯鷲鷳鷸鷹鷺鷽鷿鸂鸇鸌鸏鸕鸘鸚鸛鸝鸞鹵鹹鹺鹼鹽麗麤麥麩麯麴麵麼麽黃黌點黨黲黴黶黷黽黿鼇鼈鼉鼕鼴齊齋齎齏齒齔齕齗齙齜齟齠齡齣齦齧齩齪齬齲齶齷龍龎龐龑龔龕龜",
    "丢并干乱亘亚伫布占并来仑侣局俣系伣侠私具伥俩俫仓个们幸仿伦伟侧侦伪杰伧伞备家佣偬传伛债伤倾偻仅戮佥侨仆伪侥偾雇价仪侬亿侩俭傧俦侪尽偿优储俪㑩傩傥俨凶兑儿兖内两册幂净冻凛凯别删刭则克刹刬刚剥剐剀创铲划剧刘刽刿剑㓥剂㔉劲动勖务勋胜劳势勚劢勋励劝匀匦汇匮区协恤却厍厕厌厉厣参叁丛咤吣吴呐吕啕呙员呗吣念问启哑启唡㖞唤亮丧吃乔单哟呛啬唝吗呜唢哔叹喽呕啧尝唛哗唠啸叽哓呒啴嘘㖊咝哒哝哕嗳哙喷吨当咛吓哜尝噜啮咽呖咙向亸喾严嘤啭嗫嚣冁呓啰禧嘱啮囱囵国围园圆图团埯垭采执坚垩垴埚尧报场块茔垲埘涂冢坞埙尘堑垫坠堕坟垯墙垦坛垱埙压垒圹垆坛坏垄垅坜坝塆壮壶壸寿够梦伙夹奂奥奁夺奖奋姹妆姐姗奸侄娱娄妇娅娲妫媪妈袅妪妩娴婳妫媭娆婵娇嫱袅嫒嬷嫔婴婶娘娈孙学孪宫寝实宁审写宽宠宝克将专寻对导尴届尸屃屉屡层屦属冈岘岛峡崃昆岗仑峥岽岚嵝崭岖嵚崂峤峣峄峃崄岙嵘岭屿岿峦巅岩巯帅师帐带帧帏帼帻帜币帮帱干几库厕厢厩厦庼厨厮庙厂庑废广廪庐厅回弑吊弪张强别弹弥弯汇彝彟彦佛后径从徕复彷征彻恒耻悦悮德怅闷凄恶恼恽恻爱惬悫怆恺忾栗殷态愠惨惭恸惯悫怄怂虑悭庆戚欲忧惫怜凭愦慭惮愤悯怃宪忆勤恳应怿懔蒙怼懑恹忧惩懒怀悬忏惧慑恋戆戋戗戬战戯戏户抛捝挟舍扪卷扫抡挜挣挂采拣扬换挥构损摇捣捶扇拓揾抢榨捂掴掼搂挚抠抟折掺捞挦撑挠捻㧑挢掸掸拨抚扑揿挞挝捡拥掳择击挡㧟担据挤捣拟摈拧搁掷扩撷摆擞撸扰摅撵拢拦撄搀撺携摄攒挛摊搅揽败叙敌数敛毙敩斓斩断于升时晋昼晕晖旸畅暂昵晔历昙晓向暧旷昽晒书会胧东丫栅杆栀枧条枭棁弃枨枣栋㭎栈栖梾桠杨枫桢业极谷杩荣榅桤构枪杠橐梿椠椁桨桩乐枞梁楼标枢样朴树桦桡桥机椭横檩柽档桧楫槚检樯梼台槟柠槛柜橹榈栉椟橼栎橱槠栌枥橥榇蘖栊榉棂樱栏权椤栾榄棂款钦叹欧敛欤欢岁历归殁残殒殇㱮殚殓殡㱩歼杀壳毁殴球毵牦毡氇气氢氩氲凼泛泛污决冱没冲况泄汹浃泾凉凄泪渌净沦渊涞浅涣减沨涡测浑凑浈涌汤沩准沟温浉涢湿沧灭涤荥沪滞渗卤浒浐滚满渔溇沤汉涟渍涨溆渐浆颍泼洁沩潜润浔溃滗涠涩浇涝沄涧渑泽滪泶浍淀浊浓湿泞溁浕济涛滥浚潍滨溅泺滤澛滢渎㲿泻沈浏濒泸沥潇潆潴泷濑弥潋澜沣滠洒漓滩灏漤湾滦滟灾为乌烃无炼炜烟茕焕烦炀㶽煴荧炝热颎炽烨焰灯炖磷烧烫焖营灿毁烛烩㶶熏烬焘耀烁炉烂争为爷尔床墙笺牍牵荦犊牺状狭狈狰犹狲犸呆狱狮奖独狯猃狝狞㺍获猎犷兽獭献猕猡现珐珲玮玚琐瑶莹玛琅玱琏琎玑瑷珰环玙玺琼珑璎瓒瓯瓮产产亩毕画异当畴叠佝痉酸疴痖疯疡痪瘗疮疟瘆疭瘘瘘疗痨痫瘅愈疠瘪痴痒疖症疬癞癣瘿瘾痈瘫癫发皂皑疱皲皱杯盗盏尽监盘卢荡真眦众困睁睐睾眯眍䁖瞒了瞆睑眬瞩矫炮研硁硖砗砚硕砀砜确码硙砖碜碛矶硗䃅硚硷础碍礴矿砺砾矾炮砻秘禄祸祯祎祃御禅礼祢祷秃籼税秆䅉棱禀种称谷䅟稣积颖秾穑秽稳获稆窝洼穷窑窎窭窥窜窍窦灶窃竖竞笔笋笕䇲个笺篪筝钳节范筑箧筼笃筛筚箦筘篓箪简篑箫檐筜签帘篮筹藤箓篯箨籁笼签笾簖篱箩吁妆粤糁粪粮团粝籴粜纟纠纪纣约红纡纥纨纫纹纳纽纾纯纰纼纱纮纸级纷纭纴纺䌷扎细绂绁绅纻绍绀绋绐绌终弦组䌹绊绗结绝绦绔绞络绚给绒绖统丝绛绝绢绑绡绠绨绣绤绥䌼捆经综缍绿绸绻线绶维绹绾纲网绷缀彩纶绺绮绽绰绫绵绲缁紧绯绿绪绬绱缃缄缂线缉缎缔缗缘缌编缓缅纬缑缈练缏缇致萦缙缢缒绉缣缊缞缚缜缟缛县绦缝缡缩纵缧䌸纤缦絷缕缥总绩绷缫缪缯织缮缭绕绣缋绳绘系茧缰缳缲缴䍁绎继缤缱䍀缬纩续累缠缨才纤缵缆钵䓨坛罂坛挂罚骂罢罗罴羁芈群羟羡义膻习玩翚翘翱翙耧耢圣闻联聪声耸聩聂职聍听聋肃胁脉胫唇脱胀肾胨脶脑肿脚肠腽腘肤䏝胶腻胆脍脓脸脐膑腊胪脏脔臜卧临台与兴举旧铺舱舣舰舻艰艳刍苧苎兹荆豆庄茎荚苋果华烟苌莱万莴叶荭着荮苇药荤搜莼莳莅苍荪席盖莲苁荜卜蒌蒋葱茑荫麻荨蒇荞荬芸莸荛蒉荡芜萧蓣蕰荟蓟芗姜蔷荙莶荐萨䓕苧荠借蓝荩艺药薮䓖蕴苈薯蔼蔺萚蕲芦苏蕴苹藓蔹茏兰蓠萝蔂处虚虏号亏虬蛱蜕蚬蚀猬虾虱蜗蛳蚂萤䗖蝼螀蛰蝈螨虮蝉蛲虫蛏蚁蝇虿蝎蛴蝾蚝蜡蛎蠹蟏蛊蚕蛮众蔑术胡卫冲衮绔袅里补装里制复裈袆裤裢褛亵裥袯袄裣裆褴袜䙓衬袭襕核见觃规觅视觇觋觍觎亲觊觏觐觑觉览觌观觞觯触讠订讣计讯讧讨讦讱训讪讫托记讹讶讼䜣诀讷讻访设许诉诃诊注证诂诋讵诈诒诏评诐诇诎诅词咏诩询诣试诗诧诟诡诠诘话该详诜诙诖诔诛诓夸志认诳诶诞诱诮语诚诫诬误诰诵诲说说谁课谇诽谊訚调谄谆谈诿请诤诹诼谅论谂谀谍谞谝谥诨谔谛谐谏谕谘讳谙谌讽诸谚谖诺谋谒谓誊诌谎谜谧谑谡谤谦谥讲谢谣谣谟谪谬谫讴谨谩哗䜧证谲讥谮识谯谭谱噪谵译议谴护诪誉谫读变詟䜩雠谗让谰谶赞谠谳岂竖丰艳猪豮狸猫䝙贝贞贠负财贡贫货贩贪贯责贮贳赀贰贵贬买贷贶费贴贻贸贺贲赂赁贿赅资贾贼赈赊宾赇赒赉赐赏赔赓贤卖贱赋赕质赍账赌䞐赖赗剩赚赙购赛赜贽赘赟赠赞赝赡赢赆赃赑赎赝赣赃赪赶赵趋趱迹交局践蜷逾踊跄跸迹蹒踪糟跷跶趸踌跻跃踯跞踬蹰跹蹑蹿躜躏躯车轧轨军轪轩轫轭软轷轸轱轴轵轺轲轶轼较辂辁辀载轾辄挽辅轻辆辎辉辋辍辊辇辈轮辌辑辏输辐辗舆辒毂辖辕辘转辙轿辚舆轰辔轹轳办辞辫辩农回迳这连周进游运过达违遥逊递远适遁迟迁选遗辽迈还迩边逻逦郏邮郓乡邹邬郧邓郑邻郸邺郐邝酂郦腌酝丑酝医酱酦宴酿衅酾酽释厘钅钆钇钌钊钉钋针钓钐扣钏钒钗钍钕钎钯钫钘钭钚钠钝钩钤钣钑钞钮钧钙钬钛钪铌铈钶铃钴钹铍钰钸铀钿钾钜铊铉铇铋铂钷钳铆铅钺钵钩钲鿭钼钽铏铰铒铬铪银铳铜铚铣铨铢铭铫铦衔铑铷铱铟铵铥铕铯铐铞焊锐销锈锑锉铝锒锌钡铤铗锋铻锊锓铘锄锃锔锇铓铺锐铖锆锂铽锍锯钢锞录锖锫锩铔锥锕锟锤锱铮锛锬锭锜钱锦锚锠锡锢错录锰表铼锝锨锪钔锴锳炼锅镀锷铡钖锻锽锸锲锘锹锾键锶锗钟镁锿镅镑镕锁枪镉锤镈镃钨蓥镏铠铩锼镐镇镒镋镍镓鿔镌镎镞镟链镆镙镠镝铿锵镗镘镛铲镜镖镂錾镚铧镤镪䥽锈铙铴镣铹镦镡钟镫镢镨锎锏镄镌镰䦃镯镭铁镮铎铛镱铸鿭镬镔鉴鉴镲锧镴铄镳镥镧钥镵镶镊镩锣钻銮凿䦆长门闩闪闫闬闭开闶闳闰闲闲间闵闸阂关阁阀哄闺闽阃阆闾阅阅阊阉阎阏阍阈阌阒板暗闱阔阕阑阇阗阘闿阖阙闯斗关阚阓阐辟阛闼厄坂陉陕升阵阴陈陆阳堤陧队阶陨际随险隐陇隶只隽虽双雏杂鸡离难云电沾霡雾霁雳霭叇灵叆靓静腼靥纼鼗巩绱鞒缰鞑鞯韦韧韨韩韪韬韫韭韵响页顶顷项顺顸须顼颂颀颃预顽颁顿颇领颌颉颐颏头颒颊颋颕颔颈颓频颓颗题额颚颜颙颛颜愿颡颠类颟颢顾颤颥显颦颅颞颧风飐飑飒台刮飓飔飏飖飕飗飘飙飚飞饣饥饤饦饨饪饫饬饭饮饴饲饱饰饳饺饸饼饷养饵饹饻饽馁饿馂饾余肴馄馃饯馅馆糊糇饧喂馉馇馎饩馈馏馊馌馍馒馐馑馓馈馔饥饶飨餍馋馕马驭冯驮驰驯驲驳驻驽驹驵驾骀驸驶驼驷骂骈骇骃骆骎骏骋骍骓骔骒骑骐骛骗骙䯄骞骘骝腾驺骚骟骡蓦骜骖骠骢驱骅骕骁骣骄验惊驿骤驴骧骥骦骊骉肮髅脏体髌髋发剃松胡须鬓斗闹哄阋斗阄郁鬶魉魇鱼鱽鱾鲀鲁鲂鱿鲄鲅鲆鲌鲉鲏鲇鲐鲍鲋鲊鲒鲘鲞鲕䲟鲖鲔鲛鲑鲜鲓鲪鲝鲧鲠鲩鲤鲨鲬鲻鲯鲭鲷鲴鲱鲵鲲鲳鲸鲮鲰鲶鲺鳀鲫鳊鳈鲗鳂䲠鲽鳇鳅鲾鳄鳆鳃鳒鳑鳋鲥鳏䲢鳎鳐鳍鳁鲢鳌鳓鳘鲦鲣鲹鳗鳛鳔鳉鳙鳕鳖鳟鳝鳜鳞鲟鲼鲎鲙鳣鳡鳢鲿鲚鳠鳄鲈鲡鸟凫鸠凫鸤凤鸣鸢䴓鸩鸨鸦鸰鸵鸳鸲鸮鸱鸪鸯鸭鸸鸹鸻䴕鸿鸽䴔鸺鸼鹀鹃鹆鹁鹈鹅鹄鹉鹌鹏鹐鹎鹊鹓鹍䴖鸫鹑鹒鹋鹙鹕鹗鹖鹛鹜䴗鸧莺鹟鹤鹠鹡鹘鹣鹚鹢鹞鸡䴘鹝鹧鹥鸥鸷鹨鸶鹪鹔鹩鹫鹇鹬鹰鹭鸴䴙㶉鹯鹱鹲鸬鹴鹦鹳鹂鸾卤咸鹾碱盐丽粗麦麸曲麹面么么黄黉点党黪霉黡黩黾鼋鳌鳖鼍冬鼹齐斋赍齑齿龀龁龂龅龇龃龆龄出龈啮咬龊龉龋腭龌龙厐庞䶮龚龛龟"]
};
let hanziMaps = null;

function hanziMap(dir) {
  if (!hanziMaps) {
    hanziMaps = {};
    for (const key of ["s2t", "t2s"]) {
      const [from, to] = HANZI[key];
      const map = new Map();
      for (let i = 0; i < from.length; i++) map.set(from[i], to[i]);
      hanziMaps[key] = map;
    }
  }
  return hanziMaps[dir];
}

function convertHanzi(text, dir) {
  const map = hanziMap(dir);
  let out = "";
  for (const ch of text) out += map.get(ch) || ch;
  return out;
}

// Which way to convert: a character that only has a traditional counterpart
// reads as simplified, and vice versa. Characters shared by both scripts, and
// the many that never differ, cast no vote.
function detectHanziDirection(text) {
  const s2t = hanziMap("s2t");
  const t2s = hanziMap("t2s");
  let simplified = 0;
  let traditional = 0;
  for (const ch of text) {
    const looksSimplified = s2t.has(ch);
    const looksTraditional = t2s.has(ch);
    if (looksSimplified && !looksTraditional) simplified++;
    else if (looksTraditional && !looksSimplified) traditional++;
  }
  return traditional > simplified ? "t2s" : "s2t";
}

const STORAGE_KEY = "worship-wiki-v2";
// Backgrounds live on this device only and are deliberately never written to
// the Sheet. Their own key keeps an oversized image from taking songs down.
const BACKGROUND_KEY = "worship-wiki-background-v1";

const translations = {
  "zh-CN": {
    pageTitle: "敬拜百科 · Worship Wiki",
    metaDescription: "为教会敬拜团队整理歌词、自动分页并生成投影幻灯片。",
    brandHome: "敬拜百科首页", brandName: "敬拜百科", mainNav: "主要导航",
    studio: "制作台", library: "曲库", guide: "使用说明", languageLabel: "界面语言",
    saved: "已在此设备保存", saving: "正在保存…", exportSlides: "导出幻灯片",
    worshipLibrary: "敬拜歌曲库", myLibrary: "我的曲库", worshipSongs: "敬拜诗歌",
    newSong: "新建诗歌", searchSong: "搜索诗歌", searchPlaceholder: "搜索歌名或主题…",
    songCount: "{count} 首诗歌", sortRecent: "按最近编辑", lyricsEditor: "歌词编辑器",
    songName: "诗歌名称", authorSource: "作者 / 来源",
    lyricsPagination: "歌词与分页", lyricsToolbar: "歌词格式工具栏",
    autoPaginate: "自动分页", blankPaginate: "按空行分页", decreaseFont: "缩小字号",
    increaseFont: "放大字号", lyrics: "歌词", editedJustNow: "最近编辑：刚刚",
    slidePreview: "幻灯片预览", livePreview: "实时预览", stageScreen: "舞台画面",
    previousSlide: "上一张", nextSlide: "下一张", visualStyle: "画面样式",
    chooseVisualStyle: "选择画面样式", themeMidnight: "深夜穹顶",
    themeParchment: "古典纸页", themeDawn: "晨光旷野",
    themeForest: "松林晚祷", themeVesper: "暮色晚霞", themeSnow: "素白讲台", readyToShare: "准备分享", close: "关闭",
    exportIntroBefore: "将以当前主题和分页生成 ", exportIntroAfter: " 16:9 幻灯片。",
    pptDescription: "通用演示文件 · .pptx", keynoteDescription: "导入兼容文件 · .pptx",
    pdfDescription: "画面固定 · 适合分享", generate: "生成", generating: "生成中…",
    privacy: "文件只在你的浏览器中生成，歌词不会上传。", threeSteps: "三步完成",
    guideTitle: "从歌词到舞台", addLyrics: "添加歌词",
    addLyricsDesc: "新建诗歌，或从曲库选择并修改。", checkPagination: "检查分页",
    checkPaginationDesc: "每四行自动分页；也可用空行指定页面。", chooseExport: "选择并导出",
    chooseExportDesc: "挑选画面主题，再生成 PPTX、Keynote 兼容文件或 PDF。",
    startCreating: "开始制作", emptyLibrary: "没有找到相关诗歌", untitledSong: "未命名诗歌",
    titleSlideLabel: "标题页", titleSlideName: "标题页：歌名",
    titleSlideNameAuthor: "标题页：歌名与作者", titleSlideNone: "不显示标题页",
    uncategorized: "未分类", pageShort: "{count}页", slidesCount: "{count} 张",
    lyricsStats: "{lines} 行 · {slides} 张幻灯片", emptyLyrics: "在左侧输入歌词",
    defaultFileName: "敬拜幻灯片", pptLoadError: "PowerPoint 组件尚未加载，请检查网络后重试。",
    pdfLoadError: "PDF 组件尚未加载，请检查网络后重试。", exportSubject: "敬拜歌词幻灯片",
    keynoteReady: "已生成 Keynote 可导入的 PPTX 文件", slidesReady: "幻灯片已生成",
    exportFailed: "导出失败，请稍后重试", firstLyricLine: "在这里输入第一行歌词",
    newTag: "新建",
    sortedRecent: "已按最近编辑排序", languageChanged: "界面语言已更新",
    accessControl: "访问权限", editAccessTitle: "编辑者登录", accountLocal: "本地模式",
    accountGuest: "访客", accountChecking: "检查权限…", accountViewer: "等待邀请",
    accountEditor: "编辑者", localStatusTitle: "本地草稿模式",
    localStatusText: "连接 Google Sheet 后，只有受邀账号可以编辑。",
    guestStatusTitle: "访客只读", guestStatusText: "登录 Google 账号以检查是否拥有编辑权限。",
    checkingStatusTitle: "正在检查权限", checkingStatusText: "正在确认此账号是否是受邀编辑者。",
    viewerStatusTitle: "尚未获得编辑权限", viewerStatusText: "你可以继续查看和导出，或发邮件申请加入编辑。",
    editorStatusTitle: "已获得编辑权限", editorStatusText: "你可以新增、修改并将歌词同步到 Google Sheet。",
    signInGoogle: "使用 Google 登录", requestAccess: "申请编辑权限", leaveEditMode: "退出编辑模式",
    adminLabel: "管理员：", accessSecurityNote: "编辑权限由 Google Drive 共享设置强制执行。",
    cloudReadOnly: "云端曲库 · 只读", cloudEditorReady: "云端曲库 · 已同步", cloudChecking: "正在连接云端…", cloudSaving: "正在同步到云端…",
    googleLoading: "正在加载 Google 登录…", googleLoginFailed: "Google 登录失败，请稍后重试",
    cloudLoadFailed: "暂时无法读取云端曲库，已保留本地内容", cloudSaveFailed: "云端保存失败，请检查网络或权限",
    cloudSaved: "已同步到 Google Sheet", editorRequired: "只有受邀编辑者可以修改歌词",
    deleteSong: "删除诗歌", confirmDelete: "确定删除《{title}》吗？此操作无法撤销。", songDeleted: "诗歌已删除",
    saveToCloud: "保存到云端", savingToCloud: "正在保存…", allSynced: "已保存", nothingToSave: "没有需要保存的修改",
    cloudUnsaved: "云端曲库 · 有未保存的修改",
    tagsLabel: "标签", tagsPlaceholder: "例如：赞美 · 创造", noSongSelected: "曲库为空", emptyEditorHint: "点击左上角 ＋ 新建一首诗歌",
    fontLabel: "字体", fontSerif: "宋体", fontSans: "黑体", ratioLabel: "画面比例", captionLabel: "署名位置",
    capBottomLeft: "署名左下", capBottomRight: "署名右下", capTopLeft: "署名左上", capTopRight: "署名右上", capNone: "不显示署名",
    capBottomCenter: "署名底部居中", capTopCenter: "署名顶部居中",
    uploadBackground: "上传背景图", removeBackground: "移除背景", backgroundLocalOnly: "背景图只保存在本机，不会上传，也不会与其他人共享。",
    disclaimerTitle: "免责声明",
    disclaimerBody: "本站歌词由用户根据公开资源整理贡献，版权归原作者及版权方所有。本站不主张对歌词内容拥有任何权利。",
    disclaimerTakedown: "若您是权利人并认为此处内容侵犯您的权益，请联系我们，我们会尽快移除。",
    appearanceLabel: "日间 / 夜间模式", dayMode: "已切换到日间模式", nightMode: "已切换到夜间模式", convertedToTraditional: "歌词已转为繁体",
    toggleScript: "简⇄繁", fontSizeLabel: "字号",
    localDraft: "本地草稿 · 未同步云端", restoreCloud: "放弃本地修改，重新载入云端曲库",
    confirmRestoreCloud: "这会丢弃本机上的修改，改用云端曲库。确定继续吗？", cloudRestored: "已重新载入云端曲库",
    convertedToSimplified: "歌词已转为简体", nothingConverted: "歌词无需转换",
    backgroundApplied: "已应用背景图", backgroundRemoved: "已移除背景图", backgroundInvalid: "请选择一张图片文件",
    backgroundTooLarge: "图片太大，请选择 12MB 以内的图片", backgroundNotStored: "背景图本次可用，但空间不足无法长期保存",
    requestUnavailable: "管理员邮箱尚未配置", accessRequestSubject: "申请加入敬拜百科编辑团队",
    accessRequestBody: "你好，我希望使用以下 Google 账号加入敬拜百科编辑团队：\n\n{email}\n\n请在 Google Sheet 中邀请此账号为编辑者。谢谢！"
  },
  "zh-TW": {
    pageTitle: "敬拜百科 · Worship Wiki",
    metaDescription: "為教會敬拜團隊整理歌詞、自動分頁並產生投影投影片。",
    brandHome: "敬拜百科首頁", brandName: "敬拜百科", mainNav: "主要導覽",
    studio: "製作台", library: "曲庫", guide: "使用說明", languageLabel: "介面語言",
    saved: "已儲存於此裝置", saving: "正在儲存…", exportSlides: "匯出投影片",
    worshipLibrary: "敬拜歌曲庫", myLibrary: "我的曲庫", worshipSongs: "敬拜詩歌",
    newSong: "新增詩歌", searchSong: "搜尋詩歌", searchPlaceholder: "搜尋歌名或主題…",
    songCount: "{count} 首詩歌", sortRecent: "按最近編輯", lyricsEditor: "歌詞編輯器",
    songName: "詩歌名稱", authorSource: "作者 / 來源",
    lyricsPagination: "歌詞與分頁", lyricsToolbar: "歌詞格式工具列",
    autoPaginate: "自動分頁", blankPaginate: "按空白行分頁", decreaseFont: "縮小字級",
    increaseFont: "放大字級", lyrics: "歌詞", editedJustNow: "最近編輯：剛剛",
    slidePreview: "投影片預覽", livePreview: "即時預覽", stageScreen: "舞台畫面",
    previousSlide: "上一張", nextSlide: "下一張", visualStyle: "畫面樣式",
    chooseVisualStyle: "選擇畫面樣式", themeMidnight: "深夜穹頂",
    themeParchment: "古典紙頁", themeDawn: "晨光曠野",
    themeForest: "松林晚禱", themeVesper: "暮色晚霞", themeSnow: "素白講台", readyToShare: "準備分享", close: "關閉",
    exportIntroBefore: "將以目前主題和分頁產生 ", exportIntroAfter: " 16:9 投影片。",
    pptDescription: "通用簡報檔案 · .pptx", keynoteDescription: "匯入相容檔案 · .pptx",
    pdfDescription: "畫面固定 · 適合分享", generate: "產生", generating: "產生中…",
    privacy: "檔案只在你的瀏覽器中產生，歌詞不會上傳。", threeSteps: "三步完成",
    guideTitle: "從歌詞到舞台", addLyrics: "新增歌詞",
    addLyricsDesc: "新增詩歌，或從曲庫選擇並修改。", checkPagination: "檢查分頁",
    checkPaginationDesc: "每四行自動分頁；也可用空白行指定頁面。", chooseExport: "選擇並匯出",
    chooseExportDesc: "挑選畫面主題，再產生 PPTX、Keynote 相容檔案或 PDF。",
    startCreating: "開始製作", emptyLibrary: "找不到相關詩歌", untitledSong: "未命名詩歌",
    titleSlideLabel: "標題頁", titleSlideName: "標題頁：歌名",
    titleSlideNameAuthor: "標題頁：歌名與作者", titleSlideNone: "不顯示標題頁",
    uncategorized: "未分類", pageShort: "{count}頁", slidesCount: "{count} 張",
    lyricsStats: "{lines} 行 · {slides} 張投影片", emptyLyrics: "在左側輸入歌詞",
    defaultFileName: "敬拜投影片", pptLoadError: "PowerPoint 元件尚未載入，請檢查網路後重試。",
    pdfLoadError: "PDF 元件尚未載入，請檢查網路後重試。", exportSubject: "敬拜歌詞投影片",
    keynoteReady: "已產生 Keynote 可匯入的 PPTX 檔案", slidesReady: "投影片已產生",
    exportFailed: "匯出失敗，請稍後重試", firstLyricLine: "在這裡輸入第一行歌詞",
    newTag: "新增",
    sortedRecent: "已按最近編輯排序", languageChanged: "介面語言已更新",
    accessControl: "存取權限", editAccessTitle: "編輯者登入", accountLocal: "本機模式",
    accountGuest: "訪客", accountChecking: "檢查權限…", accountViewer: "等待邀請",
    accountEditor: "編輯者", localStatusTitle: "本機草稿模式",
    localStatusText: "連接 Google Sheet 後，只有受邀帳號可以編輯。",
    guestStatusTitle: "訪客唯讀", guestStatusText: "登入 Google 帳號以檢查是否擁有編輯權限。",
    checkingStatusTitle: "正在檢查權限", checkingStatusText: "正在確認此帳號是否為受邀編輯者。",
    viewerStatusTitle: "尚未獲得編輯權限", viewerStatusText: "你可以繼續檢視和匯出，或寄送郵件申請加入編輯。",
    editorStatusTitle: "已獲得編輯權限", editorStatusText: "你可以新增、修改並將歌詞同步到 Google Sheet。",
    signInGoogle: "使用 Google 登入", requestAccess: "申請編輯權限", leaveEditMode: "退出編輯模式",
    adminLabel: "管理員：", accessSecurityNote: "編輯權限由 Google Drive 共用設定強制執行。",
    cloudReadOnly: "雲端曲庫 · 唯讀", cloudEditorReady: "雲端曲庫 · 已同步", cloudChecking: "正在連接雲端…", cloudSaving: "正在同步到雲端…",
    googleLoading: "正在載入 Google 登入…", googleLoginFailed: "Google 登入失敗，請稍後重試",
    cloudLoadFailed: "暫時無法讀取雲端曲庫，已保留本機內容", cloudSaveFailed: "雲端儲存失敗，請檢查網路或權限",
    cloudSaved: "已同步到 Google Sheet", editorRequired: "只有受邀編輯者可以修改歌詞",
    deleteSong: "刪除詩歌", confirmDelete: "確定刪除《{title}》嗎？此操作無法復原。", songDeleted: "詩歌已刪除",
    saveToCloud: "儲存到雲端", savingToCloud: "正在儲存…", allSynced: "已儲存", nothingToSave: "沒有需要儲存的修改",
    cloudUnsaved: "雲端曲庫 · 有未儲存的修改",
    tagsLabel: "標籤", tagsPlaceholder: "例如：讚美 · 創造", noSongSelected: "曲庫為空", emptyEditorHint: "點擊左上角 ＋ 新增一首詩歌",
    fontLabel: "字體", fontSerif: "宋體", fontSans: "黑體", ratioLabel: "畫面比例", captionLabel: "署名位置",
    capBottomLeft: "署名左下", capBottomRight: "署名右下", capTopLeft: "署名左上", capTopRight: "署名右上", capNone: "不顯示署名",
    capBottomCenter: "署名底部置中", capTopCenter: "署名頂部置中",
    uploadBackground: "上傳背景圖", removeBackground: "移除背景", backgroundLocalOnly: "背景圖只儲存在本機，不會上傳，也不會與其他人共享。",
    disclaimerTitle: "免責聲明",
    disclaimerBody: "本站歌詞由使用者根據公開資源整理貢獻，版權歸原作者及版權方所有。本站不主張對歌詞內容擁有任何權利。",
    disclaimerTakedown: "若您是權利人並認為此處內容侵犯您的權益，請聯絡我們，我們會盡快移除。",
    appearanceLabel: "日間 / 夜間模式", dayMode: "已切換到日間模式", nightMode: "已切換到夜間模式", convertedToTraditional: "歌詞已轉為繁體",
    toggleScript: "簡⇄繁", fontSizeLabel: "字級",
    localDraft: "本機草稿 · 未同步雲端", restoreCloud: "放棄本機修改，重新載入雲端曲庫",
    confirmRestoreCloud: "這會捨棄本機上的修改，改用雲端曲庫。確定繼續嗎？", cloudRestored: "已重新載入雲端曲庫",
    convertedToSimplified: "歌詞已轉為簡體", nothingConverted: "歌詞無需轉換",
    backgroundApplied: "已套用背景圖", backgroundRemoved: "已移除背景圖", backgroundInvalid: "請選擇一張圖片檔案",
    backgroundTooLarge: "圖片太大，請選擇 12MB 以內的圖片", backgroundNotStored: "背景圖本次可用，但空間不足無法長期儲存",
    requestUnavailable: "管理員電子郵件尚未設定", accessRequestSubject: "申請加入敬拜百科編輯團隊",
    accessRequestBody: "你好，我希望使用以下 Google 帳號加入敬拜百科編輯團隊：\n\n{email}\n\n請在 Google Sheet 中邀請此帳號為編輯者。謝謝！"
  },
  en: {
    pageTitle: "Worship Wiki · Slide Maker",
    metaDescription: "Organize worship lyrics, create slide breaks, and export projection-ready presentations.",
    brandHome: "Worship Wiki home", brandName: "Worship Wiki", mainNav: "Main navigation",
    studio: "Studio", library: "Library", guide: "Guide", languageLabel: "Interface language",
    saved: "Saved on this device", saving: "Saving…", exportSlides: "Export slides",
    worshipLibrary: "Worship song library", myLibrary: "My library", worshipSongs: "Worship songs",
    newSong: "Add song", searchSong: "Search songs", searchPlaceholder: "Search title or theme…",
    songCount: "{count} songs", sortRecent: "Recently edited", lyricsEditor: "Lyrics editor",
    songName: "Song title", authorSource: "Author / source",
    lyricsPagination: "Lyrics & pagination", lyricsToolbar: "Lyrics formatting toolbar",
    autoPaginate: "Auto paginate", blankPaginate: "Split on blank lines", decreaseFont: "Decrease font size",
    increaseFont: "Increase font size", lyrics: "Lyrics", editedJustNow: "Edited just now",
    slidePreview: "Slide preview", livePreview: "Live preview", stageScreen: "Stage screen",
    previousSlide: "Previous slide", nextSlide: "Next slide", visualStyle: "Visual style",
    chooseVisualStyle: "Choose visual style", themeMidnight: "Midnight Dome",
    themeParchment: "Classic Parchment", themeDawn: "Desert Dawn",
    themeForest: "Evening Pines", themeVesper: "Vesper Dusk", themeSnow: "Clear Lectern", readyToShare: "Ready to share", close: "Close",
    exportIntroBefore: "Create ", exportIntroAfter: " 16:9 slides using the current theme and pagination.",
    pptDescription: "Universal presentation · .pptx", keynoteDescription: "Keynote-compatible import · .pptx",
    pdfDescription: "Fixed layout · Easy to share", generate: "Generate", generating: "Generating…",
    privacy: "Files are generated in your browser. Lyrics are never uploaded.", threeSteps: "Three simple steps",
    guideTitle: "From lyrics to stage", addLyrics: "Add lyrics",
    addLyricsDesc: "Create a song, or choose one from the library to edit.", checkPagination: "Check pagination",
    checkPaginationDesc: "Split every four lines automatically, or use blank lines.", chooseExport: "Choose and export",
    chooseExportDesc: "Pick a visual theme, then create a PPTX, Keynote-compatible file, or PDF.",
    startCreating: "Start creating", emptyLibrary: "No matching songs", untitledSong: "Untitled song",
    titleSlideLabel: "Title slide", titleSlideName: "Title slide: name",
    titleSlideNameAuthor: "Title slide: name & author", titleSlideNone: "No title slide",
    uncategorized: "Uncategorized", pageShort: "{count}p", slidesCount: "{count} slides",
    lyricsStats: "{lines} lines · {slides} slides", emptyLyrics: "Enter lyrics on the left",
    defaultFileName: "Worship Slides", pptLoadError: "The PowerPoint exporter has not loaded. Check your connection and try again.",
    pdfLoadError: "The PDF exporter has not loaded. Check your connection and try again.", exportSubject: "Worship lyric slides",
    keynoteReady: "Created a PPTX file ready to import into Keynote", slidesReady: "Your slides are ready",
    exportFailed: "Export failed. Please try again.", firstLyricLine: "Enter the first line of lyrics here",
    newTag: "New",
    sortedRecent: "Sorted by recent edits", languageChanged: "Interface language updated",
    accessControl: "Access control", editAccessTitle: "Editor access", accountLocal: "Local mode",
    accountGuest: "Guest", accountChecking: "Checking access…", accountViewer: "Awaiting invite",
    accountEditor: "Editor", localStatusTitle: "Local draft mode",
    localStatusText: "Once Google Sheets is connected, only invited accounts can edit.",
    guestStatusTitle: "Guest access", guestStatusText: "Sign in with Google to check whether you have editing access.",
    checkingStatusTitle: "Checking access", checkingStatusText: "Confirming whether this account is an invited editor.",
    viewerStatusTitle: "Editing access not granted", viewerStatusText: "You can keep viewing and exporting, or email the administrator to request access.",
    editorStatusTitle: "Editing access granted", editorStatusText: "You can add and update lyrics and sync them to Google Sheets.",
    signInGoogle: "Sign in with Google", requestAccess: "Request editing access", leaveEditMode: "Leave editing mode",
    adminLabel: "Administrator:", accessSecurityNote: "Editing access is enforced by Google Drive sharing permissions.",
    cloudReadOnly: "Cloud library · Read only", cloudEditorReady: "Cloud library · Synced", cloudChecking: "Connecting to cloud…", cloudSaving: "Syncing to cloud…",
    googleLoading: "Loading Google sign-in…", googleLoginFailed: "Google sign-in failed. Please try again.",
    cloudLoadFailed: "The cloud library is unavailable. Local content is still available.", cloudSaveFailed: "Cloud save failed. Check your connection or access.",
    cloudSaved: "Synced to Google Sheets", editorRequired: "Only invited editors can change lyrics",
    deleteSong: "Delete song", confirmDelete: "Delete \"{title}\"? This cannot be undone.", songDeleted: "Song deleted",
    saveToCloud: "Save to cloud", savingToCloud: "Saving…", allSynced: "Saved", nothingToSave: "No unsaved changes",
    cloudUnsaved: "Cloud library · Unsaved changes",
    tagsLabel: "Tags", tagsPlaceholder: "e.g. Praise · Creation", noSongSelected: "Library is empty", emptyEditorHint: "Click ＋ at the top left to add a song",
    fontLabel: "Typeface", fontSerif: "Serif", fontSans: "Sans", ratioLabel: "Slide ratio", captionLabel: "Credit position",
    capBottomLeft: "Credit bottom left", capBottomRight: "Credit bottom right", capTopLeft: "Credit top left", capTopRight: "Credit top right", capNone: "No credit",
    capBottomCenter: "Credit bottom center", capTopCenter: "Credit top center",
    uploadBackground: "Upload background", removeBackground: "Remove background", backgroundLocalOnly: "Backgrounds stay on this device. They are never uploaded or shared with anyone else.",
    disclaimerTitle: "Disclaimer",
    disclaimerBody: "Lyrics on this site are contributed by users from publicly available sources. All rights remain with the original authors and copyright holders. This site claims no rights over the lyrics.",
    disclaimerTakedown: "If you hold the rights to any content here and believe it infringes them, contact us and we will remove it promptly.",
    appearanceLabel: "Day / night mode", dayMode: "Switched to day mode", nightMode: "Switched to night mode", convertedToTraditional: "Lyrics converted to Traditional",
    toggleScript: "简⇄繁", fontSizeLabel: "Font size",
    localDraft: "Local draft · not synced", restoreCloud: "Discard local changes and reload the cloud library",
    confirmRestoreCloud: "This discards the changes on this device and reloads the cloud library. Continue?", cloudRestored: "Cloud library reloaded",
    convertedToSimplified: "Lyrics converted to Simplified", nothingConverted: "Nothing to convert",
    backgroundApplied: "Background applied", backgroundRemoved: "Background removed", backgroundInvalid: "Please choose an image file",
    backgroundTooLarge: "Image too large; please choose one under 12MB", backgroundNotStored: "Background works for now, but there was no room to store it",
    requestUnavailable: "The administrator email has not been configured", accessRequestSubject: "Request to join the Worship Wiki editing team",
    accessRequestBody: "Hello, I would like to join the Worship Wiki editing team using this Google account:\n\n{email}\n\nPlease invite this account as an editor in Google Sheets. Thank you!"
  }
};

function t(key, variables = {}) {
  const value = translations[state?.locale]?.[key] || translations["zh-CN"][key] || key;
  return Object.entries(variables).reduce(
    (result, [name, replacement]) => result.replaceAll(`{${name}}`, String(replacement)),
    value
  );
}

function loadStoredState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!stored || !Array.isArray(stored.songs) || !stored.songs.length) return null;
    return stored;
  } catch (_error) {
    return null;
  }
}

const storedState = loadStoredState();
const storedSongs = storedState?.songs || starterSongs;
const storedActiveId = storedState?.activeId;

const SLIDE_FONTS = { serif: "var(--serif)", sans: "var(--sans)" };
const TITLE_SLIDE_MODES = ["title", "with-author", "none"];
const CAPTION_SPOTS = ["bottom-left", "bottom-center", "bottom-right",
  "top-left", "top-center", "top-right", "none"];
// px sizes feed the export canvas; inches feed the PPTX deck layout.
// Every slide theme in one place: the preview CSS, the export canvas and the
// stored song value all read from these keys.
const THEMES = {
  midnight: { stops: [[0, "#07152f"], [.58, "#112e5a"], [1, "#173e69"]],
    glow: "rgba(217,181,109,.28)", text: "#ffffff",
    ornament: "rgba(217,181,109,.34)", caption: "rgba(255,255,255,.55)", scrim: "rgba(6,14,30,.5)" },
  parchment: { stops: [[0, "#f2ead8"], [1, "#d8c498"]],
    rule: "rgba(71,55,31,.055)", text: "#26304a",
    ornament: "rgba(91,65,26,.22)", caption: "rgba(38,48,74,.58)", scrim: "rgba(244,238,226,.58)" },
  dawn: { stops: [[0, "#4c6884"], [.58, "#b8876d"], [1, "#d9b879"]],
    glow: "rgba(255,236,185,.34)", text: "#ffffff",
    ornament: "rgba(217,181,109,.34)", caption: "rgba(255,255,255,.55)", scrim: "rgba(6,14,30,.5)" },
  forest: { stops: [[0, "#06170f"], [.55, "#0e3423"], [1, "#164c33"]],
    glow: "rgba(164,208,150,.24)", text: "#ffffff",
    ornament: "rgba(178,214,163,.26)", caption: "rgba(255,255,255,.55)", scrim: "rgba(5,20,13,.52)" },
  vesper: { stops: [[0, "#190e2b"], [.55, "#3d1a3e"], [1, "#66274b"]],
    glow: "rgba(240,178,190,.26)", text: "#ffffff",
    ornament: "rgba(236,176,196,.28)", caption: "rgba(255,255,255,.55)", scrim: "rgba(18,8,28,.52)" },
  snow: { stops: [[0, "#ffffff"], [1, "#e9edf3"]],
    text: "#1b2433", ornament: "rgba(27,36,51,.14)",
    caption: "rgba(27,36,51,.55)", scrim: "rgba(248,250,252,.6)" }
};
const THEME_NAMES = Object.keys(THEMES);

const RATIOS = {
  "16:9": { w: 1600, h: 900, inW: 13.333, inH: 7.5, layout: "LAYOUT_WIDE" },
  "4:3": { w: 1600, h: 1200, inW: 10, inH: 7.5, layout: "LAYOUT_4x3" }
};

const state = {
  songs: storedSongs,
  activeId: storedSongs.some((song) => song.id === storedActiveId) ? storedActiveId : storedSongs[0].id,
  slideIndex: 0,
  pagination: storedState?.pagination === "blank" ? "blank" : "auto",
  fontSize: Number.isFinite(storedState?.fontSize) ? Math.min(120, Math.max(20, storedState.fontSize)) : 44,
  theme: THEME_NAMES.includes(storedState?.theme) ? storedState.theme : "midnight",
  locale: ["zh-CN", "zh-TW", "en"].includes(storedState?.locale) ? storedState.locale : "zh-CN",
  font: storedState?.font === "sans" ? "sans" : "serif",
  caption: CAPTION_SPOTS.includes(storedState?.caption) ? storedState.caption : "bottom-left",
  titleSlide: TITLE_SLIDE_MODES.includes(storedState?.titleSlide) ? storedState.titleSlide : "title",
  ratio: RATIOS[storedState?.ratio] ? storedState.ratio : "16:9",
  appearance: ["dark", "light"].includes(storedState?.appearance) ? storedState.appearance
    : (window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark"),
  background: (() => { try { return localStorage.getItem(BACKGROUND_KEY) || ""; } catch (_e) { return ""; } })()
};

let backgroundImage = null;

function loadBackgroundImage() {
  if (!state.background) { backgroundImage = null; return Promise.resolve(null); }
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => { backgroundImage = image; resolve(image); };
    image.onerror = () => { backgroundImage = null; resolve(null); };
    image.src = state.background;
  });
}

const publicConfig = window.WORSHIP_WIKI_CONFIG || {};
const requiredConfigKeys = ["googleClientId", "googleApiKey", "spreadsheetId", "adminEmail"];
const backend = {
  configured: requiredConfigKeys.every((key) => {
    const value = String(publicConfig[key] || "").trim();
    return value && !value.startsWith("YOUR_");
  }),
  role: "local",
  accessToken: "",
  userEmail: "",
  tokenClient: null,
  dirtySongIds: new Set(),
  localDraft: false,
  saving: false,
  syncTimer: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const elements = {
  songList: $("#songList"), search: $("#songSearch"), count: $("#songCount"),
  title: $("#songTitle"), author: $("#songAuthor"), lyrics: $("#lyricsInput"),
  tags: $("#songTags"), tagSuggestions: $("#tagSuggestions"),
  fontSelect: $("#fontSelect"), captionSelect: $("#captionSelect"),
  titleSlideSelect: $("#titleSlideSelect"),
  ratioSelect: $("#ratioSelect"), aspectChip: $(".aspect-chip"),
  backgroundInput: $("#backgroundInput"), clearBackgroundButton: $("#clearBackgroundButton"),
  appearanceButton: $("#appearanceButton"), restoreCloudButton: $("#restoreCloudButton"),
  breadcrumb: $("#breadcrumbTitle"), slideContent: $("#slideContent"),
  slideTitle: $("#slideSongTitle"), currentSlide: $("#currentSlide"),
  totalSlides: $("#totalSlides"), stats: $("#lyricsStats"), slideFrame: $("#slideFrame"),
  fontSizeInput: $("#fontSizeInput"), saveState: $("#saveState"), toast: $("#toast"),
  exportDialog: $("#exportDialog"), exportSlideCount: $("#exportSlideCount"), guideDialog: $("#guideDialog"),
  languageSelect: $("#languageSelect"), accountButton: $("#accountButton"), accountLabel: $("#accountLabel"),
  accessDialog: $("#accessDialog"), accessStatus: $("#accessStatus"), accessStatusTitle: $("#accessStatusTitle"),
  accessStatusText: $("#accessStatusText"), googleSignInButton: $("#googleSignInButton"),
  requestAccessButton: $("#requestAccessButton"), leaveEditModeButton: $("#leaveEditModeButton"),
  adminContact: $("#adminContact"), adminEmailLink: $("#adminEmailLink"),
  editorPanel: $(".editor-panel"), libraryPanel: $("#libraryPanel"), newSongButton: $("#newSongButton"),
  deleteSongButton: $("[data-action='delete-song']"),
  saveSongButton: $("#saveSongButton")
};

function translateInterface() {
  document.documentElement.lang = state.locale;
  document.title = t("pageTitle");
  $("meta[name='description']").content = t("metaDescription");
  $$('[data-i18n]').forEach((element) => { element.textContent = t(element.dataset.i18n); });
  $$('[data-i18n-aria]').forEach((element) => { element.setAttribute("aria-label", t(element.dataset.i18nAria)); });
  $$('[data-i18n-placeholder]').forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  elements.languageSelect.value = state.locale;
  renderAccessState();
}

function refreshSaveState() {
  const pending = backend.dirtySongIds.size;
  let key = "saved";
  if (backend.configured && backend.role !== "editor" && backend.localDraft) key = "localDraft";
  else if (backend.role === "checking") key = "cloudChecking";
  else if (backend.role === "editor") key = backend.saving ? "cloudSaving" : pending ? "cloudUnsaved" : "cloudEditorReady";
  else if (backend.configured) key = "cloudReadOnly";
  elements.saveState.innerHTML = `<i></i> ${t(key)}`;

  const readOnly = backend.configured && backend.role !== "editor";
  elements.deleteSongButton.hidden = readOnly;
  elements.newSongButton.hidden = false;
  elements.restoreCloudButton.hidden = !(readOnly && backend.localDraft);
  const button = elements.saveSongButton;
  button.hidden = !backend.configured || backend.role !== "editor";
  button.disabled = !pending || backend.saving;
  const labelKey = backend.saving ? "savingToCloud" : pending ? "saveToCloud" : "allSynced";
  button.firstElementChild.textContent = pending && !backend.saving
    ? `${t("saveToCloud")} (${pending})`
    : t(labelKey);
}

function renderAccessState() {
  const role = backend.configured ? backend.role : "local";
  const accountKeys = {
    local: "accountLocal", guest: "accountGuest", checking: "accountChecking",
    viewer: "accountViewer", editor: "accountEditor"
  };
  const titleKeys = {
    local: "localStatusTitle", guest: "guestStatusTitle", checking: "checkingStatusTitle",
    viewer: "viewerStatusTitle", editor: "editorStatusTitle"
  };
  const textKeys = {
    local: "localStatusText", guest: "guestStatusText", checking: "checkingStatusText",
    viewer: "viewerStatusText", editor: "editorStatusText"
  };
  elements.accountButton.dataset.role = role;
  elements.accountLabel.textContent = t(accountKeys[role]);
  elements.accessStatus.dataset.role = role;
  elements.accessStatusTitle.textContent = t(titleKeys[role]);
  elements.accessStatusText.textContent = `${t(textKeys[role])}${backend.userEmail ? ` ${backend.userEmail}` : ""}`;
  elements.googleSignInButton.hidden = !backend.configured || role === "checking" || role === "editor";
  elements.requestAccessButton.hidden = !backend.configured || role !== "viewer";
  elements.leaveEditModeButton.hidden = role !== "editor";
  elements.adminContact.hidden = !backend.configured;
  if (backend.configured) {
    elements.adminEmailLink.textContent = publicConfig.adminEmail;
    elements.adminEmailLink.href = `mailto:${publicConfig.adminEmail}`;
  }
  refreshSaveState();
}

function activeSong() {
  return state.songs.find((song) => song.id === state.activeId);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function paginate(lyrics) {
  const clean = String(lyrics || "").trim();
  if (!clean) return [[t("emptyLyrics")]];
  const blocks = clean.split(/\n\s*\n/).map((block) => block.split("\n").filter((line) => line.trim()));
  if (state.pagination === "blank") return blocks;
  const pages = [];
  blocks.forEach((block) => {
    for (let index = 0; index < block.length; index += 4) pages.push(block.slice(index, index + 4));
  });
  return pages;
}

// The opening slide. Returns null when there is nothing to introduce, so an
// empty song previews as before rather than as a title card for nothing.
function titlePage(song) {
  if (state.titleSlide === "none") return null;
  if (!String(song?.lyrics || "").trim()) return null;
  const title = String(song?.title || "").trim() || t("untitledSong");
  const author = String(song?.author || "").trim();
  return state.titleSlide === "with-author" && author ? [title, author] : [title];
}

// Every slide count and every exporter reads the deck through here, so the
// title page appears in the preview, the counts and the files alike.
function slidePages(song) {
  const opening = titlePage(song);
  const pages = paginate(song?.lyrics);
  return opening ? [opening, ...pages] : pages;
}

function hasTitlePage(song) {
  return titlePage(song) !== null;
}

function saveNow() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      songs: state.songs, activeId: state.activeId, pagination: state.pagination,
      fontSize: state.fontSize, theme: state.theme, locale: state.locale,
      font: state.font, caption: state.caption, ratio: state.ratio,
      titleSlide: state.titleSlide,
      appearance: state.appearance
    }));
  } catch (error) {
    console.warn("Local save unavailable", error);
  }
  refreshSaveState();
}

function scheduleSave() {
  if (!backend.configured) elements.saveState.innerHTML = `<i></i> ${t("saving")}`;
  window.clearTimeout(scheduleSave.timeout);
  scheduleSave.timeout = window.setTimeout(saveNow, 450);
}

function refreshTagSuggestions() {
  const tags = [...new Set(state.songs.map((song) => song.tags).filter(Boolean))].sort();
  elements.tagSuggestions.innerHTML = tags.map((tag) => `<option value="${escapeHtml(tag)}"></option>`).join("");
}

function renderLibrary(filter = "") {
  const query = filter.trim().toLocaleLowerCase(state.locale);
  const filtered = state.songs.filter((song) =>
    [song.title, song.author, song.tags].join(" ").toLocaleLowerCase(state.locale).includes(query)
  );
  elements.count.textContent = t("songCount", { count: filtered.length });
  elements.songList.innerHTML = filtered.length ? filtered.map((song, index) => {
    const pages = slidePages(song).length;
    return `
      <button class="song-item ${song.id === state.activeId ? "active" : ""}" type="button" data-song-id="${escapeHtml(song.id)}">
        <span class="song-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="song-copy"><strong>${escapeHtml(song.title || t("untitledSong"))}</strong><span>${escapeHtml(song.tags || song.author || t("uncategorized"))}</span></span>
        <span class="song-pages">${t("pageShort", { count: pages })}</span>
      </button>`;
  }).join("") : `<p class="empty-library">${t("emptyLibrary")}</p>`;
}

function renderEditor() {
  const song = activeSong();
  // An empty library is a valid state: blank the editor rather than inventing a song.
  elements.editorPanel.classList.toggle("is-empty", !song);
  // Pairs, not a data-attribute lookup: a missing attribute silently blanked the
  // field it was meant to fill, and a blank lyrics box is one keystroke from data loss.
  [[elements.title, "title"], [elements.author, "author"],
   [elements.tags, "tags"], [elements.lyrics, "lyrics"]].forEach(([field, key]) => {
    field.value = song ? song[key] || "" : "";
    field.disabled = !song;
  });
  elements.lyrics.placeholder = song ? "" : t("emptyEditorHint");
  if (!song) {
    elements.breadcrumb.textContent = t("noSongSelected");
    state.slideIndex = 0;
    renderControls();
    renderPreview();
    return;
  }
  elements.breadcrumb.textContent = song.title || t("untitledSong");
  state.slideIndex = 0;
  refreshTagSuggestions();
  renderControls();
  renderPreview();
}

function renderControls() {
  $$('[data-mode]').forEach((item) => item.classList.toggle("active", item.dataset.mode === state.pagination));
  $$('[data-theme]').forEach((item) => item.classList.toggle("active", item.dataset.theme === state.theme));
  elements.slideFrame.className = `slide-frame theme-${state.theme} font-${state.font} cap-${state.caption}`;
  elements.slideFrame.style.aspectRatio = state.ratio.replace(":", " / ");
  elements.slideFrame.style.backgroundImage = state.background ? `url("${state.background}")` : "";
  elements.slideFrame.classList.toggle("has-background", Boolean(state.background));
  elements.clearBackgroundButton.hidden = !state.background;
  elements.aspectChip.textContent = state.ratio;
  elements.ratioSelect.value = state.ratio;
  elements.fontSelect.value = state.font;
  elements.captionSelect.value = state.caption;
  elements.titleSlideSelect.value = state.titleSlide;
}

function renderPreview() {
  const song = activeSong() || { lyrics: "", title: "" };
  const slides = slidePages(song);
  state.slideIndex = Math.min(state.slideIndex, slides.length - 1);
  const lines = slides[state.slideIndex] || [];
  elements.slideContent.innerHTML = lines.map((line) => `<div>${escapeHtml(line)}</div>`).join("");
  elements.slideContent.style.fontSize = `${Math.max(14, state.fontSize / 1.65)}px`;
  elements.slideTitle.textContent = slideCaption(song);
  elements.currentSlide.textContent = state.slideIndex + 1;
  elements.totalSlides.textContent = slides.length;
  if (document.activeElement !== elements.fontSizeInput) elements.fontSizeInput.value = state.fontSize;
  elements.exportSlideCount.textContent = t("slidesCount", { count: slides.length });
  const lineCount = String(song.lyrics || "").split("\n").filter((line) => line.trim()).length;
  elements.stats.textContent = t("lyricsStats", { lines: lineCount, slides: slides.length });
  renderLibrary(elements.search.value);
}

function updateSong(field, value, shouldRender = true) {
  const song = activeSong();
  if (!song) return;
  song[field] = value;
  song.updatedAt = Date.now();
  if (field === "title") elements.breadcrumb.textContent = value || t("untitledSong");
  if (shouldRender) renderPreview();
  scheduleSave();
  if (["title", "author", "lyrics"].includes(field)) markSongDirty(song.id);
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => elements.toast.classList.remove("show"), 2600);
}

function sanitizeFileName(value) {
  return String(value || t("defaultFileName")).replace(/[\\/:*?"<>|]/g, "-").trim() || t("defaultFileName");
}

// Shrink-to-fit used by both the raster export and the PowerPoint text boxes,
// so an editable deck sizes its words the same way the preview did.
function fitFontPx(context, lines, width, fontStack) {
  let fontPx = Math.min(state.fontSize * 1.78, 98);
  const maxTextWidth = width * 0.82;
  do {
    context.font = `700 ${fontPx}px ${fontStack}`;
    if (Math.max(...lines.map((line) => context.measureText(line).width), 0) <= maxTextWidth) break;
    fontPx -= 2;
  } while (fontPx > 46);
  return fontPx;
}

// PowerPoint needs one concrete face, not a CSS stack.
const DECK_FONTS = {
  "zh-CN": { serif: "SimSun", sans: "Microsoft YaHei" },
  "zh-TW": { serif: "PMingLiU", sans: "Microsoft JhengHei" },
  en: { serif: "Georgia", sans: "Arial" }
};

function deckFont() {
  return (DECK_FONTS[state.locale] || DECK_FONTS["zh-CN"])[state.font === "sans" ? "sans" : "serif"];
}

function renderSlideCanvas(lines, song, { withText = true, isTitle = false } = {}) {
  const canvas = document.createElement("canvas");
  canvas.width = RATIOS[state.ratio].w;
  canvas.height = RATIOS[state.ratio].h;
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  let textColor = "#ffffff";
  const canvasSerif = state.locale === "zh-TW" ? '"Noto Serif TC", "Songti TC", serif' : state.locale === "en" ? 'Georgia, "Times New Roman", serif' : '"Noto Serif SC", "Songti SC", serif';
  const canvasSans = state.locale === "zh-TW" ? '"Noto Sans TC", "PingFang TC", sans-serif' : state.locale === "en" ? 'Inter, Arial, sans-serif' : '"Noto Sans SC", "PingFang SC", sans-serif';

  const theme = THEMES[state.theme] || THEMES.midnight;
  const gradient = context.createLinearGradient(0, 0, width, height);
  theme.stops.forEach(([at, color]) => gradient.addColorStop(at, color));
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
  textColor = theme.text;

  if (theme.glow) {
    // Proportional, so the highlight lands in the same place at any ratio.
    const glow = context.createRadialGradient(width * 0.8, height * 0.172, 0,
      width * 0.8, height * 0.172, width * 0.269);
    glow.addColorStop(0, theme.glow);
    glow.addColorStop(1, theme.glow.replace(/[\d.]+\)$/, "0)"));
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);
  }

  if (theme.rule) {
    context.strokeStyle = theme.rule;
    for (let y = 0; y < height; y += 18) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y + 10);
      context.stroke();
    }
  }

  context.save();
  context.strokeStyle = theme.ornament;
  context.lineWidth = 2;
  [0.244, 0.269, 0.3].forEach((ratio) => {
    context.beginPath();
    context.arc(width * 0.9125, -height * 0.183, width * ratio, 0, Math.PI * 2);
    context.stroke();
  });
  context.restore();

  if (backgroundImage) {
    const scale = Math.max(width / backgroundImage.width, height / backgroundImage.height);
    const drawW = backgroundImage.width * scale;
    const drawH = backgroundImage.height * scale;
    context.drawImage(backgroundImage, (width - drawW) / 2, (height - drawH) / 2, drawW, drawH);
    // A photo behind text is unreadable without a scrim; match it to the theme's text colour.
    context.fillStyle = theme.scrim;
    context.fillRect(0, 0, width, height);
  }

  if (!withText) return canvas;

  const fontPx = fitFontPx(context, lines, width, state.font === "sans" ? canvasSans : canvasSerif);
  context.font = `700 ${fontPx}px ${state.font === "sans" ? canvasSans : canvasSerif}`;

  const lineHeight = fontPx * 1.62;
  const groupHeight = Math.max(0, (lines.length - 1) * lineHeight);
  const startY = height / 2 - groupHeight / 2;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = textColor;
  if (state.theme !== "parchment") {
    context.shadowColor = "rgba(0,0,0,.28)";
    context.shadowBlur = 16;
    context.shadowOffsetY = 4;
  }
  lines.forEach((line, index) => context.fillText(line, width / 2, startY + index * lineHeight));
  context.shadowColor = "transparent";
  if (state.caption !== "none" && !isTitle) {
    const align = state.caption.endsWith("right") ? "right"
      : state.caption.endsWith("center") ? "center" : "left";
    context.font = `500 22px ${state.font === "sans" ? canvasSans : canvasSerif}`;
    context.textAlign = align;
    context.fillStyle = theme.caption;
    const capX = align === "right" ? width - 80 : align === "center" ? width / 2 : 80;
    context.fillText(slideCaption(song), capX,
      state.caption.startsWith("top") ? height * 0.078 : height * 0.931);
  }
  return canvas;
}

const MAX_BACKGROUND_BYTES = 12 * 1024 * 1024;

// Downscale before storing: a phone photo as a data URL will blow the ~5MB
// localStorage budget, and the slide canvas is only 1600px wide anyway.
async function shrinkBackground(file) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1920 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close?.();
  return canvas.toDataURL("image/jpeg", 0.82);
}

async function setBackground(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) { showToast(t("backgroundInvalid")); return; }
  if (file.size > MAX_BACKGROUND_BYTES) { showToast(t("backgroundTooLarge")); return; }
  try {
    state.background = await shrinkBackground(file);
  } catch (_error) {
    showToast(t("backgroundInvalid"));
    return;
  }
  await loadBackgroundImage();
  try {
    localStorage.setItem(BACKGROUND_KEY, state.background);
  } catch (_error) {
    // Keep it for this session rather than losing the upload outright.
    showToast(t("backgroundNotStored"));
  }
  renderControls();
  renderPreview();
  showToast(t("backgroundApplied"));
}

function clearBackground() {
  state.background = "";
  backgroundImage = null;
  try { localStorage.removeItem(BACKGROUND_KEY); } catch (_error) { /* nothing to clean up */ }
  renderControls();
  renderPreview();
  showToast(t("backgroundRemoved"));
}

function slideCaption(song) {
  const title = song.title || t("untitledSong");
  const author = String(song.author || "").trim();
  return author ? `${title} · ${author}` : title;
}

async function exportPptx(fileName, keynoteCompatible = false) {
  if (!window.PptxGenJS) throw new Error(t("pptLoadError"));
  const song = activeSong();
  if (!song) throw new Error(t("exportFailed"));
  const pages = slidePages(song);
  const theme = THEMES[state.theme] || THEMES.midnight;
  const { w: pxW, h: pxH, inW, inH, layout } = RATIOS[state.ratio];
  const ptPerPx = (inW * 72) / pxW;

  const deck = new window.PptxGenJS();
  deck.layout = layout;
  deck.author = "敬拜百科 Worship Wiki";
  deck.company = "Worship Wiki";
  deck.subject = t("exportSubject");
  deck.title = song.title || t("defaultFileName");
  deck.lang = state.locale;

  // The artwork ships as the slide background; every word stays a real text box
  // so the deck can be edited in PowerPoint or Keynote. It lives on a master so
  // the image is stored once instead of once per slide, and as JPEG because a
  // full-bleed gradient as PNG runs to megabytes.
  const artwork = renderSlideCanvas([], song, { withText: false }).toDataURL("image/jpeg", 0.9);
  const masterName = "WORSHIP_WIKI";
  deck.defineSlideMaster({ title: masterName, background: { data: artwork } });
  const measure = document.createElement("canvas").getContext("2d");
  const fontFace = deckFont();
  const bodyColor = theme.text.replace("#", "");
  const dark = theme.text.toLowerCase() === "#ffffff";

  const opening = hasTitlePage(song);
  pages.forEach((lines, index) => {
    const slide = deck.addSlide({ masterName });
    const isTitle = opening && index === 0;

    const fontPx = fitFontPx(measure, lines, pxW, `"${fontFace}", sans-serif`);
    slide.addText(lines.join("\n"), {
      x: 0, y: 0, w: inW, h: inH,
      align: "center", valign: "middle",
      fontFace, fontSize: Math.round(fontPx * ptPerPx), bold: true, color: bodyColor,
      lineSpacingMultiple: 1.62,
      shadow: dark ? { type: "outer", color: "000000", opacity: 0.28, blur: 8, offset: 2, angle: 90 } : undefined
    });

    if (state.caption !== "none" && !isTitle) {
      const align = state.caption.endsWith("right") ? "right"
        : state.caption.endsWith("center") ? "center" : "left";
      const margin = 80 * (inW / pxW);
      const capH = 0.42;
      slide.addText(slideCaption(song), {
        x: margin, w: inW - margin * 2,
        y: state.caption.startsWith("top") ? margin * 0.6 : inH - capH - margin * 0.6,
        h: capH,
        align, valign: "middle",
        fontFace, fontSize: Math.round(22 * ptPerPx), color: bodyColor, transparency: 45
      });
    }
  });

  await deck.writeFile({ fileName: `${fileName}${keynoteCompatible ? "-Keynote" : ""}.pptx`, compression: true });
}

async function exportPdf(fileName) {
  if (!window.jspdf?.jsPDF) throw new Error(t("pdfLoadError"));
  const { jsPDF } = window.jspdf;
  const song = activeSong();
  const pages = slidePages(song);
  const { w: pw, h: ph } = RATIOS[state.ratio];
  const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [pw, ph], hotfixes: ["px_scaling"] });
  pdf.setProperties({ title: song.title || t("defaultFileName"), author: "Worship Wiki", subject: t("exportSubject") });
  pages.forEach((lines, index) => {
    if (index > 0) pdf.addPage([pw, ph], "landscape");
    const isTitle = index === 0 && hasTitlePage(song);
    pdf.addImage(renderSlideCanvas(lines, song, { isTitle }).toDataURL("image/jpeg", 0.94), "JPEG", 0, 0, pw, ph, undefined, "FAST");
  });
  pdf.save(`${fileName}.pdf`);
}

async function handleExport(format, button) {
  const fileName = sanitizeFileName(activeSong().title);
  const options = $$('[data-export-format]');
  options.forEach((option) => { option.disabled = true; });
  const actionLabel = button.querySelector("i");
  const previousLabel = actionLabel.textContent;
  actionLabel.textContent = t("generating");
  try {
    if (document.fonts?.ready) await document.fonts.ready;
    if (state.background && !backgroundImage) await loadBackgroundImage();
    if (format === "pdf") await exportPdf(fileName);
    else await exportPptx(fileName, format === "keynote");
    elements.exportDialog.close();
    showToast(format === "keynote" ? t("keynoteReady") : t("slidesReady"));
  } catch (error) {
    console.error(error);
    showToast(error.message || t("exportFailed"));
  } finally {
    actionLabel.textContent = previousLabel;
    options.forEach((option) => { option.disabled = false; });
  }
}

function sheetsValuesUrl(range, query = {}, action = "") {
  const params = new URLSearchParams(query);
  const suffix = params.size ? `?${params.toString()}` : "";
  return `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(publicConfig.spreadsheetId)}/values/${encodeURIComponent(range)}${action}${suffix}`;
}

async function googleApiRequest(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    const error = new Error(`Google API request failed (${response.status})`);
    error.status = response.status;
    try { error.details = await response.json(); } catch (_error) { error.details = null; }
    throw error;
  }
  return response.status === 204 ? {} : response.json();
}

function authorizationHeaders(accessToken, withJson = false) {
  const headers = {};
  if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
  if (withJson) headers["Content-Type"] = "application/json";
  return headers;
}

async function readSheetRange(range, accessToken = "") {
  const query = accessToken ? {} : { key: publicConfig.googleApiKey };
  return googleApiRequest(sheetsValuesUrl(range, query), {
    headers: authorizationHeaders(accessToken)
  });
}

async function writeSheetRange(range, values, accessToken) {
  return googleApiRequest(sheetsValuesUrl(range, { valueInputOption: "RAW" }), {
    method: "PUT",
    headers: authorizationHeaders(accessToken, true),
    body: JSON.stringify({ range, majorDimension: "ROWS", values })
  });
}

async function appendSheetRow(values, accessToken) {
  return googleApiRequest(sheetsValuesUrl(publicConfig.appendRange || "Songs!A:I", {
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS"
  }, ":append"), {
    method: "POST",
    headers: authorizationHeaders(accessToken, true),
    body: JSON.stringify({ majorDimension: "ROWS", values: [values] })
  });
}

function rowsToSongs(rows = []) {
  return rows.map((row, index) => {
    if (!row?.[0] && !row?.[1]) return null;
    return {
      id: row[0] || `sheet-row-${index + 2}`,
      title: row[1] || t("untitledSong"),
      author: row[2] || "",
      tags: row[3] || "",
      lyrics: row[4] || "",
      theme: THEME_NAMES.includes(row[5]) ? row[5] : "midnight",
      updatedAt: Date.parse(row[6]) || 0,
      updatedBy: row[7] || "",
      version: Number(row[8]) || 0,
      rowNumber: index + 2
    };
  }).filter(Boolean);
}

async function loadRemoteSongs({ accessToken = backend.accessToken, silent = false } = {}) {
  if (!backend.configured || backend.dirtySongIds.size || backend.localDraft) return false;
  try {
    const payload = await readSheetRange(publicConfig.songsRange || "Songs!A2:I", accessToken);
    const remoteSongs = rowsToSongs(payload.values);
    if (!remoteSongs.length) return true;
    const previousActiveId = state.activeId;
    state.songs = remoteSongs;
    state.activeId = remoteSongs.some((song) => song.id === previousActiveId) ? previousActiveId : remoteSongs[0].id;
    renderLibrary(elements.search.value);
    renderEditor();
    saveNow();
    return true;
  } catch (error) {
    console.warn("Cloud library load failed", error);
    if (!silent) showToast(t("cloudLoadFailed"));
    return false;
  }
}

function songRowValues(song) {
  return [
    song.id,
    song.title,
    song.author,
    song.tags,
    song.lyrics,
    song.theme || state.theme,
    new Date().toISOString(),
    backend.userEmail,
    (Number(song.version) || 0) + 1
  ];
}

function songRowRange(rowNumber) {
  const sourceRange = publicConfig.songsRange || "Songs!A2:I";
  const sheetName = sourceRange.includes("!") ? sourceRange.split("!")[0] : "Songs";
  return `${sheetName}!A${rowNumber}:I${rowNumber}`;
}

async function saveSongRemote(songId) {
  if (!backend.configured || backend.role !== "editor" || !backend.accessToken) return;
  const song = state.songs.find((item) => item.id === songId);
  if (!song) return;
  try {
    const values = songRowValues(song);
    if (song.rowNumber) {
      await writeSheetRange(songRowRange(song.rowNumber), [values], backend.accessToken);
    } else {
      const result = await appendSheetRow(values, backend.accessToken);
      const updatedRange = result.updates?.updatedRange || "";
      const rowMatch = updatedRange.match(/![A-Z]+(\d+):/);
      if (rowMatch) song.rowNumber = Number(rowMatch[1]);
    }
    song.updatedAt = Date.parse(values[6]);
    song.updatedBy = backend.userEmail;
    song.version = values[8];
    backend.dirtySongIds.delete(songId);
    refreshSaveState();
  } catch (error) {
    console.warn("Cloud save failed", error);
    showToast(error.status === 403 ? t("editorRequired") : t("cloudSaveFailed"));
    if (error.status === 401 || error.status === 403) setAccessRole("viewer");
  }
}

async function deleteActiveSong() {
  const song = activeSong();
  if (!song) return;
  const label = song.title || t("untitledSong");
  if (!window.confirm(t("confirmDelete").replace("{title}", label))) return;

  // Drop the pending-save mark, or Save would re-create the row we are removing.
  backend.dirtySongIds.delete(song.id);

  state.songs = state.songs.filter((item) => item.id !== song.id);
  state.activeId = state.songs.length ? state.songs[0].id : "";
  renderLibrary(elements.search.value);
  renderEditor();
  saveNow();
  refreshSaveState();
  showToast(t("songDeleted"));

  if (!song.rowNumber || backend.role !== "editor" || !backend.accessToken) return;
  try {
    // Blank the row instead of deleting it: saveSongRemote() addresses rows by
    // rowNumber, and removing a row would shift every song below it.
    await writeSheetRange(songRowRange(song.rowNumber), [Array(9).fill("")], backend.accessToken);
  } catch (error) {
    console.warn("Cloud delete failed", error);
    showToast(t("cloudSaveFailed"));
  }
}

// Edits stay local until the editor presses Save; this only records what is pending.
function markSongDirty(songId = state.activeId) {
  if (!backend.configured) return;
  if (backend.role !== "editor") {
    // A guest's edits live on this device. Stop pulling the cloud library over
    // them, or the next poll would silently discard their work.
    backend.localDraft = true;
    refreshSaveState();
    return;
  }
  if (!songId) return;
  backend.dirtySongIds.add(songId);
  refreshSaveState();
}

async function saveDirtySongs() {
  if (!backend.configured || backend.role !== "editor") {
    showToast(t("editorRequired"));
    return;
  }
  if (!backend.dirtySongIds.size || backend.saving) {
    if (!backend.saving) showToast(t("nothingToSave"));
    return;
  }
  backend.saving = true;
  refreshSaveState();
  // Sequential: saveSongRemote() appends new rows and records the row number it
  // got back, and parallel appends would race for the same row.
  for (const songId of [...backend.dirtySongIds]) await saveSongRemote(songId);
  backend.saving = false;
  refreshSaveState();
  if (!backend.dirtySongIds.size) showToast(t("cloudSaved"));
}

function setAccessRole(role) {
  backend.role = role;
  renderAccessState();
  refreshSaveState();
}

function waitForGoogleIdentity() {
  if (window.google?.accounts?.oauth2) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      if (window.google?.accounts?.oauth2) {
        window.clearInterval(timer);
        resolve();
      } else if (Date.now() - startedAt > 10000) {
        window.clearInterval(timer);
        reject(new Error("Google Identity Services did not load"));
      }
    }, 100);
  });
}

async function requestGoogleAccessToken() {
  await waitForGoogleIdentity();
  return new Promise((resolve, reject) => {
    backend.tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: publicConfig.googleClientId,
      scope: "openid email https://www.googleapis.com/auth/spreadsheets",
      callback(response) {
        if (response?.error || !response?.access_token) reject(new Error(response?.error || "Missing access token"));
        else resolve(response.access_token);
      },
      error_callback(error) { reject(new Error(error?.type || "Google sign-in failed")); }
    });
    backend.tokenClient.requestAccessToken({ prompt: "consent" });
  });
}

async function readGoogleUserEmail(accessToken) {
  try {
    const profile = await googleApiRequest("https://openidconnect.googleapis.com/v1/userinfo", {
      headers: authorizationHeaders(accessToken)
    });
    return profile.email || "";
  } catch (_error) {
    return "";
  }
}

async function verifyEditorAccess(accessToken) {
  const range = publicConfig.accessCheckRange || "_config!A1";
  const current = await readSheetRange(range, accessToken);
  const value = current.values?.[0]?.[0] || publicConfig.accessCheckValue || "worship-wiki-access-check";
  await writeSheetRange(range, [[value]], accessToken);
}

async function signInWithGoogle() {
  if (!backend.configured) return;
  setAccessRole("checking");
  try {
    const accessToken = await requestGoogleAccessToken();
    backend.accessToken = accessToken;
    backend.userEmail = await readGoogleUserEmail(accessToken);
    try {
      await verifyEditorAccess(accessToken);
      setAccessRole("editor");
    } catch (error) {
      if (error.status !== 401 && error.status !== 403) throw error;
      setAccessRole("viewer");
    }
    await loadRemoteSongs({ accessToken, silent: true });
  } catch (error) {
    console.warn("Google sign-in failed", error);
    backend.accessToken = "";
    backend.userEmail = "";
    setAccessRole("guest");
    showToast(t("googleLoginFailed"));
  }
}

function leaveEditMode() {
  backend.accessToken = "";
  backend.userEmail = "";
  backend.dirtySongIds.clear();
  setAccessRole("guest");
  elements.accessDialog.close();
}

function requestEditorAccess() {
  if (!backend.configured || !publicConfig.adminEmail) {
    showToast(t("requestUnavailable"));
    return;
  }
  const subject = encodeURIComponent(t("accessRequestSubject"));
  const body = encodeURIComponent(t("accessRequestBody", { email: backend.userEmail || "" }));
  window.location.href = `mailto:${publicConfig.adminEmail}?subject=${subject}&body=${body}`;
}

async function initializeBackend() {
  if (!backend.configured) {
    setAccessRole("local");
    return;
  }
  setAccessRole("guest");
  await loadRemoteSongs();
  const interval = Math.max(15000, Number(publicConfig.syncIntervalMs) || 30000);
  backend.syncTimer = window.setInterval(() => {
    const editing = [elements.title, elements.author, elements.lyrics].includes(document.activeElement);
    if (!editing && !backend.dirtySongIds.size) void loadRemoteSongs({ silent: true });
  }, interval);
}

function createSong({ title = t("untitledSong"), author = "", lyrics = t("firstLyricLine") } = {}) {
  const id = `song-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  state.songs.unshift({ id, title, author, tags: t("newTag"), lyrics, updatedAt: Date.now() });
  state.activeId = id;
  renderLibrary();
  renderEditor();
  scheduleSave();
  markSongDirty(id);
  return activeSong();
}

elements.songList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-song-id]");
  if (!item) return;
  state.activeId = item.dataset.songId;
  renderEditor();
  scheduleSave();
});
elements.search.addEventListener("input", (event) => renderLibrary(event.target.value));
elements.title.addEventListener("input", (event) => updateSong("title", event.target.value));
elements.author.addEventListener("input", (event) => updateSong("author", event.target.value));
elements.lyrics.addEventListener("input", (event) => updateSong("lyrics", event.target.value));
elements.tags.addEventListener("input", (event) => updateSong("tags", event.target.value, false));

$("#prevSlide").addEventListener("click", () => {
  const count = slidePages(activeSong()).length;
  state.slideIndex = (state.slideIndex - 1 + count) % count;
  renderPreview();
});
$("#nextSlide").addEventListener("click", () => {
  const count = slidePages(activeSong()).length;
  state.slideIndex = (state.slideIndex + 1) % count;
  renderPreview();
});

$$('[data-mode]').forEach((button) => button.addEventListener("click", () => {
  state.pagination = button.dataset.mode;
  state.slideIndex = 0;
  renderControls();
  renderPreview();
  scheduleSave();
}));
$$('[data-theme]').forEach((button) => button.addEventListener("click", () => {
  state.theme = button.dataset.theme;
  renderControls();
  renderPreview();
  saveNow();
}));
function toggleLyricScript() {
  const song = activeSong();
  if (!song || !song.lyrics.trim()) { showToast(t("nothingConverted")); return; }
  const dir = detectHanziDirection(song.lyrics);
  const converted = convertHanzi(song.lyrics, dir);
  if (converted === song.lyrics) { showToast(t("nothingConverted")); return; }
  updateSong("lyrics", converted);
  elements.lyrics.value = converted;
  showToast(t(dir === "s2t" ? "convertedToTraditional" : "convertedToSimplified"));
}

$("[data-action='toggle-script']").addEventListener("click", toggleLyricScript);

const FONT_MIN = 20;
const FONT_MAX = 120;

function setFontSize(value) {
  const size = Math.round(Number(value));
  if (!Number.isFinite(size)) return;
  state.fontSize = Math.min(FONT_MAX, Math.max(FONT_MIN, size));
  renderPreview();
  scheduleSave();
}

$("[data-action='decrease-font']").addEventListener("click", () => setFontSize(state.fontSize - 2));
$("[data-action='increase-font']").addEventListener("click", () => setFontSize(state.fontSize + 2));

elements.fontSizeInput.addEventListener("change", (event) => {
  setFontSize(event.target.value);
  event.target.value = state.fontSize;   // show the clamped value back
});

elements.fontSizeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") { event.preventDefault(); event.target.blur(); }
});

$("#newSongButton").addEventListener("click", () => {
  const song = createSong();
  if (song) elements.title.select();
});
$("#exportButton").addEventListener("click", () => {
  elements.exportSlideCount.textContent = t("slidesCount", { count: slidePages(activeSong()).length });
  elements.exportDialog.showModal();
});
$$('[data-export-format]').forEach((button) => button.addEventListener("click", () => handleExport(button.dataset.exportFormat, button)));
elements.accountButton.addEventListener("click", () => elements.accessDialog.showModal());
elements.googleSignInButton.addEventListener("click", signInWithGoogle);
elements.requestAccessButton.addEventListener("click", requestEditorAccess);
elements.leaveEditModeButton.addEventListener("click", leaveEditMode);
elements.languageSelect.addEventListener("change", (event) => {
  state.locale = event.target.value;
  translateInterface();
  renderPreview();
  scheduleSave();
  showToast(t("languageChanged"));
});
function activateNav(button, panel, field) {
  $$(".nav-link").forEach((link) => link.classList.toggle("active", link === button));
  // Panels sit side by side on wide screens and stack on narrow ones, so scroll
  // first and let focus do the visible work when everything is already in view.
  const bounds = panel.getBoundingClientRect();
  const onScreen = bounds.top < window.innerHeight && bounds.bottom > 0
    && bounds.left < window.innerWidth && bounds.right > 0;
  if (!onScreen) panel.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  if (field.disabled) return;
  field.focus({ preventScroll: true });
  if (field.select) field.select();
  // On wide screens every panel is already visible, so focus alone looks like
  // nothing happened. Flash the target so the click is acknowledged.
  const box = field.closest(".search-box");
  if (!box) return;
  box.classList.remove("is-pinged");
  void box.offsetWidth;
  box.classList.add("is-pinged");
}

function applyAppearance() {
  // data-appearance, not data-theme: the slide-theme buttons own [data-theme].
  document.documentElement.dataset.appearance = state.appearance;
  elements.appearanceButton.setAttribute("aria-pressed", String(state.appearance === "light"));
}

elements.restoreCloudButton.addEventListener("click", async () => {
  if (!window.confirm(t("confirmRestoreCloud"))) return;
  backend.localDraft = false;
  const loaded = await loadRemoteSongs({ silent: true });
  if (!loaded) { backend.localDraft = true; showToast(t("cloudLoadFailed")); }
  else showToast(t("cloudRestored"));
  refreshSaveState();
  renderAccessState();
});

elements.appearanceButton.addEventListener("click", () => {
  state.appearance = state.appearance === "light" ? "dark" : "light";
  applyAppearance();
  saveNow();
  showToast(t(state.appearance === "light" ? "dayMode" : "nightMode"));
});

elements.backgroundInput.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  event.target.value = "";   // let the same file be re-picked after a clear
  void setBackground(file);
});

elements.clearBackgroundButton.addEventListener("click", clearBackground);

elements.ratioSelect.addEventListener("change", (event) => {
  state.ratio = RATIOS[event.target.value] ? event.target.value : "16:9";
  renderControls();
  saveNow();
});

elements.fontSelect.addEventListener("change", (event) => {
  state.font = event.target.value === "sans" ? "sans" : "serif";
  renderControls();
  saveNow();
});

elements.captionSelect.addEventListener("change", (event) => {
  state.caption = CAPTION_SPOTS.includes(event.target.value) ? event.target.value : "bottom-left";
  renderControls();
  saveNow();
});

elements.titleSlideSelect.addEventListener("change", (event) => {
  state.titleSlide = TITLE_SLIDE_MODES.includes(event.target.value) ? event.target.value : "title";
  // the deck just grew or shrank at the front; keep the preview in range
  state.slideIndex = 0;
  renderControls();
  renderPreview();
  saveNow();
});

$("[data-action='focus-library']").addEventListener("click", (event) =>
  activateNav(event.currentTarget, elements.libraryPanel, elements.search));
$("[data-action='focus-studio']").addEventListener("click", (event) =>
  activateNav(event.currentTarget, elements.editorPanel, elements.lyrics));
$("[data-action='show-guide']").addEventListener("click", () => elements.guideDialog.showModal());
$("[data-action='delete-song']").addEventListener("click", () => void deleteActiveSong());
elements.saveSongButton.addEventListener("click", () => void saveDirtySongs());
$("[data-action='sort-songs']").addEventListener("click", () => {
  state.songs.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
  renderLibrary(elements.search.value);
  scheduleSave();
  showToast(t("sortedRecent"));
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    elements.search.focus();
  }
  if (event.key === "ArrowLeft" && event.altKey) $("#prevSlide").click();
  if (event.key === "ArrowRight" && event.altKey) $("#nextSlide").click();
});
window.addEventListener("beforeunload", (event) => {
  saveNow();
  if (!backend.dirtySongIds.size) return;
  event.preventDefault();
  event.returnValue = "";
});

function registerWebMcpTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const register = (tool) => {
    try {
      void Promise.resolve(context.registerTool(tool)).catch((error) => console.warn("WebMCP tool registration failed", error));
    } catch (error) {
      console.warn("WebMCP tool registration failed", error);
    }
  };

  register({
    name: "get_current_worship_deck",
    title: "查看当前敬拜幻灯片",
    description: "读取当前诗歌、主题、分页方式和已经生成的歌词页面。",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, untrustedContentHint: true },
    execute() {
      const song = activeSong();
      return { title: song.title, author: song.author, theme: state.theme, pagination: state.pagination, slides: slidePages(song) };
    }
  });

  register({
    name: "update_current_worship_song",
    title: "更新当前敬拜诗歌",
    description: "更新当前选中诗歌的标题、作者或歌词，并刷新可见的幻灯片预览。",
    inputSchema: {
      type: "object",
      properties: { title: { type: "string" }, author: { type: "string" }, lyrics: { type: "string" } },
      minProperties: 1,
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute(input) {
      if (backend.configured && backend.role !== "editor") throw new Error(t("editorRequired"));
      if (!input || typeof input !== "object" || !["title", "author", "lyrics"].some((field) => typeof input[field] === "string")) {
        throw new Error("请至少提供 title、author 或 lyrics 中的一项文本内容。");
      }
      ["title", "author", "lyrics"].forEach((field) => {
        if (typeof input[field] === "string") activeSong()[field] = input[field];
      });
      activeSong().updatedAt = Date.now();
      renderEditor();
      saveNow();
      markSongDirty(activeSong().id);
      return { updated: true, id: activeSong().id, title: activeSong().title, slideCount: slidePages(activeSong()).length };
    }
  });

  register({
    name: "create_worship_song",
    title: "新建敬拜诗歌",
    description: "在曲库中新建诗歌并将它显示在编辑器中。",
    inputSchema: {
      type: "object",
      properties: { title: { type: "string" }, author: { type: "string" }, lyrics: { type: "string" } },
      required: ["title", "lyrics"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute(input) {
      if (backend.configured && backend.role !== "editor") throw new Error(t("editorRequired"));
      if (!input || typeof input.title !== "string" || typeof input.lyrics !== "string") {
        throw new Error("title 和 lyrics 都必须是文本。");
      }
      const song = createSong(input);
      saveNow();
      return { created: true, id: song.id, title: song.title, slideCount: slidePages(song).length };
    }
  });
}

applyAppearance();
translateInterface();
renderLibrary();
renderEditor();
registerWebMcpTools();
void initializeBackend();
