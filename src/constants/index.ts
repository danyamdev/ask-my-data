import { ColumnsType } from 'antd/es/table';

type TItem = {
  orderId: number;
  bolNumber: number;
  jobNumber: number;
  customer_one: string;
  customer_two: string;
  customer_three: string;
  customer_city: string;
};

export const data: TItem[] = Array(100).fill({
  orderId: 1,
  bolNumber: 1,
  jobNumber: 1,
  customer_one: 'CUSTOMER_ONE',
  customer_two: 'CUSTOMER_TWO',
  customer_three: 'CUSTOMER_THREE',
  customer_city: 'CUSTOMER_CITY',
});

export const columns: ColumnsType<TItem> = [
  {
    title: 'ORDER ID',
    dataIndex: 'orderId',
    key: 'orderId',
    width: 200,
  },
  {
    title: 'BOL NUMBER',
    dataIndex: 'bolNumber',
    key: 'bolNumber',
    width: 200,
  },
  {
    title: 'JOB NUMBER',
    dataIndex: 'jobNumber',
    key: 'jobNumber',
    width: 200,
  },
  {
    title: 'CUSTOMER_ONE',
    dataIndex: 'customer_one',
    key: 'customer_one',
    width: 450,
  },
  {
    title: 'CUSTOMER_TWO',
    dataIndex: 'customer_two',
    key: 'customer_two',
    width: 450,
  },
  {
    title: 'CUSTOMER_THREE',
    dataIndex: 'customer_three',
    key: 'customer_three',
    width: 450,
  },
  {
    title: 'CUSTOMER CITY',
    dataIndex: 'customer_city',
    key: 'customer_city',
    width: 200,
  },
];
