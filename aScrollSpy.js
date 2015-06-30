/**
 * author aron_阿伦
 * [aScrollSpy description]
 * @param  {[type]} options [description]
 * @return {[type]}        [description]
 */
(function(win, $, undefined) {

    //根据第一个数组修改一并其他参数数组
    function sortByFirstArray(arr) {
        var temp;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    reverseEleByIndex(arr, j);
                    for (var k = 1; k < arguments.length; k++) {
                        reverseEleByIndex(arguments[k], j);
                    }
                }
            }
        }
        return arr;
    }

    //将数组元素下标index与index+1的元素对调
    function reverseEleByIndex(arr, index) {
        var temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        return arr;
    }

    //前提是升序的排列
    function getOffsetIndex(scrollTop, offsetData) {
        var data = offsetData;
        for (var i = 0; i < data.length; i++) {
            if (data[i] > scrollTop) {
                if (i == 0) {
                    return -1;
                }
                return i - 1;
            }
        }
        return data.length - 1;
    }

    var aScrollSpy = function(options) {
        $.aScrollSpy = new aScrollSpy.prototype.init(options);
        return $.aScrollSpy;
    }

    aScrollSpy.prototype = {
        init: function(options) {
            this.initSettings(options);
            this.bindEvent();
        },
        initSettings: function(options) {
            var defSettings = {
                target: $([]),
                callback: function() {},
                offset: 0,
                formatter: function() {
                    return $(this).data("spyname");
                }
            };
            $.extend(this, defSettings, options);
            this.setOffsetData();
        },
        setOffsetData: function() {
            var that = this;
            this.offsetData = [];
            this.spyName = [];
            this.target.each(function() {
                that.offsetData.push($(this).offset().top + (typeof that.offset == "number" ? that.offset : 0));
                that.spyName.push(that.formatter.call(this));
            });
            //设置数组升序
            sortByFirstArray(this.offsetData, this.spyName, this.target);
        },
        bindEvent: function(event) {
            var that = this;
            that.currentName = undefined;
            $(win).scroll(function(event) {
                var spyName, curTarget;
                var index = getOffsetIndex($(win).scrollTop(), that.offsetData);
                spyName = that.spyName[index];
                if(that.currentName != spyName){
                	that.currentName = spyName;
             		curTarget = that.target[index];
              		that.callback(spyName, curTarget);
                }
            });
        },
        getTargetDataByName: function(name) {
            for (var i = 0, l = this.spyName.length; i < l; i++) {
                if (this.spyName[i] == name) {
                    return {
                        offsetTop: this.offsetData[i],
                        target: this.target[i]
                    }
                }
            }
        }
    }

    aScrollSpy.prototype.init.prototype = aScrollSpy.prototype;

    $.fn.extend({
        aScrollSpy: function(options) {
            aScrollSpy($.extend(null, options, {
                target: this
            }));
        }
    })

    win.aScrollSpy = aScrollSpy;

})(window, jQuery);
