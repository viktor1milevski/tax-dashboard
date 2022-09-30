function Receipt() {
    var items = [];

    var printItem = function (item) {
        var item_list = $('#generated-item-list');

        var item_text_prefix = '1 ';
        if(item.is_imported()) {
            item_text_prefix = item_text_prefix.concat('imported ');
        }

        var text_to_appear_on_receipt = item_text_prefix + item.type + ' ' + item.price_including_tax().toFixed(2);
        item_list.append(text_to_appear_on_receipt + '<br />');
    }

    var printTotalSalesTaxOf = function (tax_amount) {
        var total_sales_tax = $('#generated-tax');
        total_sales_tax.append('Sales Taxes: ' + tax_amount.toFixed(2));
    }

    var printTotalSaleAmountOf = function (total_sale_amount) {
        var sale_total = $('#generated-total');
        sale_total.append('Total: ' + total_sale_amount.toFixed(2));
    }



    var add_item = function (type, shelf_price) {
        var item = new Item(type, shelf_price)
        items.push(item)
    };

    var add_imported_item = function (type, shelf_price) {
        var item = new ImportedItem(type, shelf_price)
        items.push(item)
    };

    var clear = function () {
        var receipt = $('#generated-receipt');
        receipt.html("")
        receipt.append('<div id="generated-item-list">');
        receipt.append('<div id="generated-tax"/>');
        receipt.append('<div id="generated-total"/>');
    }

    var print = function () {
        var total_sale_amount = 0;
        var total_tax = 0;

        clear();

        for (var i = 0; i < items.length; i++) {
            var item = items[i]
            printItem(item);
            total_sale_amount = MoneyMath.sum_of(total_sale_amount, item.price_including_tax());
            total_tax = MoneyMath.sum_of(total_tax, item.tax());
        }

        printTotalSalesTaxOf(total_tax);
        printTotalSaleAmountOf(total_sale_amount);
    };

    return {
        add_item:add_item,
        add_imported_item:add_imported_item,
        print:print,
        clear:clear
    };
}
;

