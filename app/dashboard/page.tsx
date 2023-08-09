'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Title, BarChart, Subtitle } from '@tremor/react';

type Props = {};

const Dashboard = (props: Props) => {
  const chartdata = [
    {
      name: 'Topic 1',
      'Group A': 890,
      'Group B': 338,
      'Group C': 538,
      'Group D': 396,
      'Group E': 138,
      'Group F': 436,
    },
    {
      name: 'Topic 2',
      'Group A': 289,
      'Group B': 233,
      'Group C': 253,
      'Group D': 333,
      'Group E': 133,
      'Group F': 533,
    },
  ];

  const dataFormatter = (number: number) => {
    return '$ ' + Intl.NumberFormat('us').format(number).toString();
  };

  return (
    <div className=''>
      <div className='grid grid-cols-3'>
        <Card className='w-[200px]'>
          <CardHeader>
            <CardTitle className='text-center'>ИЛГЭЭСЭН МЕССЕЖ</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent>
            <p className='text-center'>2</p>
          </CardContent>
        </Card>
        <Card className='w-[200px]'>
          <CardHeader>
            <CardTitle className='text-center'>ИЛГЭЭСЭН НЭХЭМЖЛЭХ</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent>
            <p className='text-center'>2</p>
          </CardContent>
        </Card>
        <Card className='w-[200px]'>
          <CardHeader>
            <CardTitle className='text-center'>ХАРИЛЦАГЧ</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent>
            <p className='text-center'>2</p>
          </CardContent>
        </Card>
      </div>
      <div className='mt-5'>
        <Card>
          <Title>Дашбоард сараар</Title>
          <Subtitle>
            The IUCN Red List has assessed only a small share of the total known
            species in the world.
          </Subtitle>
          <BarChart
            className='mt-6'
            data={chartdata}
            index='name'
            categories={[
              'Group A',
              'Group B',
              'Group C',
              'Group D',
              'Group E',
              'Group F',
            ]}
            colors={['blue', 'teal', 'amber', 'rose', 'indigo', 'emerald']}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
          />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

//https://www.tremor.so/docs/components/donut-chart
