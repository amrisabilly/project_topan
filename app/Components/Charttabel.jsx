import React, { useEffect, useRef, useState } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Legend, Tooltip } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const SmoothChart = () => {
  const chartRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [targetProgress, setTargetProgress] = useState(0);
  const animationFrameRef = useRef();
  const chartInstanceRef = useRef(null);

  // Nilai tukar USD ke IDR
  const exchangeRate = 15000; // 1 USD = 15.000 IDR (contoh)

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
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext('2d');

    const initialData = {
      labels: ['2010', '2011', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      datasets: [
        { label: 'National', data: Array(12).fill(0), backgroundColor: '#FD3E12' },
        { label: 'International', data: Array(12).fill(0), backgroundColor: '#FFE452' },
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
            ticks: { color: '#FFFFFF', callback: (value) => `Rp ${value.toLocaleString()}` },
            title: { display: true, text: 'Kerugian (dalam Rupiah)', color: '#FFFFFF' },
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
      // Kerugian Nasional dan Internasional (Data Contoh dalam USD)
      const actualDataNationalUSD = [10, 15, 20, 25, 30, 22, 18, 27, 21, 30, 40, 35]; // Kerugian Nasional dalam Billion USD
      const actualDataInternationalUSD = [5, 8, 12, 15, 10, 8, 7, 12, 9, 14, 20, 18]; // Kerugian Internasional dalam Billion USD

      // Mengonversi ke Rupiah
      const actualDataNationalIDR = actualDataNationalUSD.map((value) => value * 1000000000 * exchangeRate); // Mengalikan dengan 1 milyar dan nilai tukar
      const actualDataInternationalIDR = actualDataInternationalUSD.map((value) => value * 1000000000 * exchangeRate); // Mengalikan dengan 1 milyar dan nilai tukar

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

        // Update data dengan progress animasi
        const newNationalData = actualDataNationalIDR.map((value) => value * newProgress);
        const newInternationalData = actualDataInternationalIDR.map((value) => value * newProgress);

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
