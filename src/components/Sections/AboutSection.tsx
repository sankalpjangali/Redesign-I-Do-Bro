import React, { useState, useEffect } from "react";
import {
  Globe,
  MapPin,
  Users,
  Award,
  Building,
  GraduationCap,
} from "lucide-react";

const AboutSection: React.FC = () => {
  const [metrics, setMetrics] = useState({
    countries: 0,
    states: 0,
    people: 0,
    entrepreneurs: 0,
    students: 0,
    employees: 0,
  });

  const finalMetrics = {
    countries: 8,
    states: 29,
    people: 2000000,
    entrepreneurs: 5000,
    students: 250000,
    employees: 150000,
  };

  useEffect(() => {
    const animateCounter = (
      key: keyof typeof metrics,
      target: number,
      duration = 2000,
    ) => {
      const startTime = Date.now();

      const update = () => {
        const progress = Math.min((Date.now() - startTime) / duration, 1);
        const value = Math.floor(target * progress);
        setMetrics((prev) => ({ ...prev, [key]: value }));
        if (progress < 1) requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
    };

    animateCounter("countries", finalMetrics.countries, 1200);
    animateCounter("states", finalMetrics.states, 1400);
    animateCounter("people", finalMetrics.people, 1600);
    animateCounter("entrepreneurs", finalMetrics.entrepreneurs, 1800);
    animateCounter("students", finalMetrics.students, 2000);
    animateCounter("employees", finalMetrics.employees, 2200);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(0) + "K";
    return num.toString();
  };

  const MetricCard = ({
    icon: Icon,
    value,
    label,
    color,
  }: {
    icon: any;
    value: string;
    label: string;
    color: string;
  }) => (
    <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
      <div
        className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-${color}-100`}
      >
        <Icon className={`w-7 h-7 text-${color}-600`} />
      </div>
      <div className={`text-4xl font-bold text-${color}-600 mb-2`}>{value}</div>
      <div className="text-gray-700 font-semibold">{label}</div>
    </div>
  );

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Our Impact at a Glance
        </h3>

        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Footprint across <strong>8 countries</strong>: India, Nepal, Sri
          Lanka, Bangladesh, Dubai, Abu Dhabi, Kuwait, and Cambodia.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <MetricCard
            icon={Globe}
            value={metrics.countries.toString()}
            label="Countries"
            color="blue"
          />
          <MetricCard
            icon={MapPin}
            value={metrics.states.toString()}
            label="Indian States"
            color="purple"
          />
          <MetricCard
            icon={Users}
            value={formatNumber(metrics.people) + "+"}
            label="People Reached"
            color="orange"
          />
          <MetricCard
            icon={Award}
            value={formatNumber(metrics.entrepreneurs) + "+"}
            label="Entrepreneurs Supported"
            color="green"
          />
          <MetricCard
            icon={GraduationCap}
            value={formatNumber(metrics.students) + "+"}
            label="Students Impacted"
            color="yellow"
          />
          <MetricCard
            icon={Building}
            value={formatNumber(metrics.employees) + "+"}
            label="Employees Engaged"
            color="red"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
