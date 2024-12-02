import React, { useEffect, useRef } from 'react';
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

Chart.register(PieController, ArcElement, Tooltip, Legend);

const Chartbulat = () => {
  const chartRef = useRef(null); 
  const chartInstanceRef = useRef(null); 

  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });

    const createChart = () => {
      const ctx = chartRef.current.getContext('2d');

      const data = {
        labels: ['Died', 'Injured', 'Homeless'],
        datasets: [
          {
            label: 'Jumlah Orang',
            data: [4024, 7805, 106266], 
            backgroundColor: ['#AAAAAA', '#FFE452', '#FD3E12'], 
            hoverOffset: 4,
            borderWidth: 0, 
          },
        ],
      };

      
      chartInstanceRef.current = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: true,
            },
          },
          animations: {
            tension: {
              duration: 2000, 
              easing: 'easeOutBounce', 
              from: 1,
              to: 0,
              loop: false,
            },
          },
        },
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !chartInstanceRef.current) {
            createChart(); 
          }
        });
      },
      {
        threshold: 0.3, 
      }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="container-chartjs"
      data-aos="fade-up" 
    >
      <canvas ref={chartRef} id="oilGasChart" width="400" height="400"></canvas>
    </div>
  );
};

export default Chartbulat;
