 $(elem).multiselect({
                selectAllValue: 0,
                enableFiltering: true,
                includeSelectAllOption: true,
                enableCaseInsensitiveFiltering: true,
                maxHeight: 200,
                buttonWidth: '100%',
                classes: 'myClass',
                onDropdownShown: function (event) {
                    var $dropdown = $(event.currentTarget).find('.btn');
                         offset = $dropdown.offset();
                         $('.dropdown-menu').css({
                             position: 'fixed',
                             top: (offset.top + $dropdown.outerHeight()),
                             left: offset.left,
                         })
                   
                },

                onDropdownHide: function (event) {
                    $(event.currentTarget).find('.multiselect-clear-filter').click();
                    $(event.currentTarget).find('.multi-no-results').hide();
                },
                onInitialized: function ($aSelect, $aContainer) {
                    var $dropdown = $aContainer.find('.btn'),
                        offset = $dropdown.offset();
                    $aContainer.find('.dropdown-menu').css({
                        position: 'fixed',
                        top: (offset.top + $dropdown.outerHeight()),
                        left: offset.left ,
                    })
                },
                onSelectAll: function (option, checked, select) {
                    var OwnerArry = $(elem).val();
                    if (OwnerArry != null) {
                        $("#" + gridId).jqGrid('setCell', $(elem).parent().parent().attr("id"), 'OwnerId', OwnerArry.join(","));
                    }
                    else {
                        $("#" + gridId).jqGrid('setCell', $(elem).parent().parent().attr("id"), 'OwnerId', " ");
                    }
                    },
                onChange: function (option, checked, select) {
                    var OwnerArry = $(elem).val();
                    if (OwnerArry != null) {
                        $("#" + gridId).jqGrid('setCell', $(elem).parent().parent().attr("id"), 'OwnerId', OwnerArry.join(","));
                    }
                    else {
                        $("#" + gridId).jqGrid('setCell', $(elem).parent().parent().attr("id"), 'OwnerId', " ");
                    }
                }
            });