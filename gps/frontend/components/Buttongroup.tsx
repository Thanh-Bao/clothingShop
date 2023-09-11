'use client';
import { Button } from 'flowbite-react';
import { HiCurrencyDollar, HiSparkles, HiThumbUp } from 'react-icons/hi';

export default function WithIcons() {
  return (
    <Button.Group className="max-[430px]:flex max-[430px]:flex-col">
      <Button color="gray" className="max-[430px]:rounded-none">
        <HiSparkles className="mr-3 h-4 w-4"/>
        <p>
          Sản phẩm mới
        </p>
      </Button>
      <Button color="gray" className="max-[430px]:border">
        <HiThumbUp className="mr-3 h-4 w-4" />
        <p>
          Sản phẩm nổi bật
        </p>
      </Button>
      <Button color="gray" className="max-[430px]:rounded-none max-[430px]:border">
        <HiCurrencyDollar className="mr-3 h-4 w-4"/>
        <p>
          sản phẩm giảm giá
        </p>
      </Button>
    </Button.Group>
  )
}


