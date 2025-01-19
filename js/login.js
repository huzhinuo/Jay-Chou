document.addEventListener('DOMContentLoaded', function() {
    // 显示登录框
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'block'; // 修改这里以默认显示模态框

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单默认提交行为
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log('用户名:', username);
        console.log('密码:', password);
        alert('欢迎登录: ' + username+"!");
        loginModal.style.display = 'none';
    });
});