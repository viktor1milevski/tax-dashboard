function Item(type, shelf_price) {

    var is_imported = function () {
        return false;
    }

    var tax_before_rounding = function() {
        var tax_before_rounding;

        switch (type) {
            case "book":
            case "chocolate bar":
            case "box of chocolates":
            case "packet of headache pills":
                tax_before_rounding = 0;
                break;
            default :
                tax_before_rounding = 10 * shelf_price / 100;
        }

        return tax_before_rounding;
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

