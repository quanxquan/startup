// main.js
// 显示当前时间
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('zh-CN', { hour12: false });
    document.getElementById('current-time').textContent = timeString;
}

// 统计网页访问次数
function updateVisitCount() {
    let count = localStorage.getItem('visitCount');
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem('visitCount', count);
    document.getElementById('visit-count').textContent = count;
}

document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    setInterval(updateTime, 1000);
    updateVisitCount();
});
