// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000,  // 验证有效期（90天，约3个月）
    adminLocalStorageKey: 'adminPasswordVerified'  // 新增的管理员验证状态的键名
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    heimuerwg: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳-暗紫',
        detail: 'https://heimuer.tv', 
    },
    heimuercn: {
        api: 'https://json02.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳-紫夜',
        detail: 'https://heimuer.tv', 
    },
    dianyangtiantan: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影-紫夜',
        detail: 'http://caiji.dyttzyapi.com', 
    },
    tianya: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯-紫夜',
    },
    yingshegc: {
       api: 'https://cj.lziapi.com/api.php/provide/vod',
       name: '影视-紫夜',
    },
     xiaomaomi: {
         api: 'http://zy.xmm.hk/api.php/provide/vod',
         name: '猫咪-紫夜',
         detail: 'http://zy.xmm.hk',
    },
    baiduyu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度-紫夜',
        detail: 'https://api.apibdzy.com',
    },
    zhiyeaz: {
        api: 'https://360zyzz.com/api.php/provide/vod',
        name: '360-暗紫',
    },
    zhiyezy: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360-紫夜',
        detail: 'https://360zy.com', 
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '美空-紫夜',
    },
    baofeng: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风-紫夜',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙-紫夜',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速-紫夜',
        detail: 'https://jszyapi.com', 
    },
    douban: {
        api: 'https://dbzy.com/api.php/provide/vod',
        name: '豆瓣-暗紫',
    },
    douban5: {
        api: 'https://caiji.dbzy5.com/api.php/provide/vod',
        name: '豆瓣-紫夜',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪-紫夜',
    },
    moduzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都-紫夜',
    },
    zuida: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大-紫夜'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽-紫夜'
    },
    wanwanHY: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺-暗紫'
    },
    wanwanGN: {
        api: 'https://ww.tyyszy5.com/api.php/provide/vod',
        name: '旺旺-紫夜'
    },
    ikunzy: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: '爱坤-紫夜'
    },
    liangzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子-紫夜',
        detail: 'https://lzizy.net'
    },
    subo: {
        api: 'https://subocj.com/api.php/provide/vod',
        name: '速播-紫夜',
    },
    fengchao: {
        api: 'https://api.fczy888.me/api.php/provide/vod',
        name: '蜂巢-紫夜'
    },
    youku: {
        api: 'https://api.ukuapi88.com/api.php/provide/vod',
        name: '尤库-紫夜',
        detail: 'https://www.ukuzy.com',
    },
    maota: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台-紫夜'
    },
    jikun: {
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        name: '基库-紫夜',
        detail: 'https://jkunzyapi.com',
    },
    souav: {
        api: 'https://api.souavzy.vip/api.php/provide/vod',
        name: '搜AV-紫夜',
        detail: 'https://api.souavzy.vip'
    },
    yutu: {
        api: 'https://apiyutu.com/api.php/provide/vod',
        name: '玉兔-紫夜',
        detail: 'https://yutuzy10.com'
    },
    baiwang: {
        api: 'https://api.bwzyz.com/api.php/provide/vod',
        name: '百万-紫夜',
        detail: 'https://api.bwzym3u8.com'
    },
    huangseck: {
        api: 'https://hsckzy888.com/api.php/provide/vod',
        name: '凰仓库-紫夜',
        detail: 'https://hsckzy.vip'
    },
    kuaibo: {
        api: 'https://gayapi.com/api.php/provide/vod',
        name: '快播-紫夜',
        detail: 'https://www.kbzy1.com',
        adult: true
    },
    haohua: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '豪华-紫夜服务',
        detail: 'https://hhzyapi.com',
        adult: true
    },
    xinlang: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪-紫夜服务',
        detail: 'https://www.xinlangzy.com',
        adult: true
    },
    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod',
        name: '虎牙-紫夜服务',
        detail: 'https://www.huyaapi.com',
        adult: true
    },
    jinyan: {
        api: 'https://jyzyapi.com/provide/vod',
        name: '金鹰-紫夜服务',
        detail: 'https://jyzyapi.comm',
        adult: true
    },
    guangsu: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod',
        name: '光速-紫夜服务',
        detail: 'https://www.guangsuzy.com',
        adult: true
    },
    taopian: {
        api: 'https://taopianapi.com/cjapi/sda/vod',
        name: '淘片-紫夜',
        adult: true
    },
    kuaiche: {
        api: 'https://caiji.kuaichezy.org/api.php/provide/vod',
        name: '快车-紫夜',
        detail: 'https://caiji.kuaichezy.org',
        adult: true
    },
    feifangaa: {
        api: 'https://api.ffzyapi.com/api.php/provide/vod',
        name: '非凡-暗紫',
        detail: 'http://ffzy.tv',
        adult: true
    },
    feifang: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡-紫夜',
        detail: 'http://ffzy5.tv',
        adult: true
    },
    xiami: {
        api: 'https://zy.hls.one/api.php/provide/vod',
        name: '虾米-紫夜',
        adult: true
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花-紫夜',
        adult: true
    },
    qilin: {
        api: 'https://www.qilinzyz.com/api.php/provide/vod',
        name: '麒麟-紫夜',
        detail: 'https://www.qilinzyz.com',
        adult: true
    },
    niuniu: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod',
        name: '牛牛-紫夜',
        detail: 'https://api.niuniuzy.me',
        adult: true
    },
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod',
        name: '索尼-紫夜',
        detail: 'https://suonizy.net',
        adult: true
    },
    huohua: {
        api: 'https://cj.huohua.live/api.php/provide/vod',
        name: '火花-紫夜',
        detail: 'https://cj.huohua.live',
        adult: true
    },
    fantuan: {
        api: 'https://www.fantuan.tv/api.php/provide/vod',
        name: '饭团-紫夜',
        adult: true
    },
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七-紫夜',
        adult: true
    },
    hongniu2: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: '红牛2-暗紫',
        adult: true
    },
    hongniu3: {
        api: 'https://www.hongniuzy3.com/api.php/provide/vod',
        name: '红牛3-紫夜',
        adult: true
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: '爱奇艺-紫夜服务',
        adult: true
    },
    huaweiba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧-紫夜服务',
        adult: true
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
    // 下面是一些成人内容的API源，默认隐藏，使用本项目浏览黄色内容违背项目初衷
    // 互联网上传播的色情内容将人彻底客体化、工具化，是性别解放和人类平等道路上的巨大障碍。
    // 这些黄色影片是资本主义父权制压迫的最恶毒体现，它将暴力和屈辱商品化，践踏人的尊严，对受害者造成无法弥愈的伤害，并毒害社会关系。
    // 资本为了利润，不惜将最卑劣的剥削（包括对受害者和表演者的剥削）和暴力商品化，
    // 把性别剥削塑造成“性享受”麻痹观众的意识，转移我们对现实生活中矛盾和压迫的注意力。
    // 这些影片和背后的产业已经使数百万男女“下海”，出卖自己的身体，甚至以此为生计。
    // 而作为观众无辜吗？毫无疑问，他们促成了黄色产业链的再生产。
    // 我们提供此警告，是希望您能认清这些内容的本质——它们是压迫和奴役的工具，而非娱乐。
    // ckzy: {
    //     api: 'https://www.ckzy1.com',
    //     name: 'CK资源',
    //     adult: true
    // },
    // jkun: {
    //     api: 'https://jkunzyapi.com',
    //     name: 'jkun资源',
    //     adult: true
    // },
    // bwzy: {
    //     api: 'https://api.bwzym3u8.com',
    //     name: '百万资源',
    //     adult: true
    // },
    // souav: {
    //     api: 'https://api.souavzy.vip',
    //     name: 'souav资源',
    //     adult: true
    // },
    // r155: {
    //     api: 'https://155api.com',
    //     name: '155资源',
    //     adult: true
    // },
    // lsb: {
    //     api: 'https://apilsbzy1.com',
    //     name: 'lsb资源',
    //     adult: true
    // },
    // huangcang: {
    //     api: 'https://hsckzy.vip',
    //     name: '黄色仓库',
    //     adult: true,
    //     detail: 'https://hsckzy.vip'
    // },
    // yutu: {
    //     api: 'https://yutuzy10.com',
    //     name: '玉兔资源',
    //     adult: true
    // },

    // 下面是资源失效率高的API源，不建议使用
    // subo: {
    //     api: 'https://subocaiji.com/api.php/provide/vod',
    //     name: '速播资源'
    // },
    // fczy: {
    //     api: 'https://api.fczy888.me/api.php/provide/vod',
    //     name: '蜂巢资源'
    // },
    // ukzy: {
    //     api: 'https://api.ukuapi88.com/api.php/provide/vod',
    //     name: 'U酷资源'
    // },
};

// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
