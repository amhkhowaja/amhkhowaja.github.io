import { useRef, useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import './GitHubActivity.css';

function GitHubActivity() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to latest (right side) after render
  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter to show only last 6 months on mobile
  const selectLastHalf = (contributions: any[]) => {
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - 6);
    return contributions.filter((day: any) => new Date(day.date) >= cutoff);
  };

  return (
    <section id="activity">
      <div className="wrap">
        <p className="route-label" data-aos="fade-up">/activity</p>
        <h2 data-aos="fade-up" data-aos-delay="80">GitHub contributions</h2>

        <div className="gh-calendar-wrap" ref={scrollRef} data-aos="fade-up" data-aos-delay="120">
          <GitHubCalendar
            username="amhkhowaja"
            colorScheme="dark"
            fontSize={12}
            blockSize={isMobile ? 9 : 11}
            blockMargin={isMobile ? 3 : 4}
            transformData={isMobile ? selectLastHalf : undefined}
          />
        </div>
      </div>
    </section>
  );
}

export default GitHubActivity;
