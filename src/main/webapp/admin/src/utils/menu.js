const menu = {
    list() {
        return [

    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"板块信息管理",
                        "menuJump":"列表",
                        "tableName":"bankuai"
                    }
                ],
                "menu":"板块信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"板块类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryBankuai"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"景点类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJingdian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"房间类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJiudian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"路线类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryLvyouluxian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNews"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"旅游景点管理",
                        "menuJump":"列表",
                        "tableName":"jingdian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"旅游景点留言管理",
                        "menuJump":"列表",
                        "tableName":"jingdianLiuyan"
                    }
                ],
                "menu":"旅游景点管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"酒店信息管理",
                        "menuJump":"列表",
                        "tableName":"jiudian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"酒店信息留言管理",
                        "menuJump":"列表",
                        "tableName":"jiudianLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"酒店信息订单管理",
                        "menuJump":"列表",
                        "tableName":"jiudianOrder"
                    }
                ],
                "menu":"酒店信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"留言版管理",
                        "menuJump":"列表",
                        "tableName":"liuyan"
                    }
                ],
                "menu":"留言版管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"旅游路线管理",
                        "menuJump":"列表",
                        "tableName":"lvyouluxian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"旅游路线留言管理",
                        "menuJump":"列表",
                        "tableName":"lvyouluxianLiuyan"
                    }
                ],
                "menu":"旅游路线管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"板块信息管理",
	                    "menuJump":"列表",
	                    "tableName":"bankuai"
	                }
	            ],
	            "menu":"板块信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"旅游景点管理",
	                    "menuJump":"列表",
	                    "tableName":"jingdian"
	                }
	                ,
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"旅游景点留言管理",
	                    "menuJump":"列表",
	                    "tableName":"jingdianLiuyan"
	                }
	            ],
	            "menu":"旅游景点管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"酒店信息管理",
	                    "menuJump":"列表",
	                    "tableName":"jiudian"
	                }
	                ,
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"酒店信息留言管理",
	                    "menuJump":"列表",
	                    "tableName":"jiudianLiuyan"
	                }
	                ,
	                {
	                    "buttons":[
	                        "订单",
	                        "查看"
	                    ],
	                    "menu":"酒店信息订单管理",
	                    "menuJump":"列表",
	                    "tableName":"jiudianOrder"
	                }
	            ],
	            "menu":"酒店信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"留言版管理",
	                    "menuJump":"列表",
	                    "tableName":"liuyan"
	                }
	            ],
	            "menu":"留言版管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"旅游路线管理",
	                    "menuJump":"列表",
	                    "tableName":"lvyouluxian"
	                }
	                ,
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"旅游路线留言管理",
	                    "menuJump":"列表",
	                    "tableName":"lvyouluxianLiuyan"
	                }
	            ],
	            "menu":"旅游路线管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告信息管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告信息管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"用户",
	    "tableName":"yonghu"
	}
]
    }
}
export default menu;
