let Mock = require("mockjs");
let arrs = ["五中省油", "无懈可击", "无法无天"]
let types = [{
    id: 0,
    "title": "推荐",
    children: {
        id: 1110,
        "title": "热门推荐",
        goods: [{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        },{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 1,
    "title": "食品",
    children: {
        id: 1110,
        "title": "食品",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 2,
    "title": "女装",
    children: {
        id: 1110,
        "title": "女装",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 3,
    "title": "手机",
    children: {
        id: 1110,
        title: "手机",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 4,
    "title": "男装",
    children: {
        id: 1110,
        title: "男装",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 5,
    "title": "鞋包",
    children: {
        id: 1110,
        title: "鞋包",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 6,
    "title": "电器",
    children: {
        id: 1110,
        title: "电器",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 7,
    "title": "健康",
    children: {
        id: 1110,
        title: "健康",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 8,
    "title": "百货",
    children: {
        id: 1110,
        title: "百货",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 9,
    "title": "母婴",
    children: {
        id: 1110,
        title: "母婴",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 10,
    "title": "数码",
    children: {
        id: 1110,
        title: "数码",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 11,
    "title": "内衣",
    children: {
        id: 1110,
        title: "内衣",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 12,
    "title": "生鲜",
    children: {
        id: 1110,
        title: "生鲜",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 13,
    "title": "洗护",
    children: {
        id: 1110,
        title: "西湖",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 14,
    "title": "美妆",
    children: {
        id: 1110,
        title: "美妆",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 15,
    "title": "运动",
    children: {
        id: 1110,
        title: "运动",
        goods: [{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 16,
    "title": "家装",
    children: {
        id: 1110,
        title: "假装",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 17,
    "title": "家纺",
    children: {
        id: 1110,
        title: "甲方",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 18,
    "title": "车品",
    children: {
        id: 1110,
        title: "车品",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 19,
    "title": "图书",
    children: {
        id: 1110,
        title: "图书",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 20,
    "title": "充值",
    children: {
        id: 1110,
        title: "充值",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 21,
    "title": "海淘",
    children: {
        id: 1110,
        title: "海淘",
        goods: [{
            "id": "@id",
            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#000','@increment')",
            "text": "@cword(4)"
        }]
    }
}, {
    id: 22,
    "title": "品牌",
    children: {
        id: 1110,
        title: "品牌",
        goods: [{
            "id": "@id",

            "title": "商品1",
            "price": 999,
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    }
}]
Mock.mock("/types", "get", types)

Mock.mock("/get", "get", arrs)
Mock.mock("/login","post",function(){
    return {
        message:"验证成功",
        token:"无懈可击"
    }
})