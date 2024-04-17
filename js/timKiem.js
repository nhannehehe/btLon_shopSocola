function filterProducts() {
    // Lấy giá trị nhập vào từ input
    var searchText = document.getElementById('searchInput').value.toLowerCase();
    // Lấy tất cả các thẻ chứa thông tin sản phẩm
    var products = document.querySelectorAll('.card');

    // Lặp qua từng sản phẩm
    products.forEach(function(product) {
        // Lấy tên sản phẩm
        var productName = product.querySelector('.card-title').textContent.toLowerCase();

        // Kiểm tra nếu tên sản phẩm chứa searchText thì hiển thị sản phẩm, ngược lại ẩn sản phẩm đi
        if (productName.includes(searchText)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}