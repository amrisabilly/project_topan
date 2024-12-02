import React, { useEffect, useRef, useState } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Legend, Tooltip } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const SmoothChart = () => {
  const chartRef = useRef(null);
  const [progress, setProgress] = useState(0); // Progres saat ini (0-1)
  const [targetProgress, setTargetProgress] = useState(0); // Progres target
  const animationFrameRef = useRef(); // Menyimpan ID requestAnimationFrame
  const chartInstanceRef = useRef(null); // Menyimpan instance chart untuk menghindari pembuatan ulang

  useEffect(() => {
    const handleScroll = () => {
      const element = chartRef.current.parentNode; // Ambil elemen pembungkus (container)
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Hitung tinggi elemen yang terlihat
      const elementTop = rect.top;
      const elementHeight = rect.height;

      const visiblePart = Math.min(Math.max(windowHeight - elementTop, 0), elementHeight);
      const scrollProgress = visiblePart / elementHeight; // Nilai antara 0 dan 1

      setTargetProgress(scrollProgress); // Perbarui progres target
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScroll);
    // Panggil handleScroll sekali untuk set targetProgress awal
    handleScroll();
    return () => {
      // Hapus event listener untuk menghindari kebocoran memori
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Data awal untuk grafik
    const initialData = {
      labels: ['2010', '2011', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      datasets: [
        {
          label: 'National',
          data: Array(15).fill(0), // Semua nilai awal 0
          backgroundColor: '#FD3E12', // Warna merah
        },
        {
          label: 'International',
          data: Array(15).fill(0), // Semua nilai awal 0
          backgroundColor: '#FFE452', // Warna kuning
        },
      ],
    };

    // Konfigurasi Chart.js
    const config = {
      type: 'bar',
      data: initialData,
      options: {
        responsive: true,
        animation: false, // Nonaktifkan animasi default Chart.js
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#FFFFFF', // Warna teks legenda
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: '#FFFFFF', // Warna label sumbu X
            },
          },
          y: {
            stacked: true,
            ticks: {
              color: '#FFFFFF', // Warna label sumbu Y
              callback: function (value) {
                return value + ' Billion USD';
              },
            },
            title: {
              display: true,
              text: 'Billion USD',
              color: '#FFFFFF', // Warna judul sumbu
            },
          },
        },
        layout: {
          padding: 10, // Padding tata letak
        },
      },
    };

    // Buat chart jika belum ada
    if (!chartInstanceRef.current) {
      const newChartInstance = new Chart(ctx, config);
      chartInstanceRef.current = newChartInstance;
    }
  }, []);

  useEffect(() => {
    if (chartInstanceRef.current) {
      const actualDataNational = [2000, 1500, 2500, 2700, 2900, 3000, 3100, 2200, 1800, 2000, 2200, 2100, 1900, 2300, 3200];
      const actualDataInternational = [1000, 500, 1000, 1200, 1100, 1200, 1300, 800, 700, 1000, 1200, 900, 800, 1000, 1500];

      const animate = () => {
        const delta = targetProgress - progress;
        const increment = delta * 0.1; // Sesuaikan multiplier untuk kehalusan (0 < multiplier <= 1)

        if (Math.abs(delta) < 0.001) {
          // Hentikan animasi jika perbedaan sangat kecil
          setProgress(targetProgress);
          cancelAnimationFrame(animationFrameRef.current);
          return;
        }

        const newProgress = progress + increment;
        setProgress(newProgress);

        // Update data grafik berdasarkan progress baru
        const newNationalData = actualDataNational.map((value) => value * newProgress);
        const newInternationalData = actualDataInternational.map((value) => value * newProgress);

        chartInstanceRef.current.data.datasets[0].data = newNationalData;
        chartInstanceRef.current.data.datasets[1].data = newInternationalData;

        chartInstanceRef.current.update();

        // Minta frame animasi berikutnya
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      // Mulai animasi
      animationFrameRef.current = requestAnimationFrame(animate);

      // Membersihkan animasi saat komponen unmount atau targetProgress berubah
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


