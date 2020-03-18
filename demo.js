$(function () {
    var $username = $('#username');
    var $password = $('#password');
    var $password = $('#password');
    var $password_id = $('#password_id');
    var $telephone = $('#telephone');
    var $usernameValidate = $('#username-validate');
    var $passwordValidate = $('#password-validate');
    var $telephoneValidate = $('#telephone-validate');
    var $password_idValidate = $('#password_id-validate');
    isPassValidate = false;

    $username.focusout(function () {
        var result = validatefirst($username.val());
        isPassValidate = result.isOK;
        if (!result.isOK) {
            $usernameValidate.html(result.reason);
            $username.select();
        } else {
            $usernameValidate.html('');
        }
    });

    $username.keypress(function (e) {
        if (!isLegalKey(e.key, e.target.value, e.target.selectionStart)) {
            e.preventDefault();
        }
    });

    $password.focusout(function () {
        var result = validatesecond($password.val());
        isPassValidate = result.isOK;
        if (!result.isOK) {
            $passwordValidate.html(result.reason);
            $password.select();
        } else {
            $passwordValidate.html('');
        }
    });

    $password.keypress(function (e) {
        if (!isLegalKey(e.key, e.target.value, e.target.selectionStart)) {
            e.preventDefault();
        }
    });

    $telephone.focusout(function () {
        var result = validatethird($telephone.val());
        isPassValidate = result.isOK;
        if (!result.isOK) {
            $telephoneValidate.html(result.reason);
            $telephone.select();
        } else {
            $telephoneValidate.html('');
        }
    });

    $telephone.keypress(function (e) {
        if (!isLegalKey(e.key, e.target.value, e.target.selectionStart)) {
            e.preventDefault();
        }
    });

    $password_id.focusout(function () {
        var result = validatefourth($password_id.val());
        isPassValidate = result.isOK;
        if (!result.isOK) {
            $password_idValidate.html(result.reason);
            $password_id.select();
        } else {
            $password_idValidate.html('');
        }
    });

    $password_id.keypress(function (e) {
        if (!isLegalKey(e.key, e.target.value, e.target.selectionStart)) {
            e.preventDefault();
        }
    });

    function validatefirst(data) {
        var result = {
            isOK: false,
            reason: ''
        };

        if (data === '') {
            result.reason = '用户名不能为空！';
            return result;
        }

        if (!/^[a-z-A-Z]{1}([a-z-A-Z0-9]|[._]){4,19}$/.test(data)) {
            result.reason = '用户名仅支持中文、数字和下划线且不能为纯数字';
            return result;
        }

        result.isOK = true;
        return result;
    }

    function validatesecond(data) {
        var result = {
            isOK: false,
            reason: ''
        };

        if (data.length < 6) {
            result.reason = '密码设置不符合要求！';
            return result;
        }


        result.isOK = true;
        return result;
    }

    function validatethird(data) {
        var result = {
            isOK: false,
            reason: ''
        };

        if (!/^1[3456789]\d{9}$/.test(data)) {
            result.reason = '手机号码格式不正确！';
            return result;
        }


        result.isOK = true;
        return result;
    }


    function validatefourth(data) {
        var result = {
            isOK: false,
            reason: ''
        };
        if (!/^1[3-9][0-9]\\d{4,8}$/.test(data)) {
            result.reason = '请求超时，请稍后再试！';
            return result;
        }


        result.isOK = true;
        return result;
    }

});

var count = 60;

function settime(val) {
    if (count == 0) {
        val.removeAttribute('disabled');
        val.value = '获取短信验证码';
        count = 60;
        return false;
    }
    else {
        val.setAttribute('disabled', true);
        val.value = "重新发送(" + count + ")";
        count--;
    }
    setTimeout(function () {
        settime(val);
    }, 1000);
}
