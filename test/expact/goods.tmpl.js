define(function () { return '<?if(this.goods.length > 0){?>\r\n<ul>\r\n<?\r\nfor(var i = 0, len = this.goods.length; i < len; i++){\r\n\tvar good = this.goods[i];\r\n?>\r\n<li class="list-chunk">\r\n\t<a href="<?=this.staticConfig.WEB_ALIAS?>/client/goods/v1/app/page/detail?goodsId=<?=good.goodsId?>" class="list-href" target="_blank">\r\n\t\t<div class="imgbox">\r\n\t\t\t<img src="<?=good.picBean.mg_190_134?>" />\r\n\t\t\t<?if(good.goodsStateMarkBean.subMark != \'\'){?>\r\n\t\t\t<span class="list-active">\r\n\t\t\t\t<img src="<?=this.staticPre?>/images/ico_<?=good.goodsStateMarkBean.subMark?>.png" />\r\n\t\t\t</span>\r\n\t\t\t<?}?>\r\n\t\t</div>\r\n\t\t<div class="gttl"><?=good.goodsName?></div>\r\n\t\t<div class="price">\r\n\t\t\t<span class="up">优金币：<em><?=good.ucoinPrice?></em></span> \r\n\t\t\t<?if(good.goodsStateMarkBean.orderMark != \'cash\'){?>\r\n\t\t\t<span class="mp">市场价：<?=good.marketPrice?>元</span>\r\n\t\t\t<?}?>\r\n\t\t</div>\r\n\t</a>\r\n</li>\r\n<?}?>\r\n</ul>\r\n<?}else{?>\r\n<div class="no-data">精彩内容 敬请期待</div>\r\n<?}?>';});