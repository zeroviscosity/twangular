'use strict';

twangularApp.filter('formatDate', function() {
    return function(stamp) {
	    var localDate = new Date(),
	      offset = localDate.getTimezoneOffset(),
	      adjustedStamp = Date.parse(stamp) - offset * 60000,
	      adjustedDate = new Date(adjustedStamp),
	      months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
	        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	      hours = adjustedDate.getHours(), 
	      minutes = adjustedDate.getMinutes(), 
	      meridiem = 'pm',
	      time = '';

        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
             hours = 12;
            meridiem = 'am';
        } else if (hours < 12) {
            meridiem = 'am';
        }
        time += hours + ':';
                    
        if (minutes < 10)
            time += '0';
        time += minutes + ' ' + meridiem;

        return adjustedDate.getDate() + ' ' + months[adjustedDate.getMonth()] +
          ' ' + time;
    };
});

twangularApp.filter('hashtagLinky', function() {
    return function(text) {
       text = text.replace(/[^&]#(\w+)\b/gi,
            function (hashtag) {
                return '<a href="https://twitter.com/search?src=hash&q=%23' + 
                  hashtag.replace('#', '') + '" target="_blank">' + hashtag + '</a>';
                }
        );
        return text;
    };
});

twangularApp.filter('usernameLinky', function() {
    return function(text) {
       text = text.replace(/@(\w+)\b/gi,
            function (username) {
                return '<a href="https://twitter.com/' + username.replace('@', '') + 
                  '" target="_blank">' + username + '</a>';
                }
        );
        return text;
    };
});