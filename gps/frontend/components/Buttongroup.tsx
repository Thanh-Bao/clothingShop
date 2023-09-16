'use client';
import { Button } from 'flowbite-react';
import { HiCurrencyDollar, HiSparkles, HiThumbUp } from 'react-icons/hi';

type WithIconsProps = {
  onProductSelect: (productName: string) => void;
};

export default function WithIcons({ onProductSelect} : WithIconsProps) {
  
  return (
    <Button.Group className="max-[430px]:flex max-[430px]:flex-col">
      <Button color="gray" className="max-[430px]:rounded-none" onClick={() => onProductSelect('NewDevice')}>
        <div className="max-[430px]:mr-5 flex">
          <div className="flex items-center">
            <HiSparkles className="xl:mr-1 h-4 w-4 max-[430px]:mr-2"/>
          </div>
          <p className="xl:ml-1 ">
            Sản phẩm mới
          </p>
        </div>
      </Button>
      <Button color="gray" className="max-[430px]:border max-[430px]:space-x-2 " onClick={() => onProductSelect('GoodDevice')} >
        <HiThumbUp className="xl:mr-2 h-4 w-4 max-[430px]:mr-2" />
        <p>
          Sản phẩm nổi bật
        </p>
      </Button>
      <Button color="gray" className="max-[430px]:rounded-none max-[430px]:border max-[430px]:space-x-2" onClick={() => onProductSelect('DiscountDevice')}>
        <div className=" flex items-center">
          <HiCurrencyDollar className="xl:mr-2 h-4 w-4 max-[430px]:mr-2 max-[430px]:ml-2"/>
        </div>
        <p>
          Sản phẩm giảm giá
        </p>
      </Button>
    </Button.Group>
  )
}


