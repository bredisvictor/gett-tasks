<?php if ($postImageUrl = get_the_post_thumbnail_url('full')) : ?>
    <img src="<?=$postImageUrl; ?>">
<?php elseif ($siteImageUrl = wp_get_attachment_image_src('site_image', 'full')) : ?>
    <img src="<?=$siteImageUrl; ?>">
<?php else : ?>
    <img src="<?=wp_get_attachment_image_src('placeholder', 'full'); ?>">
<?php endif; ?>