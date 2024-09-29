function confirmLogout(){
    var useComfirm = confirm("Bạn có chắc chắn muốn thoát khỏi chương trình không! ?");
    if(useComfirm){
        window.location.href = "/PAGE_LOGIN/login.html";
    }
}