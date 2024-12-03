import React, { useEffect, useRef, useState } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Legend, Tooltip } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const SmoothChart = () => {
  const chartRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [targetProgress, setTargetProgress] = useState(0);
  const animationFrameRef = useRef();
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!chartRef.current) return;
      const element = chartRef.current.parentNode;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementTop = rect.top;
      const elementHeight = rect.height;

      const visiblePart = Math.min(Math.max(windowHeight - elementTop, 0), elementHeight);
      const scrollProgress = visiblePart / elementHeight;

      setTargetProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!chartRef.current) return; // Pastikan chartRef tidak null
    const ctx = chartRef.current.getContext('2d');

    const initialData = {
      labels: ['2010', '2011', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      datasets: [
        { label: 'National', data: Array(15).fill(0), backgroundColor: '#FD3E12' },
        { label: 'International', data: Array(15).fill(0), backgroundColor: '#FFE452' },
      ],
    };

    const config = {
      type: 'bar',
      data: initialData,
      options: {
        responsive: true,
        animation: false,
        plugins: {
          legend: { position: 'top', labels: { color: '#FFFFFF' } },
          tooltip: { enabled: true },
        },
        scales: {
          x: { stacked: true, ticks: { color: '#FFFFFF' } },
          y: {
            stacked: true,
            ticks: { color: '#FFFFFF', callback: (value) => `${value} Billion USD` },
            title: { display: true, text: 'Billion USD', color: '#FFFFFF' },
          },
        },
        layout: { padding: 10 },
      },
    };

    if (!chartInstanceRef.current) {
      chartInstanceRef.current = new Chart(ctx, config);
    }
  }, []);

  useEffect(() => {
    if (chartInstanceRef.current) {
      const actualDataNational = [2000, 1500, 2500, 2700, 2900, 3000, 3100, 2200, 1800, 2000, 2200, 2100, 1900, 2300, 3200];
      const actualDataInternational = [1000, 500, 1000, 1200, 1100, 1200, 1300, 800, 700, 1000, 1200, 900, 800, 1000, 1500];

      const animate = () => {
        const delta = targetProgress - progress;
        const increment = delta * 0.1;

        if (Math.abs(delta) < 0.001) {
          setProgress(targetProgress);
          cancelAnimationFrame(animationFrameRef.current);
          return;
        }

        const newProgress = progress + increment;
        setProgress(newProgress);

        const newNationalData = actualDataNational.map((value) => value * newProgress);
        const newInternationalData = actualDataInternational.map((value) => value * newProgress);

        chartInstanceRef.current.data.datasets[0].data = newNationalData;
        chartInstanceRef.current.data.datasets[1].data = newInternationalData;

        chartInstanceRef.current.update();
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrameRef.current);
      };
    }
  }, [targetProgress]);

  return (
    <div style={{ background: '#000000', height: '800px' }} className='pe-16'>
      <canvas ref={chartRef} id="stackedBarChart" width="800" height="400"></canvas>
    </div>
  );
};

export default SmoothChart;
