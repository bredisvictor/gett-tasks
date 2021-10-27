<?php
namespace App;

class ListService
{
    private $cacheItemsExpiration = 86400;
    private $cacheIndex = 'items';

    public function __construct(ItemsApi $itemsApi)
    {
        $this->itemsApi = $itemsApi;
    }

    public function getItems()
    {
        $items = $this->getItemsFromCache();
        if (empty($items)) {
            $items = $this->itemsApi->get_items;
            $this->setItems($items);
        }

        return $items;
    }

    private function getItemsFromCache()
    {
        return get_transient($this->cacheIndex);
    }

    private function setItems($items)
    {
        return set_transient($this->cacheIndex, $items, $this->cacheItemsExpiration);
    }
}
