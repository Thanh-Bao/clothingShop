'use client';

import { ListGroup } from 'flowbite-react';

export default function ListGroupWithLinks3() {
  return (
    <ListGroup >
      <ListGroup.Item
        active
        href="#"
        className="text-orange-900">
        <p>
          Hỗ Trợ Kỹ Thuật 24/7
        </p>
      </ListGroup.Item>
      <ListGroup.Item href="#" className="text-orange-900">
        <div className="">
            <h1 className="text-lg text-sky-600">Miềm Nam</h1>
            <p>Zalo : 0373784746</p>
            <p>Hotline : 0373784746</p>
        </div>
      </ListGroup.Item>
      <ListGroup.Item href="#" className="text-orange-900">
      <div className="">
            <h1 className="text-lg text-sky-600">Miềm Trung</h1>
            <p>Zalo : 0373784746</p>
            <p>Hotline : 0373784746</p>
        </div>
      </ListGroup.Item>
      <ListGroup.Item href="#" className="text-orange-900">
      <div className="">
            <h1 className="text-lg text-sky-600">Miềm Bắc</h1>
            <p>Zalo : 0373784746</p>
            <p>Hotline : 0373784746</p>
        </div>
      </ListGroup.Item>
 
    </ListGroup>
  )
}


