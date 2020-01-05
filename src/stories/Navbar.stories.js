import React from 'react';
import Navbar from '../components/layout/Navbar';

export default {
  title: 'Navbar',
};

export const start = () => <Navbar title="Start" icon="fa fa-start" />;

export const pause = () => <Navbar title="Pause" icon="fa fa-pause" />;
