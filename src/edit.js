import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';
export default function Edit() {
  return (
    <div { ...useBlockProps({
      className: `uncommon-home-header`
    }) }>
      <p className='label'>Home Header Block</p>
      <InnerBlocks 
        allowedBlocks={['create-block/uncommon-home-header-slide']}
        template={[
          ['create-block/uncommon-home-header-slide'],
          ['create-block/uncommon-home-header-slide'],
          ['create-block/uncommon-home-header-slide'],
        ]}
        templateLock={false}
      />
    </div>
  );
}
