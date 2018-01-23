export default {
    install: function (Vue, options) {
        Vue.filter('toDate', function (value) {
            let date = new Date(value * 1000);
            let Y = date.getFullYear() + '年';
            let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月';
            let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + '日 ';
            let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
            return Y + M + D + h + m;
        })

        Vue.filter('toBefore', function (value) {
            let now = Date.parse(new Date()) / 1000;
            let limit = now - value;
            let content = "";
            if (limit < 60) {
                content = "刚刚";
            } else if (limit >= 60 && limit < 3600) {
                content = Math.floor(limit / 60) + "分钟前";
            } else if (limit >= 3600 && limit < 86400) {
                content = Math.floor(limit / 3600) + "小时前";
            } else if (limit >= 86400 && limit < 259200) {
                content = Math.floor(limit / 86400) + "天前";
            } else {
                let date = new Date(value * 1000);
                let Y = date.getFullYear() + '年';
                let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月';
                let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + '日';
                // let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
                // let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
                return Y + M + D 
            }
            // else if (limit >= 2592000 && limit < 31104000) {
            //   content = Math.floor(limit / 2592000) + "个月前";
            // } else {
            //   content = "很久前";
            // }
            return content;
        })
    }
};