'use client';

import { ListGroup } from 'flowbite-react';

export default function ListGroupWithLinks1() {
  return (
    <ListGroup >
      <ListGroup.Item
        active
        href="#"
        className="text-orange-900">
        <p>
          Tư vấn đại lý & Dự án
        </p>
      </ListGroup.Item>
      <ListGroup.Item href="#" className="text-orange-900">
        <div className="">
            <h1 className="text-lg text-sky-600">Miềm Nam (Mr.Hoài)</h1>
            <p>Zalo : 0373784746</p>
            <p>Hotline : 0373784746</p>
        </div>
      </ListGroup.Item>

     
    </ListGroup>
  )
}


