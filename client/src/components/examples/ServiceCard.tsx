import ServiceCard from '../ServiceCard';

export default function ServiceCardExample() {
  return (
    <div className="max-w-sm">
      <ServiceCard
        title="Crisis Communications"
        description="Immediate, strategic response when your reputation is on the line. We help organizations navigate data breaches, leadership transitions, and public controversies."
        outcomes={[
          'Rapid response protocols activated within hours',
          'Clear, consistent messaging across all channels',
          'Brand reputation protected and strengthened',
        ]}
        onConsultationClick={() => console.log('Consultation clicked')}
      />
    </div>
  );
}
