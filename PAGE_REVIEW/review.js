

document.addEventListener('DOMContentLoaded', function() {
    // Get the search button and add a click event listener
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', function() {
        // Get the value of the search input
        const namegame = document.getElementById('search-bar').value.toLowerCase().trim();

        // Check if the search value is "lien minh"
        if (namegame === "liên minh huyền thoại") {
            // Change the main logo
            document.getElementById('logo').textContent = "League of Legends";

            // đổi ảnh chính
            document.getElementById('main-image').src = "https://cdn.tgdd.vn/2020/06/content/hinh-nen-lien-minh-huyen-thoai-dep-mat-cho-pc-va-dien-thoai-background-800x450.jpg";
            document.getElementById('main-image').alt = "League of Legends";

            // đổi 3 ảnh phụ họa
            document.getElementById('thumb1').src = "https://inkythuatso.com/uploads/thumbnails/800/2022/03/anh-lien-minh-huyen-thoai-4k-24-17-10-27-19.jpg";
            document.getElementById('thumb1').alt = "League Thumbnail 1";

            document.getElementById('thumb2').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKw_3fUHY9iVhuzEuvpfW-sAyq6HszyjyCg&s";
            document.getElementById('thumb2').alt = "League Thumbnail 2";

            document.getElementById('thumb3').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3mJc_cy_S1sv1tskmtof-h9LBCi5yIkD3nw&s";
            document.getElementById('thumb3').alt = "League Thumbnail 3";

            // nội dung miêu tả
            document.getElementById('game-description').textContent = 
                "Liên Minh Huyền Thoại (LoL) là một trò chơi điện tử đấu trường trận chiến trực tuyến nhiều người chơi được phát triển và phát hành bởi Riot Games. Người chơi sẽ vào vai một “nhà vô địch” với những khả năng độc đáo, chiến đấu chống lại các đội để tiêu diệt Nexus của đội đối phương.";

        } else if (namegame === "valorant") {
            // đổi tên logo
            document.getElementById('logo').textContent = "Valorant";

            // đổi ảnh chính
            document.getElementById('main-image').src = "https://cdn.tgdd.vn/2020/05/content/bo-hinh-nen-valorant-dep-mat-cho-may-tinh-dien-thoai-game-thu-khong-nen-bo-qua-10-800x450-1.jpg";
            document.getElementById('main-image').alt = "Valorant";

            // đổi các ảnh con
            document.getElementById('thumb1').src = "https://cdn-img.thethao247.vn/storage/files/haibui/2023/05/30/day-la-dac-vu-te-nhat-trong-valorant-286093.jpg";
            document.getElementById('thumb1').alt = "Valorant Thumbnail 1";

            document.getElementById('thumb2').src = "https://valorant.zing.vn/assets/images/specs/viper-specs.png";
            document.getElementById('thumb2').alt = "Valorant Thumbnail 2";

            document.getElementById('thumb3').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vELJr2Bs9rnRAMwF51jfscUTGiEETFk1Yw&s";
            document.getElementById('thumb3').alt = "Valorant Thumbnail 3";

            // nội dung mô tả 
            document.getElementById('game-description').textContent = 
                "Valorant là game bắn súng chiến thuật góc nhìn thứ nhất theo đội được phát triển bởi Riot Games. Người chơi nắm quyền điều khiển các đặc vụ, mỗi đặc vụ có những khả năng riêng biệt và cạnh tranh trong lối chơi dựa trên mục tiêu, tập trung vào việc bắn súng chính xác và phối hợp đồng đội.";
        } else {
            alert('Không tìm thấy trò chơi có tên: '+ namegame);
            document.getElementById('game-search').innerText = "";
        }
    });
});
function confirmLogout(){
    var useComfirm = confirm("Bạn có chắc chắn muốn thoát khỏi chương trình không! ?");
    if(useComfirm){
        window.location.href = "/PAGE_LOGIN/login.html";
    }
}