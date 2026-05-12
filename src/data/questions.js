export const questions = [
  {
    id: 1,
    question: '部门年终聚餐，老板酒后画大饼暗示降薪，还说"改稻为桑是为了大家好"，你会？',
    options: [
      { label: 'A', text: '优雅敬酒："改稻为桑乃是国策，我第一个支持！"（内心：等我先捞够）', character: '严嵩', scores: { dominance: 1, morality: 4, strategy: 0, loyalty: 3 } },
      { label: 'B', text: '默默盘算：这公司要完，我得提前把自己的退路安顿好。', character: '沈一石', scores: { dominance: 5, morality: 2, strategy: 1, loyalty: 4 } },
      { label: 'C', text: '当场表演"发疯文学"，口吐白沫说："我不能说，我不能说啊！"', character: '杨金水', scores: { dominance: 4, morality: 4, strategy: 0, loyalty: 3 } },
      { label: 'D', text: '立刻表态："老板说得对！改稻为桑是利国利民的大事！" 坚决拥护。', character: '何茂才', scores: { dominance: 5, morality: 5, strategy: 0, loyalty: 4 } }
    ]
  },
  {
    id: 2,
    question: '发现合作方财务报表有猫腻，捅破后上司可能背锅，你会？',
    options: [
      { label: 'A', text: '掏出一封信："有些事，天知地知你知我知，这封信你收好。"', character: '吕芳', scores: { dominance: 2, morality: 3, strategy: 3, loyalty: 0 } },
      { label: 'B', text: '表面安慰上司，转身就把黑料寄给老板，附上一封投名状。', character: '赵贞吉', scores: { dominance: 4, morality: 4, strategy: 1, loyalty: 4 } },
      { label: 'C', text: '痛苦万分："就让我来当这个罪人吧！"然后熬夜把窟窿填上。', character: '胡宗宪', scores: { dominance: 2, morality: 1, strategy: 1, loyalty: 1 } },
      { label: 'D', text: '打印出《大明律》甩桌上："这事儿，必须按规矩办！我这就上报！"', character: '海瑞', scores: { dominance: 2, morality: 0, strategy: 2, loyalty: 0 } }
    ]
  },
  {
    id: 3,
    question: '老板迷上玄学/冥想，每天在办公室打坐炼丹只发玄妙语音，你会？',
    options: [
      { label: 'A', text: '苦研每条"青词"，试图从中解读谁要升职、谁要被祭天。', character: '严嵩', scores: { dominance: 1, morality: 4, strategy: 0, loyalty: 3 } },
      { label: 'B', text: '在老板门口替他挡掉所有烦人琐事，争做最贴心的总管。', character: '吕芳', scores: { dominance: 2, morality: 3, strategy: 3, loyalty: 0 } },
      { label: 'C', text: '自己也买同款道袍香炉，表现得比老板还沉迷，私下却在写日记盘算。', character: '徐阶', scores: { dominance: 1, morality: 3, strategy: 2, loyalty: 3 } },
      { label: 'D', text: '觉得公司没救了，开始写日记感叹："这世间，哪有什么真心？"', character: '沈一石', scores: { dominance: 5, morality: 2, strategy: 1, loyalty: 4 } }
    ]
  },
  {
    id: 4,
    question: '两个高管在办公室吵得要拉你评理，你会？',
    options: [
      { label: 'A', text: '掏出两杯茶："消消气，大家都是为了公司好。"', character: '吕芳', scores: { dominance: 2, morality: 3, strategy: 3, loyalty: 0 } },
      { label: 'B', text: '看看哪边更有权势，果断站队表忠心。', character: '赵贞吉', scores: { dominance: 4, morality: 4, strategy: 1, loyalty: 4 } },
      { label: 'C', text: '关上门，淡淡说："你们接着吵，我在这儿听着。"', character: '嘉靖', scores: { dominance: 0, morality: 4, strategy: 0, loyalty: 4 } },
      { label: 'D', text: '直接出门："你们吵架的时候，想想楼下员工的工资还没发！"', character: '海瑞', scores: { dominance: 2, morality: 0, strategy: 2, loyalty: 0 } }
    ]
  },
  {
    id: 5,
    question: '辛苦做的项目成了，老板把功劳全给了关系户，你会？',
    options: [
      { label: 'A', text: '笑容满面："您高升是应该的！我这点苦算什么！"', character: '严嵩', scores: { dominance: 1, morality: 4, strategy: 0, loyalty: 3 } },
      { label: 'B', text: '觉得自己被侮辱了，陷入深深的自我怀疑。', character: '沈一石', scores: { dominance: 5, morality: 2, strategy: 1, loyalty: 4 } },
      { label: 'C', text: '私下找老板："功劳给他没问题，但我这边的补偿得提前谈好。"', character: '郑泌昌', scores: { dominance: 5, morality: 5, strategy: 1, loyalty: 5 } },
      { label: 'D', text: '意识到这是权力洗牌，开始暗中观察谁才是下一个掌权者。', character: '陈洪', scores: { dominance: 5, morality: 4, strategy: 1, loyalty: 4 } }
    ]
  },
  {
    id: 6,
    question: '意识到自己成了公司错误决策的背锅侠，你会？',
    options: [
      { label: 'A', text: '准备随时上演"我疯了"戏码，把自己摘干净。', character: '杨金水', scores: { dominance: 4, morality: 4, strategy: 0, loyalty: 3 } },
      { label: 'B', text: '主动找到老板："这锅我来背！但您得给我一个晋升的机会！"', character: '赵贞吉', scores: { dominance: 4, morality: 4, strategy: 1, loyalty: 4 } },
      { label: 'C', text: '默默扛下所有："我不能让公司垮，就让我来做这个罪人吧。"', character: '胡宗宪', scores: { dominance: 2, morality: 1, strategy: 1, loyalty: 1 } },
      { label: 'D', text: '稳如泰山："老板，你想想，如果我倒了，谁还能给你干活？"', character: '严嵩', scores: { dominance: 1, morality: 4, strategy: 0, loyalty: 3 } }
    ]
  },
  {
    id: 7,
    question: '周末正在享受生活，老板突然发消息说"在吗？有个紧急会议"，你会？',
    options: [
      { label: 'A', text: '立刻秒回："在！有何吩咐？随时待命！"', character: '冯保', scores: { dominance: 2, morality: 1, strategy: 4, loyalty: 2 } },
      { label: 'B', text: '"回消息：你知道今天什么日子吗？我爸说的，休息日谁也别打扰我！"', character: '严世蕃', scores: { dominance: 5, morality: 5, strategy: 2, loyalty: 3 } },
      { label: 'C', text: '回复老板："加班没问题，按公司规定三倍工资，您看能批吗？"', character: '郑泌昌', scores: { dominance: 5, morality: 5, strategy: 1, loyalty: 5 } },
      { label: 'D', text: '先看群里其他人怎么回，等大家都回了再深思熟虑地回复。', character: '徐阶', scores: { dominance: 1, morality: 3, strategy: 2, loyalty: 3 } }
    ]
  },
  {
    id: 8,
    question: '如果你可以拥有一项职场超能力，最想要哪个？',
    options: [
      { label: 'A', text: '读心术：能瞬间听懂老板每句潜台词。', character: '嘉靖', scores: { dominance: 0, morality: 4, strategy: 0, loyalty: 4 } },
      { label: 'B', text: '金刚心：无论怎么被甩锅，心理素质永远不崩。', character: '胡宗宪', scores: { dominance: 2, morality: 1, strategy: 1, loyalty: 1 } },
      { label: 'C', text: '绝对执行力：不需要思考，老板让干啥就干啥，使命必达。', character: '何茂才', scores: { dominance: 5, morality: 5, strategy: 0, loyalty: 4 } },
      { label: 'D', text: '超强演技：随时随地根据环境切换自己的人格和面孔。', character: '杨金水', scores: { dominance: 4, morality: 4, strategy: 0, loyalty: 3 } }
    ]
  },
  {
    id: 9,
    question: '发现最好的同事在吃公司回扣，你会？',
    options: [
      { label: 'A', text: '暗中评估：这事儿他拿多少回扣，风险多大，值得不值得跟。', character: '郑泌昌', scores: { dominance: 5, morality: 5, strategy: 1, loyalty: 5 } },
      { label: 'B', text: '"直接拍出一张银行卡：算我一份！我爸是严嵩，出了事他能摆平！"', character: '严世蕃', scores: { dominance: 5, morality: 5, strategy: 2, loyalty: 3 } },
      { label: 'C', text: '写匿名信给老板，顺势给自己邀功。', character: '赵贞吉', scores: { dominance: 4, morality: 4, strategy: 1, loyalty: 4 } },
      { label: 'D', text: '在茶水间当场质问："你这么做，对得起公司吗？"', character: '海瑞', scores: { dominance: 2, morality: 0, strategy: 2, loyalty: 0 } }
    ]
  },
  {
    id: 10,
    question: 'KPI考核没达标，HR找你谈话，你要怎么度过这场"廷审"？',
    options: [
      { label: 'A', text: '当场卖惨："我为公司付出了这么多，我冤枉啊！"', character: '杨金水', scores: { dominance: 4, morality: 4, strategy: 0, loyalty: 3 } },
      { label: 'B', text: '掏出一叠数据："虽然没达标，但我的稳定性是公司最强的！"', character: '吕芳', scores: { dominance: 2, morality: 3, strategy: 3, loyalty: 0 } },
      { label: 'C', text: '拍桌子："这KPI有问题！我不服！我要申诉！"', character: '高拱', scores: { dominance: 3, morality: 1, strategy: 1, loyalty: 2 } },
      { label: 'D', text: '淡淡反问："你确信你要考核我？你知道我上面是谁吗？"', character: '嘉靖', scores: { dominance: 0, morality: 4, strategy: 0, loyalty: 4 } }
    ]
  },
  {
    id: 11,
    question: '年会抽中特等奖，老板暗示该捐出来给部门，你会？',
    options: [
      { label: 'A', text: '慷慨表态："这都是大家的功劳！我只是代领！捐！全捐！"', character: '赵贞吉', scores: { dominance: 4, morality: 4, strategy: 1, loyalty: 4 } },
      { label: 'B', text: '硬刚："凭什么？这是我凭运气中的，私有财产不可侵犯！"', character: '海瑞', scores: { dominance: 2, morality: 0, strategy: 2, loyalty: 0 } },
      { label: 'C', text: '圆滑处理："捐一半，另一半我替您打点关系。"', character: '严嵩', scores: { dominance: 1, morality: 4, strategy: 0, loyalty: 3 } },
      { label: 'D', text: '周全应对："捐！但您得让财务把这笔钱给我报销了。"', character: '吕芳', scores: { dominance: 2, morality: 3, strategy: 3, loyalty: 0 } }
    ]
  },
  {
    id: 12,
    question: '面对连续高强度加班赶工，你的内心OS是？',
    options: [
      { label: 'A', text: '"苦一苦员工，骂名老板担，只要我还有工资拿就行。"', character: '赵贞吉', scores: { dominance: 4, morality: 4, strategy: 1, loyalty: 4 } },
      { label: 'B', text: '"这世间繁华都是幻觉，我只是深夜里燃烧自己的蜡烛..."', character: '沈一石', scores: { dominance: 5, morality: 2, strategy: 1, loyalty: 4 } },
      { label: 'C', text: '"为了项目圆满，这点牺牲算什么？我撑得住！"', character: '胡宗宪', scores: { dominance: 2, morality: 1, strategy: 1, loyalty: 1 } },
      { label: 'D', text: '"总有一天，我要把这些加班时长甩他们脸上！"', character: '高拱', scores: { dominance: 3, morality: 1, strategy: 1, loyalty: 2 } }
    ]
  },
  {
    id: 13,
    question: '你如何评价职场"潜规则"？',
    options: [
      { label: 'A', text: '"潜规则也是规则，懂的人自然懂，不懂的迟早被淘汰。"', character: '严嵩', scores: { dominance: 1, morality: 4, strategy: 0, loyalty: 3 } },
      { label: 'B', text: '"厌恶，但为了保护那些更弱小的人，我不得不利用它。"', character: '胡宗宪', scores: { dominance: 2, morality: 1, strategy: 1, loyalty: 1 } },
      { label: 'C', text: '"只要能达到目标，所有规则都可以被重新解释。"', character: '张居正', scores: { dominance: 1, morality: 2, strategy: 2, loyalty: 3 } },
      { label: 'D', text: '"潜规则就是毒瘤！必须彻底铲除！哪怕鱼死网破！"', character: '海瑞', scores: { dominance: 2, morality: 0, strategy: 2, loyalty: 0 } }
    ]
  },
  {
    id: 14,
    question: '被外派到环境极差的地方开拓市场，你会？',
    options: [
      { label: 'A', text: '"我是奉旨办事！" 不问为什么，只问 deadline 是什么。', character: '何茂才', scores: { dominance: 5, morality: 5, strategy: 0, loyalty: 4 } },
      { label: 'B', text: '"带薪休假！每天摸鱼，定期汇报一些虚假进度。"', character: '沈一石', scores: { dominance: 5, morality: 2, strategy: 1, loyalty: 4 } },
      { label: 'C', text: '"搜集当地黑料，以此作为调回总部的筹码。"', character: '陈洪', scores: { dominance: 5, morality: 4, strategy: 1, loyalty: 4 } },
      { label: 'D', text: '"老板把我支走，是不是在总部搞什么见不得人的勾当？"', character: '嘉靖', scores: { dominance: 0, morality: 4, strategy: 0, loyalty: 4 } }
    ]
  },
  {
    id: 15,
    question: '站在人生十字路口，最重要的决定因素是？',
    options: [
      { label: 'A', text: '"利益最大化：只要投入产出比合理，规则都是可以谈的。"', character: '郑泌昌', scores: { dominance: 5, morality: 5, strategy: 1, loyalty: 5 } },
      { label: 'B', text: '"我能获得的权力上限，以及我能否掌控局面。"', character: '嘉靖', scores: { dominance: 0, morality: 4, strategy: 0, loyalty: 4 } },
      { label: 'C', text: '"我对某个人的承诺，或者我对这个体系的报恩。"', character: '吕芳', scores: { dominance: 2, morality: 3, strategy: 3, loyalty: 0 } },
      { label: 'D', text: '"我的资源和人脉：只要我爸还在位子上，我的路就是现成的。"', character: '严世蕃', scores: { dominance: 5, morality: 5, strategy: 2, loyalty: 3 } }
    ]
  },
  {
    id: 16,
    question: '公司推行全员996，年底却普调降薪，你会？',
    options: [
      { label: 'A', text: '"带头表态：你们先吃着苦，等我爸把我扶上去了，回头拉你们一把！"', character: '严世蕃', scores: { dominance: 5, morality: 5, strategy: 2, loyalty: 3 } },
      { label: 'B', text: '表面上配合，私下疯狂投简历找下家。', character: '沈一石', scores: { dominance: 5, morality: 2, strategy: 2, loyalty: 3 } },
      { label: 'C', text: '联合几个老员工一起跟老板谈判争取权益。', character: '吕芳', scores: { dominance: 2, morality: 3, strategy: 4, loyalty: 0 } },
      { label: 'D', text: '在工作群秒回："收到！坚决拥护公司决定！" 然后继续加班。', character: '何茂才', scores: { dominance: 5, morality: 5, strategy: 0, loyalty: 4 } }
    ]
  },
  {
    id: 17,
    question: '空降了一个完全不懂业务的新领导，你会？',
    options: [
      { label: 'A', text: '表面恭敬服从，按自己节奏做自己的事。', character: '徐阶', scores: { dominance: 1, morality: 3, strategy: 3, loyalty: 2 } },
      { label: 'B', text: '主动靠拢，成为新领导最信任的心腹。', character: '冯保', scores: { dominance: 2, morality: 1, strategy: 4, loyalty: 2 } },
      { label: 'C', text: '公开跟他对着干，让他知道谁才是懂业务的人。', character: '高拱', scores: { dominance: 4, morality: 1, strategy: 1, loyalty: 1 } },
      { label: 'D', text: '越级汇报给大老板，让上面知道这个领导不行。', character: '陈洪', scores: { dominance: 5, morality: 4, strategy: 2, loyalty: 3 } }
    ]
  },
  {
    id: 18,
    question: '猎头在LinkedIn上私信挖你，开出了涨薪50%的条件，你会？',
    options: [
      { label: 'A', text: '礼貌拒绝，忠于现公司不轻易动摇。', character: '齐大柱', scores: { dominance: 2, morality: 0, strategy: 4, loyalty: 0 } },
      { label: 'B', text: '去面试看看行情，但不轻易做决定。', character: '张居正', scores: { dominance: 1, morality: 2, strategy: 3, loyalty: 3 } },
      { label: 'C', text: '立马开聊，争取两边同时抬价获取最大利益。', character: '赵贞吉', scores: { dominance: 4, morality: 4, strategy: 2, loyalty: 4 } },
      { label: 'D', text: '"直接把offer截图群发给老板和HR：你们看着办，我爸还不知道这件事。"', character: '严世蕃', scores: { dominance: 5, morality: 5, strategy: 2, loyalty: 3 } }
    ]
  },
  {
    id: 19,
    question: '你辛苦带了大半年的项目，被公司以战略调整为由砍掉了，你会？',
    options: [
      { label: 'A', text: '二话不说接受，问老板下一个项目在哪。', character: '齐大柱', scores: { dominance: 2, morality: 0, strategy: 5, loyalty: 0 } },
      { label: 'B', text: '郁闷很久，深夜发emo朋友圈抒发不甘。', character: '沈一石', scores: { dominance: 5, morality: 2, strategy: 1, loyalty: 4 } },
      { label: 'C', text: '算算这项目还剩多少油水，没有就及时止损换下一个。', character: '郑泌昌', scores: { dominance: 5, morality: 5, strategy: 1, loyalty: 5 } },
      { label: 'D', text: '觉得公司方向有问题，开始寻找退路。', character: '裕王', scores: { dominance: 2, morality: 4, strategy: 3, loyalty: 2 } }
    ]
  },
  {
    id: 20,
    question: '同事在领导面前把你的功劳全抢了，你会？',
    options: [
      { label: 'A', text: '当场不发作，以后找机会慢慢算这笔账。', character: '徐阶', scores: { dominance: 1, morality: 3, strategy: 3, loyalty: 2 } },
      { label: 'B', text: '当场怼回去："这部分全部是我的工作成果。"', character: '海瑞', scores: { dominance: 2, morality: 0, strategy: 3, loyalty: 0 } },
      { label: 'C', text: '私下请领导吃饭，在饭桌上"不经意地"提起这件事。', character: '严嵩', scores: { dominance: 1, morality: 4, strategy: 1, loyalty: 3 } },
      { label: 'D', text: '无所谓，有实力的人不在乎一次两次的得失。', character: '胡宗宪', scores: { dominance: 2, morality: 1, strategy: 2, loyalty: 1 } }
    ]
  },
  {
    id: 21,
    question: '公司来了个新人，能力很强但不太合群，你会？',
    options: [
      { label: 'A', text: '完全不在意，各做各的事，能力说话。', character: '海瑞', scores: { dominance: 2, morality: 0, strategy: 2, loyalty: 0 } },
      { label: 'B', text: '主动拉拢，请他吃饭把他变成自己人。', character: '杨金水', scores: { dominance: 4, morality: 4, strategy: 1, loyalty: 3 } },
      { label: 'C', text: '善意提醒他公司的复杂人际关系网。', character: '吕芳', scores: { dominance: 2, morality: 3, strategy: 4, loyalty: 0 } },
      { label: 'D', text: '暗中观察，看他是哪一派的人再决定态度。', character: '嘉靖', scores: { dominance: 0, morality: 4, strategy: 1, loyalty: 4 } }
    ]
  },
  {
    id: 22,
    question: '部门预算被砍了60%，但业务目标却翻了一倍，你会？',
    options: [
      { label: 'A', text: '据理力争，找老板要回预算不然没法干。', character: '高拱', scores: { dominance: 4, morality: 1, strategy: 1, loyalty: 1 } },
      { label: 'B', text: '用现有资源精打细算，制定最小可行方案。', character: '张居正', scores: { dominance: 1, morality: 2, strategy: 3, loyalty: 3 } },
      { label: 'C', text: '表面答应一定完成，实际悄悄降低交付标准。', character: '郑泌昌', scores: { dominance: 5, morality: 5, strategy: 2, loyalty: 4 } },
      { label: 'D', text: '提前准备好完不成目标的免责说明。', character: '裕王', scores: { dominance: 2, morality: 4, strategy: 4, loyalty: 2 } }
    ]
  },
  {
    id: 23,
    question: '你的下属越级向大老板汇报了你的方案，你会？',
    options: [
      { label: 'A', text: '立刻找下属谈话，明确汇报红线不能破。', character: '嘉靖', scores: { dominance: 0, morality: 4, strategy: 1, loyalty: 4 } },
      { label: 'B', text: '直接找 HR 给他记过，越级汇报是坏了规矩，必须严惩。', character: '何茂才', scores: { dominance: 5, morality: 5, strategy: 0, loyalty: 4 } },
      { label: 'C', text: '觉得被背叛了，之后找机会冷处理他。', character: '陈洪', scores: { dominance: 5, morality: 4, strategy: 2, loyalty: 3 } },
      { label: 'D', text: '无所谓，只要活儿干完了就行。', character: '沈一石', scores: { dominance: 5, morality: 2, strategy: 1, loyalty: 4 } }
    ]
  },
  {
    id: 24,
    question: '你的老上司跳槽去竞争对手了，想带你一起走，你会？',
    options: [
      { label: 'A', text: '感恩追随，义字当头，二话不说跟他走。', character: '齐大柱', scores: { dominance: 2, morality: 0, strategy: 5, loyalty: 0 } },
      { label: 'B', text: '认真对比两边的条件和前景，理性决策。', character: '赵贞吉', scores: { dominance: 4, morality: 4, strategy: 2, loyalty: 4 } },
      { label: 'C', text: '答应跟去，但用这个offer跟现公司谈条件。', character: '严嵩', scores: { dominance: 1, morality: 4, strategy: 1, loyalty: 3 } },
      { label: 'D', text: '不跟，在原公司稳扎稳打等晋升机会。', character: '吕芳', scores: { dominance: 2, morality: 3, strategy: 4, loyalty: 0 } }
    ]
  },
  {
    id: 25,
    question: '公司内网上有人匿名爆料了公司的黑料，你会？',
    options: [
      { label: 'A', text: '默默点赞，自己心里也有同感。', character: '高拱', scores: { dominance: 4, morality: 1, strategy: 2, loyalty: 1 } },
      { label: 'B', text: '赶紧截图发给老板，借机邀功表忠心。', character: '陈洪', scores: { dominance: 5, morality: 4, strategy: 2, loyalty: 3 } },
      { label: 'C', text: '跟帖理性分析现状，不站队不煽动。', character: '张居正', scores: { dominance: 1, morality: 2, strategy: 3, loyalty: 3 } },
      { label: 'D', text: '无视，专心做好自己手头的工作。', character: '海瑞', scores: { dominance: 2, morality: 0, strategy: 2, loyalty: 0 } }
    ]
  },
  {
    id: 26,
    question: '老板让你做一个明显踩红线的操作，你会？',
    options: [
      { label: 'A', text: '直接拒绝并保留证据，准备离职仲裁。', character: '海瑞', scores: { dominance: 2, morality: 0, strategy: 4, loyalty: 0 } },
      { label: 'B', text: '先答应去办，但暗中留一手保护自己。', character: '徐阶', scores: { dominance: 1, morality: 3, strategy: 4, loyalty: 2 } },
      { label: 'C', text: '装病请假，躲过这茬让事情自然过去。', character: '杨金水', scores: { dominance: 4, morality: 4, strategy: 1, loyalty: 3 } },
      { label: 'D', text: '毫不犹豫去办，反正出了事有老板顶着，我就是个干活的。', character: '何茂才', scores: { dominance: 5, morality: 5, strategy: 0, loyalty: 4 } }
    ]
  },
  {
    id: 27,
    question: '公司开始严格查考勤，迟到一次罚款500，你会？',
    options: [
      { label: 'A', text: '每天提前到，做一个零瑕疵的模范员工。', character: '齐大柱', scores: { dominance: 2, morality: 0, strategy: 5, loyalty: 0 } },
      { label: 'B', text: '找HR了解政策细节和弹性边界，争取灵活处理。', character: '吕芳', scores: { dominance: 2, morality: 3, strategy: 4, loyalty: 0 } },
      { label: 'C', text: '该迟到还是迟到，罚款就罚款吧无所谓。', character: '沈一石', scores: { dominance: 5, morality: 2, strategy: 1, loyalty: 4 } },
      { label: 'D', text: '想办法找人代打卡规避处罚。', character: '郑泌昌', scores: { dominance: 5, morality: 5, strategy: 2, loyalty: 4 } }
    ]
  },
  {
    id: 28,
    question: '部门团建方案你精心准备了一个提案，被全组否决了，你会？',
    options: [
      { label: 'A', text: '放弃坚持，服从多数人的意见。', character: '裕王', scores: { dominance: 2, morality: 4, strategy: 3, loyalty: 2 } },
      { label: 'B', text: '据理力争，用数据论证你的方案更好。', character: '张居正', scores: { dominance: 1, morality: 2, strategy: 3, loyalty: 3 } },
      { label: 'C', text: '"拍桌子冷笑：我爸说我的方案好！你们有意见找我爸去！"', character: '严世蕃', scores: { dominance: 5, morality: 5, strategy: 2, loyalty: 3 } },
      { label: 'D', text: '表面服从，私下再找领导单独沟通争取支持。', character: '徐阶', scores: { dominance: 1, morality: 3, strategy: 3, loyalty: 2 } }
    ]
  },
  {
    id: 29,
    question: '你不经意间发现公司在进行税务违规操作，你会？',
    options: [
      { label: 'A', text: '立刻匿名举报给税务部门，坚决不妥协。', character: '海瑞', scores: { dominance: 2, morality: 0, strategy: 4, loyalty: 0 } },
      { label: 'B', text: '当没看见，跟我没关系的事不掺和。', character: '严嵩', scores: { dominance: 1, morality: 4, strategy: 1, loyalty: 3 } },
      { label: 'C', text: '悄悄收集证据，作为未来跟公司谈判的筹码。', character: '赵贞吉', scores: { dominance: 4, morality: 4, strategy: 2, loyalty: 4 } },
      { label: 'D', text: '找老板私下表达你的担忧，建议合规整改。', character: '胡宗宪', scores: { dominance: 2, morality: 1, strategy: 2, loyalty: 1 } }
    ]
  },
  {
    id: 30,
    question: '你新晋升为部门主管，手下几个资深老员工不服你，你会？',
    options: [
      { label: 'A', text: '先立规矩杀鸡儆猴，不服从就走人。', character: '嘉靖', scores: { dominance: 0, morality: 4, strategy: 1, loyalty: 4 } },
      { label: 'B', text: '逐个请吃饭聊天，在酒桌上把关系摆平。', character: '吕芳', scores: { dominance: 2, morality: 3, strategy: 4, loyalty: 0 } },
      { label: 'C', text: '用业务能力正面碾压他们，证明自己够格。', character: '高拱', scores: { dominance: 4, morality: 1, strategy: 2, loyalty: 1 } },
      { label: 'D', text: '放权给他们负责具体事务，你抓大放小管方向。', character: '胡宗宪', scores: { dominance: 2, morality: 1, strategy: 2, loyalty: 1 } }
    ]
  }
];

export const characters = [
  { name: '海瑞', title: '职场孤勇者', description: '刚正不阿，坚守原则，敢于直言，是职场中的一股清流。他宁可站着死，绝不跪着生，在腐败横行的环境中始终如一。在职场中，你是那个敢说真话的人，但也要明白——有时候保护自己，才能保护更多。', quote: '天下之人，不当以毁誉论英雄。', advice: '你拥有极强的原则性，这是稀缺品质。但需注意，刚极易折，适当学会迂回周旋，才能保护更多你想要维护的东西。', scores: { dominance: 2, morality: 0, strategy: 2, loyalty: 0 }, color: '#FFB4B4' },
  { name: '嘉靖', title: '权力操盘手', description: '深居简出，掌控全局，善于制衡各方势力而不亲自动手。他二十多年不上朝，但朝堂之上的一举一动尽在掌握。在职场中，你是那个看似不在场、实则无人能绕过的存在，沉默本身就是你最有力的语言。', quote: '朕不视朝，天下就不可治了吗？', advice: '你深谙权力平衡之道，善于在幕后运筹帷幄。但需警惕过度抽离会让自己失去对真实情况的第一手感知，偶尔还需亲临一线。', scores: { dominance: 0, morality: 4, strategy: 0, loyalty: 4 }, color: '#A8E6CF' },
  { name: '严嵩', title: '职场老狐狸', description: '老谋深算，左右逢源，深谙职场生存之道。二十年首辅不是白当的，他知道什么时候该笑、什么时候该跪、什么时候该让儿子顶锅。在职场中，你是那种从不出头但也从未出局的人，活得久才是硬道理。', quote: '老臣这二十年，哪一天不是如履薄冰？', advice: '你的生存智慧无与伦比，知道什么时候进、什么时候退。但需记得，站队一辈子最终可能两边都不讨好，适当保留自己的底线。', scores: { dominance: 1, morality: 4, strategy: 0, loyalty: 3 }, color: '#D4B8E0' },
  { name: '吕芳', title: '大内总管', description: '八面玲珑，善于协调，是领导身边的贴心人。他能在皇帝和百官之间走出第三条路，靠的不是权力，而是让人放心。在职场中，你是那个知道老板要什么、也帮同事解决什么的人，谁离了你都转不动。', quote: '奴婢不是怕事，是怕给主子惹事。', advice: '你是天生的关系管理者，能将复杂的利益纠葛处理得当。但不要总把自己放在"服务者"的位置，你的价值远不止于协调周旋。', scores: { dominance: 2, morality: 3, strategy: 3, loyalty: 0 }, color: '#87CEEB' },
  { name: '胡宗宪', title: '负重前行者', description: '忠肝义胆，忍辱负重，为大局牺牲小我。他在严党和清流之间苦苦周旋，扛着改稻为桑的骂名做着利国利民的事。在职场中，你是那个默默承受最多、却从不解释的人——团队的脊梁从来不会喊疼。', quote: '我胡宗宪做事，对得起良心，对得起朝廷。', advice: '你是团队中最可靠的脊梁，总在关键时刻挺身而出。但不要让自己成为永远的"背锅侠"，学会保护自己的声誉和成果同样重要。', scores: { dominance: 2, morality: 1, strategy: 1, loyalty: 1 }, color: '#98D8C8' },
  { name: '沈一石', title: '文艺青年', description: '才华横溢，看透世事，却难以适应职场规则。他是商人中的诗人，在丝绸生意之外追求的是一点点体面和美感，最终还是被吃人的游戏规则吞噬。在职场中，你是那个既聪明又敏感的人——什么都看得透，却什么都不想争。', quote: '这世间，哪有什么真心？', advice: '你拥有敏锐的感知力和独特的审美，能看到别人看不到的东西。但理想主义容易让你陷入虚无，试着在现实世界中找到安放才华的锚点。', scores: { dominance: 5, morality: 2, strategy: 1, loyalty: 4 }, color: '#FFD3A5' },
  { name: '杨金水', title: '影帝级选手', description: '演技精湛，善于伪装，关键时刻能屈能伸。他从装疯卖傻到全身而退，每一步都是精心设计的人设管理。在职场中，你是那种见人说人话、见鬼说鬼话的高手，保护色厚到连自己都快忘了本来的样子。', quote: '我不能说，我不能说啊！', advice: '你的适应力极强，能在各种环境下切换角色，这是了不起的生存天赋。但演得太久会忘记自己是谁，适时卸下面具，面对真实的自己。', scores: { dominance: 4, morality: 4, strategy: 0, loyalty: 3 }, color: '#DDA0DD' },
  { name: '赵贞吉', title: '精致利己者', description: '精于算计，见风使舵，永远把自身利益放在第一位。他是朝堂上的墙头草，每次站队都精准踩在胜利者一边。在职场中，你是那种永远不会吃亏的人——你投出去的每一分忠诚，都算好了回报率。', quote: '下官不敢说别人，下官只敢说自己。', advice: '你对自己的利益边界有清晰认知，不会被情绪左右判断。这是职场生存的基础能力，但也要记得：没有永远的靠山，只有永远的实力。', scores: { dominance: 4, morality: 4, strategy: 1, loyalty: 4 }, color: '#F0E68C' },
  { name: '徐阶', title: '终极潜伏者', description: '隐忍待时，厚积薄发，善于在暗处布局。他在严嵩手下装了二十年孙子，就为了最后那一刻的翻盘。在职场中，你是那种被人低估却从未停止蓄力的人——当所有人以为你认输的时候，你才刚刚开始。', quote: '忍一时风平浪静，退一步海阔天空。', advice: '你是长线布局的大师，懂得把眼光放到十年之后。隐忍力是你最强的武器，但要确保"忍"是为了"发"，而非永远的等待。', scores: { dominance: 1, morality: 3, strategy: 2, loyalty: 3 }, color: '#B8D4E3' },
  { name: '冯保', title: '长线投资人', description: '眼光长远，善于投资，懂得放长线钓大鱼。他从一个小太监一步步成为司礼监掌印，靠的不是眼前利益而是对未来局势的精准判断。在职场中，你是那种愿意用今天的付出换取明天回报的人，耐心是你最大的本钱。', quote: '小的眼光虽浅，但也知道什么叫投资未来。', advice: '你有先见之明，懂得在对的时机押注对的人。你的投资型思维让你比别人更早布局，但记住不要把所有筹码押在一处。', scores: { dominance: 2, morality: 1, strategy: 4, loyalty: 2 }, color: '#D4E6F1' },
  { name: '高拱', title: '热血改革派', description: '锐意进取，敢于改革，充满激情与斗志。他是大明官场的一把火，烧得了旧弊也烧得到自己。在职场中，你是那种眼里揉不得沙子的人，发现问题就想立刻解决——效率是你的信仰，耐心是你的短板。', quote: '朝廷之中，总得有人说真话！', advice: '你的热血和冲劲是团队中最稀缺的能量来源。但改革不能只靠一腔孤勇，学会找到盟友、选对时机，你的热情才能结出果实。', scores: { dominance: 3, morality: 1, strategy: 1, loyalty: 2 }, color: '#FFE4E1' },
  { name: '张居正', title: '战略建筑师', description: '高瞻远瞩，善于规划，是杰出的战略家。他不看眼下得失，只算十年大账，一条鞭法改变了大明的财政格局。在职场中，你是那个能画出三年路线图的人——别人在纠结今天的KPI，你在规划明年的赛道。', quote: '治国之要，在于考成。', advice: '你拥有宏大视野和系统性思维，能设计出横跨多年的路线图。但要记得：再好的战略也需要落地的细节，别忽略了执行层面的人心。', scores: { dominance: 1, morality: 2, strategy: 2, loyalty: 3 }, color: '#E8F5E9' },
  { name: '齐大柱', title: '忠义铁汉', description: '忠心耿耿，义薄云天，是值得信赖的战友。他不需要知道为什么，只需要知道该做什么，交给他的事就一定办到。在职场中，你是那种老板最放心的人——靠谱就是你对这个世界最大的善意，也是最硬的实力。', quote: '大人让我去，我便去。', advice: '你的忠诚和执行力是团队的基石，有一种让人无条件信任的力量。但忠诚要有边界，学会判断什么值得、什么不值得。', scores: { dominance: 2, morality: 0, strategy: 4, loyalty: 0 }, color: '#FFF5E6' },
  { name: '陈洪', title: '野心刀刃', description: '野心勃勃，心狠手辣，是危险的权力追求者。他踩着所有人的肩膀往上爬，每一步都带着算计和鲜血。在职场中，你是那种不达目的不罢休的人——你相信权力不是被给予的，而是被夺取的。', quote: '有些事，做了就不能回头。', advice: '你的目标感和行动力超群，不会被道德犹豫拖慢脚步。但要时刻问自己：你追求的权力终究是为了什么？不要赢了位置、输了自己。', scores: { dominance: 5, morality: 4, strategy: 1, loyalty: 4 }, color: '#F5B7B1' },
  { name: '裕王', title: '焦虑继承人', description: '谨小慎微，压力巨大，在继承之路上艰难前行。他是大明的太子，却活得比任何臣子都小心翼翼，生怕一步走错就万劫不复。在职场中，你是那个背着最多期待和压力的人——所有人都看着你，但没有人真正理解你有多难。', quote: '我做这些，无非是想活下去罢了。', advice: '你身处高位却如履薄冰，这种谨慎让你避开了许多陷阱。但过度焦虑会让你在关键时刻错失良机，试着建立自己的判断自信。', scores: { dominance: 2, morality: 4, strategy: 3, loyalty: 2 }, color: '#EBDEF0' },
  { name: '郑泌昌', title: '官场投机者', description: '精于算计、见风使舵，在改稻为桑中扮演"官场商人"。他看似忠厚老实，实则处处为自己盘算每一笔利益。在职场中，你是那种在规则边缘游走的人——把每一场工作都当成交易来做，利益到了什么都好说。', quote: '生意是生意，人情是人情。', advice: '你把博弈规则玩得很透，能在夹缝中找到自己的利润空间。但投机永远是短线思维，真正长久的安全感来自建立不可替代的价值。', scores: { dominance: 5, morality: 5, strategy: 1, loyalty: 5 }, color: '#D7BDE2' },
  { name: '何茂才', title: '愚蠢执行者', description: '粗暴蛮干、拿鸡毛当令箭，是领导手中最危险也最好用的棋子。他缺乏独立判断却野心勃勃，执行命令时不择手段，最终成为所有人的替罪羊。在职场中，你是那种执行力满分但判断力不及格的人——能跑得很快，但可能跑错了方向。', quote: '我是奉旨办事！', advice: '你的执行力强但缺乏独立判断，这让你容易被利用。在执行任何命令之前，先花三秒钟问自己：这个命令的后果承担者是我还是发令者？', scores: { dominance: 5, morality: 5, strategy: 0, loyalty: 4 }, color: '#F5B7B1' },
{ name: '严世蕃', title: '嚣张官二代', description: '严嵩之子，仗着父亲的权势横行朝堂，目中无人，嚣张跋扈。在职场中，你是那种让人又恨又怕的关系户——你的底气不是业绩，而是身后那座大山。不需要努力，不需要弯腰，一句话就能碾碎别人的努力。', quote: '你知道我爸是谁吗？', advice: '你的底气来自资源和人脉，强势是你的标签。但靠山终有倒的一天，真正的实力才是你安身立命的根本，别让自己活成一张单薄的靠山名片。', scores: { dominance: 5, morality: 5, strategy: 2, loyalty: 3 }, color: '#E8AA42' }
];

export const dimensionLabels = {
  dominance: '支配',
  morality: '道义',
  strategy: '谋略',
  loyalty: '忠诚'
};