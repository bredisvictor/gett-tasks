<?php
use App\ListService;

$list_items = (new ListService($list_api))->getItems();
if (!empty($list_items)) :
    foreach ($list_items as $list_item) :
?>
    <div class="item-container">
        <h2><?=$list_item['title']; ?></h2>
        <p><?=$list_item['paragraph']; ?></p>
    </div>
<?php
    endforeach;
endif;
