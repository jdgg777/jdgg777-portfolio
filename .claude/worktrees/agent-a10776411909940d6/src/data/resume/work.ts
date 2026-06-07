/**
 * Work experience for Jose Gomez
 * Conforms to JSON Resume schema
 */
export interface Position {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'RealPage Inc',
    position: 'Business Analyst - Data Processing & Analysis',
    startDate: '2021-01-01',
    endDate: '2023-12-31',
    summary: `Developed automation tools and data processing pipelines for property management 
software. Designed XML schemas for system interoperability and built validation frameworks 
improving data accuracy to 99.5%.`,
    highlights: [
      'Developed automation tools saving 25+ hours weekly, reducing manual processing errors by 70%',
      'Designed XML schemas ensuring interoperability between client systems',
      'Resolved 200+ integration issues, reducing monthly downtime by 15+ hours',
      'Built validation frameworks improving data accuracy to 99.5%',
    ],
  },
  {
    name: 'IWF',
    position: 'Traffic Specialist - Systems Administrator',
    startDate: '2020-01-01',
    endDate: '2021-01-01',
    summary: `Created dashboards, reports, and BPM tools for organizational decision-making. 
Supported software and hardware systems across the organization.`,
    highlights: [
      'Created 8+ dashboards used by 80% of organizational areas for decision-making',
      'Reduced report generation time by 60% through automation',
      'Supported software and hardware systems throughout the organization',
    ],
  },
  {
    name: 'Ziruma Labs',
    position: 'Logistic Analyst - Purchasing & Logistics Leader',
    startDate: '2017-01-01',
    endDate: '2019-12-31',
    summary: `Led international supply chain operations connecting Asian suppliers with US and 
European distribution centers. Managed procurement negotiations, inventory optimization, and 
demand forecasting.`,
    highlights: [
      'Negotiated supplier agreements reducing procurement costs by 12%',
      'Managed international logistics with 150+ container movements annually, achieving 96% on-time delivery',
      'Reduced overstock fees by 20% and stockout incidents by 40% through demand forecasting',
      'Connected Asian suppliers to US/EU distribution centers',
    ],
  },
  {
    name: 'Linea Directa',
    position: 'Management Assistant - Logistic Assistant',
    startDate: '2015-01-01',
    endDate: '2015-12-31',
    summary: `Optimized warehouse operations through SAP ERP data analysis. Developed slotting 
optimization and picking route improvements.`,
    highlights: [
      'Optimized warehouse operations through SAP ERP analysis, improving picking efficiency by 15%',
      'Developed slotting optimization increasing space utilization by 20%',
      'Reduced labor hours through improved picking routes',
    ],
  },
];

export default work;
