import dynamic from 'next/dynamic';

const DivisionGroupsDemoLazy  = dynamic(() => import('./DivisionGroupsDemo'));

export default DivisionGroupsDemoLazy;