function ImportedItem(type, shelf_price) {
    var parent = new Item(type, shelf_price);

    var is_imported = function () {
        return true;
    }

    var tax_before_rounding = function() {
        var import_duty_before_rounding = 5 * shelf_price / 100;
        return MoneyMath.sum_of(parent.tax(), import_duty_before_rounding);
    }

    var tax = function () {
        return MoneyMath.rounded_up_to_nearest_five_pence(tax_before_rounding());
    }

    var price_including_tax = function () {
        return MoneyMath.sum_of(shelf_price, tax());
    }


    return {
        type:type,
        price_including_tax:price_including_tax,
        tax:tax,
        is_imported: is_imported
    };
}
;

