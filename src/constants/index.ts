import { ColumnsType } from 'antd/es/table';

type TItem = {
  orderId: number;
  bolNumber: number;
  jobNumber: number;
  customer: string;
  customerCity: string;
};

export const data: TItem[] = Array(100).fill({
  orderId: 1,
  bolNumber: 1,
  jobNumber: 1,
  customer: 'CUSTOMER',
  customerCity: 'CUSTOMER_CITY',
});

export const columns: ColumnsType<TItem> = [
  {
    title: 'ORDER ID',
    dataIndex: 'orderId',
    key: 'orderId',
    width: 110,
  },
  {
    title: 'BOL NUMBER',
    dataIndex: 'bolNumber',
    key: 'bolNumber',
    width: 150,
  },
  {
    title: 'JOB NUMBER',
    dataIndex: 'jobNumber',
    key: 'jobNumber',
    width: 150,
  },
  {
    title: 'CUSTOMER',
    dataIndex: 'customer',
    key: 'customer',
    width: 150,
  },
  {
    title: 'CUSTOMER CITY',
    dataIndex: 'customerCity',
    key: 'customerCity',
    width: 150,
  },
];
