function trackActivity(page){localStorage.setItem('currentPage',page);localStorage.setItem('lastActive',Date.now());}
function logEvent(e){let logs=JSON.parse(localStorage.getItem('eventLog')||'[]');logs.push({event:e,time:Date.now()});localStorage.setItem('eventLog',JSON.stringify(logs));}
